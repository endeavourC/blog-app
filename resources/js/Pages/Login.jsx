import React, { useState } from "react";
import Layout from "./Layout";
import LoginForm from "../components/LoginForm";
import { InertiaLink } from "@inertiajs/inertia-react";

const Login = () => {
    return (
        <Layout title="Blog App - Login">
            <div className="container container--center">
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