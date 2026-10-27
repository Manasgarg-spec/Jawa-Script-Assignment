let studentName = "xyz";
let rollNumber = 28;
let mathMarks = 98;
let scienceMarks = 99;
let englishMarks = 80;
const totalMarks = mathMarks + scienceMarks + englishMarks
const percentage = (totalMarks / 300) * 100
console.log("Name : ", studentName);
console.log("Roll Number : ", rollNumber);
console.log()
console.log("Math : ", mathMarks);
console.log("Science : ", scienceMarks);
console.log("English : ", englishMarks);
console.log();
console.log("Total Marks : ", totalMarks);
console.log("Percentage : ", percentage.toFixed(2), "%");
if (percentage >= 90) {
    console.log("Grade A");
}
else if (percentage >= 80 && percentage < 90){
    console.log("Grade B");
}
else if (percentage >= 70 && percentage < 80){
    console.log("Grade C");
}
else if (percentage >= 60 && percentage < 70){
    console.log("Grade D");
}
else if (percentage >= 50 && percentage < 60){
    console.log("Grade E");
}
else if (percentage >= 40 && percentage < 50){
    console.log("Grade F");
}
if(mathMarks>40 && scienceMarks>40 && englishMarks>40){
    console.log("Pass");
}
else{
    console.log("Fail");
}