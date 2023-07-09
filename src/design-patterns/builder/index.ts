import { Person } from "./entity/Person";

const nishant = new Person.Builder()
//@ts-ignore
  .withId()
  .withFirstName("Nishant")
  .withMiddleName("")
  .withLastName("Kumar")
  .build();

nishant.introduction();

const nishant1 = new Person.Builder()
  .withId()
  .withFirstName("Nishant")
  .withMiddleName("__")
  .withLastName("Kumar")
  .build();

nishant1.introduction();

// creating data from an array using builder pattern 

const data = [
    {firstName : "Nishant", lastName : "Kumar", id : "4083"},
    {firstName : "Pooja", lastName : "Ikhar", id : "4084"},
    {firstName : "Pari", lastName : "Dixit", id : "4085"},
    {firstName : "Shubham", lastName : "Rajak", id : "4086"},
    {firstName : "Prateek", lastName : "Kumar", id : "4087"},
]

const personArray: any[] = [];

data.forEach(element => {
    const builder = new Person.Builder();
    element.firstName && builder.withFirstName(element.firstName);
    element.lastName && builder.withLastName(element.lastName);
    element.id && builder.withId(element.id);
    const person = builder.build();
    person.introduction();
});
