const Engineer = require('../lib/Engineer');

test('Gets engineer from getrole', ()=>{
    const eng = new Engineer('Dale', 1212, 'email@email', 'RonanSilasSmith');
    expect(eng.getRole()).toBe('Engineer');
})

test('get github', () => {
    const eng = new Engineer('Dale', 1212, 'email@email', 'RonanSilasSmith');
    expect(eng.gitHub).toEqual(expect.any(String));
})