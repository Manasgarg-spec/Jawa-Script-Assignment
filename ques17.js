let salary = 100;
let yearOfExperience = 7;
let bonus;
console.log("Original salary -> ", salary);
if (yearOfExperience > 10) {
    bonus = 0.2 * salary
    console.log("Bonus -> 20% ");
}
if (yearOfExperience <= 10 && yearOfExperience > 5) {
    bonus = 0.1 * salary
    console.log("Bonus -> 10% ");
}
else if (yearOfExperience <= 5 && yearOfExperience > 2) {
    bonus = 0.05 * salary
    console.log("Bonus -> 5%");
}
else if (yearOfExperience <= 2) {
    bonus = 0
    console.log("No Bonus ");
}
else {
    console.log("Invalid detail");
}
console.log(salary + bonus);