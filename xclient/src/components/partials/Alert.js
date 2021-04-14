import React, { useState, useEffect } from 'react';
import styled from "styled-components";

function Alert() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        let item1 = setTimeout(() => {
            setShow(true);

            setTimeout(() => {
                setShow(false)
            }, 3000)
        }, 3000);

        return () => {
            clearTimeout(item1);
        }
    }, [])

    return (
        <Wrapper className={`${show ? "active" : null}`}>
            <h4>alert component</h4>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    min-width: 100px;
    position: fixed;
    top: 15px;
    right: 0;
    transform: translateX(100%);
    transition: ease 1s;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    background: yellow;
    padding: 0.5rem;
    color: black;
    z-index: 100;

    &.active {
        transform: translateX(0);
    }
`

export default Alert;
