import "./Nav.css";
function Nav(props) {
  const OnClickAboutHandler =(event)=>{
    return props.onChangeAbout(true);
  }
  return (
    <div className="Navbar">
      <h1>Rent App</h1>
      <ul>
        <li>
          <a href="#">Contact</a>
        </li>
        <li>
          <a href="#" onClick={OnClickAboutHandler}>About</a>
        </li>
        <li>
          <a href="#">Profile</a>
        </li>
      </ul>
    </div>
  );
}
export default Nav;
