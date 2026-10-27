let balance = 10000;
let depositMoney = 500;
let withdrawMoney = 1000;
let exit;
const feture = exit;
switch (feture) {
    case balance:
        console.log("Current balance : ", balance);
        break;

    case depositMoney:
        console.log("Money Added Succefull", "Current Balance", balance + depositMoney);
        break;

    case withdrawMoney:
        if (balance > withdrawMoney) {
            console.log("Withdraw Succesful", "Remaing Balance : ", balance - withdrawMoney);
        }
        else {
            console.log("Insufficent Balance");
        }
        break;

    case exit:
        console.log("See you soon (^_^)");
        break;
}