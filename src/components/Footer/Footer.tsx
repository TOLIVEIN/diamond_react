import React, { FC } from "react";
import "./Footer.css";

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
        </div>
      ) : null}
    </>
  );
};

export default Footer;
