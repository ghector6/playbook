class ExplorerServices {

    static filterByMission(explorers, mission) {

        const explorersInNode = explorers.filter((explorer) => explorer.mission == "node");
        return explorersInNode

    }

    static getAmountOfExplorersByMission(explorers, mission) {

        const explorersInNode = explorers.filter((explorer) => explorer.mission === "node")
        return explorersInNode.length

    }

    static getExplorersUserNameByMission(explorers, mission) {

        const explorersInNodeToGetUsernames = explorers.filter((explorer) => explorer.mission == "node");
        const usernamesInNode = explorersInNodeToGetUsernames.map((explorer) => explorer.githubUsername);
        return usernamesInNode

    }



}

module.exports = ExplorerServices