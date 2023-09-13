
//sync senquntial
//async settimeout setinterval
//promise or async wait
//class with constructor
/*class teacher {
    name:string="";
    age:number=0;
    salary:number=0;
    constructor(_name:string,)()
}

let tech = new teacher();*/
/*
import inquirer from 'inquirer';
const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'what is your name',

    },
    {
        type:'list',
        name:'gender',
        message: 'Select your gender:',
        choices: ['Male','Female','other'],
    },
]

async function main(){
    const answers = await inquirer.prompt(questions);
    console.log('Userinput', answers);
    
}
main();

*/


import inquirer from "inquirer";
inquirer.prompt([
    {
        name: "num1",
        type: "number",
        message: "Enter the first number?",
    },
    {
        name: "num2",
        type: "number",
        message: "Enter the second number?",
    },
    {
        name: "operation",
        type: "list",
        message: "Enter the operation?",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
])
    .then((answer) => {
    console.log(answer);
    switch (answer.operation) {
        case "Addition":
            console.log(answer.num1 + answer.num2);
            break;
        case "Subtraction":
            console.log(answer.num1 - answer.num2);
            break;
            case "Multiplication":
            console.log(answer.num1 * answer.num2);
            break;
        case "Division":
            console.log(answer.num1 / answer.num2);
            break;
                   
        default:
            break;
    }
});


// console.log("Start "); //1

// function printInFunction() {
// const time = new Date();
// // const _time = time.toLocaleTimeString();
// console.log("🚀 ~ file: index.ts:5 ~ printInFunction ~ time:", time);
// }

// let count = 0; //0//1//2//3
// const interval_id = setInterval(() => {
//   printInFunction();
//   count++;
//   if (count === 3) {
//     clearInterval(interval_id);
//   }
// }, 2000);

// console.log("end"); //2
// // A
// // console.log("Start");

// // setTimeout(() => {
// //   console.log("In set time out");
// // }, 1000);

// // console.log("End");

// let car: {} = {
//   model: "civic",
//   brand: "Honda",
// };

// class Car {
//   model: string = "";
//   brand: string = "";
//   year?: number = 0;

//   constructor(_model: string, _brand: string, _year: number) {
//     this.model = _model;
//     this.brand = _brand;
//     this.year = _year;
//   }
// }

// let newCar = new Car("S Class", "Mercedes", 2023);
// let newCar2 = new Car("A8L", "Audi", 2022);
// console.log("🚀 ~ file: index.ts:44 ~ newCar:", newCar);
// console.log("🚀 ~ file: index.ts:45 ~ newCar2:", newCar2);

// let car = new Car();

// car.brand = "BMW";
// car.model = "M4 Competition";
// console.log("car", car);

// let car2 = new Car();
// car2.brand = "Audi";
// car2.model = "A8L";

// console.log("car2", car2);

// class Teacher {
//   name: string = "";
//   age: number = 0;
//   salary: number = 0;
//   grade: string = "";
//   constructor(_name: string) {
//     this.name = _name;
//   }
// }

// let abuhurairah = new Teacher("Abu Hurairah");
// console.log("🚀 ~ file: index.ts:73 ~ abuhurairah:", abuhurairah);