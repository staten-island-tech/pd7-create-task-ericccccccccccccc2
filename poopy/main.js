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
  let temp = []
  array.forEach((element) => temp.push(parseInt(element)));
  let moreTemp = temp.filter(Boolean);
  let sum = 0;
  moreTemp.forEach(element => sum += element)
  console.log(sum);
  let ticker = 0;
  while(ticker < array.filter(aces => aces === "a").length) {
    ticker++
    if (array.includes("a") && sum > 10) {
      sum += 1
    } else {
      sum += 11
    }
    console.log(sum);
  }
  };

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

});

hitbutton.addEventListener("click", function () {
  dealUser(cards);
  console.log(dhand);
  console.log(hand);
  if (hand > dhand) {
    dealDealer(cards);
  }
});

let testarray = ["a","9","a","a"];
handValue(testarray);
