import { Person } from "../Person";
import { BaseBuilder } from "./BaseBuilder";

export class PersonBuilder extends BaseBuilder<Person> {

    firstName : string;
    middleName : string;
    lastName : string;
    
    constructor() {
        super();
        this.firstName = '';
        this.middleName = '';
        this.lastName = '';
        super.init();
    }

    objectFactory(): Person {
        return new Person('','','','');
      }
}