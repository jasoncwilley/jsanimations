
var btns = document.querySelectorAll(".catbuttons button");
var graphic = document.getElementsByClassName("cats")[0];

for (i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", manageCatGraphicClasses);
}
function manageCatGraphicClasses() {
if (this.getAttribute("data-add")) {
  graphic.classList.add(this.getAttribute("data-add"));
   }
if (this.getAttribute("data-remove")) {
  graphic.classList.remove(this.getAttribute("data-remove"));
   }
}
var bearbtns = document.querySelectorAll(".bearbuttons button");
var beargraphic = document.getElementsByClassName("bears")[0];

for (i = 0; i < bearbtns.length; i++) {
  bearbtns[i].addEventListener("click", manageBearGraphicClasses);
}
function manageBearGraphicClasses() {
if (this.getAttribute("data-add")) {
  beargraphic.classList.add(this.getAttribute("data-add"));
   }
if (this.getAttribute("data-remove")) {
  beargraphic.classList.remove(this.getAttribute("data-remove"));
   }
}


