const explorers = [
    {
      name: "Explorer 1",
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
      name: "Explorer 2",
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
      name: "Explorer 3",
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
 
   console.log("Ejercicio 1.2");
   explorers.forEach(nombre => console.log('Nombre Explorer: '+ nombre.name));
   console.log("ejercicio 2.2");
   explorers.forEach(nombre => console.log('Stack: '+ nombre.stack)); 
   console.log("ejercicio 3.2");
   const explorers_stack = explorers.map((sta) => sta.stack);
   console.log(explorers_stack);
   
   console.log("ejercicio 4.2");
   const js = explorers.filter(explorers_list => explorers_list.stack.includes('js'));
   console.log(js);

   console.log("ejercicio 5.2");
   const cdmx = explorers.find(explorer_cdmx => explorer_cdmx.city === 'CDMX');
  console.log("El primer explorer que es de la cdmx es: " + cdmx.name);
  
  console.log("ejercicio 6.2");
  console.log("Suma de exercises_completed: ");
  const suma = explorers.reduce ((acc, explorer_completed) =>  acc + explorer_completed.exercises_completed, 0);
  console.log(suma);
  
  console.log("ejercicio 7.2");
  const yesTrueSome = explorers.some((t)=> t.exercisesFinished || true);
  console.log("Al menos uno de los explorer tiene la propiedad exercisesFinished ?: "  + yesTrueSome);
  
  console.log("ejercicio 8.2");
  const yesTrueEvery = explorers.every((name) => name.isFinished || true);
  console.log("Al menos uno de los explorer tiene la propiedad isFinished?: " + yesTrueEvery);
  
