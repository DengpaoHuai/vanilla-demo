import router from "../router/router";
import { movieSchema } from "../schemas/movie.schema";
import movieStore from "../store/movies.store";

const MovieForm = () => {
  const element = document.createElement("div");

  const div = document.createElement("div");
  const h1 = document.createElement("h1");
  h1.textContent = "Ajouter un film";
  const form = document.createElement("form");
  form.id = "movie-form";
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    const movie = await movieSchema.validate(data);

    fetch("http://localhost:3000/movies/create", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(movie),
    }).then((response) => {
      response.json().then((result) => {
        movieStore.setState({
          movies: [...movieStore.getState().movies, result],
        });

        history.pushState(null, null, "/");
        router();
      });
    });
  });

  form.innerHTML = `
        <label for="title">Titre</label>
        <input type="text" name="title" id="title" required>
        <label for="release-date">Date de sortie</label>
        <input type="date" name="date" id="release-date" required>
        <input type="number" name="rating" id="rating" required>
        <button type="submit">Ajouter</button>
    `;

  div.appendChild(h1);
  div.appendChild(form);
  element.appendChild(div);

  return element;
};

export default MovieForm;
