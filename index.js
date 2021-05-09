const inquirer = require('inquirer')
const fs = require('fs')

inquirer.prompt([{
	type: 'input',
	message: 'Please enter name',
	name: 'name'
},
{
	type: 'input',
	message: '',
	name: ''
}

])