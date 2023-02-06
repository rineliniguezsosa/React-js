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
            resolve(myhero)
        }, 2000);
    })
}

getheroebyid(4)