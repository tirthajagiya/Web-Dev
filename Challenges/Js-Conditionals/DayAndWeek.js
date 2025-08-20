function checkNumberBaseDay(number){
    switch(number){
        case 1:
            console.log("Monday");
            break;
        case 2:
            console.log("Tuesday");
            break;
        case 3:
            console.log("Wednesday");
            break;
        case 4:
            console.log("Thursday");
            break;
        case 5:
            console.log("Friday");
            break;
        case 0:
            console.log("Saturday");
            break;
        case 0:
            console.log("Sunday");
            break;
        default:
            console.log("Enter A Valid Number between 1-7"); 
    }
}

checkNumberBaseDay(1);
checkNumberBaseDay(10);
checkNumberBaseDay(-10);