export interface ListResponse<T> {
    data: T[];
    pageSize: number;
    pageCount: number;
    total: number;
    currentPage: number;
}

export interface IErrorResponse {
    status: number;
    message: string;
}

export interface IPaginationQuery {
    page: number;
    pageSize: number;
}