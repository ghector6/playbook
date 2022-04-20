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
    test('add getters', () => {
        const user = new User(1,"ghector6", "Hector", "Bio")
        expect(user.getUsername).toBe("ghector6")
        expect(user.getBio).toBe("Bio")
        expect(user.getDateCreated).not.toBeUndefined()
        expect(user.getLastUpdated).not.toBeUndefined()
    })
    test('Adding setters',() =>{
        const user = new User(1,"ghector6", "Hector", "Bio")
        user.setUsername = "ghectormus"
        expect(user.username).toBe("ghectormus")

        user.setBio = "New bio"
        expect(user.bio).toBe("New bio")
        
        user.setId = 3
        expect(user.id).toBe(3)
    })

})

