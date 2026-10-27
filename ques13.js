let studentPercentage = 100;

if(studentPercentage>=0 && studentPercentage<=100){
if(studentPercentage>=90){
    console.log("A garde");
}
else if(studentPercentage>=80 && studentPercentage<90){
    console.log("B garde");
}
else if(studentPercentage>=70 && studentPercentage<80){
    console.log("C garde");
}
else if(studentPercentage>=60 && studentPercentage<70){
    console.log("D garde");
}
else if(studentPercentage>=40 && studentPercentage<60){
    console.log("E garde");
}
else{
    console.log("F grade");
}
}
else{
    console.log(" invalid percentages, below 0 or above 100");
}