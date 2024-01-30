function onlyElementsAtEvenIndex(array) {
  //Math ceil redondea hacia arriba
  var newArray = Array(Math.ceil(array.length / 2));
  for (var i = 0; i < array.length; i++) {
    if (i % 2 === 0) {
      newArray[i / 2] = array[i];
    }
  }
  console.log(newArray);
  return newArray;
}

onlyElementsAtEvenIndex([0, 1, 2]);
