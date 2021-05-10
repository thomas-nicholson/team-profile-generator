const inquirer = require('inquirer');

const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');

const teamArray = [];

function addEngineer() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: "What is the engineers's name?",
                name: 'engineerName',
            },
            {
                type: 'input',
                message: "What is the engineer's employee ID?",
                name: 'engineerID',
            },
            {
                type: 'input',
                message: "What is the engineer's email address?",
                name: 'engineerEmail',
            },
            {
                type: 'input',
                message: "What is the engineer's github username?",
                name: 'engineerGithub',
            },
        ])
        .then((answers) => {
            let {engineerName, engineerID, engineerEmail, engineerGithub} = answers;
            let engineer = new Engineer(engineerName, engineerID, engineerEmail, engineerGithub);
            teamArray.push(engineer);
            branch();

        })
        .catch(error => {
            console.log(error);   
        });
}

function addIntern() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: "What is the intern's name?",
                name: 'internName',
            },
            {
                type: 'input',
                message: "What is the intern's employee ID?",
                name: 'internID',
            },
            {
                type: 'input',
                message: "What is the intern's email address?",
                name: 'internEmail',
            },
            {
                type: 'input',
                message: "What school is the intern from?",
                name: 'internSchool',
            },
        ])
        .then((answers) => {
            let {internName, internID, internEmail, internSchool} = answers;
            let intern = new Intern(internName, internID, internEmail, internSchool);
            teamArray.push(intern);
            branch();

        })
        .catch(error => {
            console.log(error);   
        });
}

function finish() {
    console.log(teamArray);
}

function branch() {
    inquirer
        .prompt([
            {
                type: 'list',
                message: 'Would you like to add an engineer or an intern to your team? or finish building your team?',
                choices: [
                    "Add an Engineer",
                    "Add an Intern",
                    "Finish",
                ],
                name: 'choice',
            },
        ])
        .then((answers) => {
            if (answers.choice === "Add an Engineer") {
                addEngineer();
            } else if (answers.choice === "Add an Intern") {
                addIntern();
            } else {
                finish();
            }
        })
        .catch(error => {
            console.log(error);   
        });
}

function init() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: "What is the team manager's name?",
                name: 'managerName',
            },
            {
                type: 'input',
                message: "What is the team manager's employee ID?",
                name: 'managerID',
            },
            {
                type: 'input',
                message: "What is the team manager's email address?",
                name: 'managerEmail',
            },
            {
                type: 'input',
                message: "What is the team manager's office number?",
                name: 'managerOfficeNumber',
            },
        ])
        .then((answers) => {
            let {managerName, managerID, managerEmail, managerOfficeNumber} = answers;
            let manager = new Manager(managerName, managerID, managerEmail, managerOfficeNumber);
            teamArray.push(manager);
            branch();

        })
        .catch(error => {
            console.log(error);   
        });
}

init();