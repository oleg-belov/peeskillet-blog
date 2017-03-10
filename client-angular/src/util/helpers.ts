

export function getSelfLink(data: any): string {
  return getLink(data, 'self');
}

export function getLink(data: any, rel: string): string {
  return (!data._links || !data._links[rel]) ? null : data._links[rel].href;
}

/**
 * Extracts id from an array of objects, assuming the id is the self link
 * of each object.
 * 
 * @param data the data
 * @param property the property on the data which is the array of objects
 */
export function extractIds(data: any, property: string): string[] {
  return data[property].map(item => getSelfLink(item))
}
