

//Opened door images
const botDoorPath = "https://content.codecademy.com/projects/chore-door/images/robot.svg";
const beachDoorPath = "https://content.codecademy.com/projects/chore-door/images/beach.svg";
const spaceDoorPath = "https://content.codecademy.com/projects/chore-door/images/space.svg";

const doorImages = [];

const doorsBox = document.getElementById("doors");

let closedDoors = 3;

setDoorsImage();


doorsBox.addEventListener("click", openDoorHandler);



function openDoorHandler(e) {
    const currentDoor = e.target.id;
    const doorIndex = currentDoor.id;
    console.log(typeof doorIndex);
    
}

function getRobotIndex() {

    return Math.trunc(Math.random() * closedDoors);
}

function setDoorsImage() {
    const robotIndex = getRobotIndex();

    if (robotIndex === 0) {
        doorImages[0] = botDoorPath;
        doorImages[1] = beachDoorPath;
        doorImages[2] = spaceDoorPath;
    } else if (robotIndex === 1) {
        doorImages[0] = beachDoorPath;
        doorImages[1] = botDoorPath;
        doorImages[2] = spaceDoorPath;
    } else {
        doorImages[0] = beachDoorPath;
        doorImages[1] = spaceDoorPath;
        doorImages[2] = botDoorPath;
    }
}





