const Intern = require('../lib/Intern');

// Can set school via constructor
test('Can set school via constructor', () => {
    let name = "John";
    let id = 123;
    let email = "abc@def.com";
    let school = "Generic High School";
    const newIntern = new Intern(name, id, email, school);

    expect(newIntern.school).toEqual(school);
});
// getRole() should return "intern"
test('getRole() should return "Intern', () => {
    let expectedResult = "Intern";
    const newIntern = new Intern();
    expect(newIntern.getRole()).toEqual(expectedResult);
});
// Can get school via getSchool();
test('Can get school via getSchool()', () => {
    let name = "John";
    let id = 123;
    let email = "abc@def.com";
    let school = "Generic High School";
    const newIntern = new Intern(name, id, email, school);

    expect(newIntern.getSchool()).toEqual(school);
});