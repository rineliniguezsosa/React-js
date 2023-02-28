import { heroes } from "../data/heroes"

export const getHeroById = (heroeid) =>{
    return heroes.find(heroe => heroe.id === heroeid)
}