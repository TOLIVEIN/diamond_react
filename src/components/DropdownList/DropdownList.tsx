import React, { FC } from "react";
import "./DropdownList.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DropdownList: FC<{ items: string[] }> = (props) => {
    return (
        <>
            <FontAwesomeIcon icon="angle-down"></FontAwesomeIcon>
            <select className="drop-list" id="drop-list">
                {props.items.map((item: string, index: number) => {
                    return (
                        <option key={index} value={item}>
                            {item}
                        </option>
                    );
                })}
            </select>
        </>
    );
};

export default DropdownList;
