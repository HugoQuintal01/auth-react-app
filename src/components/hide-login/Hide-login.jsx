import React from "react";

const HideLogin = ({ isActive }) => {
    return (
        <div className={`hide-login ${isActive ? "active" : ""}`} id="hide-login-id">
            <h2>Welcome</h2>
        </div>
    );
}

export default HideLogin;
