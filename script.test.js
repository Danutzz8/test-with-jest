const googleSearch = require('./script');

dbMock = [
    'dog.com',
    'horse.com',
    'disney.com',
    'music.com',
    'dogland.com'
]

it('this is a silly test', () => {
    expect('hello').toBe('hello')
    googleSearch('dog', dbMock);
});

it('searching google', () => {
    expect(googleSearch('testtest', dbMock)).toEqual(([]));
    expect(googleSearch('dog', dbMock)).toEqual((['dog.com', 'dogland.com']));

})