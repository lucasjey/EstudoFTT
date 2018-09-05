import { Person } from "./person";

export class Student extends Person{
    
    constructor(name: string, profissao: string){
        super(name, profissao);
    }

public idade(age: number): void{
    console.log('Estuda');
    super.idade(age);
}
}