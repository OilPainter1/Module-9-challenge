// TODO: Include packages needed for this application
import inquirer from "inquirer";
import generateMarkdown from "./utils/generateMarkdown.js";


// TODO: Create an array of questions for user input
const questions = [{
    type: "input",
    name: "title",
    message: "What is the name of the project?"
},{
    type: "checkbox",
    name:"tableOfContents",
    message:"what will be included in the README.md table of contents?",
    choices: ["Installation","Usage","Credits","License"]
},
{
    type: "input",
    name: "installation",
    message: "Installation: describe the installation of the project:"
},
{
    type: "input",
    name: "usage",
    message: "Usage: describe the usage of the project"
}
];
inquirer.prompt(questions).then((answers)=> console.log(answers))

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    
}

// Function call to initialize app
init();
