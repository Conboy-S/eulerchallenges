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

/*const fibonacci = n =>
  Array.from({ length: n }).reduce(
    (acc, val, i) => acc.concat(i > 1 ? acc[i - 1] + acc[i - 2] : i),
    []
  );

console.log(fibonacci()); w3 schools solution  */

//Attempt 2

function fibonacci() { // no input required
    let a = 0; //first number in fib sequence
    let b = 1; //second number in fib sequence
    let c = 0; //total of even numbers in fob loop 
    for(i = 0; ; i++) { //begins for loop
        let d = a + b; //d is total of previous 2 numbers in sequence
        if(d > 4000000){ //terminates loop once total exceeds 4 million
            break;
        }
        if(d % 2 === 0) { //calculates if total(d) is even 
            c += d; // if it is it is added to c, the total of even numbers
        }
        a = b; //increases first and second numbers for next iteration of loop
        b = d;
    }
    console.log(c);
}

fibonacci();