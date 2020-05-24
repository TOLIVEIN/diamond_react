import React, { FC } from "react";
import "./Footer.scss";
// import ScrollLoad from "../ScrollLoad/ScrollLoad";

const Footer: FC<{ ref?: any; visible: boolean }> = (props) => {
    // const footerRef: any = createRef();

    return (
        <>
            {/* {props.visible ? ( */}
            <div className="footer" id="observed-footer">
                <span>
                    {/* ---------------------------到底了---------------------------- */}
                </span>
                {/* <ScrollLoad passRef={footerRef} text={"foot"}></ScrollLoad> */}
            </div>
            {/* ) : null} */}
            {/* {Array.from(
        {length: 100},
        (text, index) => (
          <ScrollLoad key={index} passRef={footerRef} text={`第${index+1}个元素`}></ScrollLoad>
        )
      )} */}
        </>
    );
};

export default Footer;
