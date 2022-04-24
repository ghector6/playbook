const UserView = require('./../../app/views/userview')

describe("Test for UserView", () => {

    test("Return an error object when trying to create a new user with null payload", () => {
        const payload = null
        const result = UserView.createUser(payload)
        expect(result.error).toMatch(/payload no existe/)
    })
    test("Return an erro object when trying to create a new user with a payload with invalid properties ", () => {
        const payload = {username: null, name: 12, id: "id"}
        const result = UserView.createUser(payload)
        expect(result.error).toMatch(/Error, las propiedades necesitan tener un valor valido/)
    })
})