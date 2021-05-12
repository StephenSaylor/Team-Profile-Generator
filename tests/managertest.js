test('getRole() should return \'Manager\'', () => {
	const testRole = 'Manager'
	const test = new Manager('Mike', 1, 'mike@mike.com', 100)
	expect(test.getRole()).toBe(testRole)
  })