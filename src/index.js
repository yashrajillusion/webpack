import "./index.css";
import logo from "./back.png";

const img = new Image();
img.classList.add("top-logo");

img.src = logo;

document.querySelector(".logo").append(img);
let arr = JSON.parse(localStorage.getItem("todo")) || [];
document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  let value = document.querySelector("input").value;
  arr.push(value);
  localStorage.setItem("todo", JSON.stringify(arr));
  show(arr);
});
show(arr);
function show(arr) {
  let loc = document.querySelector(".show");
  loc.innerHTML = null;
  arr.forEach((el) => {
    let p = document.createElement("p");
    p.innerHTML = el;
    loc.append(p);
  });
}
