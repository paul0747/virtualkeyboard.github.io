let numbers = document
  .getElementById("row1")
  .getElementsByClassName("btns-keyboard");
let lettersRow2 = document
  .getElementById("row2")
  .getElementsByClassName("btns-keyboard");
let lettersRow3 = document
  .getElementById("row3")
  .getElementsByClassName("btns-keyboard");
let lettersRow4 = document
  .getElementById("row4")
  .getElementsByClassName("btns-keyboard");
let keyboardInput = document.getElementById("keyboard-input");
let deleteBtn = document.getElementById("delete-btn");
let spaceBtn = document.getElementById("space-btn");
let capsBtn = document.getElementById("btn-caps");

let changeInput = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    arr[i].addEventListener("click", () => {
      keyboardInput.value += arr[i].innerHTML;
    });
  }
};
changeInput(numbers);
changeInput(lettersRow2);
changeInput(lettersRow3);
changeInput(lettersRow4);

// Delete char by char
deleteBtn.addEventListener("click", () => {
  keyboardInput.value = keyboardInput.value.substr(
    0,
    keyboardInput.value.length - 1
  );
});

// Spacebar
spaceBtn.addEventListener("click", () => {
  keyboardInput.value += " ";
});

// CAPS
capsBtn.addEventListener("click", () => {
  let all = document.getElementsByClassName("btns-keyboard");
  for (var i = 0; i < all.length; i++) {
    if (all[i].style.textTransform === "lowercase") {
      all[i].innerHTML = all[i].innerHTML.toUpperCase();
      all[i].style.textTransform = "uppercase";
    } else {
      all[i].innerHTML = all[i].innerHTML.toLowerCase();
      all[i].style.textTransform = "lowercase";
    }
  }
});
