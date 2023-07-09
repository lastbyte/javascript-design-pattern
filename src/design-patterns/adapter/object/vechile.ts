export class Vechile {
    
    maxSpeed : number;
    weight : number;
    wheels : number;
    gears : number;
    clutch : boolean;

    constructor(maxSpeed : number, weight : number, wheels : number, gears : number, clutch : boolean){
        this.maxSpeed=maxSpeed;
        this.weight = weight;
        this.wheels = wheels;
        this.gears = gears;
        this.clutch = clutch;
    }
}