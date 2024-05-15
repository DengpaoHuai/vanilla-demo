export default function Demo() {
  const element = document.createElement("div");
  element.innerHTML = `
        <h1>Bienvenue sur la page de démonstration !</h1>
            <p>Vous êtes sur la page de démonstration</p>
        `;

  return element;
}
