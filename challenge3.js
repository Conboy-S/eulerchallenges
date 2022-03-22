/* Calculate prime factors of 600851475143 and store in array
display largest of these */
let array1 = []; // creates empty array
function primeFind(integer) {
    let divisor =2; // starting divisor for loop

    while (integer >=2) { //takes input and begins looping
        if (integer % divisor === 0){ //calculates whether input has a remainder after divisor used 
            integer = integer / divisor; // modifies input for further iterations
            array1.push(divisor); // if so it is prime and added to the array
        } else {
            divisor++; //increments the divisor and repeats
        }
    }
    return array1; //produces array of prime numbers
}

array1=primeFind(600851475143);
console.log(Math.max(...array1));


