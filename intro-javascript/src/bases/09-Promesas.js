import { findhero } from "./bases/08-import-export";

const promesa = new Promise((resolve,reject)=>{
    setTimeout(() => {  
        const myhero = findhero(2);
        resolve(myhero)
    },2000);
})

promesa
    .then(dato =>{
        console.log(dato);
    })

const getheroebyid = (id) =>{
    return new Promise((resolve, reject) => { 
        setTimeout(() => {
            
            const myhero = findhero(id);
            myhero ? resolve(myhero) : reject('No existe el id')
            
        }, 2000);
    })
}

getheroebyid(7)
    .then(hero => console.log(hero))
    .catch(error => console.log(error))