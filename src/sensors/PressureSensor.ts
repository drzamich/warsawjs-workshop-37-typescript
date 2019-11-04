
import 'reflect-metadata';

import { injectable, inject } from "inversify";
import { ISensor } from './ISensor';
import { Types } from '../IoC/Types';
import { IWeatherApi } from '../api/IWeatherApi';

@injectable()
export class PressureSensor implements ISensor {
  constructor (
    @inject(Types.IWeatherApi) private _api: IWeatherApi,
  ) {}

  public async getLog() {
    const value = await this.getPressure();
    return `The pressure is ${value} hPa`;
  }

  private async getPressure() {
    return  await this._api.getPressure();
  }
}