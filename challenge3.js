/* Calculate prime factors of 600851475143 and store in array
display largest of these */

function primeFind(integer) {
    let array1 = []; // empty array
    let prime; // 

    for (let i = 2; i <= integer; i++) { 
    if (integer % i !== 0) continue;

    for (let j = 2; j <= i / 2; j++) {
      isPrime = i % j !== 0;
    }
}


