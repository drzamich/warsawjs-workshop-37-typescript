
import 'reflect-metadata';

import { injectable, inject } from "inversify";
import { ISensor } from './ISensor';
import { IWeatherApi } from '../api/IWeatherApi';
import { Types } from '../IoC/Types';

@injectable()
export class WindSpeedSensor implements ISensor {
  constructor (
    @inject(Types.IWeatherApi) private _api: IWeatherApi,
  ) {}

  public async getLog() {
    const value = await this.getWindSpeed();
    return `The wind speed is ${value} m/s`;
  }

  private async getWindSpeed() {
    return  await this._api.getWindSpeed();
  }
}