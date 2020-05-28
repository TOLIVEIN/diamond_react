import React, { cloneElement, FC, MouseEventHandler, ReactElement, useState } from "react";
import { createPortal } from "react-dom";
import { AiOutlineCloseCircle, AiOutlineSwitcher } from "react-icons/all";
import { PoetryDetail } from "../../model/data";
import "./Detail.scss";

const Detail: FC<{
    visible: boolean;
    buttons?: Array<ReactElement>;
    onClose: MouseEventHandler;
    closeOnClickMask?: boolean;
    detail: PoetryDetail;
}> = (props) => {
    const [horizontal, setHorizontal] = useState(false);
    const scopedClassMaker = (prefix: string) => {
        return (name?: string) => {
            return [prefix, name].filter(Boolean).join("-");
        };
    };
    const scopedClass = scopedClassMaker("detail");

    const onClickClose: MouseEventHandler = (e) => {
        props.onClose(e);
    };

    const onClickMask: MouseEventHandler = (e) => {
        if (props.closeOnClickMask) {
            props.onClose(e);
        }
    };

    const x = props.visible ? (
        <div className={scopedClass("container")}>
            <div className={scopedClass("mask")} onClick={onClickMask}></div>
            <div className={scopedClass()}>
                <AiOutlineSwitcher
                    className="direction-icon"
                    style={{ fontSize: 40 }}
                    onClick={(e) => {
                        if (!horizontal) {
                            document
                                .querySelector(".detail-content")
                                ?.setAttribute(
                                    "style",
                                    "writing-mode: horizontal-tb"
                                );
                            setHorizontal(!horizontal);
                        } else {
                            document
                                .querySelector(".detail-content")
                                ?.setAttribute(
                                    "style",
                                    "writing-mode: vertical-rl"
                                );
                            setHorizontal(!horizontal);
                        }
                        setHorizontal(!horizontal);
                    }}
                ></AiOutlineSwitcher>

                <AiOutlineCloseCircle
                    className="close-icon"
                    onClick={onClickClose}
                    style={{ fontSize: 40 }}
                ></AiOutlineCloseCircle>
                <div className={scopedClass("content")}>
                    <div
                        className={scopedClass("close")}
                        // onClick={onClickClose}
                    >
                        <p className="close"></p>
                    </div>
                    <header className={scopedClass("head")}>
                        {props.detail.head.map((h, i) => {
                            return <blockquote key={i}>{h}</blockquote>;
                        })}
                    </header>
                    <br></br>
                    <main className={scopedClass("main")}>
                        {props.detail.body.map((b, i) => {
                            return <blockquote key={i}>{b}</blockquote>;
                        })}
                    </main>
                    <footer className={scopedClass("footer")}>
                        {props.buttons
                            ? props.buttons.map((button, index) =>
                                  cloneElement(button, { key: index })
                              )
                            : null}
                    </footer>
                </div>
            </div>
        </div>
    ) : null;

    // const cardElement: Element = document.getElementById("card") || document.body
    return createPortal(x, document.body);
};

Detail.defaultProps = {
    closeOnClickMask: true,
};

export default Detail;

// const alert = (content: string) => {
//     const component = <Detail visible={true} onClose={() => {
//         ReactDOM.render(cloneElement(component,{visible: false}), div)
//         ReactDOM.unmountComponentAtNode(div)
//         div.remove()
//     }}>
//         {content}
//     </Detail>
//     const div = document.createElement('div')
//     document.body.append(div)
//     ReactDOM.render(component, div)
// }
