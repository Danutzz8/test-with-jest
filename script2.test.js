const fetch = require('node-fetch');
const swapi = require('./script2');


it('calls swapi to get people', (done) => {
    expect.assertions(1)
    swapi.getPeople(fetch).then(data => {
        expect(data.count).toEqual(82)
        done()
    });
});

// OR =====================================

it('calls swapi to get people', () => {
    expect.assertions(2) // alwais use assertions 
    return swapi.getPeople(fetch).then(data => {
        expect(data.count).toEqual(82)
        expect(data.results.length).toBeGreaterThan(5)
    });
});

it('calls swapi to get people with a promise', () => {
    swapi.getPeoplePromise(fetch).then(data => {
        expect(data.count).toEqual(82)
    })
})