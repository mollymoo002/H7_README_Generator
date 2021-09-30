// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README


const inquirer = require('inquirer');
const fs = require('fs');

const questions = [
    // creates each question the user can answer, if validate is in that section, that means the question is required to have an answer
      {
        type: 'input',
        message: 'Please provide the project title',
        name: 'title',
        // checked to make sure the user provided a value for the project title
        validate: (value)=> {if (value) {return true} else {return 'Please enter a project title'}},
      },
      {
        type: 'input',
        message: 'Please provide a brief description of your project',
        name: 'description',
        validate: (value)=> {if (value) {return true} else {return 'Please enter a project description'}},
        default: 'Project Description',
      },
      {
        type: 'input',
        message: 'Please include a table of contents (optional)',
        name: 'table',
      },
      {
        type: 'input',
        message: 'How to install the application (optional)',
        name: 'installation',
      },
      {
        type: 'input',
        message: 'Instructions for using the app',
        validate: (value)=> {if (value) {return true} else {return 'Please enter instructions'}},
        name: 'usage',
      },
      {
        type: 'list',
        message: 'License information (optional)',
        name: 'license',
        choices: ['The MIT License', 'The GPL license', 'Apache license', 'GNU license', 'N/A'],
      },
      {
        type: 'input',
        message: 'Contributors',
        validate: (value)=> {if (value) {return true} else {return 'Please enter contributors'}},
        name: 'contributing',
      },
      {
        type: 'input',
        message: 'Tests for application (optional)',
        name: 'tests',
      },
      {
        type: 'input',
        message: 'Please enter Github username',
        name: 'username',
        validate: (value)=> {if (value) {return true} else {return 'Please enter your username'}},
      },
      {
        type: 'input',
        message: 'Please enter your email address',
        validate: (value)=> {if (value) {return true} else {return 'Please enter your email address'}},
        name: 'email',
      },
];
inquirer.prompt(questions)
// this takes all of the object names to insert them into the template I created below
.then (({
    title,
    description,
    table,
    installation,
    usage,
    license,
    contributing,
    tests,
    username,
    email
}) => {
    // README template
const template = `##$ {title}

## Description
${description}
## Table of Contents
${table}
## Installation
${installation}
## Usage
${usage}
## License
${license}
## Credits
${contributing}
## Tests
${tests}
## Questions
Github: ${username}
Email: ${email}`

    writeToFile(title, template);
}
)
// This function creates a file with the user's file name and removes the spaces in the title and makes it all lower case
// if the readme is not generated, it logs the error message
function writeToFile(fileName, data) {
    fs.writeFile(`./${fileName.toLowerCase().split(' ').join('')}.md`, data, err => {
        if (err) {
            return console.log(err);
        }
        console.log("Your README has been generated");
    });
}


function init() {}


init();
