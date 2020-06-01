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

export interface Poetry {
    id?: string;
    title?: string;
    rhythmic?: string;
    notes?: string[];
    chapter?: string;
    section?: string;
    dynasty?: string;
    author?: string;
    paragraphs?: string[];
    content?: string[];
    comment?: string[];
    tags?: string;
    abstract?: string;
}

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

export interface PoetryDetail {
    head: Array<string>;
    body: Array<string>;
    notes: Array<string>;
}


export interface Author {
    id?: string;
    name: string;
    desc: string;
}