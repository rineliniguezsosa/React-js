// interface Persona {
//     nombre:string,
//     apellido:string,
//     edad:number,
//     adress:Adress,
// }

// interface Adress {
//     cuidad:string,
//     zip:string,
// }

// const persona:Persona = {
//     nombre:'rinel',
//     apellido:'iñiguez',
//     edad:26,
//     adress:{
//         cuidad:'mérida',
//         zip:'129'
//     }
// }
const persona = {
    nombre:'rinel',
    apellido:'iñiguez',
    edad:26,
    adress:{
        cuidad:'mérida',
        zip:'129'
    }
}
//const persona2:Persona = {...persona}
const persona2 = {...persona}
persona2.apellido = 'sosa';

console.log(persona2)
console.log(persona);