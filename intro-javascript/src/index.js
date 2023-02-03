
const persona = {
    nombre:'rinel',
    apellido:'iñiguez',
    edad:26,
    adress:{
        cuidad:'mérida',
        zip:'129'
    }
}

const persona2 = {...persona}
persona2.apellido = 'sosa';

console.log(persona2)
console.log(persona);