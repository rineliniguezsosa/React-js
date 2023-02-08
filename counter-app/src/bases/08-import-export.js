import { heroes } from '../data/heroes'

export const findhero = (id) => {
    return heroes.find((heroid) => heroid.id === id)
}

//const datos = findhero(5);
//console.log(datos)

// const findowners = (name:string):Heroe[] =>{
//     return heroes.filter((owner)=> owner.owner === name)
// }
export const findowners = (name) =>{
    return heroes.filter((owner)=> owner.owner === name)
}

//console.log(findowners('DC'))