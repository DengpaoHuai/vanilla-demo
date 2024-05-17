export default function Camera() {
  navigator.vibrate([200, 100, 200]);
  const element = document.createElement("div");
  element.innerHTML = `
          <h1>Bienvenue sur la caméra</h1>
          `;

  return element;
}
