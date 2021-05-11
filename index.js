const inquirer = require('inquirer')
const fs = require('fs')
const Manager = require('./manager')
const Engineer = require('./engineer')
const Intern = require('./intern')
const teamMembers = []

function initApp() {
	htmlTemplate()
	newMember()
}
	

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
		inquirer
			.prompt([
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
				newMember = new Manager(name, id, email, rolePrompt)
			} else if (role === 'Engineer') {
				newMember = new Engineer(name, id, email, rolePrompt)
			} else {
				newMember = new Intern(name, id, email, rolePrompt)
			}
			teamMembers.push(newMember)
			cardTemplates(newMember)
			.then(function() {
				if (addMore === 'yes') {
					newMember()
				} else {
					endHtml()
				}
			})

		}
		)
	})
}

function htmlTemplate() {
	const html = `<!DOCTYPE html>
	<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
		<title>Team Profile Generator</title>
	</head>
	<body>
		<header class='jumbotron jumbotron-fluid bg-danger text-light text-center'>
			<h1>Team Profile</h1>
	
		</header>
		<div class="container">
			<div class="row">`
	fs.writeFile('teamprofile.html', html, 'utf8', (err) =>
	err ? console.log(err) : console.log('Success!')
	)}


function cardTemplates(member) {
	return new Promise(function(resolve, reject) {
		const name = member.getName()
		const id = member.getId()
		const email = member.getEmail()
		const role = member.getRole()
		let cardData = ''
		if (role === 'Manager') {
			const offNum = member.getOffNum()
			cardData = `<div class="col-4">
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
			cardData = `<div class="col-4">
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
			cardData = ` <div class="col-4">
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
		fs.appendFile('teamprofile.html', cardData, 'utf8', function (err) {
            if (err) {
                return reject(err);
            };
            return resolve()
		})
	})
}		
function endHtml() {
	const endHtml = `</div>
    </div>
</body>
</html>`
fs.appendFile('teamprofile.html', endHtml, 'utf8', (err) =>
		err ? console.log(err) : console.log('Finish')
		)
}



initApp()