export async function displayPlanets(element) {
  const response = await fetch("https://swapi.dev/api/planets");
  const result = await response.json();

  let html = "";

  result.results.forEach((element) => {
    html += `<div>${element.name}</div>`;
  });

  element.innerHTML = html;
}
