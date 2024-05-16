import movieStore from "../store/movies.store";

const painting = (movies, element) => {
  element.innerHTML = "";
  const title = document.createElement("h1");
  title.textContent = "Voici la liste des films :";
  element.appendChild(title);

  movies.forEach((movie) => {
    const p = document.createElement("p");
    p.textContent = movie.title;
    element.appendChild(p);
  });
};

export default function Home() {
  const element = document.createElement("div");
  const { movies } = movieStore.getState();

  const getMovies = () => {
    fetch(
      "https://crudcrud.com/api/7dcd8ae40cad4534b61952906e39c3e0/movies"
    ).then((response) => {
      response.json().then((data) => {
        movieStore.setState({ movies: data });
        painting(data, element);
      });
    });
  };
  if (movies.length === 0) getMovies();

  painting(movies, element);

  return element;
}
