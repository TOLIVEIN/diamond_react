import React, { FC } from "react";

const Search: FC<{ type?: string }> = (props) => {
    return (
        <div className="search">
            <input type="text" id="search" />
            <button className="search-button">搜索</button>
            {/* <label htmlFor="search">搜索</label> */}
        </div>
    );
};

export default Search;
