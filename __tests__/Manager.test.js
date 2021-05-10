const Manager = require('../lib/Manager');

test('Can set office number via constructor', () => {
    let name = "John";
    let id = 123;
    let email = "abc@def.com";
    let officeNumber = 99;
    const newManager = new Manager(name, id, email, officeNumber);

    expect(newManager.officeNumber).toEqual(officeNumber);
});

test('getRole() should return "Manager"', () => {
    let expectedResult = "Manager";
    const newManager = new Manager();
    expect(newManager.getRole()).toEqual(expectedResult);
});

test('Can get office number via getOffice()', () => {
    let name = "John";
    let id = 123;
    let email = "abc@def.com";
    let officeNumber = 99;
    const newManager = new Manager(name, id, email, officeNumber);

    expect(newManager.getOffice()).toEqual(officeNumber);
});

