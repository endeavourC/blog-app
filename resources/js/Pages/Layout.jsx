import React from "react";
import Header from "../components/Header";
import { showAlert } from "../helpers/alert";
import { usePage } from "@inertiajs/inertia-react";

const Layout = ({ title, children }) => {
    const { flash } = usePage();

    if (title) {
        document.title = title;
    }

    return (
        <>
            <Header />
            {flash.message && (
                <div className="container container--center">
                    {showAlert(flash, "success")}
                </div>
            )}
            <main>{children}</main>
        </>
    );
};

export default Layout;
