import React, { useState } from "react";
import { doSignUserWithEmailAndPassword } from "../../firebase/auth";

const Login = ({ toggleHideLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            await doSignUserWithEmailAndPassword(email, password);
            alert('Login successful');
            // Here, you can redirect the user or set authentication state using the context
        } catch (error) {
            console.error('Login error:', error.message);
            alert('Invalid credentials');
        }
    };

    return (
        <form className="login-container gridrow col-d-6 col-12 col-t-6" onSubmit={handleLogin}>
            <div className="login-title col-12 col-d-12 col-t-12">
                <h3>Login</h3>
                <span>Enter your credentials to access the platform.</span>
            </div>
            <div className="login-items col-12 col-d-12 col-t-12">
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    name="email"
                    id="email-id"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    name="password"
                    id="password-id"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <span className="no-account" id="no-account-id" onClick={toggleHideLogin}>
                    Don't have an account?
                </span>
                <button type="submit">Login</button>
            </div>
        </form>
    );
}

export default Login;
