import React, { FC } from "react";
import "./Header.css";
// import ScrollLoad from "../ScrollLoad/ScrollLoad";
import Search from "../Search/Search";

const Header: FC = () => {
  return (
    <div>
      <h1>S · C · Q</h1>

      <Search></Search>

      {/* <ScrollLoad></ScrollLoad> */}
      {/* <ScrollLoad text={'aaaa'}></ScrollLoad> */}
    </div>
  );
};

export default Header;
