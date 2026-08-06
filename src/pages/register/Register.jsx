import { useRef, useState } from "react"
import "./register.scss"
import { getBaseUrl } from "../../../api-config";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const baseURL = getBaseUrl();

const Register = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const emailRef = useRef();
  const passwordRef = useRef();
  const userNameRef = useRef();

  const handleStart = () => {
    setEmail(emailRef.current.value);
  }
  const handleFinish = async (e) => {
    e.preventDefault();
    const username = userNameRef.current.value;
    const password = passwordRef.current.value;
    try {
      await axios.post(baseURL + '/api/auth/register', { email, username, password });
      navigate('/');
    } catch (error) {
      alert('Could not create user: ' + error);
    }
  }
  return (
    <div className="register">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
            alt="netflix logo"
          />
          <Link to="/login" className="loginButton">
            Sign in
          </Link>
        </div>
      </div>
      <div className="container">
        <h1>Unlimited movies, Tv shows, and more.</h1>
        <h2>Unlimited movies, Tv shows, and more.</h2>
        <p>
          Ready to watch? Enter your email too create or restart your membership.
        </p>
        {!email ? (
          <div className="input">
            <input
              placeholder="Email Address"
              ref={emailRef}
              type="email"
            />
            <button
              className="registerButton"
              onClick={() => handleStart()}
            >Get Started</button>
          </div>
        ) : (
          <form className="input" onSubmit={handleFinish}>
            <input
              placeholder="User name"
              ref={userNameRef}
              type="text"
            />
            <input
              placeholder="Password"
              ref={passwordRef}
              type="password"
            />
            <button
              className="registerButton"
              type="submit"
            >Start</button>
          </form>
        )}
      </div>
    </div>
  )
}

export default Register
