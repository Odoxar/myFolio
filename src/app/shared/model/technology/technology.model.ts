import { LogoModel } from "../logo/logo.model";

export class TechnologyModel {
  constructor(
    public category: string,
    public logo: LogoModel[]
  ) {}
}