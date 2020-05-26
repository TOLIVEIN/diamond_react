import { Shi } from "./data.d";
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
    dynasty: string;
    author: string;
    paragraphs: string[];
}

// export interface Shi {
//     id: string;
//     title: string;
//     author: string;
//     paragraphs: string[];
// };

// export interface Ci {
//     rhythmic: string;
//     author: string;
//     paragraphs: string[];
// }

// export interface Qu {
//     dynasty: string;
//     title: string;
//     author: string;
//     paragraphs: string[];
// }

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
