test('getRole() should return \'Intern\'', () => {
	const testRole = 'Intern'
	const test = new Manager('Igor', 1, 'igore@igor.com', 'IgorSchool')
	expect(test.getRole()).toBe(testRole)
  })