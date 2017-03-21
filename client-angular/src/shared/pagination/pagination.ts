import { Map, Record } from 'immutable';
import { getLink, getSelfLink } from '../../util';


export interface PagedData {
  _links: {
    first: { href: string; };
    self: { href: string; };
    last: { href: string };
    prev?: { href: string };
    next?: { href: string; };
  },
  page: {
    size: number;
    totalElements: number;
    totalPages: number;
    number: number;
  }
}

export interface Pagination extends Map<string, any> {
  selfLink: string;
  firstLink: string;
  lastLink: string;
  nextLink: string;
  prevLink: string;
  pageSize: number;
  totalElements: number;
  totalPages: number;
  number: number;
  pagesLoaded: number[]
}

export const PaginationRecord = Record({
  selfLink: null,
  firstLink: null,
  lastLink: null,
  nextLink: null,
  prevLink: null,
  pageSize: -1,
  totalElements: -1,
  totalPages: -1,
  number: -1,
  pagesLoaded: []
});

export function createPagination(data: PagedData): Pagination {
  return new PaginationRecord({

    selfLink: getSelfLink(data),
    firstLink: getLink(data, 'first'),
    lastLink: getLink(data, 'last'),
    nextLink: getLink(data, 'next'),
    prevLink: getLink(data, 'prev'),
    pageSize: data.page.size,
    totalElements: data.page.totalElements,
    totalPages: data.page.totalPages,
    number: data.page.number

  }) as Pagination;
}
