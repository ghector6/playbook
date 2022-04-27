class ExplorerServices {

    static filterByMission(explorers, mission){

        const explorersInNode = explorers.filter((explorer) => explorer.mission == "node");
        return explorersInNode

    }

    static getAmountOfExplorersByMission(explorers, mission){

        const explorersInNode = explorers.filter((explorer) => explorer.mission === "node")
        return explorersInNode.length

    }

}

module.exports = ExplorerServices