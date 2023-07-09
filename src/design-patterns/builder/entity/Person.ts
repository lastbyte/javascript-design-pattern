import { Base } from "./Base";
import { PersonBuilder } from "./builders/PersonBuilder";

export class Person extends Base {

    firstName : string;
    middleName : string;
    lastName : string;

    constructor(id : string,firstName : string, middleName : string, lastName : string) {
        super(id);
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
    }

    static get Builder() {
        return PersonBuilder;
    }

    introduction() {
        console.log(`Hi i am ${this.firstName ? this.firstName+" " : ''}${ this.middleName ? this.middleName+" ": ''}${this.lastName ? this.lastName+" " : ''}`);
    }
}