import { useRef, useState } from "react"
import "./register.scss"

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const emailRef = useRef();
    const passwordRef = useRef();

    const handleStart = () => {
        setEmail(emailRef.current.value);
    }
    const handleFinish = () => {
        setPassword(passwordRef.current.value);
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
                    <button className="loginButton">Sign in</button>
                </div>
            </div>
            <div className="container">
                <h1>Unlimited movies, Tv shows, and more.</h1>
                <h2>Unlimited movies, Tv shows, and more.</h2>
                <p>
                    Ready to watch? Enter your email too create or restart your membership.
                </p>
                { !email ? (
                    <div className="input">
                        <input
                          placeholder="Email Address"
                          ref={ emailRef }
                          type="email"
                        />
                        <button
                          className="registerButton"
                          onClick={ () => handleStart() }
                        >Get Started</button>
                    </div>
                ): (
                    <form className="input">
                        <input
                          placeholder="password"
                          ref={ passwordRef }
                          type="password"
                        />
                        <button
                          className="registerButton"
                          onClick={ () => handleFinish() }
                        >Start</button>
                    </form>
                )}
            </div>
        </div>
    )
}

export default Register
