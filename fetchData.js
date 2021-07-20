
const fetchData = () => new Promise((resolve, reject) => {
    setTimeout(resolve('My data2'), 5000);
});

module.exports = fetchData;