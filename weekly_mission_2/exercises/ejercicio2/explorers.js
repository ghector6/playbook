const explorers = [
    {
      name: " Satriani",
      exercises_completed: 10,
      rate: 99,
      city: "CDMX",
      stack: [
        "js",
        "c#"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: true,
          exercisesFinished: true
        }
      }
    },
    {
      name: "Vai",
      exercises_completed: 9,
      city: "Veracruz",
      rate: 50,
      stack: [
        "js"
      ],
      missions: {
        onboarding: {
          isFinished: false,
          exercisesFinished: false
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    },
    {
      name: "Petrucci",
      exercises_completed: 3,
      city: "Sonora",
      rate: 100,
      stack: [
        "elixir"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
      
      
    }
   ]
  //  //Imprime el nombre (propiedad name) de cada explorer en la lista, usa FOR EACH
   explorers.forEach(name => console.log(name.name)) //Imprimiendo nombre de explorers con forEach
  //  //Imprime el stack de cada explorer, usa FOR EACH
   explorers.forEach((stack) => console.log(stack.stack))//Imprimiendo stack   
  //  //Crea una nueva lista con las listas de stacks de cada explorer, usa MAP
   explorers.map((stacks ) => console.log(stacks.stack)) //Crea una nueva lista con las listas de stacks de cada explorer, usa MAP




