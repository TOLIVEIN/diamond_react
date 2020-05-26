// import { fromEvent } from 'rxjs';
import React, { FC, useEffect, useState } from "react";
import SlidingWindowScroll from "../SlidingWindowScroll/SlidingWindowScroll";
// import Card from "../Card/Card";
import "./Main.scss";
import request from "../../apis/request";
import { category$ } from "../Sider/Sider";
import { searchData$ } from "../Search/Search";
import { sctcItem } from "../../config/property";
import { exchangeTC, exchangeSC } from "../../config/utils";

const Main: FC<{ setVisible?: any; initial?: number }> = (props) => {
    // const [showData, setShowData] = useState(false);
    const [data, setData] = useState<any>([]);
    const [page, setPage] = useState(0);
    const [totalPage, setTotalPage] = useState(1);
    const [category, setCategory] = useState("shi");

    const [url, setUrl] = useState("shi/");

    useEffect(() => {
        console.log("main effect......, page: ", page);
        category$.subscribe((cate: string) => {
            // console.log(`before changing category, cate:${cate}, category:${category}, page:${page}, url:${url}`);
            if (cate !== category) {
                setData([]);
                setPage(0);
                setCategory(cate);
                setUrl(cate + "/");
            }
        });

        searchData$.subscribe((data: string[]) => {
            // let searchContent = '';
            if (
                sctcItem.sc.indexOf(category) &&
                /[\u4e00-\u9fa5]/g.test(data[1])
            ) {
                data[1] = exchangeTC(data[1]);
            } else if (
                sctcItem.tc.indexOf(category) &&
                /[\u4e00-\u9fa5]/g.test(data[1])
            ) {
                data[1] = exchangeSC(data[1]);
            }
            // console.log(`searchText: ${data[1]}`);

            setData([]);
            setPage(0);
            if (category === "ci" && data[0] === "title") {
                setUrl(category + "/rhythmic/" + data[1]);
            } else setUrl(category + "/" + data.join("/"));
        });

        if (page < totalPage) {
            request(url, {
                page: page,
            })
                .then((response) => {
                    console.log(response.data);
                    setData(data.concat(response.data.content));
                    setPage(response.data.pageable.pageNumber);
                    setTotalPage(
                        response.data.totalPages === 0
                            ? 1
                            : response.data.totalPages
                    );
                    console.log("data: ", data);
                })
                .catch((error) => {
                    return "fail";
                })
                .finally(() => {
                    console.log(
                        `after changing category, category:${category}, page:${page}, url:${url}`
                    );
                });
        }

        // return () => {
        //     category$.unsubscribe();
        //     searchData$.unsubscribe();
        // }

        // getShi("http://localhost:8080/shi/author/李白");
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [url, page]);

    return (
        <>
            <div className="main-container">
                {/* {(data.length === 1 && data[0].id === "") || (data.length === 0)? null : ( */}
                <SlidingWindowScroll
                    data={data}
                    height={195}
                    page={page}
                    setPage={setPage}
                    category={category}
                ></SlidingWindowScroll>
                {/* )} */}
            </div>
        </>
    );
};

export default Main;
