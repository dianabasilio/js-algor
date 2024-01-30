// This pattern uses objects or sets to collect values/frequencies of values

//To compare arrays to see similar values, anagrams

//una palabra es anagrama de otra si las dos tienen las mismas letras, con el mismo número de apariciones, pero en un orden diferente

//This can often avoid the need for nested loops or O(N2) operations with arrays / strings

//EXAMPLE:

//write a function called same wich accepts 2 arrays, the function should return true if every value in the
//array has it´s corresponding value squared in the second array. The frequency of values must be the same

//O(N2)
const same = (arr1, arr2) => {
  const differentLength = arr1.length !== arr2.length;
  //Si no tienen mismo len pues error porque tienen que tener mismo len
  if (differentLength) {
    return false;
  }
  arr1.forEach((number) => {
    const numberSquared = number ** 2;
    //indexof es como el segundo for
    const correctIndex = arr2.indexOf(numberSquared);

    const array2HasNotNumSquare = correctIndex === -1;
    //Si tienen mismo len pero no está el cuadrado
    if (array2HasNotNumSquare) {
      return false;
    }
    console.log(arr2);
    //Una vez que ya viste que tiene mismo len y tiene el cuadrado hay que borrar el cuadrado
    arr2.splice(correctIndex, 1);
  });
  return true;
};

console.log(same([1, 2, 3, 2], [9, 1, 4, 4]));

//2 loops is better than 2 nested loops ;)
//O(N2)

const same2 = (arr1, arr2) => {
  const differentLength = arr1.length !== arr2.length;
  //Si no tienen mismo len pues error porque tienen que tener mismo len
  if (differentLength) {
    return false;
  }

  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  //Cuenta cuantas veces se repite el numero en el array1
  arr1.forEach((numberArr1) => {
    frequencyCounter1[numberArr1] = (frequencyCounter1[numberArr1] || 0) + 1;
    //frequencyCounter1[numberArr1] = ++frequencyCounter1[numberArr1] || 1; es lo mismo que arriba
    console.log(frequencyCounter1);
  });
  //Cuenta cuantas veces se repite el numero en el array2
  arr2.forEach((numberArr2) => {
    frequencyCounter2[numberArr2] = (frequencyCounter2[numberArr2] || 0) + 1;
    //frequencyCounter2[numberArr2] = ++frequencyCounter2[numberArr2] || 1; es lo mismo que arriba
    console.log(frequencyCounter2);
  });

  for (let key in frequencyCounter1) {
    //Aquí checamos si existe la key en ambos
    const keyIsNotInsideFreqCounter2 = !(key ** 2 in frequencyCounter2);
    if (keyIsNotInsideFreqCounter2) {
      return false;
    }
    //Aquí checamos si tienen la misma frecuencia
    const keysHaveDifFreqValues =
      frequencyCounter2[key ** 2] !== frequencyCounter1[key];
    if (keysHaveDifFreqValues) {
      return false;
    }
  }

  return true;
};

console.log("same 2");
console.log(same2([1, 2, 3, 2, 10, 5], [9, 25, 1, 4, 4, 100]));

//EXTRA PRACTICE FOR THIS PATTERN

console.log("Nueva forma");
console.log(true || "or");
console.log(false || "or");

console.log(true && "and");
console.log(false && "and");

const objetoEjemplo = {
  nombre: "Carlos",
};

console.log(objetoEjemplo["hi"] || "hi");
console.log(objetoEjemplo["nombre"] || "nombre");

const freqCounter = (array1) => {
  let counter = {};
  array1.forEach((number) => {
    console.log(number);
    counter[number] = ++counter[number] || 1;
    //opción 2
    //counter[number] = (counter[number] || 0) + 1;
  });

  //En vez de usar forEach
  //   for (let val of array1) {
  //     counter[val] = ++counter[val] || 1;
  //   }
  return counter;
};

console.log(freqCounter([1, 2, 2, 2, 2, 3, 3]));

const checkObjects = (obj1) => {
  for (let key in obj1) {
    console.log(key);
    console.log(obj1[key]);
  }
  return obj1;
};

const firstObj = { name: "Joan", age: 25 };

console.log(checkObjects(firstObj));

console.log("checkIfItIsInsideArray");

const checkIfItIsInsideArray = (number, array) => {
  if (array.includes(number)) {
    return true;
  } else {
    return false;
  }
};

console.log(checkIfItIsInsideArray(8, [1, 4, 4]));

console.log("checkIfItIsInsideObject");

const checkIfItIsInsideObject = (palabra, object) => {
  if (palabra in object) {
    return true;
  } else {
    return false;
  }
};

console.log(checkIfItIsInsideObject("Juan", { Juan: "ocho" }));
//true
console.log(checkIfItIsInsideObject("Juan", { juan: "ocho" }));
//false

const loopTrhString = (string) => {
  string.split("").forEach((letter) => {
    console.log(letter);
  });
  return string;
};

console.log(loopTrhString("loo"));
