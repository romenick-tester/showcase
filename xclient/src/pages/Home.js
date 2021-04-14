import React from "react";
import { useGlobalContext } from "../assets";

const Home = () => {
    const data = useGlobalContext();

    console.log(data);
    return (
        <h4>home page</h4>
    )
};

export default Home;