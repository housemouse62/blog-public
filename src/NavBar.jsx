import { Link } from "react-router-dom";
import { useAuth } from "./AuthContext";

function NavBar() {
  const { userState, setTokenState, setUserState } = useAuth();

  function handleLogout() {
    if (confirm("Are you sure you want to logout?")) {
      setTokenState("");
      setUserState("");
      localStorage.removeItem("token");
    }
  }

  console.log(userState);
  return (
    <nav>
      <div className="nav-bar">
        <Link to="/home">Home</Link>
        <Link to="/posts">Blog</Link>
        {userState ? (
          <Link onClick={handleLogout}>Log Out</Link>
        ) : (
          <Link to="/login">Log In</Link>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
