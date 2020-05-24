// import { fromEvent } from 'rxjs';
import React, { FC, useEffect, useState } from "react";
import SlidingWindowScroll from "../SlidingWindowScroll/SlidingWindowScroll";
// import Card from "../Card/Card";
import "./Main.scss";
import request from "../../apis/request";
import { category$ } from '../Sider/Sider';
import { searchData$ } from "../Search/Search";

const Main: FC<{ setVisible?: any; initial?: number }> = (props) => {
    const [click, setClick] = useState(0);
    // const [showData, setShowData] = useState(false);
    const [data, setData] = useState<any>([]);
    const [page, setPage] = useState(0);
    const [category, setCategory] = useState('shi')

    const [url, setUrl] = useState('shi/')
    
    // const [searchType, setSearchType] = useState('author');
    // const [searchText, setSearchText] = useState('');

    // let url = category + '/';
    
    useEffect(() => {
      console.log("main effect......, page: ", page);
        category$.subscribe((cate: string) => {
          console.log('****************', cate, category);
          if (cate !== category) {
            console.log('清除.......')
            setData([])
          }
          console.log('设置category......')
          setCategory(cate);
          setUrl(cate + '/');
          // url = category + '/';
            // console.log('category url: ', url);
        });

        searchData$.subscribe((data: string[]) => {
          // url += data.join('/')
          setUrl(url + data.join('/'));
          setData([]);
          // console.log('search url:', url);
          // category$.unsubscribe();
        })

        
        //  + "/author/李白";
        request(url, {
            page: page,
        })
            .then((response) => {
                console.log(response.data);
                setPage(response.data.pageable.pageNumber);
                // if (data === '') {
                //     data.pop();
                // }
                setData(data.concat(response.data.content));
                // setUrl(category + '/');
                console.log("data: ", data);
            })
            .catch((error) => {
                return "fail";
            });


        // getShi("http://localhost:8080/shi/author/李白");
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [category, page, url]);

    // function getShi(url: string) {
    //     axios
    //         .get(url, {
    //             params: {
    //                 page: page,
    //             },
    //         })
    //         // .post(url, {
    //         //   pageNumber: pageNumber,
    //         // })
    //         .then((response) => {
    //             console.log(response.data);
    //             setPage(response.data.pageable.pageNumber);
    //             if (data === initialShi) {
    //                 data.pop();
    //             }
    //             setData(data.concat(response.data.content));
    //             console.log("data: ", data);
    //         })
    //         .catch((error) => {
    //             return "fail";
    //         });
    // }
    // const data: any = getShi('http://localhost:8080/shi/author/李白')
    // getShi('http://localhost:8080/shi/author/李白')

    return (
        <>
            <div className="main-container">
                <div className="test-button">
                    <button onClick={() => setClick(click + 1)}>+</button>
                    <button onClick={() => setClick(click - 1)}>-</button>
                    <label>{click}</label>
                </div>

                {data.length === 1 && data[0].id === "" ? null : (
                    <SlidingWindowScroll
                        data={data}
                        height={195}
                        page={page}
                        setPage={setPage}
                        category={category}
                    ></SlidingWindowScroll>
                )}
            </div>
        </>
    );
};

export default Main;
