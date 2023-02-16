import "./style.css";
import { cards } from "./counter.js";

let start = false;
let hand = [];
let dhand = [];
let playhand = document.getElementById("hand");
let dealerhand = document.getElementById("dhand");
let buttdiv = document.getElementById("buttdiv");
let button = document.getElementById("start");
let hitbutton = document.getElementById("hit");
let passbutton = document.getElementById("pass");

function startUser(array) {
  let temp = (Math.random() * array.length) | 0;
  let x = array.splice(temp, 1)[0];
  hand.push(x.name);
  playhand.insertAdjacentHTML(
    "beforeend",
    `<img class="dealt" src="https://opengameart.org/sites/default/files/card%20back%20red.png">`
  );
  return x;
}

function dealUser(array) {
  let temp = (Math.random() * array.length) | 0;
  let x = array.splice(temp, 1)[0];
  hand.push(x.name);
  playhand.insertAdjacentHTML(
    "beforeend",
    `<img class="dealt" src="${x.img}">`
  );
  return x;
}

function startDealer(array) {
  let temp = (Math.random() * array.length) | 0;
  let x = array.splice(temp, 1)[0];
  dhand.push(x.name);
  dealerhand.insertAdjacentHTML(
    "beforeend",
    `<img class="dealt" src="https://opengameart.org/sites/default/files/card%20back%20red.png">`
  );
  return x;
}

function dealDealer(array) {
  let temp = (Math.random() * array.length) | 0;
  let x = array.splice(temp, 1)[0];
  dhand.push(x.name);
  dealerhand.insertAdjacentHTML(
    "beforeend",
    `<img class="dealt" src="${x.img}">`
  );
  return x;
}

button.addEventListener("click", function () {
  let y = startDealer(cards);
  dealDealer(cards);
  let x = startUser(cards);
  dealUser(cards);
  buttdiv.innerHTML = "";
  buttdiv.insertAdjacentHTML(
    "beforeend",
    `<button id="hit">hit me</button> <button id="pass">pass :(</button>`
  );
  start = true;
  console.log(start);
});
