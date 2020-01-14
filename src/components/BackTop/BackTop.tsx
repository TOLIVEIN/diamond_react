import React, { FC } from "react";
import backtop from '../../assets/icons/backtop.png';
import "./BackTop.css";

const BackTop: FC<{ position ?: string }> = (props) => {
    return (
        <div className="back-top">

        <img src={backtop} alt=""/>
        </div>
    )
}

export default BackTop;