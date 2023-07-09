import { Vechile } from "./vechile";

export default class Bike extends Vechile {

    abs : boolean;

    constructor(maxSpeed : number, weight : number, wheels : number, gears : number, clutch : boolean,abs : boolean) {
        super(maxSpeed, weight, wheels, gears, clutch);
        this.abs = abs;
    }
}