export interface PaginationRequest {
    page: number;
    pageSize: number;
}

export interface PaginationResponse<T> {
    pageSize: number;
    content: T[];
    totalPages: number;
    totalElements: number;
}