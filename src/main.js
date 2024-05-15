import "./style.css";
import typescriptLogo from "./typescript.svg";
import viteLogo from "/vite.svg";
import { displayPlanets, fetchNextPage } from "./displayPlanets.js";
import { Store } from "./store/store.js";
import router from "./router/router.js";

router();

document.addEventListener("click", (e) => {
  if (e.target.matches("[data-link]")) {
    e.preventDefault();
    history.pushState(null, null, e.target.href);
    router();
  }
});
document.getElementById("change-content").addEventListener("click", () => {
  document.getElementById("montext").innerText =
    "Le contenu du paragraphe a été modifié !";
});
/*
document.getElementById("app").innerHTML = `
  <h1>Hello Vite!</h1>
  <div id="list"></div>
  <button id="previous">Previous</button>
  <button id="next">Next</button>
  `;

displayPlanets(document.getElementById("list"));

fetchNextPage(document.getElementById("next"), 1);
fetchNextPage(document.getElementById("previous"), -1);
/*
const store = new Store({ pageNumber: 1 });

console.log(store);

// Subscribe to changes in the pageNumber property
store.subscribe("pageNumber", (newPageNumber) => {
  displayPlanets(document.getElementById("list"), newPageNumber);
  sessionStorage.setItem("pageNumber", newPageNumber);
});

// Set initial page number from sessionStorage if available
const initialPageNumber = sessionStorage.getItem("pageNumber") || 1;
store.setState({ pageNumber: Number(initialPageNumber) });

document.getElementById("previous").addEventListener("click", () => {
  const currentPage = store.getState().pageNumber;
  if (currentPage > 1) {
    store.setState({ pageNumber: currentPage - 1 });
  }
});

document.getElementById("next").addEventListener("click", () => {
  const currentPage = store.getState().pageNumber;
  store.setState({ pageNumber: currentPage + 1 });
});

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
