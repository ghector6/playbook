const Reader = require("./../FizzBuzz/lib/utils/Reader")

const ExplorerServices = require("./lib/services/ExplorerServices")



const explorers = Reader.readJsonFile("explorers.json")
//console.log(explorers)

console.log(ExplorerServices.getExplorersUserNameByMission(explorers, "node"))
