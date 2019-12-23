import { Sort, Page, Shi, Data } from "./data"

export const initialSort: Sort = {
    sorted: false,
    unsorted: false,
    empty: false
  }

export const initialPage: Page = {
    sort: initialSort,
    offset: 0,
    pageNumber: 0,
    pageSize: 0,
    unpaged: false,
    paged: false,
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
  }