console.log("First Program")     
var FirstName:string = "Umair";
var LastName:string = "Khan";
var age:number = 25;
var contact:number =3006647517;   
var FullName = FirstName + LastName;
console.log(FullName);
console.log(age,contact);



function addNumbers(a: number, b: number): number {
  return a + b;
}

const result = addNumbers(5, 7);
console.log(`The result is: ${result}`);

const array: number[] = Array(10) // array size is 10
  .fill(undefined)
  .map(() => 50 * Math.random()); // numbers from 0-50 (exclusive)

console.log(array);