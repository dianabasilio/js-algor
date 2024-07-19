function insertionSort2(n, arr) {
  // Empezamos desde el segundo elemento ya que asumimos que el primer elemento ya está ordenado
  for (let i = 1; i < n; i++) {
    let currentValue = arr[i];
    let j = i - 1;

    console.log("currentValue", currentValue);

    // Mover los elementos de arr[0..i-1], que son mayores que currentValue, una posición hacia adelante
    while (j >= 0 && arr[j] > currentValue) {
      console.log(" anterior arr[j]", arr[j]);
      console.log("Antes arr", arr);
      arr[j + 1] = arr[j];
      console.log("despues arr", arr);
      j--;
    }

    // Insertar currentValue en su posición correcta
    console.log("arr[j + 1]", arr[j + 1]);
    arr[j + 1] = currentValue;

    // Imprimir el array después de cada inserción
    console.log(arr.join(" "));
    console.log("--");
  }
}

// Ejemplo de uso:
let n = 6;
let arr = [1, 4, 3, 5, 6, 2];
insertionSort2(n, arr);
