// Ejemplo 4: Métodos en los objetos
class Repository {
    constructor(name, author, language, stars){
     this.name = name
     this.author = author
     this.language = language
     this.stars = stars
    }
  
    getInfo(){ // es una función que ejecutará cualquier objeto instanciado de esta clase
      return `Repository ${this.name} has ${this.stars} stars`
    
    }
    getInfo2(){
        return `Repository ${this.name} was made by ${this.author}`
    }
  }
  console.log("Ejemplo 4: Métodos en los objetos")
  const myRepo = new Repository("LaunchX", "carlogilmar", "js", 100)
  const myRepo2 = new Repository("LaunchX", "HectorG", "Js", "1000")
  console.log(myRepo.getInfo())
  console.log(myRepo2.getInfo2())