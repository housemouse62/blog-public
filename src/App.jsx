import { useState } from "react";
import Header from "./Header";
import NavBar from "./NavBar";
import "./App.css";
import Blog from "./Blog";
import Login from "./Login";

const NAV_SECTIONS = ["Home", "Blog", "Log In"];

function App() {
  const [activeSection, setActiveSection] = useState("Home");

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to main content
      </a>

      <Header
        sections={NAV_SECTIONS}
        active={activeSection}
        onChange={setActiveSection}
      >
        <NavBar />
      </Header>

      <main id="main" className="main-bg">
        <div className="site-main">
          {activeSection === "Home" && (
            <>
              <div>
                <h1 className="home">Welcome To Thought Windows</h1>
                <h2 className="home">things we've been thinking on</h2>
              </div>
            </>
          )}
          {activeSection === "Blog" && <Blog />}
          {activeSection === "Login" && <Login />}
        </div>
      </main>
    </>
  );
}

export default App;
