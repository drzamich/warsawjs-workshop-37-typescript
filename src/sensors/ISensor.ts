export interface ISensor {
  getLog(): Promise<string>
}