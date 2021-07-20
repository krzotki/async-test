
const fetchData = require('./fetchData');

test('Fetched data should contain "My data"', () => {
    return fetchData().then(result => expect(result).toContain('My data'));
})