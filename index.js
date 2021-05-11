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
		name: 'id',
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
				newMember = new Manager
			} else if (role === 'Engineer') {
				newMember = new Engineer
			} else {
				newMember = new Intern
			}

		}
		)
	})
}

function htmlTemplate(member) {
	return new Promise(function(resolve, reject) {
		const name = member.getName()
		const id = member.getId()
		const email = member.getEmail()
		const role = member.getRole()
		let data = ''
		if (role === 'Manager') {
			const offNum = member.getOffNum()
			data = `<div class="col-4">
			<div class="card">
				<h class="card-header bg-primary text-light"><br />${name}<br />Manager</h5>
				<ul class="list-group text-dark">
					<li class="list-group-item">ID-NUM: ${id} </li>
					<li class="list-group-item">Email: ${email} </li>
					<li class="list-group-item">Office Number: ${offNum} </li>
				</ul>
			</div>
		</div>`
		} else if (role === 'Engineer') {
			const github = member.getGithub()
			data = `<div class="col-4">
                <div class="card">
                    <h class="card-header bg-primary text-light"><br />${name}<br />Engineer</h5>
                    <ul class="list-group text-dark">
                        <li class="list-group-item">ID-NUM: ${id} </li>
                        <li class="list-group-item">Email: ${email} </li>
                        <li class="list-group-item">GitHub: ${github} </li>
                    </ul>
                </div>
            </div>`
		} else {
			const school = member.getSchool()
			data = ` <div class="col-4">
			<div class="card">
				<h class="card-header bg-primary text-light"><br />${name}<br />Intern</h5>
				<ul class="list-group text-dark">
					<li class="list-group-item">ID-NUM: ${id} </li>
					<li class="list-group-item">Email: ${email} </li>
					<li class="list-group-item">School: ${school} </li>
				</ul>
			</div>
		</div>`
		}
	}
}