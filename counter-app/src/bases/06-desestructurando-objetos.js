//DESESTRUCTURANDO OBJETOS
// interface Heroe {
//     nombre:string,
//     edad:number,
//     clave:string,
// }

// const heroe:Heroe = {
//     nombre:'tony stark',
//     edad:35,
//     clave:'iron man'
// }
const heroe = {
    nombre:'tony stark',
    edad:35,
    clave:'iron man'
}

//const {nombre,edad,clave} = heroe;
//console.log(nombre)

// const retornapersona = ({nombre}):void =>{
//     console.log(nombre)
// }
const retornapersona = ({nombre}) =>{
    console.log(nombre)
}

console.log(retornapersona(heroe))