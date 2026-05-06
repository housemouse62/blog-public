function Login() {
  return (
    <>
      <div className="login-div">
        <form className="login-form" method="POST" action="/login">
          <div className="form-fields">
            <div className="login-user">
              <h1>User Login</h1>
            </div>
            <div class="form-field">
              <label for="email" className="form-label">
                E-mail Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                class="form-input"
                placeholder="thoughts@thoughtwindows.com"
                required
              />
            </div>
            <div className="form-field">
              <label for="password" className="form-label">
                Password:
              </label>
              <input
                type="password"
                name="password"
                id="password"
                class="form-input"
                placeholder="password123!"
                required
              />
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
