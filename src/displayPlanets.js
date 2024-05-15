import db from "./indexedDB/indexedDB";

export async function displayPlanets(element) {
  element.innerHTML = "";
  const pageNumber = sessionStorage.getItem("pageNumber") || 1;

  if (localStorage.getItem("planets-" + pageNumber)) {
    const planets = JSON.parse(localStorage.getItem("planets-" + pageNumber));
    planets.forEach((planet, i) => {
      db.planets.add({
        id: new Date(),
        name: planet.name,
        page: pageNumber,
      });
      const p = document.createElement("p");
      p.innerText = planet.name;
      element.appendChild(p);
    });
    return;
  }

  const response = await fetch(
    "https://swapi.dev/api/planets?page=" + pageNumber
  );

  const result = await response.json();
  localStorage.setItem("planets-" + pageNumber, JSON.stringify(result.results));
  result.results.forEach((planet) => {
    const p = document.createElement("p");
    p.innerText = planet.name;
    element.appendChild(p);
  });
}

export const fetchNextPage = async (button) => {
  button.addEventListener("click", async (e) => {
    e.preventDefault();
    let pageNumber = sessionStorage.getItem("pageNumber") || 1;
    pageNumber++;
    console.log(pageNumber);
    sessionStorage.setItem("pageNumber", pageNumber);
    displayPlanets(document.getElementById("list"));
  });
};
