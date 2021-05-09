const inquirer = require('inquirer')
const fs = require('fs')
const { mainModule } = require('node:process')

inquirer.prompt([{
	type: 'input',
	message: 'Please enter name',
	name: 'name'
},
{
	type: 'input',
	message: 'Please enter id number',
	name: 'id-num'
},
{
	type: 'input',
	message: 'Please enter email',
	name: 'email'
}
])