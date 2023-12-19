const inquirer = require('inquirer');

const greetingName = () =>{
    const testInquirer = inquirer.prompt([
        {
            name: 'your name',
            message: 'What is your name?'
        },
        {
            name: 'pair name',
            message: 'What is your pairs name?'
        },
      ])
      .then(answers => {
        console.log(`Hello ${answers['your name']}!`);
        console.log(`Hello ${answers['pair name']}!`);
      });

      return testInquirer;
}

greetingName()