import React, { FC } from "react";
import "./Footer.css";
import ScrollLoad from "../ScrollLoad/ScrollLoad";

const Footer: FC<{ visible: boolean }> = props => {

  return (
    <>
      {props.visible ? (
        <div className="footer" id="observed-footer">
          <span>
            ---------------------------到底了----------------------------
          </span>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <ScrollLoad text={"foot"}></ScrollLoad>
        </div>
      ) : null}
    </>
  );
};

export default Footer;
