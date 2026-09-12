import React from "react";
import "../auth.form.scss";
import { Link } from "react-router";

const Login = () => {
  // e in this function means event, which is an object that represents the event that occurred. in this case,
  // the event if the form submission. e.preventDefault() is a method that prevents the default behaviour of the
  // form submission, which is to reload the page. we want to prevent that because we want to handle the form submission ourseleves,
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <main>
      <div className="form-container">
        <h1>Login</h1>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
            />
          </div>

          <button clasName="button primary-button">Login</button>
        </form>

        <p>
          Don't have an account? <Link to={"/register"}>Register</Link>
        </p>
      </div>
    </main>
  );
};

export default Login;
