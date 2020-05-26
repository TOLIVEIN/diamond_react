import React, { FC, useState } from "react";
import "./DropdownList.scss";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Subject } from "rxjs";

const DropdownList: FC<{ items: string[] }> = (props) => {
    const [type, setType] = useState("作者");

    // let type = "作者";

    return (
        <>
            {/* <FontAwesomeIcon icon="angle-down"></FontAwesomeIcon> */}
            {/* <select
                className="drop-list"
                id="drop-list"
                value="作者"
                onChange={(e) => {
                    searchType$.next(e.target.value);
                }}
            >
                {props.items.map((item: string, index: number) => {
                    return (
                        <option key={index} value={item}>
                            {item}
                        </option>
                    );
                })}
            </select> */}

            <div className="drop-list">
                <button
                    className="drop-button"
                    value={type}

                    // onChange={(e) => {
                    //     searchType$.next(type);
                    // }}
                >
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
                                    console.log('drop item:', e.currentTarget.value)
                                    // searchType$.next(e.target.innerHTML);
                                }}
                            >
                                {item}
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* <div className="drop-list">
                <button className="drop-button">作者</button>
                <div className="drop-content">
                {props.items.map((item: string, index: number) => {
                    return (
                        <a key={index} href="drop-item">
                            {item}
                        </a>
                    );
                })}
                </div>
            </div> */}
        </>
    );
};
export const searchType$ = new Subject<string>();
export default DropdownList;
