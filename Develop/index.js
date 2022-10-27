// TODO: Include packages needed for this application
import inquirer from "inquirer";
import generateMarkdown from "./utils/generateMarkdown.js";


// TODO: Create an array of questions for user input
const questions = [{
    type: "input",
    name: "projectName",
    message: "What is the name of the project?"
},
];
inquirer.prompt(questions).then((answers)=> console.log(answers))

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    console.log("test")
}

// Function call to initialize app
init();
