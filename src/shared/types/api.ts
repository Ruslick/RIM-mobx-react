export interface PaginatedInfo {
  count: number;
  pages: number;
  next: string;
  prev: null;
}

export interface PaginatedData<Data> {
  info: PaginatedInfo;
  results: Data[];
}
