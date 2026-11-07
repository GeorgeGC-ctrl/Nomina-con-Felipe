const personas = [
  {
    nombre: "Alice",
    edad: 30,
    ocupacion: "Engineer"
  },
]

function validarPersona(persona) {
    const errores = [];
  if (typeof persona.nombre !== 'string' || persona.nombre.trim() === '') {
     
     errores.push('Nombre invalido');
  }
  if ( !Number(persona.edad) || persona.edad <= 18) {
    
    errores.push('Edad invalida');
  }  
  return errores;
}

function agregarPersona(persona) {
  const errores = validarPersona(persona);
  if (errores.length === 0) {
    personas.push(persona);
    console.log('Persona agregada correctamente');
  }
  return errores;
}

function obtenerPersonas() {
  return personas;
}
console.log(agregarPersona({ nombre: "Charlie", edad: 51, ocupacion: "Designer" })); // Persona agregada correctamente
console.log(obtenerPersonas()); // Muestra la lista de personas
console.log("haciendo pruebas con git")