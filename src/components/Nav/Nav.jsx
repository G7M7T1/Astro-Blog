import "./Nav.scss";

const Nav = () => {
  return (
    <nav className="nav">
      <div className="logo">
        <img src="mylogo1.png" alt="Logo" />
        <h3>GMT</h3>
      </div>

      <ul className="navlink">
        <li>
          <a href="/about">Blog</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
      </ul>
    </nav>
  );
};
export default Nav;
