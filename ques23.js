let trafficSignalColor = "green"
switch(trafficSignalColor){
    case "red":
        console.log("Stop");
        break;
    case "Green":
        console.log("Go!");
        break;
    case "Yellow":
        console.log("Wait");
        break;
        default:
            console.log("Invalid signal");
}