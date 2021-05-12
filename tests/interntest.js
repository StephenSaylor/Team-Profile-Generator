const Intern = require('./intern')

test('getRole() should return \'Intern\'', () => {
	const testRole = 'Intern'
	const test = new Intern('Igor', 1, 'igore@igor.com', 'IgorSchool')
	expect(test.getRole()).toBe(testRole)
  })