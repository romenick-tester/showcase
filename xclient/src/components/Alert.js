import React, { useState, useEffect } from 'react';
import styled from "styled-components";

function Alert() {
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        let item1 = setTimeout(() => {
            setIsActive(true);

            setTimeout(() => {
                setIsActive(false)
            }, 3000)
        }, 3000);

        return () => {
            clearTimeout(item1);
        }
    }, [])

    return (
        <Wrapper className={`${isActive ? "active" : null}`}>
            <h4>alert component</h4>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    position: fixed;
    top: 10px;
    right: 0;
    z-index: 100;
    max-width: 10vw;
    transform: translateX(100%);
    transition: 1s ease;

    background: yellow;
    padding: 0.5rem;
    color: black;

    &.active {
        transform: translateX(0);
    }
`

export default Alert;
