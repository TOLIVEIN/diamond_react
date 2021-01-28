import React, { FC, useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Subject } from "rxjs";
import "./DropdownList.less";

const DropdownList: FC<{ items: string[] , className?: string}> = (props) => {
    const [type, setType] = useState("作者");

    return (
        <div className="drop-container">
            {/* <FontAwesomeIcon icon="angle-down"></FontAwesomeIcon> */}
            <div className="drop-list">
                <button className="drop-button" value={type}>
                    {type}
                </button>
                <div className="drop-content">
                    {props.items.map((item: string, index: number) => {
                        return (
                            <button
                                key={index}
                                className="drop-item"
                                value={item}
                                onClick={(e) => {
                                    setType(e.currentTarget.value);
                                    searchType$.next(e.currentTarget.value);
                                    // console.log(
                                    //     "drop item:",
                                    //     e.currentTarget.value
                                    // );
                                }}
                            >
                                {item}
                            </button>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};
export const searchType$ = new Subject<string>();
export default DropdownList;
