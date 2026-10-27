let num1 = 0;
let num2 = 0;
let Operator = '/'
switch (Operator) {
    case '*':
        console.log(num1 * num2);
        break;
    case '+':
        console.log(num1 + num2);
        break;
    case '-':
        console.log(num1 - num2);
        break;
    case '/':
        if (num1 == 0 || num2 == 0) {
            console.log("division by zero is NOT possible");
        }
        else {
            console.log(num1 / num2);
        }
        break;
    case '%':
        console.log(num1 % num2);
        break;
    default:
        console.log("Invalid Operator");
}

