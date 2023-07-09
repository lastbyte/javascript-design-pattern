import Bike from "./bike";
import Car from "./car";
import { Vechile } from "./vechile";

const VechileAdapter = (type : string, options : any) => {

    /*
    * add all the common functionality
    */

    console.log("Creating a new vechile with : " , options);

    switch (type) {
        case 'bike' :
            return options && new Bike(options.maxSpeed, options.weight, options.wheels, options.gears, options.clutch,options.abs);
        case 'car' : 
            return options && new Car(options.maxSpeed, options.weight, options.wheels, options.gears, options.clutch,options.powerStearing);
        default :
            return null;
    }
}

export default VechileAdapter;