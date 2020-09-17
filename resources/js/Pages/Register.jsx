import React, { useState } from "react";
import Layout from "./Layout";
import RegisterForm from "../components/RegisterForm";
import { InertiaLink } from "@inertiajs/inertia-react";

const Register = () => {
    return (
        <Layout title="Blog App - Register">
            <div className="container container--center">
                <h2 className="headline">
                    <InertiaLink className="switcher " href="/login">
                        Login
                    </InertiaLink>
                    /
                    <InertiaLink
                        className="switcher switcher--active"
                        href="/register"
                    >
                        Register
                    </InertiaLink>
                </h2>
                <RegisterForm />
            </div>
        </Layout>
    );
};

export default Register;
