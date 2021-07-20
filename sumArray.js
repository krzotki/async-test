
const sumArray = (arr) => {
    return arr.reduce((prev, current, index, array) => {
        return prev + current;
    });
};

module.exports = sumArray;