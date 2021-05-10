const Engineer = require('../lib/Engineer');

test('Can set Github account via constructor', () => {
    let name = "John";
    let id = 123;
    let email = "abc@def.com";
    let github = "john-smith";
    const newEngineer = new Engineer(name, id, email, github);
    expect(newEngineer.github).toEqual(github);

});

test('getRole() should return "Engineer', () => {
    let expectedResult = "Engineer";
    const newEngineer = new Engineer();

    expect(newEngineer.getRole()).toEqual(expectedResult);
});

test('Can get Github username via getGithub()', () => {
    let name = "John";
    let id = 123;
    let email = "abc@def.com";
    let github = "john-smith";
    const newEngineer = new Engineer(name, id, email, github);
    expect(newEngineer.getGithub()).toEqual(github);
});

