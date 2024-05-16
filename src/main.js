import "./style.css";
import typescriptLogo from "./typescript.svg";
import viteLogo from "/vite.svg";
import { displayPlanets, fetchNextPage } from "./displayPlanets.js";
import { Store } from "./store/store.js";
import router from "./router/router.js";
import { movieSchema } from "./schemas/movie.schema.ts";
import movieStore from "./store/movies.store.js";

router();

document.addEventListener("click", (e) => {
  if (e.target.matches("[data-link]")) {
    e.preventDefault();
    history.pushState(null, null, e.target.href);
    router();
  }
});
/*
document.getElementById("change-content").addEventListener("click", () => {
  document.getElementById("montext").innerText =
    "Le contenu du paragraphe a été modifié !";
});*/

movieStore.subscribe("movies", (moviesList) => {
  console.log(moviesList);
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
/*
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/sw.js").then(
      (registration) => {
        console.log(
          "ServiceWorker registration successful with scope: ",
          registration.scope
        );
      },
      (err) => {
        console.log("ServiceWorker registration failed: ", err);
      }
    );
  });
}

let deferredPrompt = null;

window.addEventListener("beforeinstallprompt", (e) => {
  // Empêcher l'affichage immédiat de la boîte de dialogue d'installation
  e.preventDefault();
  // Sauvegarder l'événement pour le déclencher plus tard
  deferredPrompt = e;
  // Afficher votre propre bouton d'installation
  const installButton = document.getElementById("install-button");
  if (installButton) {
    installButton.style.display = "block";
  }
});

const installButton = document.getElementById("install-button");

if (installButton) {
  installButton.addEventListener("click", async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const choiceResult = await deferredPrompt.userChoice;
      if (choiceResult.outcome === "accepted") {
        console.log("User accepted the A2HS prompt");
      } else {
        console.log("User dismissed the A2HS prompt");
      }
      deferredPrompt = null;
      installButton.style.display = "none";
    }
  });
}
*/
