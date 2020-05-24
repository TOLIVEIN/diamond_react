import React, { FC, useState } from "react";
import DropdownList from "../DropdownList/DropdownList";
import "./Search.scss";
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

const Search: FC<{ type?: string }> = (props) => {
    const items = ["作者", "标题", "内容"];

    const [searchData, setSearchData] = useState('');

    const search$ = new Subject();
    search$.pipe(
        debounceTime(1000),
        distinctUntilChanged()
    ).subscribe((searchText: any) => {
        setSearchData(searchText);
        console.log(searchText);
    })


    return (
        <div className="search">
            <div className="header-left"></div>
            <DropdownList items={items}></DropdownList>
            {/* <input className="search-content" type="text" id="search" /> */}
            <input className="search-content" type="text" id="search" onChange={(e) => {
                search$.next(e.target.value);
                }}/>
            <button className="search-button" >搜索</button>
            <div className="header-right"></div>
            {/* <label htmlFor="search">搜索</label> */}
        </div>
    );
};

export default Search;
