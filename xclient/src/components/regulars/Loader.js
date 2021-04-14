import React from "react";
import styled from "styled-components";
import spinner from "../manager/images/miscs/spinner.gif";

export default function Loader() {

    return <Spinner src={spinner} alt="loading" />
}

const Spinner = styled.img`
    width: "100px",
    height: "100px",
    margin: "auto",
    display: "block"
`