import React, { useState } from "react";
import Layout from "./Layout";
import Login from "../components/Login";
import Register from "../components/Register";
import { LOGIN_FORM, REGISTER_FORM } from "../constants/auth";

const Frontpage = () => {
    const [form, setForm] = useState(LOGIN_FORM);

    const getForm = form => {
        switch (form) {
            case LOGIN_FORM:
                return <Login />;
            case REGISTER_FORM:
                return <Register />;
            default:
                return <Login />;
        }
    };
    return (
        <Layout title="Blog App - Login">
            <div className="container container--center">
                <h2 className="headline">
                    <span
                        onClick={() => setForm(LOGIN_FORM)}
                        className={`switcher ${
                            form === LOGIN_FORM ? "switcher--active" : null
                        }`}
                    >
                        Login
                    </span>{" "}
                    /{" "}
                    <span
                        onClick={() => setForm(REGISTER_FORM)}
                        className={`switcher ${
                            form === REGISTER_FORM ? "switcher--active" : null
                        }`}
                    >
                        Register
                    </span>
                </h2>
                {getForm(form)}
            </div>
        </Layout>
    );
};

export default Frontpage;
