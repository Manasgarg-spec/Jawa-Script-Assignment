let math = 41;
let physic = 42;
let chemistry = 39;
let average= (math+physic+chemistry)/3
if (math >= 40 && physic >= 40 && chemistry >= 40){
if(average >= 75){
    console.log("Distinction");
}
else if(average >= 60){
    console.log("First Division");
}
else if(average >= 50){
    console.log("Second Division");
}
else{
    console.log("Pass");
}
}
else{
    console.log("Fail");
}