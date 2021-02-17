const googleDatabase = [
    'cats.coom',
    'souprecipes.com',
    'flowers.com',
    'animals.com',
    'catpictures.com',
    'myfavoritecats.com',
    'catworld'
];

const googleSearch = (searchInput, db) => {
    const matches = db.filter(website => {
        return website.includes(searchInput);
    })
    return matches.length > 3 ? matches.slice(0, 3) : matches
}

//console.log(googleSearch('cat', googleDatabase));

module.exports = googleSearch;