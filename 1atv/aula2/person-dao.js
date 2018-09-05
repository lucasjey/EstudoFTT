"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var person_1 = require("../Aula1/person");
var PersonDao = /** @class */ (function () {
    function PersonDao() {
    }
    PersonDao.prototype.insert = function (person) {
        console.log('inserindo.', person.toString());
        return true;
    };
    PersonDao.prototype.update = function (person) { return true; };
    PersonDao.prototype.delete = function (id) { return true; };
    PersonDao.prototype.find = function (id) { return null; };
    PersonDao.prototype.findAll = function () { return [new person_1.Person('Lucas', '')]; };
    return PersonDao;
}());
exports.PersonDao = PersonDao;
//# sourceMappingURL=person-dao.js.map