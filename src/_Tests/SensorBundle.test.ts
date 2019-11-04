import { Mock } from 'moq.ts'
import { HumiditySensor } from '../sensors/HumiditySensor';
import { IWeatherApi } from '../api/IWeatherApi';
import { SensorBundle } from '../sensors/SensorBundle';
import { TemperatureSensor } from '../sensors/TemperatureSensor';
import { WindSpeedSensor } from '../sensors/WindSpeedSensor';
import { PressureSensor } from '../sensors/PressureSensor';
import { IApiConfig } from '../api/IApiConfig';

describe(SensorBundle.name, async () => {
  it('produces correct log output', async () => {
    // given
    const weatherApiMock = new Mock<IWeatherApi>();
    weatherApiMock.setup(x => x.getHumidity()).returns(87);
    weatherApiMock.setup(x => x.getTemperature()).returns(11.99231323);
    weatherApiMock.setup(x => x.getWindSpeed()).returns(9.3);
    weatherApiMock.setup(x => x.getPressure()).returns(1013);

    const humiditySensorMock = new HumiditySensor(weatherApiMock.object());
    const temperatureSensorMock = new TemperatureSensor(weatherApiMock.object());
    const windSpeedSensorMock = new WindSpeedSensor(weatherApiMock.object());
    const pressureSensorMock = new PressureSensor(weatherApiMock.object());
    const apiConfigMock = new Mock<IApiConfig>();
    apiConfigMock.setup(x => x.itemsList = [{ name: 'Warsaw', id: 123 }]);

    // when
    const sut = new SensorBundle(temperatureSensorMock, windSpeedSensorMock, humiditySensorMock, pressureSensorMock, apiConfigMock.object());
    const log = await sut.getBundledLogs();

    // then
    expect(log).toBe(`Weather information for Warsaw:
      The humidity is 87%
      The wind speed is 9.3 m/s
      The temperature is 11.99 C
      The pressure is 1013 hPa.`);
  })
})