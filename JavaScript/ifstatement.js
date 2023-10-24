let score = 50
let age =21
let gender = 'female'

// if(age < 20){
//     console.log('You are Young')
// }
// if(gender == 'female'){
//     console.log('Women')
// }
// if((age < 20) && (gender == 'female')){
//     console.log("You are Younger")
// }

// if((gender == 'female') && (age <20)){
//     console.log('Younger women')
// } else {
//     console.log('Not Young Women')
// }

if(score>=80){
    console.log("grade A")
} else if(score >= 70){
    console.log("grade B")
} else if (score >= 60){
    console.log("grade C")
} else if (score >= 50){
    console.log("grade D")
} else {
    console.log("grade F")
}

let pass
if (score >= 50 ){
    pass = "Pass!"
}else {
    pass = "Failed!!!!!"
}

console.log("Result : ", pass)