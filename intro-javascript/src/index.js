import { findhero } from "./bases/08-import-export";

const promesa = new Promise((resolve,reject)=>{
    setTimeout(() => {  
        const myhero = findhero(2);
        resolve(myhero)
    },2000);
})