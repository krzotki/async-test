
const sumArray = require('./sumArray');

const lengthAfterPop = (arr) => {
    arr.pop();
    return arr.length;
};

let myArr = [0, 1, 2, 3, 4];

beforeEach(() => {
    myArr = [0, 1, 2, 3, 4];
});

test('length should be 4 after deleting', () => {
    expect(lengthAfterPop(myArr)).toBeLessThanOrEqual(4);
});

test('sum of [0, 1, 2, 3, 4] is equal to 10', () => {
    expect(sumArray(myArr)).toBe(10);
});
