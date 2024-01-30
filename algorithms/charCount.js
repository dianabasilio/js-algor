//Recide un string y pone en un object las letras y numeros que hay en ese string y cuantas veces se repite

const stringgg = "Hola";

//console.log(stringgg[0]);

//first solution

const charCount = (str) => {
  const stringLowerCased = str.toLowerCase();

  const stringToArray = stringLowerCased.split("");

  let objectWithCount = {};

  stringToArray.forEach((element) => {
    const elementIsAlphaNumeric = element.match(/[a-z0-9]/); // no space or !"$"@

    if (elementIsAlphaNumeric) {
      if (objectWithCount[element]) {
        objectWithCount[element]++;
      } else {
        objectWithCount[element] = 1;
      }
    }
  });
  return objectWithCount;
};

console.log(charCount("Holaha 7!"));
//{ '7': 1, h: 2, o: 1, l: 1, a: 2 }

//second solution

const charCount2 = (str) => {
  const stringLowerCased = str.toLowerCase();

  const stringToArray = stringLowerCased.split("");

  let objectWithCount = {};

  stringToArray.forEach((element) => {
    const elementIsAlphaNumeric = element.match(/[a-z0-9]/); // no space or !"$"@

    if (elementIsAlphaNumeric) {
      //Falsy then 1
      objectWithCount[element] = ++objectWithCount[element] || 1;
    }
  });
  return objectWithCount;
};

console.log(charCount2("Holaha 7!"));
//{ '7': 1, h: 2, o: 1, l: 1, a: 2 }

//DATOO

let objectWithCount = { a: 1, b: 2 };
let element = "a";
console.log(++objectWithCount[element]); // Incrementa 'a' a 2 y luego imprime 2
console.log(objectWithCount[element]); // Imprime el nuevo valor de 'a', que es 2

let objectWithCount2 = { a: 1, b: 2 };
let element2 = "a";
console.log(objectWithCount2[element2]++); // Imprime el valor actual de 'a' (1) y luego incrementa 'a' a 2
console.log(objectWithCount2[element2]); // Imprime el nuevo valor de 'a', que es 2
