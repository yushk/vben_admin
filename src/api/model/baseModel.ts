export interface BasicPageParams {
  skip: number;
  limit: number;
  query: string;
}

export interface BasicFetchResult<T> {
  items: T[];
  total_count: number;
}
