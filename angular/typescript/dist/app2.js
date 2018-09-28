"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Pessoa_1 = require("./Pessoa");
var Concessionaria_1 = require("./Concessionaria");
var Carro_1 = require("./Carro");
/*criar carros*/
var carroA = new Carro_1.Carro('dodge', 4);
var carroB = new Carro_1.Carro('veloster', 3);
var carroC = new Carro_1.Carro('saveiro', 2);
/* lista de carros da concessionaria*/
var listaDeCarros = [carroA, carroB, carroC];
var concessionaria = new Concessionaria_1.Concessionaria('Av. goias', listaDeCarros);
/*exibir lista de carros*/
// console.log(concessionaria.mostrarListaDeCarros())
/*comprar carro*/
var cliente = new Pessoa_1.Pessoa('jose', 'veloster', carroA);
concessionaria.mostrarListaDeCarros().map(function (carro) {
    if (carro['modelo'] == cliente.dizerCarroPreferido()) {
        cliente.comprarCarro(carro);
    }
});
// console.log(cliente.dizerCarroQueTem())
