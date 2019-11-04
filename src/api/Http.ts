import axios from 'axios';
import { injectable } from "inversify";
import { IHttp } from "./IHttp";

@injectable()
export class Http implements IHttp {
  public async get<T>(url: string): Promise<T> {
    const response = await axios.get(url);
    return response.data;
  }
}