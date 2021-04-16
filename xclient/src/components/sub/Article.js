import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import no_image from "../../assets/images/miscs/whosthatpokemon.jpg";

const Article = ({ _id, name, type1, type2, image, level, color }) => {

    return (
        <Wrapper style={{ backgroundColor: color }}>
            <div className="section-header">
                <div className="header-title">
                    <h4>{name}</h4>
                    <p>{level}</p>
                </div>
                <div className="header-image">
                    <img
                        src={image === "na" ? no_image : image}
                        alt={name}
                    />
                </div>
            </div>
            <div className="section-body">
                <div className="info">
                    <p className="show"><span>Name: </span> {name}</p>
                </div>
                <div className="btn-wrapper">
                    <Link to={`/pokemon/${_id}`}>details</Link>
                </div>
            </div>
        </Wrapper>
    )
};

const Wrapper = styled.article`
    //desktop[1200] => laptop[1024] => tablet[768] => iphone[520] => phone[480]
    //> * { border: 1px dashed red }

    background-color: lightblue;
    font-size: 15px;
    border-radius: 5px;
    padding: 0.8rem;

    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: minmax(1rem, auto);

    .section-header {
        display: flex;
        flex-direction: column;

        .header-title { display: flex; justify-content: space-between }
        .header-image { width: 100%; margin-top: 2rem }
        .header-image img { width: 100%; height: 200px; object-fit: contain }

        @media screen and (max-width: 520px) {
            .header-image { margin-top: 0 }
        }
    }

    .section-body {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        //> * { border: 1px dashed yellow }

        p span { font-weight: 600; text-transform: capitalize }
        .info .show { display: none }
        .btn-wrapper { display: flex }
        .btn-wrapper a {
            margin: auto; 
            cursor: pointer; 
            padding: 0.5rem 1rem;
            border: 1px solid black;
            border-radius: 5px;
            color: white;
            background-color: black; 
        }
    }

    @media screen and (max-width: 520px) {
        grid-template-columns: 3fr 2fr;
        .section-header .header-title  p, h4 { display: none }
        .section-body { margin-left: 0.5rem }
        .section-body .info p.show { display: block }
        .section-body .info { line-height: 2rem }
    }
`

export default Article;