import React, { FC, useState } from "react";
// import { AiOutlineInfoCircle } from "react-icons/all";
import shortid from "shortid";
import { exchangeSC } from "../../config/utils";
import { PoetryDetail } from "../../model/data";
import Detail from "../Detail/Detail";
import "./Card.less";

const Card: FC<{
    id: string;
    passRef?: any;
    head: string[];
    body: string[] | string | undefined;
    notes?: string[];
    author?: string;
    foot?: string;
}> = (props: any) => {
    const [visible, setVisible] = useState(false);

    const initialDetail: PoetryDetail = {
        head: [],
        body: [],
        notes: [],
    };
    const [detail, setDetail] = useState<PoetryDetail>(initialDetail);

    // console.log(`author: ${props.author}`);
    const showDetail = () => {
        if (props.head) {
            props.head.forEach((element: string) => {
                // console.log(`head: ${element}`);
                detail.head.push(exchangeSC(element));
            });
        }

        if (props.body) {
            props.body.forEach((element: string) => {
                // console.log(`body: ${element}`);

                detail.body.push(exchangeSC(element));
            });
        }
        // console.log(`detail body: ${detail.body}`);

        if (props.notes) {
            props.notes.forEach((element: string) => {
                // console.log(`notes: ${element}`);

                detail.notes.push(exchangeSC(element));
            });
        }

        setVisible(!visible);
    };

    return (
        <div className="card-container" ref={props.passRef} id={props.id}>
            <div
                className="card"
                id="card"
                key={shortid.generate()}
                onClick={(e) => {
                    if (e.target === e.currentTarget) {
                        showDetail();
                    }
                }}
            >
                {/* <AiOutlineInfoCircle
                    style={{ fontSize: 30 }}
                    className="detail-icon"
                    onClick={showDetail}
                ></AiOutlineInfoCircle> */}
                <Detail
                    visible={visible}
                    onClose={() => {
                        setVisible(false);
                        setDetail(initialDetail);
                    }}
                    detail={detail}
                ></Detail>
                {props.head.length !== 0 ? (
                    <div className="card-head">
                        <blockquote className="title">
                            {props.head[0]}
                        </blockquote>
                        <blockquote className="author">
                            {props.author ? (
                                <button
                                    className="author-button"
                                    onClick={() => {
                                        // console.log(`author: ${props.author}`);
                                    }}
                                >
                                    {props.author}
                                </button>
                            ) : (
                                props.head[1]
                            )}
                            {/* {props.head[1]} */}
                        </blockquote>
                    </div>
                ) : null}

                <div className="card-body">
                    {props.body instanceof Array ? (
                        props.body.map((b: any, i: number) => (
                            <blockquote key={i}>{b}</blockquote>
                        ))
                    ) : (
                        <blockquote>{props.body}</blockquote>
                    )}
                </div>

                {props.foot ? (
                    <div className="card-footer">
                        <blockquote>{props.foot}</blockquote>
                    </div>
                ) : null}
            </div>
        </div>
    );
};

export default Card;
