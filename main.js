// Get all Variables
//1. Images
let item = document.querySelector(".cheese-img");
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
// forecha in all ingredintes
pizzaIngredientsImages.forEach((item) => {
  let currentDroppable = null;

  item.onmousedown = function (event) {
    let shiftX = event.clientX - item.getBoundingClientRect().left;
    let shiftY = event.clientY - item.getBoundingClientRect().top;

    item.style.position = "absolute";
    item.style.zIndex = 1000;
    document.body.append(item);

    moveAt(event.pageX, event.pageY);

    function moveAt(pageX, pageY) {
      item.style.left = pageX - shiftX + "px";
      item.style.top = pageY - shiftY + "px";
    }

    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);

      item.hidden = true;
      let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
      item.hidden = false;

      if (!elemBelow) return;

      let droppableBelow = elemBelow.closest(".droppable");
      if (currentDroppable != droppableBelow) {
        if (currentDroppable) {
          // null when we were not over a droppable before this event
          leaveDroppable(currentDroppable);
        }
        currentDroppable = droppableBelow;
        if (currentDroppable) {
          // null if we're not coming over a droppable now
          // (maybe just left the droppable)
          enterDroppable(currentDroppable);
        }
      }
    }

    document.addEventListener("mousemove", onMouseMove);

    item.onmouseup = function () {
      document.removeEventListener("mousemove", onMouseMove);
      item.onmouseup = null;
    };
  };

  function enterDroppable(elem) {
    elem.style.background = "pink";
  }

  function leaveDroppable(elem) {
    elem.style.background = "";
  }

  item.ondragstart = function () {
    return false;
  };
});
// change ingredinets places

// check if pizza correct

// check if pizza Not correct

// Random challenges resipe food

// score

// Timer Left Function
