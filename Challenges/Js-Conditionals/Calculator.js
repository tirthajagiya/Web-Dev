function calculate(num1, num2, operator) {
    switch (operator) {
        case '+':
            console.log(num1 + num2);
            break;
        case '-':
            console.log(num1 - num2);
            break;
        case '*':
            console.log(num1 * num2);
            break;
        case '/':
            if (num2 == 0) {
                console.log("You Can Not Divide by zero");
            }
            else {
                console.log(num1 / num2);
            }
            break;
        default:
            console.log("Enter A Valid operator");
    }
}

calculate(10,20,"+");
calculate(20,0,'/');
calculate(10,20,'_');