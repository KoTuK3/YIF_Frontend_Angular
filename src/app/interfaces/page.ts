export interface Page<T> {
  currentPage: number;
  totalPages: number;
  pageSize: number;
  nextPage: string;
  prevPage: string;
  responseList: T[];
}