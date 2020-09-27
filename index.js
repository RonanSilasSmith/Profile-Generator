const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
//So I included these because I thought I would need them, and I think I can understand why one might use classes for this type of application, but I ended up not needing it when writing.

const {generateCardInfo, generateHtml, writeFile}= require('./lib/cardGen');
const inquirer = require('inquirer');

employeeData = [];

const promptData =(employeeData) => {return inquirer.prompt([
    {
    type: 'input',
    message: 'What is the employee\'s name?',
    name: 'name',
    },
    {
        type: 'input',
        message: 'what is the employees email?',
        name: 'email',
        validate: emailInput =>{
            emailInput = emailInput.split("@");
            if (emailInput[0] && emailInput[1]){
                return true;
            }else{
                console.log('please enter a valid email')
                return false;
            }
        }
    },
    {
        type: 'input',
        message: "what is their employee ID?",
        name: 'ID',
        validate: Id => {
            Id = parseInt(Id);
            if(Number.isInteger(Id)){
                return true;
            }else{
                console.log('Input a number');
                return false;
            }
            
        }
    },
    {
        type: 'list',
        message: 'What is the employees role?',
        name: 'role',
        choices: ['Manager', 'Intern', 'Engineer']
    },
    {
        type: 'input',
        message: "what is their Office #?",
        name: 'extra',
        when: ({role})=> (role === 'Manager')
    },
    {
        type: 'input',
        message: "what is their school?",
        name: 'extra',
        when: ({role})=> (role === 'Intern')
    },
    {
        type: 'input',
        message: "what is their github username?",
        name: 'extra',
        when: ({role})=> (role === 'Engineer')
    },
    {
        type: 'confirm',
        name: 'confirmAddUser',
        message: 'Would you like to enter another Employee?',
        default: false
    }
])
.then(data =>{
    employeeData.push(data);
    if(data.confirmAddUser){
        return promptData(employeeData);
    }else{
        return employeeData;
    }
})
}

promptData(employeeData)
.then(data => {
    console.log(data);
    let cards = "";
    for(i=0; i<data.length; i++){
        cards += generateCardInfo(data[i].name, data[i].role, data[i].ID, data[i].email, data[i].extra);
    }
    return cards;
}).then(cards => {
    let html = generateHtml(cards);
    return html;
}).then(html =>{
    writeFile(html);
});