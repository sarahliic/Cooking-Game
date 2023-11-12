alert("خمن مكونات الاطعمه قبل انتهاء الوقت");

// Get all Variables
//1. Images
let foodImage = document.querySelectorAll(".food-img");
let bread = document.querySelector(".bread");
let cheese = document.querySelector(".cheese");
let dough = document.querySelector(".dough");
let ketchup = document.querySelector(".ketchup");
let pepperoni = document.querySelector(".pepperoni");
let cucumber = document.querySelector(".cucumber");
let lettuce = document.querySelector(".lettuce");
let tomato = document.querySelector(".tomato");
// plate food
let brownPlate = document.querySelector(".brown-color");
//time, resipe and score
let recipeElement = document.querySelector(".content-resipe");
let timeLeft = document.querySelector(".timer");
let btn = document.querySelector(".btn");
//===========================================================
let score = -1;
// Events listener
btn.addEventListener("click", randomRecipe);

// change ingredinets places
let divBox = document.createElement("div");
brownPlate.appendChild(divBox);
divBox.style.cssText = ` display: grid;
grid-template-columns: 25% 25% 25% 25%;
margin: 1rem;
justify-content: center;
align-items: center;`;

bread.addEventListener("click", () => {
  let breadImg = new Image();
  breadImg.src = "https://cdn-icons-png.flaticon.com/128/7093/7093198.png";
  breadImg.style.cssText = "width: 30%";
  divBox.append(breadImg);
});
cheese.addEventListener("click", () => {
  let cheeseImg = new Image();
  cheeseImg.src = "https://cdn-icons-png.flaticon.com/128/819/819827.png";
  cheeseImg.style.cssText = "width: 30%";
  divBox.append(cheeseImg);
});
dough.addEventListener("click", () => {
  let doughImg = new Image();
  doughImg.src = "https://cdn-icons-png.flaticon.com/128/1999/1999938.png";
  doughImg.style.cssText = "width: 30%";
  divBox.append(doughImg);
});
ketchup.addEventListener("click", () => {
  let ketchupImg = new Image();
  ketchupImg.src = "https://cdn-icons-png.flaticon.com/128/2821/2821793.png";
  ketchupImg.style.cssText = "width: 30%";
  divBox.append(ketchupImg);
});
pepperoni.addEventListener("click", () => {
  let pepperoniImg = new Image();
  pepperoniImg.src = "https://cdn-icons-png.flaticon.com/128/1699/1699357.png";
  pepperoniImg.style.cssText = "width: 30%";
  divBox.append(pepperoniImg);
});
cucumber.addEventListener("click", () => {
  let cucumberImg = new Image();
  cucumberImg.src = "https://cdn-icons-png.flaticon.com/128/590/590694.png";
  cucumberImg.style.cssText = "width: 30%";
  divBox.append(cucumberImg);
});
lettuce.addEventListener("click", () => {
  let lettuceImg = new Image();
  lettuceImg.src = "https://cdn-icons-png.flaticon.com/128/3823/3823393.png";
  lettuceImg.style.cssText = "width: 30%";
  divBox.append(lettuceImg);
});
tomato.addEventListener("click", () => {
  let tomatoImg = new Image();
  tomatoImg.src = "https://cdn-icons-png.flaticon.com/128/4264/4264717.png";
  tomatoImg.style.cssText = "width: 30%";
  divBox.append(tomatoImg);
});

// check if food correct
// Create an array to store the selected ingredients
let selectedIngredientsPizza = [
  "https://cdn-icons-png.flaticon.com/128/819/819827.png",
  "https://cdn-icons-png.flaticon.com/128/1699/1699357.png",
  "https://cdn-icons-png.flaticon.com/128/2821/2821793.png",
  "https://cdn-icons-png.flaticon.com/128/1999/1999938.png",
];
let selectedIngredientsSalad = [
  "https://cdn-icons-png.flaticon.com/128/4264/4264717.png",
  "https://cdn-icons-png.flaticon.com/128/3823/3823393.png",
  "https://cdn-icons-png.flaticon.com/128/590/590694.png",
];
let selectedIngredientsBreadCheese = [
  "https://cdn-icons-png.flaticon.com/128/7093/7093198.png",
  "https://cdn-icons-png.flaticon.com/128/819/819827.png",
];

// Check if the selected ingredients match the recipe after clicking the button
function checkRecipe() {
  let recipeIngredients = recipeElement.textContent.trim();
  let isCorrect = true;

  if (recipeIngredients === "سلطة خضار") {
    isCorrect = selectedIngredientsSalad.every((ingredient) => {
      return selectedIngredientsSalad.includes(ingredient);
    });
  } else if (recipeIngredients === "بيتزا بيبروني") {
    isCorrect = selectedIngredientsPizza.every((ingredient) => {
      return selectedIngredientsPizza.includes(ingredient);
    });
  } else if (recipeIngredients === "توست جبن") {
    isCorrect = selectedIngredientsBreadCheese.every((ingredient) => {
      return selectedIngredientsBreadCheese.includes(ingredient);
    });
  }

  if (isCorrect) {
    score++;
    updatScore();
  } else {
    score--;
    updatScore();
  }

  // Reset selected ingredients and clear the div box
  selectedIngredients = [];
  divBox.innerHTML = "";

  return isCorrect;
}

// Scor
// check if food Not correct

// Random challenges resipe food
// Score functions
function updatScore() {
  let getScore = document.querySelector("#get-score");
  getScore.textContent = score;
}
let countDown;
let timer = 15;

// Timer

function showTimer() {
  countDown = setInterval(function () {
    timer--;
    timeLeft.textContent = timer;
    if (timer <= 0) {
      clearInterval(countDown);
      alert(`Game over you got ${score}`);
    }
  }, 1000);
}
// Random challenges recipe food
const recipeRandom = ["توست جبن", "بيتزا بيبروني", "سلطة خضار"];

function randomRecipe() {
  const randomIndex = Math.floor(Math.random() * recipeRandom.length);
  const randomRecipe = recipeRandom[randomIndex];
  recipeElement.textContent = randomRecipe;
  checkRecipe();
}

// Call randomRecipe function to set initial recipe
randomRecipe();
showTimer();
