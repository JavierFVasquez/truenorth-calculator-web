export interface PaginationData<T> {
  metadata: PaginationObject;
  data: T[];
}
export interface PaginationObject {
  page: number;
  pageSize: number;
  length: number;
  hasNext: boolean;
}
export interface PaginationRequest {
  page: number;
  pageSize: number;
  gatAll? :boolean
}
