import inquirer from 'inquirer';
// const questions = [
//     {
//         type: 'number',
//         name: 'grades',
//         message: 'what is your grade',
//     }
// ]
try {
    console.log("try test");
    async function percentage() {
        var answers = await inquirer.prompt({
            type: 'number',
            name: 'grades',
            message: 'enter grade',
        });
        // console.log('Userinput', answers);
        if (answers.grades > 100 || answers.grades < 0) {
            throw new Error("plz input correct num");
        }
        if (answers.grades > 90) {
            console.log("u got the A+ grade");
        }
        else if (answers.grades >= 80 && answers.grades < 90) {
            console.log("u got the A grade");
        }
        else if (answers.grades >= 70 && answers.grades < 80) {
            console.log("u got the B grade");
        }
        else if (answers.grades >= 60 && answers.grades < 70) {
            console.log("u got the C grade");
        }
        else if (answers.grades >= 50 && answers.grades < 60) {
            console.log("u got the D grade");
        }
        else if (answers.grades < 50) {
            console.log("u got the F grade");
        }
    }
    percentage();
}
catch (error) {
    console.log("error is ", error);
}
finally {
    console.log("finnly check");
}
