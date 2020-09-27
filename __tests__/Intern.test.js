const Intern = require('../lib/Intern');

test('get school when constructed', () =>{
    const intern = new Intern('dale', 1121, 'm@m', 'VGHS');

    expect(intern.getSchool()).toEqual(expect.any(String))
});

test('Returns intern for getRole', ()=>{
    const intern = new Intern('dale', 1121, 'm@m', 'VGHS');

    expect(intern.getSchool()).toBe('VGHS')
})