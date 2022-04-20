const User = require('../../app/models/User')
describe("Unit Tests for User class", () =>{
    test('Create an User object', () => {
        const user = new User(1, "ghector6", "Hector", "Bio", "dateCreated", "lastUpdated")
        expect(user.id).toBe(1)
        expect(user.username).toBe("ghector6")
        expect(user.name).toBe("Hector")
        expect(user.bio).toBe("Bio")
        expect(user.dateCreated).not.toBeUndefined()
        expect(user.lastUpdated).not.toBeUndefined()
    })
})

