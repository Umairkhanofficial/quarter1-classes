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
