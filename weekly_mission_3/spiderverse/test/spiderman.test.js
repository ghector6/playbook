const Spiderman = require('./../app/spiderman')

describe("Unit Tests for Spiderman class", () => {
    test('1) Create an spiderman object', () => {
        const andrewGarfield = new Spiderman("Amazing Spiderman", 31, "Andrew Garfield", 2, "Sony")
        expect(andrewGarfield.name) .toBe("Amazing Spiderman")
        expect(andrewGarfield.age) .toBe(31)
        expect(andrewGarfield.actor) .toBe("Andrew Garfield")
        expect(andrewGarfield.movies) .toBe(2)
        expect(andrewGarfield.studio) .toBe("Sony")

    })
    
})

test('2) Using the getInfo() method', () => {
    const tomHolland = new Spiderman("Marvel Spiderman ", 25, "Tom Holland", 5, "Marvel")
    expect(tomHolland.getInfo()) .toBe("Hey I'm Tom Holland from Marvel studio")
})