import React, { FC, useState, useEffect } from "react";
import DropdownList, { searchType$ } from "../DropdownList/DropdownList";
import "./Search.scss";
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { searchItem } from '../../config/property';

const Search: FC<{ type?: string }> = (props) => {
    const items: string[] = Object.values(searchItem);

    const [searchType, setSearchType] = useState('author');
    const [searchText, setSearchText] = useState('');

    // const [searchData, setSearchData] = useState();
    let searchData: string[] = [];


    useEffect(() => {
        searchType$.subscribe((type) => {
            const key: string | any = Object.keys(searchItem).find(k => searchItem[k] === type);
            setSearchType(key);
            console.log('type:', key);
          })
    
        searchText$.pipe(
            debounceTime(500),
            distinctUntilChanged()
        ).subscribe((searchText: any) => {
            setSearchText(searchText);
            console.log(searchText);
        })


    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])



    return (
        <div className="search">
            <div className="header-left"></div>
            <DropdownList items={items}></DropdownList>
            {/* <input className="search-content" type="text" id="search" /> */}
            <input className="search-content" type="text" id="search" onChange={(e) => {
                searchText$.next(e.target.value);
                }}/>
            <button className="search-button" onClick={(e) => {
                searchData = [searchType, searchText];
                console.log(searchData);
                searchData$.next(searchData);
            }}>搜索</button>
            <div className="header-right"></div>
            {/* <label htmlFor="search">搜索</label> */}
        </div>
    );
};
export const searchText$ = new Subject<string>();
export const searchData$ = new Subject<string[]>();
export default Search;
