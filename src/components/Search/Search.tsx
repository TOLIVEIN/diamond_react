import React, { FC } from "react";
import DropdownList from "../DropdownList/DropdownList";
import "./Search.scss";

const Search: FC<{ type?: string }> = (props) => {
    const items = ["作者", "标题", "内容"];
    return (
        <div className="search">
            <div className="header-left"></div>
            <DropdownList items={items}></DropdownList>
            <input className="search-content" type="text" id="search" />
            <button className="search-button">搜索</button>
            <div className="header-right"></div>
            {/* <label htmlFor="search">搜索</label> */}
        </div>
        // <>
        //     <div className="ui-dropdown open">
        //         <span className="dropdown-text">
        //             请选择....
        //             <span className="icon"></span>
        //         </span>
        //         <ul className="dropdown-body">
        //             <li className="dropdown-item">1111111</li>
        //             <li className="dropdown-item">2222222</li>
        //             <li className="dropdown-item">3333333</li>
        //         </ul>
        //     </div>
        // </>
    );
};

export default Search;
