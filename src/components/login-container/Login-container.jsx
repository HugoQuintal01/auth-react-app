import React, { useState } from "react";
import HideLogin from "../hide-login/Hide-login";
import Login from "../login/Login";
import Register from "../register/Register";

const LoginContainer = () => {
    const [hideLoginActive, setHideLoginActive] = useState(false);

    const toggleHideLogin = () => {
        setHideLoginActive(!hideLoginActive);
    };

    return (
        <section className="login-section gridrowfull">
            <Login toggleHideLogin={toggleHideLogin} />
            <Register toggleHideLogin={toggleHideLogin} />
            <HideLogin isActive={hideLoginActive} />
        </section>
    );
}

export default LoginContainer;
