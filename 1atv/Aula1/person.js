"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Person = /** @class */ (function () {
    function Person(name, profissao) {
        this.name = name;
        this.profissao = profissao;
    }
    Person.prototype.idade = function (age) {
        console.log(this.name + " tem " + age + " de idade " + this.profissao);
    };
    Person.prototype.toString = function () {
        return "Class Person, nome " + this.name;
    };
    return Person;
}());
exports.Person = Person;
//# sourceMappingURL=person.js.map