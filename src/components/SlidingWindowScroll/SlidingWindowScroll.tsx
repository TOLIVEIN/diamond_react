import React, { FC, useContext, useEffect, useRef } from "react";
// import { CSSTransition } from "react-transition-group";
import { VisibleContext } from "../../App";
import { Poetry } from "../../model/data";
import Card from "../Card/Card";
import "./SlidingWindowScroll.less";

const SlidingWindowScroll: FC<{
    data: any;
    height: number;
    page: number;
    setPage: any;
    category: string;
}> = (props) => {
    // const [observer, setObserver] = useState<IntersectionObserver>();
    const visibleContext = useContext(VisibleContext); //useless

    const $bottomElement: any = useRef();
    const $topElement: any = useRef();

    const lastIndex: number = props.data.length - 1;

    useEffect(() => {
        // console.log("sliding effect......, data: ", props.data);
        initiateScrollObserver();
        // return () => {
        //     resetObservation();
        // };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.data]);

    const initiateScrollObserver = () => {
        const options = {
            root: null,
            rootMargin: "0px",
            threshold: 0.1,
        };
        const observer = new IntersectionObserver(callback, options);
        if ($topElement.current) {
            // console.log('observing top element.');
            observer.observe($topElement.current);
        }
        if ($bottomElement.current) {
            // console.log('observing bottom element.');
            observer.observe($bottomElement.current);
        }

        // setObserver(observer);
    };

    const callback = (entries: any[], observer: any) => {
        entries.forEach((entry: any, index: any) => {
            if (entry.isIntersecting && entry.target.id === "bottom") {
                // console.log('bottom enter.');
                props.setPage(props.page + 1);

                visibleContext(true); //useless
                // console.log('visible: ', visibleContext); //useless
            }
            if (entry.isIntersecting && entry.target.id === "top") {
                // console.log('top enter.');
                visibleContext(false); //useless
            }
        });
    };

    // const resetObservation = () => {
    //     observer && observer.unobserve($topElement.current);
    //     observer && observer.unobserve($bottomElement.current);
    // };

    const getReference = (index: number, isLastIndex: boolean) => {
        if (index === 0) {
            // console.log('top')
            return $topElement;
        }
        if (isLastIndex) {
            // console.log('bottom')
            return $bottomElement;
        }
        return null;
    };

    return (
        <div className="ul-container">
            {/* <CSSTransition
                in={true}
                timeout={500}
                classNames="fade"
                appear={true}
                unmountOnExit
            > */}
            <ul className="main-content">
                {props.data.map((item: Poetry, index: number) => {
                    // const top = (props.height * (index + start)) + 'px';
                    const refVal = getReference(index, index === lastIndex);
                    const id =
                        index === 0
                            ? "top"
                            : index === lastIndex
                            ? "bottom"
                            : "";

                    const head = (): string[] => {
                        if (!item.title && item.rhythmic && item.author) {
                            return [item.rhythmic, item.author];
                        } else if (
                            !item.title &&
                            !item.rhythmic &&
                            item.chapter &&
                            item.author
                        ) {
                            return [item.chapter, item.author];
                        } else if (item.title && item.chapter && item.section) {
                            return [
                                item.chapter + "·" + item.section,
                                item.title,
                            ];
                        } else if(item.title && item.author){
                            return [item.title, item.author];
                        } else if (                            !item.title &&
                            !item.rhythmic &&
                            item.chapter &&
                            !item.author){
                                return [item.chapter]
                            }
                            return []
                    };

                    const author = ():string | undefined => {
                        if (item.author) {
                            return item.author;
                        }
                    }

                    const body = (): string[] | undefined => {
                        if (!item.paragraphs) {
                            return item.content;
                        } else {
                            return item.paragraphs;
                        }
                    };
                    // console.log(`top: ${top}, index: ${index}, lastIndex: ${lastIndex}, refVal: ${refVal}, id: ${id}`);
                    return (
                        // props.list.map((shi: Shi) => (
                        <Card
                            key={index}
                            id={id}
                            head={head()}
                            body={body()}
                            author={author()}
                            notes={item.notes}
                            passRef={refVal}
                        ></Card>

                        //   ))
                        // <li className="li-card" key={index} ref={refVal} id={id}>{`${item.title} ${item.author} ${item.paragraphs}`}</li>
                    );
                })}
            </ul>
            {/* </CSSTransition> */}
        </div>
    );
};

export default SlidingWindowScroll;
