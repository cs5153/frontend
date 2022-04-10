import React from "react";
import "../../css/Image.css"
const Image = ({ source }) => (
    <img id={source} src={source} className="w-25 m-2" />
);

export default Image;