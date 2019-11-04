import { inject, injectable } from "inversify";
import { ISensor } from "./ISensor";
import { Types } from "../IoC/Types";
import { IApiConfig } from "../api/IApiConfig";

@injectable()
export class SensorBundle {
  constructor (
    @inject(Types.TempSensor) private _tempSensor: ISensor,
    @inject(Types.WindSpeedSensor) private _windSensor: ISensor,
    @inject(Types.HumiditySensor) private _humiditySensor: ISensor,
    @inject(Types.PressureSensor) private _pressureSensor: ISensor,
    @inject(Types.IApiConfig) private _apiConfig: IApiConfig
  ) {}

  async getBundledLogs(): Promise<string> {
    return `Weather information for ${this._apiConfig.itemsList[0].name}:
    ${await this._humiditySensor.getLog()}
    ${await this._windSensor.getLog()}
    ${await this._tempSensor.getLog()}
    ${await this._pressureSensor.getLog()}`
  }
}