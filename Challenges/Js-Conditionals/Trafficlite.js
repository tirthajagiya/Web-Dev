function traficliteAction(light) {
    switch (light) {
        case "Red":
            console.log("Stop");
            break;
        case "Yellow":
            console.log("Slow Down");
            break;
        case "Green":
            console.log("Go");
            break;
        default:
            console.log("Enter Valid Color");
    }
}

traficliteAction("Red");
traficliteAction("Pink");