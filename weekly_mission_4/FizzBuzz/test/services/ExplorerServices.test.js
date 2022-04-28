const ExplorerServices = require("./../../lib/services/ExplorerServices")

describe("Test para ExplorerService", () => {
    test("Requerimiento 1, Lista de Explorers que estan en mission de node", () => {
        const explorers = [{ mission: "node"}]
        const explorersInNode = ExplorerServices.filterByMission(explorers, "node")
        expect(explorersInNode.length).toBe(1)

    })
})