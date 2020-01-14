import React, { FC } from "react";
import "./Sider.css";
import BackTop from "../BackTop/BackTop";

const Sider: FC = () => {
    return(
      <div className="menu">
        <ul className="menu-option">
          <li>
            a
          </li>
          <li>
            b
          </li>
          <li>
            c
          </li>
        </ul>
        <BackTop></BackTop>
      </div>
    )
}

export default Sider;