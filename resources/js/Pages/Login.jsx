import React, { useState } from "react";
import Layout from "./Layout";
import LoginForm from "../components/LoginForm";
import { InertiaLink } from "@inertiajs/inertia-react";
import { showAlert } from "../helpers/alert";
const Login = ({ errors }) => {
    return (
        <Layout title="Blog App - Login">
            <div className="container container--center">
                {showAlert(errors, "error")}
                <div className="headline">
                    <InertiaLink
                        className="switcher switcher--active"
                        href="/login"
                    >
                        Login
                    </InertiaLink>
                    /
                    <InertiaLink className="switcher" href="/register">
                        Register
                    </InertiaLink>
                </div>
                <LoginForm />
            </div>
        </Layout>
    );
};

export default Login;
