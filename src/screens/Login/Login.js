import React, { useState } from "react";
import "./Login.css";
import axios from '../../axios';

import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const login = async (event) => {
        event.preventDefault();
        const loginResponse = await axios({
            method: "post",
            url: "/login",
            data: { email: email, password: password }
        });
        console.log(loginResponse);
        if (loginResponse.data.message === 'Success') {
            localStorage.removeItem('token');
            localStorage.setItem('token', loginResponse.data?.token);
            navigate("/home");
        } else {
            setMessage(loginResponse.data.message);
        }
    };

    const register = async (event) => {
        event.preventDefault();
        console.log('clicked');
        const registerResponse = await axios({
            method: "post",
            url: "/register",
            data: { email: email, password: password }
        });
        console.log('registerResponse: ' + registerResponse);
        if (registerResponse.data?.message === "Success") {
            setMessage('');
            localStorage.removeItem('token');
            localStorage.setItem('token', registerResponse.data?.token);
            navigate('/home');
        } else {
            setMessage(registerResponse.data.message);
        }
    };

    return (
        <div className="login">
            <h1>Movies</h1>
            <div className="login__container">
                <h1 className="h1__1">Sign in</h1>
                {message && (<p>{message}</p>)}
                <form>
                    <h5>E-mail</h5>
                    <input
                        type="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                    <h5>Password</h5>
                    <input
                        type="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                    <button onClick={login} type="submit" className="login__signInButton">
                        Sign in
                    </button>
                </form>
                <button onClick={register} className="login__registerButton">
                    Create Your Amazon Account
                </button>
            </div>
        </div >
    );
};

export default Login;
