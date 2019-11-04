import { injectable, inject } from 'inversify';
import { ILogger} from './logger/Logger';
import { Types } from './IoC/Types';
import { SensorBundle } from './sensors/SensorBundle';

@injectable()
export class Main
{
  constructor(
    private _sensorBundle: SensorBundle,
    @inject(Types.ILogger) private _logger: ILogger
  )
  { }

  public async Start(): Promise<any>
  {
    const log = await this._sensorBundle.getBundledLogs()
    this._logger.Log(log);
  }
}
