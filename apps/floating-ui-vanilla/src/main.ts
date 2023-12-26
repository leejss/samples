import "./style.css";

const button = document.querySelector("#button") as HTMLButtonElement;
const tooltip = document.querySelector("#tooltip") as HTMLDivElement;

const rect = button.getBoundingClientRect();

console.log(rect);
