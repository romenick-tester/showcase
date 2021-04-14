import React from 'react';
import styled from "styled-components";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <Wrapper>
            <small>Copyright {currentYear}</small>
        </Wrapper>
    )
};

const Wrapper = styled.footer`
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    display: flex;
    background-color: #333;
    padding: 5px 0;
    color: white;
    box-shadow: inset 0 2px 5px #111;
    
    small {
        margin: auto;
    }
`

export default Footer;