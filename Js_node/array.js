let arr = [10, 20, 30, 40, 50, 60];

console.log(arr.length);
console.log(arr[arr.length - 1]); //หาตำแหน่งสุดท้าย
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);

let array1 = ["One", "Two", "Three"];
console.log(array1[0]); // result = One

let array2 = ["One", "Two", "Three"];
console.log(array2.length); // result = 3

let arr3 = ["One", "Two", "Three"];
arr3.push("Four");
console.log(arr3); // ["One", "Two", "Three", "Four"]

let arr4 = ["One", "Two", "Three"];
arr4.splice(0, 1);
console.log(arr4); // ['Two', 'Three']

let arr5 = ["One", "Two", "Three", "Four", "Five", "I", "Love", "You"]
arr5.push("Too")
console.log(arr5.length)
console.log(arr5)
arr5.splice(1, 3)
console.log(arr5)

