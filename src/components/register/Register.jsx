import React, { useState } from "react";
import { doCreateUserWithEmailAndPassword } from "../../firebase/auth";

const Register = ({ toggleHideLogin }) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== passwordRepeat) {
            alert("Passwords do not match!");
            return;
        }

        try {
            await doCreateUserWithEmailAndPassword(email, password);
            alert('Registration successful');
            toggleHideLogin();
        } catch (error) {
            console.error('Registration error:', error.message);
            alert('Failed to register. Please try again later.');
        }
    };

    return (
        <form className="register-container login-container gridrow col-d-6 col-12 col-t-6" onSubmit={handleSubmit}>
            <div className="login-title col-12 col-d-12 col-t-12">
                <h3>Register</h3>
                <span>Create your account</span>
            </div>
            <div className="login-items col-12 col-d-12 col-t-12">
                <label htmlFor="username">Username</label>
                <input type="text" name="username" id="username-id" value={username} onChange={(e) => setUsername(e.target.value)} required />
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email-id" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password-register-id" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <input className="repeat-password" placeholder="Repeat Password" type="password" name="password-repeat" id="password-repeat-register-id" value={passwordRepeat} onChange={(e) => setPasswordRepeat(e.target.value)} required />
                <span className="have-account" id="have-account-id" onClick={toggleHideLogin}>
                    Already have an account?
                </span>
                <button type="submit">Register</button>
            </div>
        </form>
    );
};

export default Register;
