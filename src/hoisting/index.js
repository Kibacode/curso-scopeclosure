// var nameOfDog; // undefined representacion de hoisting que declara las variables, pero las inicializa en undefined
// console.log(nameOfDog);
// var nameOfDog = "Elmo";
// console.log(nameOfDog);

nameOfDog();

function nameOfDog() {
  console.log(`El mejor perrito es ${elmo}`);
}

var elmo = "Elmito";
