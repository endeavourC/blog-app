import React from "react";
import Header from "../components/Header";
import { usePage } from "@inertiajs/inertia-react";
import { toast } from "react-toastify";
const Layout = ({ title, children }) => {
    const { flash } = usePage();

    if (title) {
        document.title = title;
    }

    if (flash.message) {
        toast.success(flash.message);
    }

    return (
        <>
            <Header />
            <main>{children}</main>
        </>
    );
};

export default Layout;
