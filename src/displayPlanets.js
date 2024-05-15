import db from "./indexedDB/indexedDB";

export async function displayPlanets(element) {
  element.innerHTML = "";
  const pageNumber = sessionStorage.getItem("pageNumber") || 1;

  db.planets
    .where("page")
    .equals(pageNumber)
    .toArray()
    .then((planets) => {
      console.log(planets);
      if (planets.length) {
        planets.forEach((planet, i) => {
          const p = document.createElement("p");
          p.innerText = planet.name;
          element.appendChild(p);
        });
        return;
      } else {
        const response = fetch(
          "https://swapi.dev/api/planets?page=" + pageNumber
        )
          .then((response) => response.json())
          .then((result) => {
            result.results.forEach((planet) => {
              db.planets.add({
                id: planet.url.split("/").reverse()[1],
                name: planet.name,
                page: pageNumber,
              });
              const p = document.createElement("p");
              p.innerText = planet.name;
              element.appendChild(p);
            });
          });
      }
    });

  return;
}

export const fetchNextPage = async (button, number) => {
  button.addEventListener("click", async (e) => {
    e.preventDefault();
    let pageNumber = sessionStorage.getItem("pageNumber") || 1;
    pageNumber = Number(pageNumber) + number;
    sessionStorage.setItem("pageNumber", pageNumber);
    displayPlanets(document.getElementById("list"));
  });
};
