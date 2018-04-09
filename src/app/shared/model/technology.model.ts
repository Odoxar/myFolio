import { LogoModel } from "./logo.model";

export class TechnologyModel {
  constructor(
    public category: string,
    public logo: LogoModel[]
  ) {}
}