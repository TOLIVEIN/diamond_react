import React, { FC } from "react";
import ScrollLoad from "../ScrollLoad/ScrollLoad";

const Header: FC = () => {

    return (
        <header>
            {/* <h1>S · C · Q</h1> */}
            <ScrollLoad></ScrollLoad>
            {/* <ScrollLoad text={'aaaa'}></ScrollLoad> */}
        </header>
    )

}

export default Header;