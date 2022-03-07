import "./Nav.scss";

const Nav = () => {
  return (
    <nav className="nav">
      <a className="logo" href="/">
        <img src="mylogo1.png" alt="Logo" />
        <h3>GMT</h3>
      </a>

      <ul className="navlink">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/blogs">Blog</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
      </ul>
    </nav>
  );
};
export default Nav;
