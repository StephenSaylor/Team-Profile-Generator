const inquirer = require('inquirer')
const fs = require('fs')
const Manager = require('./manager')
const Engineer = require('./engineer')
const Intern = require('./intern')
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
		if (role === 'Manager') {
			rolePrompt === 'office number'
		} else if (role === 'Engineer') {
			rolePrompt === 'github'
		} else {
			rolePrompt === 'school'
		}
		inquirer.prompt([
			{
				type: 'input',
				message: `Please enter member ${rolePrompt}`,
				name: 'github',
			},
			{
				type: 'list',
				message: 'Add more members?',
				name: 'addMore',
				choices: [
					'yes, please',
					'no thanks',
				]
			}
		])
		.then(function({rolePrompt, addMore}) {
			let newMember;
			if (role === 'Manager') {
				newMember = 
			} else if (role === 'Engineer') {
				newMember = 
			} else {
				newMember = 
			}

		}
		)
	})
}