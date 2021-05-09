const inquirer = require('inquirer')
const fs = require('fs')
const { mainModule } = require('node:process')

inquirer
	.prompt([{
	
		type: 'input',
		message: 'Please enter member name',
		name: 'name'
},
{
		type: 'input',
		message: 'Please enter member id number',
		name: 'id-num'
},
{
		type: 'input',
		message: 'Please enter member email',
		name: 'email'
},
{
		type: 'input',
		message: 'Please enter member github',
		name: 'github'
}
])