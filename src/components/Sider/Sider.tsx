import React, { FC, useState } from "react";
import "./Sider.scss";
import { Subject } from "rxjs";
import { navItem } from "../../config/property";

const Sider: FC = () => {
    const [buttonState, setButtonState] = useState(
        [...Array(navItem.length)].map((_) => false)
    );

    // const category$ = new Subject();

    return (
        <div className="menu">
            <ul className="menu-option">
                {navItem
                    .map((item) => [item.code, item.text])
                    .map((item: string[], index: number) => {
                        return (
                            <li key={index}>
                                <button
                                    disabled={buttonState[index]}
                                    onClick={(e) => {
                                        setButtonState(
                                            buttonState.map(
                                                (s, i) => {
                                                    if (i === index) {
                                                        s = true;
                                                    } else s = false;
                                                    return s;
                                                }
                                            )
                                        );

                                        // const category$ = new Subject<string>();
                                        category$.next(item[0]);
                                        // category$.complete();
                                        // console.log("类别：", item[1]);
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
// export category$;
export const category$ = new Subject<string>();
export default Sider;
