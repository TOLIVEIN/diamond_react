import React, { FC } from "react";
import Search from "../Search/Search";
import "./Header.scss";

const Header: FC = () => {
    return (
        <div>
            <h1>S · C · Q</h1>
            <Search></Search>
        </div>
    );
};

export default Header;
