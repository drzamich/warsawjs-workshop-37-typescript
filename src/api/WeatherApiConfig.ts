import * as dotenv from 'dotenv';
import { injectable } from 'inversify';
import { IApiConfig } from './IApiConfig';
import { IItem } from './IItem';
dotenv.config(); // Loads variables from '.env' file to process.env

@injectable()
export class WeatherApiConfig implements IApiConfig {
  public itemsList: IItem[] = [
    {
      name: 'Warsaw',
      id: 756135
    }
  ]

  public getUrl(city: IItem) {
    return `http://api.openweathermap.org/data/2.5/weather?id=${city.id}&APPID=${process.env.WEATHER_API_KEY}`
  }
}