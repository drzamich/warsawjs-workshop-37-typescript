import { injectable } from "inversify";

@injectable()
export interface IWeatherApi {
  getTemperature(): Promise<number>;
  getWindSpeed(): Promise<number>;
  getHumidity(): Promise<number>;
  getPressure(): Promise<number>;
}