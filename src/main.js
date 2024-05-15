import "./style.css";
import typescriptLogo from "./typescript.svg";
import viteLogo from "/vite.svg";
import { displayPlanets, fetchNextPage } from "./displayPlanets.js";

document.getElementById("app").innerHTML = `
  <h1>Hello Vite!</h1>
  <div id="list"></div>
  <button id="previous">Previous</button>
  <button id="next">Next</button>
  `;

displayPlanets(document.getElementById("list"));
fetchNextPage(document.getElementById("next"));

document.addEventListener("DOMContentLoaded", () => {
  sessionStorage.removeItem("pageNumber");
});

/*
document.addEventListener("click", (e) => {
  if (e.target.matches("[data-link]")) {
    e.preventDefault();
    history.pushState(null, null, e.target.href);
    router();
  }
});*/
