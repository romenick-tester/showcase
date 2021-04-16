import React from "react";
import styled from "styled-components";
import { useGlobalContext } from "../../assets";

const Sidebar = () => {
    const { sidebar } = useGlobalContext();


    return (
        <Wrapper className={sidebar ? "toggle" : null}>
            <header>
                <h4>sidebar component</h4>
            </header>
            <main>
                <ul>
                    <li>Link 1</li>
                    <li>Link 2</li>
                    <li>Link 3</li>
                </ul>
            </main>
            <footer>
                <p>icons</p>
            </footer>
        </Wrapper>
    )
};

const Wrapper = styled.aside`
    min-width: 100%;
    min-height: 600px;
    position: fixed;
    left: 0;
    top: 4rem;
    transform: translateX(-100%);
    z-index: 10;

    border: 1px solid black;
    border-bottom-right-radius: 2rem;
    background-color: white;
    display: flex;
    flex-direction: column;
    
    &.toggle {
        transform: translateX(-100%);
    }

    header {
        background-color: #999;
        padding: 1rem 0 1rem 1rem;
        box-shadow: inset -2px -2px 2px #333;
    }
    
    main {
        flex: 1;
        padding: 1rem;
    }
    
    footer {
        border-bottom-right-radius: 2rem;
        background-color: #999;
        padding: 1rem 0;
        box-shadow: inset 0 2px 2px #333;

        display: flex;

        p {
            margin: auto;
        }
    }

    @media screen and (max-width: 500px) {
        transform: translateX(0);
    }
`

export default Sidebar;