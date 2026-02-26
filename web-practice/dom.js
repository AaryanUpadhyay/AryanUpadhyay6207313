// console.log(window.document);
// console.log(window);
// window.console.log("Hello World");
// console.log("Hello World!!");
// console.log(document);
// console.log(document.head);
// console.log(document.body);
// console.log(document.body.innerHTML);
// console.log(document.body.childNodes);
// console.log(document.body.children);
// console.log(document.body.firstChild);
// console.log(document.body.firstElementChild);
// console.log(document.body.lastChild);
// console.log(document.body.lastElementChild);
// console.log(document.body.childNodes[0]);
// console.log(document.body.childNodes[4]);
// // console.log(document.body.childNodes[3].childNodes[0]);
// console.log(document.body.children);
// console.log(document.body.children[1]);
// let btn1 = document.body.children[2];
// console.log(btn1.parentElement);
// console.log(btn1.parentNode);
// console.log(document.body.children[2]);
// let div1 = document.body.children[3];
// console.log(div1.parentElement);
// console.log(div1.parentNode);
// console.log(div1.firstElementChild);
// console.log(div1.lastElementChild);
// console.log(div1.nextElementSibling);

// const { useCallback } = require("react");

// console.log(document.body.hasChildNodes);
// let head1 = div1.lastElementChild;
// console.log(head1.previousElementSibling);
// console.log(head1.previousSibling);

let h1 = document.getElementById("heading");
console.log(h1);
let head4 = document.getElementsByClassName("h44");
console.log(head4);
let convert = Array.from(head4);
console.log(convert);
Array.from(head4).forEach((element) => {
  console.log(element);
});

let btn =  document.getElementById("button");

console.log(btn);
convert.map((element) => {
  console.log(element);
  element.style.color = "red";
  element.style.fontSize = "30px";
  element.style.backgroundColor = "yellow";
});

let btnname = document.getElementsByName("btn");
console.log(btnname);

let h = document.getElementsByClassName("h44");
console.log(h);
let h12 = document.getElementsByTagName("h1");
console.log(h12);
let h13 = document.querySelectorAll(".h44");
console.log(h13);
let h14 = document.querySelectorAll("h1");
console.log(h14);
let h15 = document.querySelectorAll("#heading");
console.log(h15);
let h16 = document.querySelector(".h44");
console.log(h16);

let img1 =  document.createElement("img");
img1.setAttribute("src", "https://www.w3schools.com/images/w3schools_green.jpg");
console.log(img1);
document.body.appendChild(img1);

let img2 = document.createElement("img");
img2.setAttribute("src", "https://www.w3schools.com/images/w3schools_green.jpg");
// console.log(img2);
img2.style.width = "200px";
img2.setAttribute
document.body.appendChild(img2);

let h11 = document.createElement("h1");
h11.innerText = "This is heading 1";
document.body.appendChild(h11);

let para = document.createElement("p");
para.textContent = "This is a paragraph. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, doloremque.";
document.body.appendChild(para);

let p = document.createElement("p");
p.textContent = "This is another paragraph. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, doloremque.";
p.setAttribute("id","p1");
document.body.append(p);
console.log(p);
p.removeAttribute("id");
console.log(p);
// document.body.removeChild(p);
// console.log(document.body);

// ? inline event handler
// let btn1 = document.getElementById("btn1");
// function demo(){
//     alert("Maa Ka Bharosaa Aag")
// }

let btn1 = document.getElementById("button");
let dark = false;
btn1.addEventListener("click", () => {
    if (!dark) {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        dark = true;
    } else {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        dark = false;
    }
});

const count = document.getElementById("counter");
const inc = document.getElementById("inc");
const dec = document.getElementById("dec");
const reset = document.getElementById("reset");
let counterValue = 0;

function updateCounter() {
    count.textContent = counterValue;
}

inc.addEventListener("click", () => {
    counterValue++;
    updateCounter();
});
dec.addEventListener("click", () => {
    counterValue--;
    updateCounter();
});
reset.addEventListener("click", () => {
    counterValue = 0;
    updateCounter();
});

let t1 = document.createElement("table");
t1.setAttribute("border", "1");
t1.style.backgroundColor = "lightblue";
t1.style.width = "300px";
t1.style.height = "300px";
t1.style.textAlign = "center";
t1.style.fontSize = "20px";
t1.style.margin = "auto";
for (let i = 0; i < 3; i++) {
    let tr = document.createElement("tr");
    for (let j = 0; j < 3; j++) {
        let td = document.createElement("td");
        td.textContent = `${i + 1} + ${j + 1}`;
        tr.appendChild(td);
    }
    t1.appendChild(tr);
    document.body.appendChild(t1);
}
console.log(fa);
let fa = 5;