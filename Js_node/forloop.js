// let count = 5 ; 
// let total = 0;

// for (let  i = 0;  i <count ; i++) {
//     total = i
// }

// console.log('result = ', total)

let arrEmployee = [
    {"name" : "me", "lastname" : "you"},
    {"name" : "Hello", "lastname" : "World"},
    {"name" : "HI", "lastname" : "Earth"},
]

arrEmployee.forEach(x => {
    console.log(x.name + " " + x.lastname)
})