import "./Nav.css";
import { Link } from "react-router-dom";
function Nav(props) {
  const OnClickAboutHandler = (event) => {
    return props.onChangeAbout(true);
  };
  return (
    <div className="Navbar">
      <h1>
        <Link to="/">Rent App</Link>
      </h1>
      <ul>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </div>
  );
}
export default Nav;
