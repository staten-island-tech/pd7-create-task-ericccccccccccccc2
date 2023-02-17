import "./style.css";
import { cards } from "./counter.js";

let hand = [];
let dhand = [];
let playhand = document.getElementById("hand");
let dealerhand = document.getElementById("dhand");
let buttdiv = document.getElementById("buttdiv");
let button = document.getElementById("start");
let hitbutton = document.createElement("button");
let passbutton = document.createElement("button");

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

function handValue(array) {
  let x = array.includes("a");
  let temper = array.forEach((element) => parseInt(element));
  console.log(array);
  console.log(temper);
  if ((x = true)) {
    let temp = array.filter((element) => !isNaN(temper));
    console.log(temp);
    console.log("amongus");
  }
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
  startDealer(cards);
  dealDealer(cards);
  startUser(cards);
  dealUser(cards);
  buttdiv.innerHTML = "";
  hitbutton.innerText = "hit!!!!";
  buttdiv.appendChild(hitbutton);
  passbutton.innerText = "pass :(";
  buttdiv.appendChild(passbutton);

  console.log(start);
});

hitbutton.addEventListener("click", function () {
  dealUser(cards);
  console.log(dhand);
  console.log(hand);
  if (hand > dhand) {
    dealDealer(cards);
  }
});

let testarray = ["3", "523", "32", "5", "a"];
handValue(testarray);
