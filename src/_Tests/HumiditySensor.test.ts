import { Mock } from 'moq.ts'
import { HumiditySensor } from '../sensors/HumiditySensor';
import { IWeatherApi } from '../api/IWeatherApi';

describe(HumiditySensor.name, async () => {
  it('converts humidity properly', async () => {
    // given
    const weatherApiMock = new Mock<IWeatherApi>();
    weatherApiMock.setup(x => x.getHumidity())
            .returns(96);

    const sut = new HumiditySensor(weatherApiMock.object()); // sut - system under test

    // when
    const log = await sut.getLog();

    // then
    expect(log).toBe(`The humidity is 96%`) // 57.2
  })
})