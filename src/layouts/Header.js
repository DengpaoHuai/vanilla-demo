const Header = () => {
  const element = document.createElement("div");

  element.innerHTML = `
        <header>
            <nav>
                <ul>
                    <li>
                        <a href="/" data-link>Home</a>
                    </li>
                    <li>
                        <a href="/demo" data-link>Demo</a>
                    </li>
                    <li>
                        <a href="/create_movie" data-link>Movies</a>
                    </li>
                </ul>
            </nav>
        </header>
    `;

  return element;
};

export default Header;
