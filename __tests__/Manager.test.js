const Manager = require('../lib/Manager');

test('Gets manager from getrole', ()=>{
    const manager = new Manager('Dale', 1212, 'email@email', 12121);
    expect(manager.getRole()).toBe('Manager');
})

test('get office number', () => {
    const manager = new Manager('Dale', 1212, 'email@email', 12121);
    expect(manager.officeNum).toEqual(expect.any(Number));
})