import { UserType } from './user.type';

export interface ResponseListDto<T> {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: T[];
}
