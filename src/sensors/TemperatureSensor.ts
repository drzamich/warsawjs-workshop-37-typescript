
import 'reflect-metadata';

import { injectable, inject } from "inversify";
import { ISensor } from './ISensor';
import { IWeatherApi } from '../api/IWeatherApi';
import { Types } from '../IoC/Types';

@injectable()
export class TemperatureSensor implements ISensor {
  constructor (
    @inject(Types.IWeatherApi) private _api: IWeatherApi,
  ) {}

  public async getLog() {
    const value = await this.getTemperature();
    return `The temperature is ${value} C`;
  }

  private async getTemperature() {
    const temp = await this._api.getTemperature()

    return this.convertTemperature(temp);
  }

  private convertTemperature(temp: number) {
    return this.fromKelvinToCelsius(temp).toFixed(2);
  }

  private fromFahrenheitToCelsius(fahrenheitTemp: number) {
    return (fahrenheitTemp * (9/5)) + 32;
  }

  private fromKelvinToCelsius(kelvinTemp: number) {
    return kelvinTemp - 273.15;
  }
}