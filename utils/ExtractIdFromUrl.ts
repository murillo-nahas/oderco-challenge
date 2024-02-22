export function extractIdFromUrl(url: string) {
  const segments = url.split("/");
  const lastSegment = segments[segments.length - 2];

  return lastSegment;
}
