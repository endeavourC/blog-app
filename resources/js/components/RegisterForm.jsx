import React, { useState } from "react";
import { Inertia } from "@inertiajs/inertia";

const RegisterForm = () => {
    const [values, setValues] = useState({
        email: "",
        password: "",
        password_confirmation: "",
        name: ""
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
        Inertia.post("/register", values);
    };
    return (
        <form className="form" action="">
            <div className="form__input-container">
                <label htmlFor="name" className="form__label">
                    Name
                </label>
                <input
                    type="text"
                    id="name"
                    value={values.name}
                    className="form__input"
                    onChange={handleChange}
                />
            </div>
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
            <div className="form__input-container">
                <label htmlFor="password" className="form__label">
                    Confirm Password
                </label>
                <input
                    type="password"
                    id="password_confirmation"
                    className="form__input"
                    value={values.password_confirmation}
                    onChange={handleChange}
                />
            </div>

            <div className="form__input-container">
                <button onClick={handleSubmit} className="form__btn">
                    Register
                </button>
            </div>
        </form>
    );
};

export default RegisterForm;
