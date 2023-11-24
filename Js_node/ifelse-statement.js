let score = 100;
if (score >= 80 ) {
  console.log("grade A");
} else if (score >= 70) {
  console.log("grade B");
} else if (score >= 60) {
  console.log("grade C");
} else if (score >= 50) {
  console.log("grade D");
} else if (score < 50) console.log("grade F");
let pass;
if (score >= 50) {
  pass = "pass";
} else {
  pass = "failed";
}
console.log("result: ", pass);
