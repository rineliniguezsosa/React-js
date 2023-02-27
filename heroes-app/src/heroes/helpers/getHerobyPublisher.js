import { heroes } from "../data/heroes";

export const getHeroByPublisher = (publisher) =>{
    const mypublishers = ['DC Comics','Marvel Comics']

    if(!mypublishers.includes(publisher)){
        throw new Error(`No es un ${publisher} valido,tal vez quisiste escribir DC Comics ó Marvel Comics`)
    }

    return heroes.filter(herobypublisher => herobypublisher.publisher === publisher)
}