import 'reflect-metadata';
import { Container } from 'inversify';
import { Main } from '../Main';
import { ConsoleLogger, ILogger, FileLogger } from '../logger/Logger';
import { Types } from './Types';
import { TemperatureSensor } from '../sensors/TemperatureSensor';
import { IApiConfig } from '../api/IApiConfig';
import { Http } from '../api/Http';
import { IHttp } from '../api/IHttp';
import { WeatherApiConfig } from '../api/WeatherApiConfig'
import { WeatherApi } from '../api/WeatherApi';
import { SensorBundle } from '../sensors/SensorBundle';
import { ISensor } from '../sensors/ISensor';
import { WindSpeedSensor } from '../sensors/WindSpeedSensor';
import { PressureSensor } from '../sensors/PressureSensor';
import { HumiditySensor } from '../sensors/HumiditySensor';
import { IWeatherApi } from '../api/IWeatherApi';

export const IoC = new Container();

IoC.bind(Main).toSelf().inSingletonScope();
IoC.bind(SensorBundle).toSelf();
IoC.bind<ILogger>(Types.ILogger).to(ConsoleLogger);

IoC.bind<ISensor>(Types.PressureSensor).to(PressureSensor);
IoC.bind<ISensor>(Types.WindSpeedSensor).to(WindSpeedSensor);
IoC.bind<ISensor>(Types.HumiditySensor).to(HumiditySensor);
IoC.bind<ISensor>(Types.TempSensor).to(TemperatureSensor);

IoC.bind<IHttp>(Types.IHttp).to(Http);
IoC.bind<IApiConfig>(Types.IApiConfig).to(WeatherApiConfig);
IoC.bind<IWeatherApi>(Types.IWeatherApi).to(WeatherApi);