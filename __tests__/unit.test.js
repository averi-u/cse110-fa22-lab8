// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
// const isPhoneNumber = ;

test('isPhoneN_tests', () => {
    expect(functions.isPhoneNumber(8577574)).toBe(false);
});

test('isPhoneN_tests', () => {
    expect(functions.isPhoneNumber(87574)).toBe(false);
});

test('isEmail_tests', () => {
    expect(functions.isEmail(87574)).toBe(false);
});

test('isEmail_tests', () => {
    expect(functions.isEmail(8237574)).toBe(false);
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
