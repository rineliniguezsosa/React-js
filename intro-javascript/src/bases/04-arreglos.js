//const arreglo1:number[] = [1,2,3,4]
const arreglo1 = [1,2,3,4]

let arreglo2 = [...arreglo1,5]

let arreglo3 = arreglo2.map(i => i.toString())
console.log(arreglo3)