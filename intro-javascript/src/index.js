import { heroes } from './data/heroes'

const findhero = (id) => {
    return heroes.find((heroid) => heroid.id === id)
}

const datos = findhero(5);
console.log(datos)