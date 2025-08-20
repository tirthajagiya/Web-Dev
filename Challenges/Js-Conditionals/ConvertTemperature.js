function convert(temp, unit){
    switch (unit.toLowerCase()){
        case "c":
            console.log((9 / 5) * temp + 32);
            break;
        case "f":
            console.log(((value - 32) * 5) / 9);
            break;
        default :
            console.log("Enter A Proper Unit Like C And F");
    }
}

convert(10,"C");
convert(10,"A");