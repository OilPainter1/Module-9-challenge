// TODO: Include packages needed for this application
import inquirer from "inquirer";
import generateMarkdown from "./utils/generateMarkdown.js";
import fs from "fs"

// TODO: Create an array of questions for user input
const questions = [{
    type: "input",
    name: "title",
    message: "What is the name of the project?"
},
{
    type: "input",
    name: "description",
    message: "Description: include a description of the project."
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
},
{
    type: "input",
    name: "contributing",
    message: "Describe how to contribute to the project"

},
{
    type: "input",
    name: "tests",
    message: "(optional) Include tests for the project and how to run them"
},
{
    type: "input",
    name: "email",
    message: "Enter email:"
},
{
    type: "input",
    name: "github",
    message: "Enter github username:"

}


];


// TODO: Create a function to write README file
function writeToFile(fileName,data){
    fs.writeFileSync(fileName,data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers)=>  writeToFile("README.md",generateMarkdown(answers))).catch((error)=>console.log(error))
    
}

// Function call to initialize app
init();
