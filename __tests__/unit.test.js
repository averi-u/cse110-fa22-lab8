// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
// const isPhoneNumber = ;

test('isPhoneN_tests', () => {
    expect(functions.isPhoneNumber('858-260-01921')).toBe(true);
});

test('isPhoneN_tests', () => {
    expect(functions.isEmail('87574')).toBe(false);
});

test('isPhoneN_tests', () => {
    expect(functions.isPhoneNumber('7145102810')).toBe(false);
});


test('isPhoneN_tests', () => {
    expect(functions.isPhoneNumber('714-510-2810')).toBe(true);
});


test('isEmail', () => {
    expect(functions.isEmail('@gmail.com')).toBe(false);
});

test('isEmail', () => {
    expect(functions.isEmail('wowwee@gmail.com')).toBe(true);
});

test('isEmail', () => {
    expect(functions.isEmail('test.com')).toBe(false);
});

test('isEmail', () => {
    expect(functions.isEmail('cse110@yahoo.com')).toBe(true);
});

test('isHexColor_tests', () => {
    expect(functions.isHexColor(823345347574)).toBe(false);
});

test('isHexColor_tests', () => {
    expect(functions.isHexColor('FF0000')).toBe(true);
});

test('isHexColor_tests', () => {
    expect(functions.isHexColor('FF0002')).toBe(true);
});

test('isHexColor_tests', () => {
    expect(functions.isHexColor('FFsdfs0003')).toBe(false);
});



test('isStrongPassword', () => {
    expect(functions.isStrongPassword('A1B2C34D')).toBe(true);
});

test('isStrongPassword', () => {
    expect(functions.isStrongPassword('A')).toBe(false);
});

test('isStrongPassword', () => {
    expect(functions.isStrongPassword('C_S_E_ONETEN')).toBe(true);
});

test('isStrongPassword', () => {
    expect(functions.isStrongPassword('1456')).toBe(false);
});


test('isDate', () => {
    expect(functions.isDate('12/21/2000')).toBe(true);
});

test('isDate', () => {
    expect(functions.isDate('1/1/1')).toBe(false);
});

test('isDate', () => {
    expect(functions.isDate('1/1/2001')).toBe(true);
});

test('isDate', () => {
    expect(functions.isDate('133/32/2000')).toBe(false);
});