import movieStore from "../store/movies.store";

export default function Home() {
  const element = document.createElement("div");
  const { movies } = movieStore.getState();

  const title = document.createElement("h1");
  title.textContent = "Voici la liste des films :";
  element.appendChild(title);

  movies.forEach((movie) => {
    const p = document.createElement("p");
    p.textContent = movie.title;
    element.appendChild(p);
  });

  return element;
}
