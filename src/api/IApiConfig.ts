import { IItem } from './IItem';

export interface IApiConfig {
  itemsList: IItem[];
  getUrl(item: IItem): string;
}