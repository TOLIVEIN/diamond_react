export interface Data<T> {
    content: T[];
    pageable: Page;
    totalPages: number;
    totalElements: number;
    last: boolean;
    size: number;
    number: number;
    sort: Sort;
    numberOfElements: number;
    first: boolean;
    empty: boolean;
}

export interface Shi {
    id: string;
    title: string;
    author: string;
    paragraphs: string[];
};

export interface Page {
    sort: Sort;
    offset: number;
    pageNumber: number;
    pageSize: number;
    unpaged: boolean;
    paged: boolean;
}


export interface Sort {
    sorted: boolean;
    unsorted: boolean;
    empty: boolean;
}

export const initialData: Data<any> = {
    content: null,
    pageable: null,
    totalPages: null,
    totalElements: null,
    last: null,
    size: null,
    number: null,
    sort: null,
    numberOfElements: null,
    first: null,
    empty: null
} 