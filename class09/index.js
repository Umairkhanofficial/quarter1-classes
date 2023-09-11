//sync senquntial
//async settimeout setinterval
//promise or async wait
//class with constructor
/*class teacher {
    name:string="";
    age:number=0;
    salary:number=0;
    constructor(_name:string,)()
}*/
import inquirer from 'inquirer';
const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'what is your name',
    },
    {
        type: 'list',
        name: 'gender',
        message: 'Select your gender:',
        choices: ['Male', 'Female', 'other'],
    },
];
async function main() {
    const answers = await inquirer.prompt(questions);
    console.log('Userinput', answers);
}
main();
