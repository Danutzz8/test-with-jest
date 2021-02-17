const googleSearch = require('./script');

dbMock = [
    'dog.com',
    'horse.com',
    'disney.com',
    'music.com',
    'dogland.com'
]

describe('googleSearch', () => {
    it('this is a silly test', () => {
        expect('hello').toBe('hello')
        googleSearch('dog', dbMock);
    });

    it('searching google', () => {
        expect(googleSearch('testtest', dbMock)).toEqual(([]));
        expect(googleSearch('dog', dbMock)).toEqual((['dog.com', 'dogland.com']));

    });

    it('work with undefined and null input', () => {
        expect(googleSearch(undefined, dbMock)).toEqual(([]));
        expect(googleSearch(null, dbMock)).toEqual(([]));

    });

    it('does not import more than 3 matches', () => {
        expect(googleSearch('.com', dbMock).length).toEqual((3));

    })
})