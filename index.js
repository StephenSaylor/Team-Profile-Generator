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
	message: 'Please enter id',
	name: 'identification'
},
{
	type: 'input',
	message: 'Please enter email',
	name: 'email'
}
])