let productPrice = 1299;
let quantity = 19;

let totalBill = productPrice * quantity;





console.log("Original Bill ->", " ", "Product price = ", productPrice, "Quantity = ", quantity, "TOTAL ", totalBill );

const discount = 10 ;

console.log("Discount Amount in percentage(%) = ", discount);

console.log("Final Bill = ", totalBill - (totalBill*10)/100 );