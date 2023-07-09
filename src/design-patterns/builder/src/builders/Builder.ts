import { Person } from "../Person";

export class Builder<T>{
  [x: string]: any;
  init() {
    Object.keys(this).forEach((key) => {
      const withName = `with${key.substring(0, 1).toUpperCase()}${key.substring(
        1
      )}`;
      (this as any)[withName] = (value: any) => {
        (this as any)[key] = value;
        return this;
      };
    });
  }

  createObjectAndReturn( properties : any) {
    return Object.assign(this.objectFactory(),properties);
  }

  objectFactory() : T {
    return {} as T;
  }

  build() {
    const keysNoWithers = Object.keys(this).filter(
      (key) => typeof (this as any)[key] !== "function"
    );

  const properties = keysNoWithers.reduce((returnValue, key) => {
    return {
      ...returnValue,
      [key]: (this as any)[key],
    };
  }, {})

  return this.createObjectAndReturn(properties);
  }
}
