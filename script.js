const doorImage1 = document.getElementById("door1");
const doorImage2 = document.getElementById("door2");
const doorImage3 = document.getElementById("door3");

const botDoorPath = "https://content.codecademy.com/projects/chore-door/images/robot.svg";
const beachDoorPath = "https://content.codecademy.com/projects/chore-door/images/beach.svg";
const spaceDoorPath = "https://content.codecademy.com/projects/chore-door/images/space.svg";
let numClosedDoors = 3;
let openDoor1, openDoor2, openDoor3;
const closedDoorPath = "https://content.codecademy.com/projects/chore-door/images/closed_door.svg";
const startButton = document.getElementById("start");
let currentlyPlaying = true;
let currentScore = bestScore = 0;
const [currentStreak, bestStreak] = document.getElementsByClassName("score");

const randomChoreDoorGenerator = () => {
  const choreDoor = Math.trunc(Math.random() * numClosedDoors);

  switch (choreDoor) {
    case 0:
    openDoor1 = botDoorPath;
    openDoor2 = beachDoorPath;
    openDoor3 = spaceDoorPath;
    break;
    
    case 1:
    openDoor1 = beachDoorPath;
    openDoor2 = botDoorPath;
    openDoor3 = spaceDoorPath;
    break;

    case 2:
    openDoor1 = beachDoorPath;
    openDoor2 = spaceDoorPath;
    openDoor3 = botDoorPath;
    break;
  }
}

doorImage1.onclick = ()=>{
  if (currentlyPlaying && !isClicked(doorImage1)) {
    doorImage1.setAttribute("src", openDoor1 );
    playDoor(doorImage1);
  }
};

doorImage2.onclick = ()=>{
   if (currentlyPlaying && !isClicked(doorImage2)) {
    doorImage2.setAttribute("src", openDoor2 );
    playDoor(doorImage2);
  }
};

doorImage3.onclick = ()=>{
  if (currentlyPlaying && !isClicked(doorImage3)) {
    doorImage3.setAttribute("src", openDoor3 );
    playDoor(doorImage3);
  }
};

startButton.onclick =  () => {
  if (!currentlyPlaying) {
    startRound();
  }
}

function startRound() {
  doorImage1.src = doorImage2.src =  doorImage3.src= closedDoorPath;
  numClosedDoors = 3;
  startButton.innerHTML = "Good luck!";
  currentlyPlaying = true;
  currentStreak.textContent = currentScore;
  bestStreak.textContent = bestScore;
  randomChoreDoorGenerator(); 
}

function gameOver(status) {
  startButton.innerHTML = `${status === "win" ? "You win" : "Game over"}! Play again?`;
  currentlyPlaying = false;
}

function isBot(door) {
  if (door.src === botDoorPath) {
    return true;
  }

  return false;
}

function isClicked(door) {
  if (door.src === closedDoorPath) {
    return false;
  }

  return true;
}

function playDoor(door) {
  numClosedDoors--;

  if (numClosedDoors === 0) {
    currentScore++;
    if (currentScore > bestScore) {
      bestScore = currentScore;
    }
    gameOver("win");
  }
  
  else if (isBot(door)) {
    gameOver();
    currentScore = 0;
  }
}

startRound();
