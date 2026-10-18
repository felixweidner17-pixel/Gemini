export interface PubChemLiveProperties {
  CID: number;
  Title?: string;
  IUPACName?: string;
  MolecularFormula?: string;
  MolecularWeight?: string | number;
  CanonicalSMILES?: string;
  InChIKey?: string;
  XLogP?: number;
  TPSA?: number;
  HBondDonorCount?: number;
  HBondAcceptorCount?: number;
  RotatableBondCount?: number;
  Complexity?: number;
}

const pubchemCache = new Map<number, PubChemLiveProperties>();

export async function fetchWithRetry(
  url: string,
  options: RequestInit = {},
  maxRetries = 2,
  baseDelayMs = 500
): Promise<Response> {
  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    const response = await fetch(url, options);
    if (response.ok) {
      return response;
    }
    if (
      (response.status === 429 || response.status >= 500) &&
      attempt < maxRetries
    ) {
      const retryAfter = Number(response.headers.get('Retry-After'));
      const delay =
        !Number.isNaN(retryAfter) && retryAfter > 0
          ? retryAfter * 1000
          : baseDelayMs * Math.pow(2, attempt);
      await new Promise((resolve) => setTimeout(resolve, delay));
      continue;
    }
    const errorBody = await response.text().catch(() => '');
    throw new Error(
      `HTTP ${response.status} (${response.statusText}) from ${url}: ${errorBody.slice(0, 200)}`
    );
  }
  throw new Error(`Exhausted retries for ${url}`);
}

export async function fetchPubChemByCid(
  cid: number
): Promise<PubChemLiveProperties | null> {
  if (pubchemCache.has(cid)) {
    return pubchemCache.get(cid)!;
  }

  try {
    const url = `https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/cid/${cid}/property/Title,IUPACName,MolecularFormula,MolecularWeight,CanonicalSMILES,InChIKey,XLogP,TPSA,HBondDonorCount,HBondAcceptorCount,RotatableBondCount,Complexity/JSON`;
    const res = await fetchWithRetry(url);
    const data = await res.json();
    const prop = data?.PropertyTable?.Properties?.[0];
    if (prop) {
      pubchemCache.set(cid, prop);
      return prop;
    }
    return null;
  } catch {
    return null;
  }
}

export async function resolveAndFetchPubChemByName(
  queryName: string
): Promise<PubChemLiveProperties | null> {
  const trimmed = queryName.trim();
  if (!trimmed) return null;
  try {
    const cidUrl = `https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/${encodeURIComponent(
      trimmed
    )}/cids/JSON`;
    const res = await fetchWithRetry(cidUrl);
    const data = await res.json();
    const firstCid = data?.IdentifierList?.CID?.[0];
    if (typeof firstCid === 'number') {
      return await fetchPubChemByCid(firstCid);
    }
    return null;
  } catch {
    return null;
  }
}

export function getPubChem2DImageUrl(cid: number): string {
  return `https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/cid/${cid}/PNG?image_size=300x300`;
}
