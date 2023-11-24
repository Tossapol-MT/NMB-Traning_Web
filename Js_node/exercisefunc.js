//no 1
let square = (w, h) => { 
    let area = w * h 
    console.log(area)
}

square(10,20)

//no 2
let cicle = (r) => {
    let circum = (2*Math.PI*r).toFixed(2)
    let cicle = (Math.PI * r * r ).toFixed(2)
    return {circum, cicle}
}

console.log(cicle(7))

//no 3
let temp = (f) => {
    let changetemp = (f - 32)* 5/9
    return console.log(changetemp)
}

temp(50)

//no4

let findBMI = (w, h) => {
    let height = (h/100)**2
    let bmi = (w / height).toFixed(2)
    return console.log(bmi)
}

findBMI(60,170)