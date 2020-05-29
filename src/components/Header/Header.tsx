import React, { FC } from "react";
import Search from "../Search/Search";
import "./Header.scss";

const Header: FC = () => {
    return (
        <div>
            <cite className="app-title">S · C · Q</cite>
            <br></br>
            <div className="description-container">
            <span className="description">A Chinese Poetry Web Page.</span>
            </div>
            <Search></Search>
        </div>
    );
};

export default Header;
