import "./Nav.css";
function Nav(props) {
  const OnClickAboutHandler = (event) => {
    return props.onChangeAbout(true);
  };
  return (
    <div className="Navbar">
      <h1>
        <a href="/">Rent App</a>
      </h1>
      <ul>
        <li>
          <a href="/contact">Contact</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
      </ul>
    </div>
  );
}
export default Nav;
