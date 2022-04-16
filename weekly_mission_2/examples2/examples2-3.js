// Ejemplo 3: Instanciar un objeto con atributos
class Student {
    // El constructor nos permite instanciar un objeto y asignarle atributos, this nos ayuda a realizar esto.
    constructor(name, age, subjects){
      this.name = name
      this.age = age
      this.subjects = subjects
      }
  }
  // Crear un objeto de la clase Student (esto se le llama instanciación)
const carloStudent = new Student("Carlo", 12, ["NodeJs", "Python"])
const hectorStudent = new Student("Hector", 29, ["JavaScript", "NodeJS"])
console.log("Ejemplo 3: Instanciar un objeto con atributos")
console.log(carloStudent)
console.log(hectorStudent)