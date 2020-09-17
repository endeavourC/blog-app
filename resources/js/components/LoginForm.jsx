import React, { useState } from "react";
import { Inertia } from "@inertiajs/inertia";
const LoginForm = () => {
    const [values, setValues] = useState({
        email: "",
        password: "",
        remember: false
    });

    const handleChange = ev => {
        const currentField = ev.target.id;
        const value =
            ev.target.type === "checkbox" ? ev.target.checked : ev.target.value;
        setValues(values => {
            return {
                ...values,
                [currentField]: value
            };
        });
    };

    const handleSubmit = ev => {
        ev.preventDefault();
        Inertia.post("/login", values);
    };
    return (
        <form className="form" action="">
            <div className="form__input-container">
                <label htmlFor="email" className="form__label">
                    E-mail
                </label>
                <input
                    type="text"
                    id="email"
                    value={values.email}
                    className="form__input"
                    onChange={handleChange}
                />
            </div>
            <div className="form__input-container">
                <label htmlFor="password" className="form__label">
                    Password
                </label>
                <input
                    type="password"
                    id="password"
                    className="form__input"
                    value={values.password}
                    onChange={handleChange}
                />
            </div>
            <div className="form__input-container form__input-container--row">
                <label htmlFor="remember">Remember Me</label>
                <input
                    type="checkbox"
                    className="form__checkbox"
                    id="remember"
                    value={values.remember}
                    onChange={handleChange}
                />
            </div>
            <div className="form__input-container">
                <button onClick={handleSubmit} className="form__btn">
                    Log in
                </button>
            </div>
        </form>
    );
};

export default LoginForm;
