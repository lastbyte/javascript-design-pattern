import { BaseBuilder } from "./builders/BaseBuilder";
import { Builder } from "./builders/Builder";

export class Base {
  id: string;

  constructor(id: string) {
    this.id = id;
  }

  static get Builder() {
    return BaseBuilder;
  }
}
