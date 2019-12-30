import React, { useState, useEffect, FC, useRef } from "react";
import Card from "../components/Card/Card";
import { Shi } from '../model/data';


const THRESHOLD = 15;
const SLidingWindowScrollHook: FC<{list: any, height: number}> = (props) => {
    const [start, setStart] = useState(0);
    const [end, setEnd] = useState(THRESHOLD);
    const [observer, setObserver] = useState();

    const $bottomElement: any = useRef();
    const $topElement: any = useRef();

    const updatedList = props.list.slice(start, end);
    const lastIndex = updatedList.length - 1;

    useEffect(() => {
        initiateScrollObserver();
        return () => {
            resetObservation();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [start, end])

    const initiateScrollObserver = () => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };
        const observer = new IntersectionObserver(callback, options)
        if ($topElement.current) {
            observer.observe($topElement.current);
        }
        if ($bottomElement.current) {
            observer.observe($bottomElement.current);
        }

        setObserver(observer);
    }

    const callback = (entries: any[], observer: any) => {
        entries.forEach((entry: any, index: any) => {
            const listLength = props.list.length;
            if (entry.isIntersecting && entry.target.id === 'bottom') {
                const maxStartIndex = listLength - 1 - THRESHOLD;
                const maxEndIndex = listLength - 1;
                const newEnd = (end + 10) <= maxEndIndex ? end + 10 : maxEndIndex;
                const newStart = (end - 5) <= maxStartIndex ? end - 5: maxStartIndex;
                setStart(newStart);
                setEnd(newEnd);
            }
            if (entry.isIntersecting && entry.target.id === 'top') {
                const newEnd = end === THRESHOLD ? THRESHOLD : (end - 10 > THRESHOLD ? end - 10 : THRESHOLD);
                const newStart = start === 0 ? 0 : (start - 10 > 0 ? start - 10 : 0);
                setStart(newStart);
                setEnd(newEnd);
            }
        });
    }

    const resetObservation = () => {
        observer && observer.unobserve($bottomElement.current);
        observer && observer.unobserve($topElement.current);
    }

    const getReference = (index: number, isLastIndex: any) => {
        if (index === 0) {
            return $topElement;
        }
        if (isLastIndex) {
            return $bottomElement;
        }
        return null;
    }

    return (
        <ul>
            { updatedList.map((item: Shi, index: number) => {
                // const top = (props.height * (index + start)) + 'px';
                const refVal = getReference(index, index === lastIndex);
                // const id = index === 0 ? 'top' : (index === lastIndex ? 'bottom' : '');
                return (
                    // props.list.map((shi: Shi) => (
                        <Card
                          key={item.id}
                          head={[item.title, item.author]}
                          body={item.paragraphs}
                          passRef={refVal}
                        ></Card>
                    //   ))
                // <li className="li-card" key={index} style={{top}} ref={refVal} id={id}>{`${item.title}  ${item.author}\n${item.paragraphs}`}</li>
                )
            })}
        </ul>
    )
}

export default SLidingWindowScrollHook;