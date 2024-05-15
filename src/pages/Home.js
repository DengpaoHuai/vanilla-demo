export default function Home() {
  const element = document.createElement("div");

  element.innerHTML = `
      <h1>Bienvenue sur mon site !</h1>
        <p id="montext">Vous êtes sur la page d'accueil</p>
        <button
            id="change-content"
        >
        changer le contenu du paragraphe
        </button>
        <a href="/demo" data-link>Aller à la page de démonstration</a>
      `;

  return element;
}
