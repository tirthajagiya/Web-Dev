function checkGrade(mark) {

    if (mark >= 90) {
        console.log("A");
    }
    else if (mark >= 80 && mark < 90) {
        console.log("B");

    }
    else if (mark >= 70 && mark < 80) {
        console.log("C");

    }
    else if (mark >= 60 && mark < 70) {
        console.log("D");

    }
    else if (mark < 60 && mark>=0) {
        console.log("E");

    }
    else {
        console.log("Enter A proper Mark");
    }
}


checkGrade(10);
checkGrade(50);
checkGrade(70);
checkGrade(-10);