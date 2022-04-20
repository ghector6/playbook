const UserService = require('./../../app/services/UserService')

describe("Test for User Service ", () => {

    test("Creating a a new user using the UserService method", () => {
        const user = UserService.create(1, "ghector6", "Hector",)
        expect(user.username).toBe("ghector6")
        expect(user.name).toBe("Hector")
        expect(user.id).toBe(1)
        expect(user.bio).not.toBeUndefined()

    })
})