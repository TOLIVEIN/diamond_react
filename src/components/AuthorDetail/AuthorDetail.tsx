import React, { FC } from "react";
import { Author } from "../../model/data";
import "./AuthorDetail.scss";
// import { createPortal } from "react-dom";

const AuthorDetail: FC<{ author: Author; visible: boolean }> = (
    props: any
) => {
    const body = props.visible ? (
        <div className="author-detail-container">
        <div className="author-detail">
            <div className="author">{props.author.name? props.author.name : null}</div>
            <div className="description">{props.author.desc ? props.author.desc : null}</div>
        </div></div>
    ) : null;

    // let authorDetailContainer = document.getElementsByClassName(
    //     "main-container"
    // )[0];
    // return createPortal(body, authorDetailContainer);
    return body;
};

export default AuthorDetail;
