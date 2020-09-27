const Employee = require('../lib/Employee');

test('creates a new employee object', () => {
    const employee = new Employee('me', 1121, 'me@gmail')

    expect(employee.name).toBe('me');
    expect(employee.id).toEqual(1121);
    expect(employee.email).toEqual(expect.any(String))
})