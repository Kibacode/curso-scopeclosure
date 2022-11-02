function greeting() {
  let userName = "Ana";
  console.log(userName);

  if (userName === "Ana") {
    console.log(`Hello ${userName}`);
  }
}

greeting();

console.log(userName); //No funciona porque no esta dentro del scope
