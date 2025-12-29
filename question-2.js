const students = [
  { name: "Alice", score: 42 },
  { name: "Bob", score: 55 },
  { name: "Charlie", score: 68 },
  { name: "David", score: 48 },
  { name: "Eve", score: 91 },
];

// เริ่มเขียนโค้ดตรงนี้
// ฟิลเตอร์ กรอง มากกว่า 50
// ใช้ map or push ? 
// รีดูส เพื่อร่วมผลคะแนน 
// แสดงผล "Total score is 235.4" = `Total score is ${ชื่อตัวแปรของ รีดูส}`

let filterScore = students.filter(function (score){
  return score.score > 50;
});
//console.log(filterScore);

let addscore = filterScore.map(function (add){
  return add.score * 0.10
});
console.log(addscore);

// let addScoreTwo = addscore.map(function (addTwo){
//  return addTwo.score + addscore.score;
// });
// console.log(addScoreTwo);

let reduceScore = addscore.reduce(function (sum, num){
  return num.score;
},0);
console.log(`Total score ${reduceScore}`);



