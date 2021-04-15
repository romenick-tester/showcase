import React from "react";
import styled from "styled-components";
import no_image from "../../assets/images/miscs/whosthatpokemon.jpg";

const Article = ({ _id, name, type1, type2, image, level }) => {

    return (
        <Wrapper>
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
                    <p><span>type: </span>{type1}{type2 !== "na" && `/${type2}`}</p>
                </div>
                <div className="button">
                    <button type="button">details</button>
                </div>
            </div>
        </Wrapper>
    )
};

const Wrapper = styled.article`
    //$desktop: 1200px
    //$laptop: 1024px
    //$tablet: 768px
    //$iphone: 520px
    //$phone: 480px
    > * {
        border: 1px dashed red;
    }

    background-color: lightblue;
    font-size: 15px;
    border-radius: 5px;
    padding: 0.8rem;

    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: minmax(1rem, auto);

    @media screen and (max-width: 520px) {
        grid-template-columns: 3fr 2fr;
        .section-header .header-title  p, h4 { display: none }
        .section-info { padding-top: 2rem }
    }

    .section-header {
        display: flex;
        flex-direction: column;

        .header-title { display: flex; justify-content: space-between }
        .header-image { width: 100%; border: 2px double gold }
        .header-image img { width: 100%; height: 200px; object-fit: cover }
    }

    .section-body {
        display: flex;
        justify-content: space-between;

        .info .show { display: none }
        .button { display: flex }
        .button button { margin: auto }
    }
    
`

export default Article;