import "./style.css";
import typescriptLogo from "./typescript.svg";
import viteLogo from "/vite.svg";
import { displayPlanets } from "./displayPlanets.js";

document.getElementById("app").innerHTML = `
  <h1>Hello Vite!</h1>
  <div id="list"></div>
  `;

displayPlanets(document.getElementById("list"));
