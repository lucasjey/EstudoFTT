import { DaoInterface } from "./dao.interface";
import { Person } from "../Aula1/person";

export class PersonDao implements DaoInterface{
    tableName: string;

    insert(person: Person):boolean{ 
        console.log('inserindo.', person.toString());
        return true;
    }

    update(person: Person):boolean{ return true;}

    delete(id: number):boolean{ return true;}

    find(id: number):Person{return null;}

    findAll():[Person] { return [new Person('Lucas','')];}
}