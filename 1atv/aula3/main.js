"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dao_1 = require("./dao");
var student_1 = require("../Aula1/student");
var dao = new dao_1.Dao();
var studante = new student_1.Student('Maike', 'Estudante');
dao.insert(studante);
//# sourceMappingURL=main.js.map