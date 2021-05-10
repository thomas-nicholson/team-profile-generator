const inquirer = require('inquirer');
const fs = require('fs');

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

function convertTeamtoHTML() {
    let html=``;
    for (i = 0; i < teamArray.length; i++) {

        if (teamArray[i].getRole() === "Manager") {
            html += `
    <div class="col mb-4">
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">${teamArray[i].getName()}</h5>
                <p class="card-text">${teamArray[i].getRole()}</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${teamArray[i].getId()}</li>
                <li class="list-group-item">Email: <a target="_blank" href="mailto:${teamArray[i].getEmail()}" class="card-link">${teamArray[i].getEmail()}</a></li>
                <li class="list-group-item">Office Number: ${teamArray[i].getOffice()}</li>
            </ul>
        </div>
    </div>`
        } else if (teamArray[i].getRole() === "Engineer") {
            html += `
    <div class="col mb-4">
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">${teamArray[i].getName()}</h5>
                <p class="card-text">${teamArray[i].getRole()}</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${teamArray[i].getId()}</li>
                <li class="list-group-item">Email: <a target="_blank" href="mailto:${teamArray[i].getEmail()}" class="card-link">${teamArray[i].getEmail()}</a></li>
                <li class="list-group-item">Github: <a target="_blank" href="https://www.github.com/${teamArray[i].getGithub()}" class="card-link">${teamArray[i].getGithub()}</a></li>
            </ul>
        </div>
    </div>`
        } else {
            html += `
    <div class="col mb-4">
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">${teamArray[i].getName()}</h5>
                <p class="card-text">${teamArray[i].getRole()}</p>
            </div>
            <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${teamArray[i].getId()}</li>
            <li class="list-group-item">Email: <a target="_blank" href="mailto:${teamArray[i].getEmail()}" class="card-link">${teamArray[i].getEmail()}</a></li>
            <li class="list-group-item">School: ${teamArray[i].getSchool()}</li>
            </ul>
        </div>
    </div>`
        }
    }
    return html.trim();
}

function generateHTML() {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
</head>
<body>
    <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <h1 class="display-4 text-center">My Team</h1>
        </div>
    </div>
    <div class="container text-center">
        <div class="row row-cols-1 row-cols-md-3">
            ${convertTeamtoHTML()}
        </div>
    </div>
    
</body>
</html>
    `;
}

function finish() {    
    fs.writeFile('dist/team.html', generateHTML(), () => {});
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