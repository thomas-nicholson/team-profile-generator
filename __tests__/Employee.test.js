const Employee = require('../lib/Employee');

test('Can instantiate Employee instance', () => {

    const newEmployee = new Employee();

    expect(newEmployee).toBeInstanceOf(Employee);
});

test('Can set name via constructor arguments', () => {
    let name = "John"
    const newEmployee = new Employee(name);


    expect(newEmployee.name).toBe(name);
});

test('Can set id via constructor argument', () => {

    let name = "John";
    let id = 123;
    const newEmployee = new Employee(name, id);

    expect(newEmployee.id).toBe(id);
});

test('Can set email via constructor argument', () => {

    let name = "John";
    let id = 123;
    let email = "abc@def.com"
    const newEmployee = new Employee(name, id, email);

    expect(newEmployee.email).toBe(email);
});

test('Can get name via getName()', () => {

    let name = "John";
    let id = 123;
    let email = "abc@def.com"
    const newEmployee = new Employee(name, id, email);

    expect(newEmployee.getName()).toEqual(name);
});

test('Can get id via getId()', () => {

    let name = "John";
    let id = 123;
    let email = "abc@def.com"
    const newEmployee = new Employee(name, id, email);

    expect(newEmployee.getId()).toEqual(id);
});

test('Can get email via getEmail()', () => {

    let name = "John";
    let id = 123;
    let email = "abc@def.com"
    const newEmployee = new Employee(name, id, email);

    expect(newEmployee.getEmail()).toEqual(email);
});

test('getRole() should return "Employee"', () => {
    let expectedResult = "Employee";
    const newEmployee = new Employee()
    expect(newEmployee.getRole()).toEqual(expectedResult);
});