let num1 = 0;
let num2 = 0;
let Operator = ''
switch (Operator) {
    case 'Multiplication':
        console.log(num1 * num2);
        break;
    case 'Addition':
        console.log(num1 + num2);
        break;
    case 'Subtraction':
        console.log(num1 - num2);
        break;
    case ' Division':
        if (num1 == 0 || num2 == 0) {
            console.log("division by zero is NOT possible");
        }
        else {
            console.log(num1 / num2);
        }
        break;
    case 'Modulus':
        console.log(num1 % num2);
        break;
    default:
        console.log("Invalid Operator");
}

