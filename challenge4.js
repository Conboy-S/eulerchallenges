/* Create a function with a for loop that cycles through 3 digit number multiplication
Add lines of code that can recognise palindromes and stores them in an array
use math max method at end to display largest integer stored in array*/

function bigPalindrome() {
    let a = 999;
    let b = 999; // a b represent the integers that will be multiplied through the loop
    let c = 0;
    for (i = 0; ; i++) {
        c = a * b;
        let len = c.length;
        for (j = 0; j = len / 2; j_++) {
            if (c[j] === c[len - 1 - j]) {
                return c;
            } else if (a === b) {
                a--;
            } else {
                b--;
            }
        }
    }
} 

console.log(bigPalindrome());

