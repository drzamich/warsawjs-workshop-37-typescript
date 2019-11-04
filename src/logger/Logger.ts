import { injectable } from 'inversify';


export interface  ILogger {
  Log(text: string | number): void;
}

@injectable()
export class ConsoleLogger implements ILogger {
  public Log(text: string | number): void
  {
      console.log(text);
  }
}

@injectable()
export class FileLogger implements ILogger {
  public Log(text: string | number): void
  {
      console.log('FILE', text);
  }
}