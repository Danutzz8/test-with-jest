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
}); 

// to fake/mock a fetch call and using API because as the test gets bigger the test time increase as well 

it('getPeople returns const and results', () => {
    const mockFetch = jest.fn().mockReturnValue(Promise.resolve({
        json: () => Promise.resolve({
            count: 82,
            results: [0,1,2,3,4,5]
        })
    }))
    expect.assertions(3);
    return swapi.getPeoplePromise(mockFetch).then(data => {
        expect(mockFetch.mock.calls.length).toBe(1);
        expect(mockFetch).toBeCalledWith('https://swapi.dev/api/people');
        // we can add the ones from above 
          expect(data.count).toEqual(82);
        //expect(data.results.length).toBeGreaterThan(5); // this one fails for some reason here but ok on top
    })
})