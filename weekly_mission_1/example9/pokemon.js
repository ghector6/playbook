class Pokemon {
  constructor(name) {
    this.name = name
  }
  sayHello (message) {
    console.log(`[Mi Pokemon: ${this.name}] te: ${message}`)
  }
  sayMessage (message) {
    console.log(`[Mi Pokemon: ${this.name}] dice: ${message}`)
  }
}
module.exports = Pokemon