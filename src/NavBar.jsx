import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <div className="nav-bar">
        <Link to="/home">Home</Link>
        <Link to="/posts">Blog</Link>
        <Link to="/login">Log In</Link>
      </div>
    </nav>
  );
}

export default NavBar;
