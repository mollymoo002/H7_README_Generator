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
      {
        type: 'input',
        message: 'Please provide the project title',
        name: 'title',
        // checked to make sure the user provided a value for the project title
        validate: (value)=> {if (value) {return true} else {return 'Please enter a project title'}},
        default: 'Project Title',
      },
      {
        type: 'input',
        message: 'Please provide a brief description of your project',
        name: 'Description',
        validate: (value)=> {if (value) {return true} else {return 'Please enter a project description'}},
        default: 'Project Description',
      },
      {
        type: 'input',
        message: 'Please include a table of contents (optional)',
        name: 'Table',
      },
      {
        type: 'input',
        message: 'How to install the application (optional)',
        name: 'Installation',
      },
      {
        type: 'input',
        message: 'Instructions for using the app',
        validate: (value)=> {if (value) {return true} else {return 'Please enter instructions'}},
        name: 'Usage',
      },
      {
        type: 'list',
        message: 'License information (optional)',
        name: 'License',
      },
      {
        type: 'input',
        message: 'Contributors',
        validate: (value)=> {if (value) {return true} else {return 'Please enter contributors'}},
        name: 'Contributing',
      },
      {
        type: 'input',
        message: 'Tests for application (optional)',
        name: 'tests',
      },
      {
        type: 'input',
        message: 'Please enter Github username',
        name: 'Questions',
        validate: (value)=> {if (value) {return true} else {return 'Please enter your username'}},
        default: 'mollymoo002',
      },
      {
        type: 'input',
        message: 'Please enter your email address',
        validate: (value)=> {if (value) {return true} else {return 'Please enter your email address'}},
        name: 'email',
      },
];
inquirer.prompt(questions)


function writeToFile(fileName, data) {
    fs.writeFile(filename, data, err => {
        if (err) {
            return console.log(err);
        }
        console.log("Your README has been generated");
    });
}


function init() {}


init();