const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./generateMarkdown");
const path = require("path")




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
            name: "installation",
            message: "What is the installation process?"
        },
        {
            type: "input",
            name: "usage",
            message: "How do you use your application?"
        },
        {
            type: "list",
            name: "license",
            message: "Which license would you like to use - MIT, Unlicense, or ISC?",
            choices: [{name: "MIT", value: "MIT"}, {name: "Apache 2.0", value: "Apache"}, {name: "ISC", value: "ISC"}]
        },
        {
            type: "input",
            name: "contributing",
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
    return fs.writeFileSync(path.join(process.cwd(),fileName),data)
}

// function to initialize program
function init() {
    promptUser().then(function(answers){
        console.log(answers)
        //Call write to file File name is equal to readMe.md     data is equal to answers
        writeToFile("README.md", generateMarkdown(answers))
    })

}

// function call to initialize program
init();
