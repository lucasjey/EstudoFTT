import { DaoInterface } from "./dao.interface";
import { Person } from "../Aula1/person";
import { Dao } from "./dao";
import { Student } from "../Aula1/student";

let dao: DaoInterface<Person> = new Dao<Person>();
let studante: Student = new Student('Maike', 'Estudante');


dao.insert(studante);