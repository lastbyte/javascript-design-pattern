import { Base } from "../Base";
import { Builder } from "./Builder";

export class BaseBuilder<T> extends Builder<Base> {
  id: string;

  constructor() {
    super();
    this.id = "";
    super.init();
  }

  objectFactory(): Base {
    return new Base('');
  }
}
