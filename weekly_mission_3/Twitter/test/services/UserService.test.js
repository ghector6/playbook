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

    })//Requerimiento 3: Agregar un nuevo método estático en `UserService` llamado `updateUserUsername`, que reciba un objeto de la clase `User` y un nuevo string, que actualizará el valor de `username`. 

    test("3 Changing username", () => {
        const user = UserService.create(1, "ghector6", "Hector")
        UserService.updateUserUsername(user, "ghectormus")
        expect(user.username).toBe("ghectormus")
    })

    test("4. Given a list give me the list of usernames", () => {
        const user1 = UserService.create(1, "ghector6-1", "Hector")
        const user2 = UserService.create(1, "ghector6-2", "Hector")
        const user3 = UserService.create(1, "ghector6-3", "Hector")
        const usernames = UserService.getAllUsernames([user1, user2, user3])
        expect(usernames).toContain("ghector6-1")
        expect(usernames).toContain("ghector6-2")
        expect(usernames).toContain("ghector6-3")


    })
})