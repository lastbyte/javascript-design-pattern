import { Vechile } from "./vechile";

export default class Car extends Vechile {

    powerStearing : boolean;

    constructor(maxSpeed : number, weight : number, wheels : number, gears : number, clutch : boolean,powerStearing : boolean) {
        super(maxSpeed, weight, wheels, gears, clutch);
        this.wheels = 4;
        this.powerStearing = powerStearing;
    }
}