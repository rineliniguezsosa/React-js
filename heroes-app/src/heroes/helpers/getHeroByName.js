import { heroes } from "../data/heroes"


export const getHeroByName = (name = '') =>{
    name = name.toLocaleLowerCase().trim()

    if(name.length===0){ return []}
}