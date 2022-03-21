/* Create an array containing 1-1000
Create function that will
Isolate multiples of 3 and 5 through for if loop
log sum of isolated multiples */

array1 = Array.from({length: 1000}, (_, i) => i + 1)
// creates an array object containing integers 1-1000
let array2 =[]; // creates a new empty array
function findMultiples3And5() {
    for(let i=1; i<=1000; i++) { // iterates through array1
        if(i % 3 === 0 || i % 5 === 0) { //finding multiples of 3 or 5 
        array2.push(i) //adds multiples to empty array
        } 
    } return(array2);
};

sum = findMultiples3And5().reduce((a,b) => {
  return a + b;
});

console.log(array1);
console.log(array2); //shows empty array
console.log(findMultiples3And5(array1)); //modified array2
console.log(sum); // uses reduce method to find total in array 2