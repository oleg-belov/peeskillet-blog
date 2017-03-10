import { Map, Record } from 'immutable';
import { getLink } from '../../util';


export interface Pagination extends Map<string, any> {
  firstLink: string;
  lastLink: string;
  nextLink: string;
  prevLink: string;
  size: number;
  totalElements: number;
  totalPages: number;
  number: number;
}

export const PaginationRecord = Record({
  firstLink: null,
  lastLink: null,
  nextLink: null,
  prevLink: null,
  size: -1,
  totalElements: -1,
  totalPages: -1,
  number: -1,
});

export function createPagination(data: any): Pagination {
  return new PaginationRecord({

    firstLink: getLink(data, 'first'),
    lastLink: getLink(data, 'last'),
    nextLink: getLink(data, 'next'),
    prevLink: getLink(data, 'prev'),
    size: data.page.size,
    totalElements: data.page.totalElement,
    totalPages: data.page.totalPages,
    number: data.page.number

  }) as Pagination;
}
