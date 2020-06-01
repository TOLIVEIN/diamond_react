import React, { createContext, Dispatch, FC, useEffect, useState } from "react";
import { Subscription } from "rxjs";
import request from "../../apis/request";
import { sctcItem } from "../../config/property";
import { exchangeSC, exchangeTC } from "../../config/utils";
import { author$ } from "../Card/Card";
import { searchData$ } from "../Search/Search";
import { category$ } from "../Sider/Sider";
import SlidingWindowScroll from "../SlidingWindowScroll/SlidingWindowScroll";
import "./Main.scss";
import AuthorDetail from "../AuthorDetail/AuthorDetail";
import { Author } from "../../model/data";

const Main: FC<{ setVisible?: any; initial?: number }> = (props) => {
    const [url, setUrl] = useState("shi/");
    const [page, setPage] = useState(0);
    const [data, setData] = useState<any>([]);
    const [totalPage, setTotalPage] = useState(1);
    const [category, setCategory] = useState("shi");
    const [reSearch, setReSearch] = useState(false);
    const [authorVisible, setAuthorVisible] = useState(false);
    const [author, setAuthor] = useState<Author>({
        name: "init",
        desc: "init",
    });
    // const initialState = {
    //     url: "shi/",
    //     category: "shi",
    // };

    // const reducer = (
    //     state: { url: string; category: string },
    //     action: { type: any }
    // ) => {
    //     switch (action.type) {
    //         case "category":
    //             category$.subscribe((cate: string) => {
    //                 if (cate !== state.category)
    //                     state = { url: cate + "/", category: cate };
    //             });
    //             console.log(`category...state: ${state}`);
    //             return state;
    //         case "search":
    //             searchData$.subscribe((data: string[]) => {
    //                 if (state.category === "ci" && data[0] === "title") {
    //                     state = {
    //                         url: state.category + "/rhythmic/" + data[1],
    //                         category: state.category,
    //                     };
    //                 } else
    //                     return {
    //                         url: state.category + "/" + data.join("/"),
    //                         category: state.category,
    //                     };
    //             });
    //             console.log(`search...state: ${state}`);

    //             return state;
    //         default:
    //             throw new Error();
    //     }
    // };
    // const [state, dispatch] = useReducer(reducer, initialState);
    // const {url, category} = state;

    // const [authorVisible, setAuthorVisible] = useState(false);

    useEffect(() => {
        const subscribtions = new Subscription();
        // console.log(`author visible: ${authorVisible}`)

        subscribtions.add(
            category$.subscribe((cate: string) => {
                // console.log(`before changing category, cate:${cate}, category:${category}, page:${page}, url:${url}`);
                setData((data: any) => []);
                setPage(0);
                setCategory((category: any) => cate);
                setUrl(cate + "/");
            })
        );

        subscribtions.add(
            searchData$.subscribe((search: string[]) => {
                if (
                    sctcItem.sc.indexOf(category) &&
                    /[\u4e00-\u9fa5]/g.test(search[1])
                ) {
                    search[1] = exchangeTC(search[1]);
                } else if (
                    sctcItem.tc.indexOf(category) &&
                    /[\u4e00-\u9fa5]/g.test(search[1])
                ) {
                    search[1] = exchangeSC(search[1]);
                }

                setData((data: any) => []);
                setPage(0);
                setReSearch(!reSearch);
                if (category === "ci" && search[0] === "title") {
                    setUrl(category + "/rhythmic/" + search[1]);
                } else setUrl(category + "/" + search.join("/"));
            })
        );

        subscribtions.add(
            author$.subscribe((name) => {
                const authorUrl = `author/name/${name}`;
                if (category === "shi") {
                    request(authorUrl, { page: page })
                        .then((response) => {
                            // console.log('author data: ',response.data)
                            setAuthor({
                                name: response.data.content[0].name,
                                desc: response.data.content[0].desc,
                            });
                            console.log(
                                `author, name: ${response.data.content[0].name}, desc: ${response.data.content[0].desc}`
                            );
                        })
                        .catch((error) => {
                            return "fail";
                        });
                } else {
                    setAuthor({ name: name, desc: "..." });
                }
                // console.log(`author: ${name}`);
            })
        );

        request(url, {
            page: page,
        })
            .then((response) => {
                // console.log(response.data);
                setData((data: string | any[]) =>
                    data.concat(response.data.content)
                );
                setPage(response.data.pageable.pageNumber);
                setTotalPage((totalPage) =>
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

        return () => {
            subscribtions.unsubscribe();
            // console.log(`subscribtions unsubscribed...`);
        };
    }, [page, reSearch, url, category]);

    return (
        <div className="main-container">
            <AuthorVisibleContext.Provider
                value={[authorVisible, setAuthorVisible]}
            >
                <SlidingWindowScroll
                    data={data}
                    height={195}
                    page={page}
                    setPage={setPage}
                    category={category}
                    totalPage={totalPage}
                ></SlidingWindowScroll>
            </AuthorVisibleContext.Provider>
            <AuthorDetail
                author={author}
                visible={authorVisible}
            ></AuthorDetail>

            {/* <Fragment className="author-detail-container"></Fragment> */}
        </div>
    );
};

// export let authorVisible: boolean = false;
export const AuthorVisibleContext = createContext(
    {} as [boolean, Dispatch<React.SetStateAction<boolean>>]
);
export default Main;
