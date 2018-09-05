export class Person{
    private name: string;
    private profissao: string;

    constructor(name: string, profissao: string){
        this.name = name;
        this.profissao = profissao;
    }

    public idade (age: number): void{
        console.log(`${this.name} tem ${age} de idade ${this.profissao}`);
    }

    public toString(): string{
        return `Class Person, nome ${this.name}`;
    }

}