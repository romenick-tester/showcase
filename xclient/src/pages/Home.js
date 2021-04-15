import React from "react";
import { Article } from "../components";
import { useGlobalContext } from "../assets";

const Home = () => {
    const { list: pokemon } = useGlobalContext();

    return (
        <main id="homepage">
            <header>
                <h1>home page</h1>
            </header>
            <main>
                {pokemon.map((item, index) => {
                    return <Article key={item._id} {...item} index={index + 1} />
                })}
            </main>
            <footer>
                <small>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente, expedita?</small>
            </footer>
        </main>
    )
};

export default Home;