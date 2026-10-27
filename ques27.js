let unit = 500;
let bill = null;
if (unit < 100) {
    console.log("Original Bill : ", unit * 5);
}
else if (unit > 100 && unit <= 200) {
    console.log("Original Bill : ", 500 + (unit - 100) * 7);
}
else if (unit > 200) {
    bill = 500 + 700 + (unit - 200) * 10;
    console.log("Original Bill : ", bill);
}
if (bill >= 2000) {
    console.log("Discount apply=10%", "Final Bill", bill - (bill * 0.1));
}