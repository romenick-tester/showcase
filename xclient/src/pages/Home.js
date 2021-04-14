import React from "react";
import styled from "styled-components";

const Home = () => {

    return (
        <Wrapper>
            <header>
                <h1>home page</h1>
            </header>
            <main>
                <article>article 1</article>
                <article>article 2</article>
                <article>article 3</article>
                <article>article 4</article>
                <article>article 5</article>
                <article>article 6</article>
            </main>
            <footer>
                <small>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente, expedita?</small>
            </footer>
        </Wrapper>
    )
};

const Wrapper = styled.main`
    max-width: 1200px;
    margin: 4rem auto 1.6rem auto;
    
    @media screen and (max-width: 678px) {
        /* background-color: red; */
        display: grid;
        grid-template-columns: 1fr;
        grid-auto-rows: minmax(3rem, auto);
        grid-gap: 0.5rem;
        padding: 0 2rem;
        
        main {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            
            article {
                border: 1px solid black;
                display: inline-block;
                min-height: 350px;
            }
        }
    }
    
    @media screen and (min-width: 678px) and (max-width: 960px) {
        /* background-color: orangered; */
        
        main {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-auto-rows: minmax(3rem, auto);
            grid-gap: 1rem;
            
            article {
                border: 1px solid black;
                display: inline-block;
                min-height: 350px;
                max-width: calc(350px * 2);
            }
        }
    }
    
    @media screen and (min-width: 960px) and (max-width: 1200px) {
        /* background-color: yellow; */

        main {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            grid-auto-rows: minmax(3rem, auto);
            grid-gap: 1rem;

            article {
                border: 1px solid black;
                display: inline-block;
                min-height: 350px;
                max-width: calc(350px * 2);
            }
        }
    }
    
    
    @media screen and (min-width: 1200px) {

        main {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr;
            grid-auto-rows: minmax(3rem, auto);
            grid-gap: 1rem;

            article {
                border: 1px solid black;
                display: inline-block;
                min-height: 350px;
                max-width: calc(350px * 2);
            }
        }
    }
    `

export default Home;