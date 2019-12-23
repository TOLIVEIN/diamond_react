import { Sort, Page, Shi, Data, Ci, Qu } from "./data";

export const initialSort: Sort = {
  sorted: false,
  unsorted: false,
  empty: false
};

export const initialPage: Page = {
  sort: initialSort,
  offset: 0,
  pageNumber: 0,
  pageSize: 0,
  unpaged: false,
  paged: false
};

export enum DataType {
  Shi,
  Ci,
  Qu
}

export const initialShi: Shi[] = [
  { id: "", title: "", author: "", paragraphs: [""] }
];

export const initialShiData: Data<Shi> = {
  content: initialShi,
  pageable: initialPage,
  totalPages: 0,
  totalElements: 0,
  last: false,
  size: 0,
  number: 0,
  sort: initialSort,
  numberOfElements: 0,
  first: false,
  empty: false
};

export const initialCi: Ci[] = [{ rhythmic: "", author: "", paragraphs: [""] }];

export const initialCiData: Data<Ci> = {
  content: initialCi,
  pageable: initialPage,
  totalPages: 0,
  totalElements: 0,
  last: false,
  size: 0,
  number: 0,
  sort: initialSort,
  numberOfElements: 0,
  first: false,
  empty: false
};

export const initialQu: Qu[] = [
  { dynasty: "", title: "", author: "", paragraphs: [""] }
];

export const initialQuData: Data<Qu> = {
  content: initialQu,
  pageable: initialPage,
  totalPages: 0,
  totalElements: 0,
  last: false,
  size: 0,
  number: 0,
  sort: initialSort,
  numberOfElements: 0,
  first: false,
  empty: false
};
