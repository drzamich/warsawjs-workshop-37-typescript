import { injectable, inject } from "inversify";
import { Types } from "../IoC/Types";
import { IHttp } from "./IHttp";
import { IApiConfig } from "./IApiConfig";

interface WeatherApiDto {
  main: {
    temp: number,
    humidity: number,
    pressure: number
  },
  wind: {
    speed: number
  }
}

@injectable()
export class WeatherApi {
  constructor(
    @inject(Types.IHttp) private _http: IHttp,
    @inject(Types.IApiConfig) private _config: IApiConfig
  ) {}

  private async getData(): Promise<WeatherApiDto> {
    const url = this._config.getUrl(this._config.itemsList[0]);
    return await this._http.get<WeatherApiDto>(url);
  }

  public async getTemperature(): Promise<number> {
    const data = await this.getData();
    return data.main.temp;
  }

  public async getPressure(): Promise<number> {
    const data = await this.getData();
    return data.main.pressure;
  }

  public async getHumidity(): Promise<number> {
    const data = await this.getData();
    return data.main.humidity;
  }

  public async getWindSpeed(): Promise<number> {
    const data = await this.getData();
    return data.wind.speed;
  }
}