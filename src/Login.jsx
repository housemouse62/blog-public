import "./Login.css";
import { useState } from "react";

function Login() {
  const [emailState, setEmailState] = useState("");
  const [passwordState, setPasswordState] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const fetchUser = async () => {
      const url = "http://localhost:3000/users/login/";
      try {
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            email: emailState,
            password: passwordState,
          }),
        });
        const nextresponse = await response.json();
        if (nextresponse.token) {
          alert("You are logged in");
          localStorage.setItem("token", nextresponse.token);
        } else alert("Check your login credentials");
      } catch (error) {
        console.error(error);
      }
    };
    fetchUser();
  }

  return (
    <>
      <div className="login-div">
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-fields">
            <div className="login-user">
              <h1>User Login</h1>
            </div>
            <div className="form-field">
              <label className="form-label">
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="form-input"
                  placeholder=" "
                  value={emailState}
                  onChange={(e) => setEmailState(e.target.value)}
                  required
                />
                <span>Email</span>
              </label>
            </div>
            <div className="form-field">
              <label className="form-label">
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="form-input"
                  placeholder=" "
                  value={passwordState}
                  onChange={(e) => setPasswordState(e.target.value)}
                  required
                />
                <span>Password</span>
              </label>
            </div>
          </div>
          <button type="submit" class="form-button">
            Log In
          </button>
        </form>
      </div>
    </>
  );
}

export default Login;
