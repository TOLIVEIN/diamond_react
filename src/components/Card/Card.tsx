import React, { FC, useState } from "react";
import shortid from "shortid";
import Detail from "../Detail/Detail";
import "./Card.scss";
import { exchangeSC } from "../../config/utils";
import { PoetryDetail } from "../../model/data";

const Card: FC<{
    id: string;
    passRef?: any;
    head: string[];
    body: string[] | string | undefined;
    notes?: string[];
    foot?: string;
}> = (props: any) => {
    const [visible, setVisible] = useState(false);

    const initialDetail: PoetryDetail = {
        head: [],
        body: [],
        notes: [],
    };
    const [detail, setDetail] = useState<PoetryDetail>(initialDetail);

    const showDetail = () => {
        if (props.head) {
            props.head.forEach((element: string) => {
                // console.log(`head: ${element}`);
                detail.head.push(exchangeSC(element));
            });
        }
        // console.log(`detail head: ${detail.head}`);

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
    }

    return (
        <div className="card-container" ref={props.passRef} id={props.id}>
            <div
                className="card"
                id="card"
                key={shortid.generate()}
            >
                <button
                    className="detail-button"
                    onClick={showDetail}
                >
                    detail
                </button>
                <Detail
                    visible={visible}
                    // buttons={[
                    //     <button
                    //         onClick={() => {
                    //             setVisible(false);
                    //             setDetail(initialDetail);
                    //         }}
                    //     >
                    //         1
                    //     </button>,
                    //     <button
                    //         onClick={() => {
                    //             setVisible(false);
                    //             setDetail(initialDetail);
                    //         }}
                    //     >
                    //         2
                    //     </button>,
                    // ]}
                    onClose={() => {
                        setVisible(false);
                        setDetail(initialDetail);

                    }}
                    detail={detail}
                >
                    {/* <strong>{[detail.head, detail.body, detail.notes]}</strong> */}
                </Detail>
                <div className="card-head">
                    <blockquote className="title">{props.head[0]}</blockquote>
                    <blockquote className="author">{props.head[1]}</blockquote>
                </div>

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
