import router from "../router/router";
import { movieSchema } from "../schemas/movie.schema";
import movieStore from "../store/movies.store";

const MovieForm = () => {
  const element = document.createElement("div");

  const h1 = document.createElement("h1");
  h1.textContent = "Ajouter un film";
  element.appendChild(h1);
  const form = document.createElement("form");
  form.id = "movie-form";
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    const movie = await movieSchema.validate(data);

    fetch("https://crudcrud.com/api/3dd789fdd8bc4562905efaf08df6a25d/movies", {
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
      <input type="date" name="release-date" id="release-date" required>
      <label for="synopsis">Synopsis</label>
      <textarea name="synopsis" id="synopsis" required></textarea>
      <button type="submit">Ajouter</button>
  `;
  element.appendChild(form);
  return element;
};

export default MovieForm;
