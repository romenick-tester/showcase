import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Article } from "../components";
import { useGlobalContext } from "../assets";
import icons from "../assets/images/icons";

const Pokemon = ({ location }) => {
    const { loading, list: pokemon, getPokemon } = useGlobalContext();

    const query = location.search ? location.search.split("=")[1] : null;

    useEffect(() => {
        if (query) {
            getPokemon(query);
        } else {
            getPokemon();
        }
    }, [query]);

    return (
        <main id="pokemon-page">
            {loading ? <h1>loading...</h1> : (
                <>
                    <header>
                        <div className="icons-wrapper">
                            {icons.map((item, index) => {

                                return (
                                    <Link to={`pokemon?type=${item.name}`} key={index}>
                                        <img src={item.icon} alt={item.name} className="type-icon" />
                                    </Link>
                                )
                            })}
                        </div>
                    </header>
                    <main>
                        {pokemon.length === 0 ? (
                            <h4>no pokemon found...</h4>
                        ) : (
                            pokemon.map((item, index) => {
                                return <Article key={item._id} {...item} index={index + 1} />
                            })
                        )}
                    </main>
                    <footer>
                        <small></small>
                    </footer>
                </>
            )}
        </main>
    )
};

export default Pokemon;