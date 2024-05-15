const MovieForm = () => {
  const element = document.createElement("div");

  element.innerHTML = `
    <h1>Ajouter un film</h1>
    <form id="movie-form">
        <label for="title">Titre</label>
        <input type="text" name="title" id="title" required>
        <label for="release-date">Date de sortie</label>
        <input type="date" name="release-date" id="release-date" required>
        <label for="synopsis">Synopsis</label>
        <textarea name="synopsis" id="synopsis" required></textarea>
        <button type="submit">Ajouter</button>
    </form>
    `;

  return element;
};

export default MovieForm;
