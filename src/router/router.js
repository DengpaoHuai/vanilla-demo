import Demo from "../pages/Demo";
import Home from "../pages/Home";

const routes = {
  "/": Home,
  "/demo": Demo,
};

function router() {
  const content = document.getElementById("app");
  const path = window.location.pathname;

  content.innerHTML = "";
  content.appendChild(routes[path]());
}

window.addEventListener("popstate", router);

export default router;
