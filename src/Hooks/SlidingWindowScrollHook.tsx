import React, { useState, useEffect, FC, useRef } from "react";
// import Card from "../components/Card/Card";
import { Shi, Page } from '../model/data';
import './SlidingWindowScrollHook.css';


// const THRESHOLD = 15;
const SlidingWindowScrollHook: FC<{data: any, height: number, page: Page, setPage: any}> = (props) => {
    // const [start, setStart] = useState(0);
    // const [end, setEnd] = useState(THRESHOLD);
    const [observer, setObserver] = useState();
    // const [lastIndex, setLastIndex] = useState(0);

    const $bottomElement: any = useRef();
    const $topElement: any = useRef();

    // const updatedList = props.list.slice(start, end);
    // const lastIndex: number = updatedList.length - 1;
    const lastIndex: number = props.data.length - 1;


    // console.log('length: ', updatedList.length);

    useEffect(() => {
        // setLastIndex(updatedList.length - 1);
        console.log('useEffect......', props.data);
        initiateScrollObserver();
        return () => {
            resetObservation();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.data])

    const initiateScrollObserver = () => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };
        const observer = new IntersectionObserver(callback, options)
        if ($topElement.current) {
            console.log('observing top element.');
            observer.observe($topElement.current);
        }
        if ($bottomElement.current) {
            console.log('observing bottom element.');
            observer.observe($bottomElement.current);
        }

        setObserver(observer);
    }

    const callback = (entries: any[], observer: any) => {
        entries.forEach((entry: any, index: any) => {
            // const listLength = props.data.content.length;
            // console.log('entry item id:', entry.target.id);
            if (entry.isIntersecting && entry.target.id === 'bottom') {
                console.log('bottom enter.');
                props.setPage(props.page.pageNumber + 1);
                // const maxStartIndex = listLength - 1 - THRESHOLD;
                // const maxEndIndex = listLength - 1;
                // const newEnd = (end + 10) <= maxEndIndex ? end + 10 : maxEndIndex;
                // const newStart = (end - 10) <= maxStartIndex ? end - 10: maxStartIndex;
                // setStart(newStart);
                // setEnd(newEnd);
            }
            if (entry.isIntersecting && entry.target.id === 'top') {
                // setLastIndex(updatedList.length - 1);
                console.log('top enter.');
                // const newEnd = end === THRESHOLD ? THRESHOLD : (end - 10 > THRESHOLD ? end - 10 : THRESHOLD);
                // const newStart = start === 0 ? 0 : (start - 10 > 0 ? start - 10 : 0);
                // setStart(newStart);
                // setEnd(newEnd);
            }
        });
    }

    const resetObservation = () => {
        observer && observer.unobserve($topElement.current);
        observer && observer.unobserve($bottomElement.current);
    }

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
    }



    return (
        <ul>
            { props.data.map((item: Shi, index: number) => {
                // const top = (props.height * (index + start)) + 'px';
                const refVal = getReference(index, index === lastIndex);
                const id = index === 0 ? 'top' : (index === lastIndex ? 'bottom' : '');
                // console.log(`top: ${top}, index: ${index}, lastIndex: ${lastIndex}, refVal: ${refVal}, id: ${id}`);
                return (
                    // props.list.map((shi: Shi) => (

                        // <Card
                        //   key={item.id}
                        //   head={[item.title, item.author]}
                        //   body={item.paragraphs}
                        //   passRef={refVal}
                        // ></Card>

                    //   ))
                <li className="li-card" key={index} ref={refVal} id={id}>{`${item.title} ${item.author} ${item.paragraphs}`}</li>
                )
            })}
        </ul>
    )
}

export default SlidingWindowScrollHook;