//variables

var a; // declarando
var b = "b"; // declarando y asignando
b = "bb"; // reasignacion
var a = "aa"; // redeclaracion

// Global scope
var fruit = "Apple";

function bestFruit() {
  console.log(fruit);
}

bestFruit();

function countries() {
  country = "Colombia"; // global
  console.log(country);
}

countries();
console.log(country);
