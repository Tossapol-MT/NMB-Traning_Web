// No1
// let calarea = (w ,h ) => {
//     let area = w * h

//     return area
// }
// console.log (calarea(10,20))

//No2
// function calcicle(r) {
//     let cicle_all = Math.PI*r*r
//     let cicle_line = 2*Math.PI*r
    
//     let recive = {"พื้นที่" : cicle_all, "เส้นรอบวง" : cicle_line }
//     return recive
// }
// console.log(calcicle(7))

//No3
// function caltemp(f) {
//     let fatocel = (f-32)*5/9
//     return fatocel
// }
// console.log(caltemp(50))

//No4
let findBIM = (w,h) => {
    let bmi = w/((h/100)**2)
    return bmi
}
console.log(findBIM(60,170))