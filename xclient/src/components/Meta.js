import React from "react";
import Helmet from "react-helmet";
import PropTypes from "prop-types";

function Meta({ title, keywords, description }) {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description}></meta>
            <meta name="keyword" content={keywords}></meta>
        </Helmet>
    )
}

Meta.propsDefault = {
    title: "",
    keywords: "",
    description: "",
}

Meta.propTypes = {
    title: PropTypes.string,
    keywords: PropTypes.string,
    description: PropTypes.string,
}

export default Meta;
