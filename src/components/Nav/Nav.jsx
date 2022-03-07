import "./Nav.scss";

const Nav = () => {
  return (
    <nav className="nav">
      <a className="logo" href="/">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/gmt-db.appspot.com/o/mylogo1.png?alt=media&token=bb991363-adb0-4f3d-b229-4b8b3727bf0c"
          alt="Logo"
        />
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
