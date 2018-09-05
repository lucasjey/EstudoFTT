import { DaoInterface } from "./dao.interface";
import { PersonDao } from "./person-dao";
import { Person } from "../Aula1/person";

let personDao: DaoInterface = new PersonDao();
let person: Person = new Person('Carca','')

personDao.insert(person);