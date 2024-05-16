import movieStore from "../store/movies.store";

const deleteMovie = (id) => {
  fetch(
    "https://crudcrud.com/api/3dd789fdd8bc4562905efaf08df6a25d/movies/" + id,
    {
      method: "DELETE",
    }
  ).then(() => {
    const { movies } = movieStore.getState();
    movieStore.setState({ movies: movies.filter((movie) => movie._id !== id) });
  });
};

const painting = (movies, element) => {
  element.innerHTML = "";
  const title = document.createElement("h1");
  title.textContent = "Voici la liste des films :";
  element.appendChild(title);

  movies.forEach((movie) => {
    const p = document.createElement("p");
    p.textContent = movie.title;
    element.appendChild(p);
    const button = document.createElement("button");
    button.textContent = "Supprimer";
    button.onclick = () => deleteMovie(movie._id);
    element.appendChild(button);
  });
};

export default function Home() {
  const supelement = document.createElement("div");
  const p = document.createElement("p");
  p.textContent = "Bienvenue sur la page d'accueil !";
  supelement.appendChild(p);
  const element = document.createElement("div");
  supelement.appendChild(element);
  const { movies } = movieStore.getState();

  movieStore.subscribe("movies", (movies) => painting(movies, element));

  const getMovies = () => {
    fetch(
      "https://crudcrud.com/api/3dd789fdd8bc4562905efaf08df6a25d/movies"
    ).then((response) => {
      response.json().then((data) => {
        movieStore.setState({ movies: data });
      });
    });
  };
  if (movies.length === 0) getMovies();

  painting(movies, element);

  return supelement;
}
