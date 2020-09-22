import React from "react";
import Layout from "./Layout";
import HeroPosts from "../components/HeroPosts";

const Frontpage = ({ posts }) => {
    return (
        <Layout title="Blog App - Home Page">
            <HeroPosts posts={posts} />
        </Layout>
    );
};

export default Frontpage;
