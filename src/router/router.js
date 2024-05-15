import Header from "../layouts/Header";
import Demo from "../pages/Demo";
import Home from "../pages/Home";
import MovieForm from "../pages/MovieForm";

const routes = {
  "/": Home,
  "/demo": Demo,
  "/create_movie": MovieForm,
};

document.body.prepend(Header());

function router() {
  const content = document.getElementById("app");
  const path = window.location.pathname;

  content.innerHTML = "";
  content.appendChild(routes[path]());
}

window.addEventListener("popstate", router);

export default router;
