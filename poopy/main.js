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
let outcome = document.getElementById("outcome");

function startUser(array) {
  let temp = (Math.random() * array.length) | 0;
  let x = array.splice(temp, 1)[0];
  hand.push(x.value);
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
  let ticker = 0;
  while(ticker < array.filter(aces => aces === "a").length) {
    ticker++
    if (array.includes("a") && sum > 10) {
      sum += 1
    } else {
      sum += 11
    }
  }
  return sum;
  };

function dealUser(array) {
  let temp = (Math.random() * array.length) | 0;
  let x = array.splice(temp, 1)[0];
  hand.push(x.value);
  playhand.insertAdjacentHTML(
    "beforeend",
    `<img class="dealt" src="${x.img}">`
  );
  return x;
}

function startDealer(array) {
  let temp = (Math.random() * array.length) | 0;
  let x = array.splice(temp, 1)[0];
  dhand.push(x.value);
  dealerhand.insertAdjacentHTML(
    "beforeend",
    `<img class="dealt" src="https://opengameart.org/sites/default/files/card%20back%20red.png">`
  );
  return x;
}

function dealDealer(array) {
  let temp = (Math.random() * array.length) | 0;
  let x = array.splice(temp, 1)[0];
  dhand.push(x.value);
  dealerhand.insertAdjacentHTML(
    "beforeend",
    `<img class="dealt" src="${x.img}">`
  );
  return x;
}

button.addEventListener("click", function () {
  startDealer(cards);
  dealDealer(cards);
  dealUser(cards);
  dealUser(cards);
  buttdiv.innerHTML = "";
  hitbutton.innerText = "hit!!!!";
  buttdiv.appendChild(hitbutton);
  passbutton.innerText = "stand!!!!";
  buttdiv.appendChild(passbutton);

});

function checkD() {
  if (handValue(hand) > handValue(dhand) && handValue(hand) < 22) {
    dealDealer(cards);
  }
  if (handValue(dhand) > 21) {
    buttdiv.innerHTML = ""
    outcome.innerHTML = `<p>you win, dealer had a hand of ${dhand}</p>`
    console.log(hand)
    console.log(dhand)
  }
}


hitbutton.addEventListener("click", function () {
  dealUser(cards);
  if (handValue(hand) > 21) {
    buttdiv.innerHTML = ""
    outcome.innerHTML = `<p>you lose :(, dealer had a hand of ${dhand}</p>`
    console.log(hand)
    console.log(dhand)
  } else {
    checkD()
  }
});

passbutton.addEventListener("click", function() {
  if (handValue(hand) > 21) {
    buttdiv.innerHTML = ""
    outcome.innerHTML = `<p>you lose :(, dealer had a hand of ${dhand}</p>`
    console.log(hand)
    console.log(dhand)
  } else {
    checkD()
    if (handValue(dhand) >= handValue(hand) && handValue(dhand) < 22) {
      buttdiv.innerHTML = ""
      outcome.innerHTML = `<p>you lose :(, dealer had a hand of ${dhand}</p>`
      console.log(hand)
      console.log(dhand)
    }
    
  }
});