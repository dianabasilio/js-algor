//Example sumup
//sumup(3) = 1+2+3=6
//sumUp(4)= 1+2+3+4=10

let start = performance.now();
let end = performance.now();

//Longer performance loops are slowe
//O(n)

function sumUp1(n) {
  let result = 0;
  for (let i = 1; i <= n; i++) {
    result = result + i;
  }
  return result;
}

console.log("Longer perfomance");
start = performance.now();
const ans = sumUp1(100000);
end = performance.now();

const totalTime = end - start;

console.log("answer", ans);
console.log("time", totalTime);

//shorter performance formulas are faster
//O(1)
function sumUp2(n) {
  return (n / 2) * (n + 1); //FORMULAA
}

console.log("Shorter perfomance");
start = performance.now();
const ans2 = sumUp2(1000000);
end = performance.now();

const totalTime2 = end - start;

console.log("answer", ans2);
console.log("time", totalTime2);
