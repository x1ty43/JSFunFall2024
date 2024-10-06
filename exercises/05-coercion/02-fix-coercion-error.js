let num1 = 2; // e.g.
let num2 = "7"; // e.g.

/**
 * If I were to log the code below, it does not print out what I would expect.
 * For example, I expect "sum" to result in the number 9 instead of the string "27".
 * This should still work when "num1" and "num2" are equal to different values that could be strings or numbers.
 */

// WRITE YOUR ANSWER BELOW THIS LINE

let sum = parseInt(num1) + parseInt(num2);

//could also use let sum = Number(num1) + Number(num2);

