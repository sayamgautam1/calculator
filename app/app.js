let displayScreenEl = document.getElementById("screen");
let buttonEl = document.querySelectorAll("button");
buttonEl.forEach((btn) => {
  btn.addEventListener("click", function () {
    displayScreenEl.innerText = btn.textContent;
    console.log(btn.textContent);
  });
});
