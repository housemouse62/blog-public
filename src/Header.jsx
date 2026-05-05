import NavBar from "./NavBar";
import logo from "../src/assets/logo.png";
import "./Header.css";

function Header({ sections, active, onChange }) {
  return (
    <header>
      <img className="logo" src={`${logo}`} />
      <NavBar sections={sections} active={active} onChange={onChange} />
    </header>
  );
}

export default Header;
