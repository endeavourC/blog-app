import React from "react";
import { InertiaLink, usePage } from "@inertiajs/inertia-react";

const Header = () => {
    const { auth } = usePage();
    console.log(auth);
    return (
        <header className="header">
            <div className="container header__container">
                <div className="header__logo">BlogApp</div>
                <nav className="header__navigation">
                    <InertiaLink className="header__link" href="/">
                        Home
                    </InertiaLink>
                    <InertiaLink className="header__link" href="/blog">
                        Blog
                    </InertiaLink>
                    {auth.user === null ? (
                        <InertiaLink
                            className="header__link header__link--btn"
                            href="/login"
                        >
                            Login
                        </InertiaLink>
                    ) : (
                        <InertiaLink
                            className="header__link header__link--btn"
                            href="/logout"
                        >
                            Logout
                        </InertiaLink>
                    )}
                </nav>
            </div>
        </header>
    );
};

export default Header;
