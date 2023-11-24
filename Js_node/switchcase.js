let grade = "B";
let detailGrade;
switch (grade) {
  case "A":
    detailGrade = "ดีเยี่ยม";
    break;
  case "B":
    detailGrade = "ดี";
    break;
  case "C":
    detailGrade = "พอใช้";
    break;
  case "D":
    detailGrade = "ปรับปรุง";
    break;
  default:
    detailGrade = "ตก";
    break;
}
console.log("Your grade is", grade, detailGrade);
