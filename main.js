// Get all Variables
//1. Images
let cheeseImage = document.querySelector(".cheese-img");
let ketchupImage = document.querySelector(".ketchup-img");
let pepperoniImage = document.querySelector(".pepperoni-img");
let mushroomImage = document.querySelector(".mushroom-img");
let pizzaIngredientsImages = document.querySelectorAll(".ingredients");

// plate food
let pizzaDoughImage = document.querySelector(".pizza-dough-image");
//time, resipe and score
let getScore = document.querySelector(".get-score");
let contentResipe = document.querySelector(".content-resipe");
let timeLeft = document.querySelector(".timer");
//===========================================================

// change ingredinets places
// Tomatouse sausue
ketchupImage.addEventListener("click", () => {
  pizzaDoughImage.src = "./image/Pizza-red-souse.png";
});
cheeseImage.addEventListener("click", () => {
  // const pizzaCheese = new
  pizzaDoughImage.src = "./image/Pizza-cheese.png";
});
pepperoniImage.addEventListener("click", () => {
  // const pizzaCheese = new
  pizzaDoughImage.src = "./image/pepperoni-pizza.png";
});
mushroomImage.addEventListener("click", () => {
  // const pizzaCheese = new
  pizzaDoughImage.src = "./image/Pizza-mushroom.png";
});
// check if food correct

// check if food Not correct

// Random challenges resipe food

// score

// Timer Left Function
