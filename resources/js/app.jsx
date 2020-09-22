require("./bootstrap");
import { InertiaApp } from "@inertiajs/inertia-react";
import React from "react";
import { render } from "react-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

const app = document.getElementById("app");

const App = () => {
    return (
        <>
            <InertiaApp
                initialPage={JSON.parse(app.dataset.page)}
                resolveComponent={name =>
                    import(`./Pages/${name}`).then(module => module.default)
                }
            />
            <ToastContainer />
        </>
    );
};

render(<App />, app);
