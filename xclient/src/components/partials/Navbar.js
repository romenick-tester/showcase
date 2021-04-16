import React from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "../../assets";

function Navbar() {
    const { sidebar, setSidebar } = useGlobalContext();

    return (
        <Wrapper>
            <div className="container">
                <div className="content">
                    <section className="content-title">
                        <Link to="/">
                            <h1>showcase</h1>
                        </Link>
                    </section>

                    <section className="content-links">
                        <div className="links-item">
                            <Link to="/pokemon">Pokemon</Link>
                        </div>
                        <div className="links-item">
                            <a href="#!">link 2</a>
                        </div>
                        <div className="links-item">
                            <a href="#!">link 3</a>
                        </div>
                    </section>

                    <section className="content-toggler">
                        <button type="button" onClick={() => setSidebar(!sidebar)}>
                            <FaBars />
                        </button>
                    </section>
                </div>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.nav`
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background: #333;
    color: white;
    box-shadow: inset -2px -2px 5px #111;
    z-index: 10;

    .container {
        max-width: 1200px;
        min-height: 4rem;
        max-height: 10rem;
        margin: 0 auto;
    }

    .content {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        line-height: 4rem;

        section {
            //border: 1px solid yellow;
        }

        section.content-title {
            flex: 1;
        }

        section.content-links {
            flex: 2;
            display: flex;
            flex-direction: row;
            justify-content: space-evenly;
        }

        section.content-toggler {
            display: none;
            margin-right: 2rem;

            button {
                cursor: pointer;
                font-size: 2rem;
            }
        }

        @media screen and (max-width: 678px) {
            section.content-title {
                margin-left: 2rem;
            }

            section.content-links {
                display: none;
            }

            section.content-toggler {
                display: block;
            }
        }
    }
`

export default Navbar;
