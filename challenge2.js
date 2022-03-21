/* Create array of fibonacci sequence up to 4,000,000
isolate even numbers through loop
find total sum of them 

let a = 0;
let b = 1;
let array1 = [];
function fibonacci(num) {
    let sum;
    var i = 0;
    for (i = 0; i < num; i++) {
        sum = a + b;
        a = b;
        b = sum;
    }
    return(b);
    array1.push(b);
}; 

fibonacci(1000);
console.log(array1); // code for a fibonacci sequence to input(num) Attempt 1 failed*/

const fibonacci = n =>
  Array.from({ length: n }).reduce(
    (acc, val, i) => acc.concat(i > 1 ? acc[i - 1] + acc[i - 2] : i),
    []
  );

console.log(fibonacci());  //w3 schools solution 