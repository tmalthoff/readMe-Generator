const fs = require("fs");
const inquirer = require("inquirer");




// array of questions for user
function promptUser() {
    return inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "What is the title of your project?"
        },
        {
            type: "input",
            name: "description",
            message: "Provide a description of your project"
        },
        
        {
            type: "input",
            name: "table of contents",
            message: "What is your table of contents"
        },
        {
            type: "input",
            name: "title",
            message: "What is the title of your project?"
        },
        {
            type: "input",
            name: "installation",
            message: "What is the installation process?"
        },
        {
            type: "input",
            name: "usage",
            message: "How do you use your application?"
        },
        {
            type: "input",
            name: "license",
            message: "Which license would you like to use? "
        },
        {
            type: "input",
            name: "contribution",
            message: "Who contributed to your project?"
        },
        {
            type: "input",
            name: "tests",
            message: "How do you test your project?"
        },

        {
            type: "input",
            name: "questions",
            message: "Input any contact information if anyone has any future questions for you."
        },

    ])
}

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
