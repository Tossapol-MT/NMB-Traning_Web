// let arr1 = [1, 2, 3, 4, 5]
// let arr2 = [4, 5, 6, 7, 8]

// console.log(arr1)
// console.log(arr2)
// console.log(arr1.concat(arr2))
// console.log([...arr1,...arr2])

// let listStudent = [
//     {name : "A1", lastname : "B1", no: 1},
//     {name : "A2", lastname : "B2", no: 2},
//     {name : "A3", lastname : "B3", no: 3},
// ]

// for (let i = 0; i < listStudent.length; i++) {
//     console.log(listStudent[i].name)
//     console.log(listStudent[i].lastname)
//     console.log(listStudent[i].no)
// }

// listStudent.map((student)=>{
//     console.log(student.name)
//     console.log(student.lastname)
//     console.log(student.no)
// })

let words = (w) => {
    const condition = {
        1 : "Hello",
        2 : "Hi",
        3 : "good bye"
    }
    return condition[w] ?? "I Don't know"
}
console.log(words(1))