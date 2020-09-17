import React from "react";
import Header from "../components/Header";
const Layout = ({ title, children }) => {
    if (title) {
        document.title = title;
    }
    return (
        <>
            <Header />
            <main>{children}</main>
        </>
    );
};

export default Layout;
