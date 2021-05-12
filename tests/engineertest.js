const Engineer = require('./engineer')

test('getRole() should return \'Engineer\'', () => {
	const testRole = 'Engineer'
	const test = new Engineer('Evan', 1, 'evan@evan.com', )
	expect(test.getRole()).toBe(testRole)
  })