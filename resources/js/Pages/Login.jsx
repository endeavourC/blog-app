import React, { useState } from "react";
import Layout from "./Layout";
import LoginForm from "../components/LoginForm";
import { InertiaLink } from "@inertiajs/inertia-react";
import Alert from "../components/Alert";

const Login = ({ errors }) => {
    return (
        <Layout title="Blog App - Login">
            <div className="container container--center">
                {Object.keys(errors).length > 0 ? (
                    <Alert type="error" content={Object.values(errors)} />
                ) : null}
                <h2 className="headline">
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
                </h2>
                <LoginForm />
            </div>
        </Layout>
    );
};

export default Login;
