const UserService = require('./../../app/services/UserService')

describe("Test for User Service ", () => {

    test("Creating a a new user using the UserService method", () => {
        const user = UserService.create(1, "ghector6", "Hector",)
        expect(user.username).toBe("ghector6")
        expect(user.name).toBe("Hector")
        expect(user.id).toBe(1)
        expect(user.bio).not.toBeUndefined()

    })
    test("2. Get all user data in a list", () => {
        const user = UserService.create(1, "ghector6", "Hector")
        const userInfoInList = UserService.getInfo(user)
        expect(userInfoInList[0]).toBe(1)
        expect(userInfoInList[1]).toBe("ghector6")
        expect(userInfoInList[2]).toBe("Hector")
        expect(userInfoInList[3]).toBe("Sin bio")

    })
})