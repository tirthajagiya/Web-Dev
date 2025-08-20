function checkLeapYear(year) {
    if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)){
        console.log("Year is leap year");
    }
    else{
        console.log("Year is not leap year");
    }
}

checkLeapYear(2015);
checkLeapYear(2024);