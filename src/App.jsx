import Header from "./Header";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to main content
      </a>
      <Header>
        <NavBar />
      </Header>
      <main id="main" className="main-bg">
        <div className="site-main">
          <Outlet />
        </div>
      </main>
    </>
  );
}

export default App;
