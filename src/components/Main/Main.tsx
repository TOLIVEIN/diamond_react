import React, { FC, useEffect, useState } from "react";
import request from "../../apis/request";
import { sctcItem } from "../../config/property";
import { exchangeSC, exchangeTC } from "../../config/utils";
import { searchData$ } from "../Search/Search";
import { category$ } from "../Sider/Sider";
import SlidingWindowScroll from "../SlidingWindowScroll/SlidingWindowScroll";
import "./Main.less";

const Main: FC<{ setVisible?: any; initial?: number }> = (props) => {
    const [data, setData] = useState<any>([]);
    const [page, setPage] = useState(0);
    const [totalPage, setTotalPage] = useState(1);
    const [category, setCategory] = useState("shi");
    
    const [reSearch, setReSearch] = useState(false);
    const [url, setUrl] = useState("shi/");


    useEffect(() => {
        // console.log("main effect......, page: ", page);
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

            setData([]);
            setPage(0);
            setReSearch(!reSearch);
            if (category === "ci" && data[0] === "title") {
                setUrl(category + "/rhythmic/" + data[1]);
            } else setUrl(category + "/" + data.join("/"));
        });

        if (page < totalPage) {
            request(url, {
                page: page,
            })
                .then((response) => {
                    // console.log(response.data);
                    setData(data.concat(response.data.content));
                    setPage(response.data.pageable.pageNumber);
                    setTotalPage(
                        response.data.totalPages === 0
                            ? 1
                            : response.data.totalPages
                    );
                    // console.log("data: ", data);
                })
                .catch((error) => {
                    return "fail";
                })
                .finally(() => {
                    // setReSearch(false);
                    // console.log(
                    //     `after changing category, category:${category}, page:${page}, url:${url}`
                    // );
                });
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [url, page, reSearch]);

    return (
        <>
            <div className="main-container">
                <SlidingWindowScroll
                    data={data}
                    height={195}
                    page={page}
                    setPage={setPage}
                    category={category}
                ></SlidingWindowScroll>
            </div>
        </>
    );
};

export default Main;
