import "./style.css";
import javascriptLogo from "./javascript.svg";
import { setupCounter } from "./counter.js";

let cards = [
  {
    name: "s2",
    value: "2",
    img: "https://www.improvemagic.com/wp-content/uploads/2020/11/p2.png",
  },
  {
    name: "s3",
    value: "3",
    img: "https://www.improvemagic.com/wp-content/uploads/2020/11/p3.png",
  },
  {
    name: "s4",
    value: "4",
    img: "https://www.improvemagic.com/wp-content/uploads/2020/11/p4.png",
  },
  {
    name: "s5",
    value: "5",
    img: "https://www.improvemagic.com/wp-content/uploads/2020/11/p5.png",
  },
  {
    name: "s6",
    value: "6",
    img: "https://www.improvemagic.com/wp-content/uploads/2020/11/p6.png",
  },
  {
    name: "s7",
    value: "7",
    img: "https://www.improvemagic.com/wp-content/uploads/2020/11/p7.png",
  },
  {
    name: "s8",
    value: "8",
    img: "https://www.improvemagic.com/wp-content/uploads/2020/11/p8.png",
  },
  {
    name: "s9",
    value: "9",
    img: "https://www.improvemagic.com/wp-content/uploads/2020/11/p9.png",
  },
  {
    name: "s10",
    value: "10",
    img: "https://www.improvemagic.com/wp-content/uploads/2020/11/p10.png",
  },
  {
    name: "sj",
    value: "10",
    img: "https://www.improvemagic.com/wp-content/uploads/2020/11/pj.png",
  },
  {
    name: "sq",
    value: "10",
    img: "https://www.improvemagic.com/wp-content/uploads/2020/11/pq.png",
  },
  {
    name: "sk",
    value: "10",
    img: "https://www.improvemagic.com/wp-content/uploads/2020/11/pk.png",
  },
  {
    name: "sa",
    value: "11",
    img: "https://www.improvemagic.com/wp-content/uploads/2020/11/pa.png",
  },
  {
    name: "h2",
    value: "2",
    img: "https://www.improvemagic.com/wp-content/uploads/2020/11/s2.png",
  },
  {
    name: "h3",
    value: "3",
    img: "https://www.improvemagic.com/wp-content/uploads/2020/11/s3.png",
  },
  {
    name: "h4",
    value: "4",
    img: "https://www.improvemagic.com/wp-content/uploads/2020/11/s4.png",
  },
  {
    name: "h5",
    value: "5",
    img: "https://www.improvemagic.com/wp-content/uploads/2020/11/s5.png",
  },
  {
    name: "h6",
    value: "6",
    img: "https://www.improvemagic.com/wp-content/uploads/2020/11/s6.png",
  },
  {
    name: "h7",
    value: "7",
    img: "https://www.improvemagic.com/wp-content/uploads/2020/11/s7.png",
  },
  {
    name: "h8",
    value: "8",
    img: "https://www.improvemagic.com/wp-content/uploads/2020/11/s8.png",
  },
  {
    name: "h9",
    value: "9",
    img: "https://www.improvemagic.com/wp-content/uploads/2020/11/s9.png",
  },
  {
    name: "h10",
    value: "10",
    img: "https://www.improvemagic.com/wp-content/uploads/2020/11/s10.png",
  },
  {
    name: "hj",
    value: "10",
    img: "https://www.improvemagic.com/wp-content/uploads/2020/11/sj.png",
  },
  {
    name: "hq",
    value: "10",
    img: "https://www.improvemagic.com/wp-content/uploads/2020/11/sq.png",
  },
  {
    name: "hk",
    value: "10",
    img: "https://www.improvemagic.com/wp-content/uploads/2020/11/sk.png",
  },
  {
    name: "ha",
    value: "11",
    img: "https://www.improvemagic.com/wp-content/uploads/2020/11/sa.png",
  },
  {
    name: "c2",
    value: "2",
    img: "https://www.improvemagic.com/wp-content/uploads/2020/11/k2.png",
  },
  {
    name: "c3",
    value: "3",
    img: "https://www.improvemagic.com/wp-content/uploads/2020/11/k3.png",
  },
  {
    name: "c4",
    value: "4",
    img: "https://www.improvemagic.com/wp-content/uploads/2020/11/k4.png",
  },
  {
    name: "c5",
    value: "5",
    img: "https://www.improvemagic.com/wp-content/uploads/2020/11/k5.png",
  },
  {
    name: "c6",
    value: "6",
    img: "https://www.improvemagic.com/wp-content/uploads/2020/11/k6.png",
  },
  {
    name: "c7",
    value: "7",
    img: "https://www.improvemagic.com/wp-content/uploads/2020/11/k7.png",
  },
  {
    name: "c8",
    value: "8",
    img: "https://www.improvemagic.com/wp-content/uploads/2020/11/k8.png",
  },
  {
    name: "c9",
    value: "9",
    img: "https://www.improvemagic.com/wp-content/uploads/2020/11/k9.png",
  },
  {
    name: "c10",
    value: "10",
    img: "https://www.improvemagic.com/wp-content/uploads/2020/11/k10.png",
  },
  {
    name: "cj",
    value: "10",
    img: "https://www.improvemagic.com/wp-content/uploads/2020/11/kj.png",
  },
  {
    name: "cq",
    value: "10",
    img: "https://www.improvemagic.com/wp-content/uploads/2020/11/kq.png",
  },
  {
    name: "ck",
    value: "10",
    img: "https://www.improvemagic.com/wp-content/uploads/2020/11/kk.png",
  },
  {
    name: "ca",
    value: "11",
    img: "https://www.improvemagic.com/wp-content/uploads/2020/11/ka.png",
  },
  {
    name: "d2",
    value: "2",
    img: "https://www.improvemagic.com/wp-content/uploads/2020/11/l2.png",
  },
  {
    name: "d3",
    value: "3",
    img: "https://www.improvemagic.com/wp-content/uploads/2020/11/l3.png",
  },
  {
    name: "d4",
    value: "4",
    img: "https://www.improvemagic.com/wp-content/uploads/2020/11/l4.png",
  },
  {
    name: "d5",
    value: "5",
    img: "https://www.improvemagic.com/wp-content/uploads/2020/11/l5.png",
  },
  {
    name: "d6",
    value: "6",
    img: "https://www.improvemagic.com/wp-content/uploads/2020/11/l6.png",
  },
  {
    name: "d7",
    value: "7",
    img: "https://www.improvemagic.com/wp-content/uploads/2020/11/l7.png",
  },
  {
    name: "d8",
    value: "8",
    img: "https://www.improvemagic.com/wp-content/uploads/2020/11/l8.png",
  },
  {
    name: "d9",
    value: "9",
    img: "https://www.improvemagic.com/wp-content/uploads/2020/11/l9.png",
  },
  {
    name: "d10",
    value: "10",
    img: "https://www.improvemagic.com/wp-content/uploads/2020/11/l10.png",
  },
  {
    name: "dj",
    value: "10",
    img: "https://www.improvemagic.com/wp-content/uploads/2020/11/lj.png",
  },
  {
    name: "dq",
    value: "10",
    img: "https://www.improvemagic.com/wp-content/uploads/2020/11/lq.png",
  },
  {
    name: "dk",
    value: "10",
    img: "https://www.improvemagic.com/wp-content/uploads/2020/11/lk.png",
  },
  {
    name: "da",
    value: "11",
    img: "https://www.improvemagic.com/wp-content/uploads/2020/11/la.png",
  },
];

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

while ((start = true)) {}
