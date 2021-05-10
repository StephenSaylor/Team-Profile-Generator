const inquirer = require('inquirer')
const fs = require('fs')
const { mainModule } = require('node:process')

function newMember() {
	inquirer
		.prompt([
{
		type: 'input',
		message: 'Please enter member name',
		name: 'name'
},
{
		type: 'input',
		message: 'Please enter member id number',
		name: 'id-num',
},
{
		type: 'input',
		message: 'Please enter member email',
		name: 'email',
},
{
		type: 'list',
		message: 'Please select team role',
		name: 'role',
		choices: [
		'Manager',
		'Engineer',
		'Intern',
	]
}
])
	.then(function({name, role, id, email}) {
		let rolePrompt = ''
		if (role === 'Engineer') {
			rolePrompt === 'member github'
		} else if (role === 'Manager') {
			rolePrompt === 'office number'
		} else {
			rolePrompt === 'school'
		}
		inquirer.prompt([
			{
				type: 'input',
				message: 'Please enter member github',
				name: 'github',
			},
	// 		}])
	// 	} else if (role === 'Intern') {
	// 		inquirer.prompt([
	// 			{
	// 				type: 'input',
	// 				message: 'Please enter school',
	// 				name: 'school',
	// 		}
	// 	} else if (role === 'Manager') {
	// 		inquirer.prompt([
	// 			{	
	// 				type: 'input',
	// 				message: 'Please enter office number',
	// 				name: 'office',
	// 		},


	// }
