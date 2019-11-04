
import 'reflect-metadata';

import { injectable, inject } from "inversify";
import { ISensor } from './ISensor';
import { Types } from '../IoC/Types';
import { IWeatherApi } from '../api/IWeatherApi';

@injectable()
export class HumiditySensor implements ISensor {
  constructor (
    @inject(Types.IWeatherApi) private _api: IWeatherApi,
  ) {}

  public async getLog() {
    const value = await this.getHumidity();
    return `The humidity is ${value}%`;
  }

  private async getHumidity() {
    return  await this._api.getHumidity()
  }
}