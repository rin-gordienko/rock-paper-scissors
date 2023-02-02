const randomChoiceDisplay = document.getElementById("random-choice");
const myChoiceDisplay = document.getElementById("my-choice");
const resultDisplay = document.getElementById("result");
const gameContainer = document.getElementById("game-container");
const wrapper = document.getElementById("wrapper");
let myChoice;
let randomChoice;

const choices = [
  {
    name: "rock",
    image: "img/rock.png",
  },
  {
    name: "paper",
    image: "img/paper.png",
  },
  {
    name: "scissors",
    image: "img/scissors.png",
  },
];


const handleClick = (event) => {
  myChoice = event.target.id;
  myChoiceDisplay.innerHTML = myChoice;
  makeRandomChoice();
  showResult();
  showPicture();
};

const makeRandomChoice = () => {
  const randomChoiceObj = choices[Math.floor(Math.random() * choices.length)];
  randomChoice = randomChoiceObj.name;
  randomChoiceDisplay.innerHTML = randomChoice;
};

choices.forEach((choice) => {
  const button = document.createElement("button");
  button.innerHTML = choice.name;
  button.id = choice.name;
  button.className = "btn-choice";
  button.addEventListener("click", handleClick);
  wrapper.append(button);
});

const showResult = () => {
  if (myChoice === randomChoice) {
    result = "IT'S A DRAW!";
  }
  switch (myChoice + randomChoice) {
    case "rockscissors":
    case "scissorspaper":
    case "rockpaper":
    case "paperrock":
      result = "YOU WIN!";
      break;
    case "paperscissors":
    case "scissorsrock":
    case "scissorspaper":
    case "rockpaper":
      result = "YOU LOSE!";
      break;
  }

  resultDisplay.innerHTML = result;
};


const showPicture = () => {
  choices.forEach((choice) => {
    let picture = document.createElement("img");
    let pictureChoice = choice.image;
    picture.id = choice.name;
    picture.setAttribute("src", pictureChoice);
    picture.classList = "picture"

    if (picture.id === myChoice) {
      myChoiceDisplay.appendChild(picture);
    }
    if (picture.id === randomChoice) {
      randomChoiceDisplay.appendChild(picture);
    }

    if (picture.id === randomChoice && picture.id === myChoice) {
      const pictureCopy = picture.cloneNode();
      myChoiceDisplay.appendChild(picture);
      randomChoiceDisplay.appendChild(pictureCopy);
    }
  });
};