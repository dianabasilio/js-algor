//ordena alfabeticamente
const months = ["A", "C", "Z", "B"];
months.sort();
console.log(months);
// Expected output: Array [ 'A', 'B', 'C', 'Z' ]

const array1 = [1, 30, 4, 21, 100000];

//Para ordenar numericamente
console.log("sort");
array1.sort((a, b) => {
  console.log("a", a);
  console.log("b", b);
  //para mayor a menor sería b-a
  //para ordenar por largo de string sería a.length-b.length
  return a - b;
});
console.log(array1);
// Expected output: Array [ 1, 4, 21, 30, 100000 ]

const stringgg = "Hola";

//console.log(stringgg[0]);

const charCount = (str) => {
  str.split("").forEach((element) => {
    console.log(element);
  });
};

console.log(charCount("Holaa"));
