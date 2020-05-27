import React, { FC, useState } from "react";
import { Subject } from "rxjs";
import { navItem } from "../../config/property";
import "./Sider.scss";

const Sider: FC = () => {
    const [buttonState, setButtonState] = useState(
        [...Array(navItem.length)].map((_) => false)
    );

    return (
        <div className="menu">
            <ul className="menu-option">
                {navItem
                    .map((item) => [item.code, item.text])
                    .map((item: string[], index: number) => {
                        return (
                            <li key={index}>
                                <button
                                    className="nav-button"
                                    disabled={buttonState[index]}
                                    onClick={(e) => {
                                        setButtonState(
                                            buttonState.map((s, i) => {
                                                if (i === index) {
                                                    s = true;
                                                } else s = false;
                                                return s;
                                            })
                                        );

                                        category$.next(item[0]);
                                    }}
                                >
                                    {item[1]}
                                </button>
                            </li>
                        );
                    })}
            </ul>
        </div>
    );
};
export const category$ = new Subject<string>();
export default Sider;
