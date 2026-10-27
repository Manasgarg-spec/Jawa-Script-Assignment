let balance = 4000;
let withdrawAmount = 0;

if (withdrawAmount > 0) {
    if (balance >= withdrawAmount) {
        console.log("Withdrawal successful", "Remaining balance : ", balance - withdrawAmount);
    }
    else {
        console.log("Bikhariii", "Aapka bank Balance", balance, " hai aur aap usse jyada nhi nikal sakte ");
    }
}
else {
    console.log("Gareeb thoda paisa toh soch ");
}