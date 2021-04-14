import React, { useState } from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";
import { RiArrowDropDownLine } from "react-icons/ri";

function Navbar() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <TopNav>
            <Container>
                <Content>
                    <section className="topnav title">
                        <h1>Showcase</h1>
                    </section>

                    <section className="topnav ads">
                        <h1>Ads Here</h1>
                    </section>

                    <section className="topnav links">
                        <div className="item link-1">
                            <Link to="/">Home</Link>
                        </div>

                        <div
                            className="item dropdown-icon"
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}>
                            <RiArrowDropDownLine style={{ fontSize: "3rem" }} />
                        </div>

                        <div
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                            className={isHovered ? "dropdown show" : "dropdown"}>
                            <div className="dropdown-item">
                                <Link to="/contacts">Contacts</Link>
                            </div>
                            <div className="dropdown-item">
                                <Link to="/accordion">Accordion</Link>
                            </div>
                        </div>
                    </section>
                </Content>
            </Container>
        </TopNav>
    )
}

const TopNav = styled.nav`
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    
    background: #333;
    color: white;
`

const Container = styled.div`
    max-width: 70vw;
    margin: 0 auto;
`

const Content = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;

    .topnav {
        height: 100%;
        flex: 1;
    }

    .topnav.links  {
        position: relative;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        cursor: pointer;
        
        .item {
            flex: 1;
        }
        
        .dropdown {
            position: absolute;
            top: 60%;
            left: 40%;

            display: flex;
            flex-direction: column;
            row-gap: 1rem;

            visibility: hidden;
            transition: 1s ease;

            width: 80%;
            padding: 1rem;
            background: white;
            border: 1px solid #333;

            .dropdown-item {
                &:hover {
                    background-color: grey;
                }
            }
        }
        
        .dropdown.show {
            visibility: visible;
            transform: translateY(30%);
        }
    }
`

export default Navbar;
