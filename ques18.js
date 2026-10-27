let age = 120;
if (age > 0 && age <= 12) {
    console.log("Child");
}
else if (age > 12 && age <= 19) {
    console.log("Teenager");
}
else if (age > 20 && age <= 59) {
    console.log("Adult");
}
else if (age >= 60) {
    console.log("Senior Citize");
}
else {
    console.log(" invalid negative ages.");
}