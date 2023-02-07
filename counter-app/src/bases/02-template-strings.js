const nombre = "rinel";
const apellido = 'iñiguez';

//const nombre:string = 'rinel'; en typescript
export const getsaludo = (nombre) =>{
    return `Hola ${nombre}`
}
//FUNCION EN TYPESCRIPT
// const getsaludo = (nombre:string):string{
//     return `Hola ${nombre}`
// }

console.log(`hey ${getsaludo(nombre)}`)