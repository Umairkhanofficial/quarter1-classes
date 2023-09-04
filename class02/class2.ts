//ARITHMETIC OPERATORS:
var num1: number = 10;
var num2: number = 20;
// addition
var sum = num1 + num2;
//subtraction
var minus = num1 - num2;
// multiplication
var product = num1 * num2;
// exponent (raise to power ^)t
var exponent = 2 ** 5;
// division
var division = num2 / num1;
//division (remainder)
var remainder = num2 / 3;

console.log(division);
console.log(remainder);


// Simple Assignment operator = 
var variableName: string = "value";
var number1: number = 30;

// Addition and assignment operator
number1 += 10;//number1 = number1 + 10
// subtract and assignment operator
number1 -= 10;//number1 = number1 - 10
// multiply and assignment operator
number1 *= 10;//number1 = number1 * 10
// divide and assignment operator
number1 /= 10;//number1 = number1 / 10


var num1: number = 10;
var num2: number = 20;

// Comparison operator returns BOOLEAN type value.

// less than operator
var result: boolean = num2 < num1;

// greater than operator
var result2: boolean = num1 > num2;

// equal to operator 
//only value check.
var result3: boolean = num1 == num2;
// value check and datatype check.
var result4: boolean = num1 === num2;

//not equal to operator
var result6: boolean = num1 != num2

//Greater than and equal to operator
var result5: boolean = num1 >= num2;

//Less than and equal to operator
var result5: boolean = num1 <= num2;


// OR Operator ||
/*
OR operator help table
input1      input2      result
true        true         true
true        false        true
false       true         true
false       false        false
 - If ONE is TRUE then ALL TRUE.
 */


//AND Operator &&
/*
AND operator table
input1      input2      result
true        true         true
true        false        false
false       true         false
false       false        false
- If ONE is FALSE then ALL FALSE.
*/


//NOT operator !
/* 
NOT operator table
input      result
true        false
false       true
- Input will be inverted.
*/