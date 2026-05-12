import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "./CreateUser.css";

function CreateUser() {
  const [nameState, setNameState] = useState("");
  const [screennameState, setScreennameState] = useState("");
  const [emailState, setEmailState] = useState("");
  const [confirmEmailState, setConfirmEmailState] = useState("");
  const [passwordState, setPasswordState] = useState("");
  const [confirmPasswordState, setConfirmPasswordState] = useState("");

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    const fetchCreate = async () => {
      const url = "http://localhost:3000/users/create/";
      try {
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            screenname: screennameState,
            email: emailState,
            confirmEmail: confirmEmailState,
            password: passwordState,
            confirmPassword: confirmPasswordState,
            name: nameState,
          }),
        });
        const nextresponse = await response.json();
        if (nextresponse.id) {
          alert("User Created");
          navigate("/createUser");
        } else alert("Hmmm, try again.");
      } catch (error) {
        console.error(error);
      }
    };
    fetchCreate();
  }

  return (
    <>
      <div className="create-div">
        <form className="create-form" onSubmit={handleSubmit}>
          <div className="form-fields">
            <div className="create-user">
              <h1>Register</h1>
            </div>
            <div className="form-field">
              <label className="form-label">
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="form-input"
                  placeholder=" "
                  value={nameState}
                  onChange={(e) => setNameState(e.target.value)}
                  autoComplete="name"
                />
                <span>Name</span>
              </label>
            </div>
            <div className="form-field">
              <label className="form-label">
                <input
                  type="text"
                  name="screenname"
                  id="screenname"
                  className="form-input"
                  placeholder=" "
                  value={screennameState}
                  onChange={(e) => setScreennameState(e.target.value)}
                />
                <span>Screename</span>
              </label>
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
                  autoComplete="email"
                  required
                />
                <span>Email</span>
              </label>
            </div>
            <div className="form-field">
              <label className="form-label">
                <input
                  type="email"
                  name="confirmEmail"
                  id="confirmEmail"
                  className="form-input"
                  placeholder=" "
                  value={confirmEmailState}
                  onChange={(e) => setConfirmEmailState(e.target.value)}
                  autoComplete="email"
                  required
                />
                <span>Confirm Email</span>
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
                  autoComplete="current-password"
                  required
                />
                <span>Password</span>
              </label>
            </div>
            <div className="form-field">
              <label className="form-label">
                <input
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  className="form-input"
                  placeholder=" "
                  value={confirmPasswordState}
                  onChange={(e) => setConfirmPasswordState(e.target.value)}
                  autoComplete="current-password"
                  required
                />
                <span>Confirm Password</span>
              </label>
            </div>
          </div>
          <button type="submit" className="form-button">
            Register User
          </button>
        </form>
        Already a User?{" "}
        <Link className="login-link" to="/">
          Login here.
        </Link>
      </div>
    </>
  );
}

export default CreateUser;
