import movieStore from "../store/movies.store";

const deleteMovie = (id, movies) => {
  fetch(
    `https://crudcrud.com/api/7dcd8ae40cad4534b61952906e39c3e0/movies/${id}`,
    {
      method: "DELETE",
    }
  )
    .then(() => {
      movieStore.setState({
        movies: movies.filter((movie) => movie._id !== id),
      });
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

const paintMovies = (movies, element) => {
  const title = document.createElement("h1");
  title.textContent = "Voici la liste des films :";
  element.appendChild(title);

  movies.forEach((movie) => {
    const p = document.createElement("p");
    p.textContent = movie.title;
    element.appendChild(p);
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Supprimer";
    deleteButton.addEventListener("click", () =>
      deleteMovie(movie._id, movies)
    );
    element.appendChild(deleteButton);
  });
};

export default function Home() {
  const element = document.createElement("div");
  const movies = movieStore.getState().movies;

  if (movies.length === 0) {
    fetch("https://crudcrud.com/api/7dcd8ae40cad4534b61952906e39c3e0/movies")
      .then((response) => response.json())
      .then((data) => {
        movieStore.setState({ movies: data });
      });
  }

  paintMovies(movies, element);

  movieStore.subscribe("movies", (moviesList) => {
    element.innerHTML = "";
    paintMovies(moviesList, element);
  });

  return element;
}
