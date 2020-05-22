import React, { FC, useContext, useEffect, useRef, useState } from "react";
import { VisibleContext } from "../../App";
import { Shi } from '../../model/data';
import Card from "../Card/Card";
import './SlidingWindowScroll.scss';

const SlidingWindowScroll: FC<{data: any, height: number, page: number, setPage: any}> = (props) => {

    const [observer, setObserver] = useState<IntersectionObserver>();
    const visibleContext = useContext(VisibleContext); //useless

    const $bottomElement: any = useRef();
    const $topElement: any = useRef();

    const lastIndex: number = props.data.length - 1;

    useEffect(() => {
        console.log('sliding effect......, data: ', props.data);
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
            // console.log('observing top element.');
            observer.observe($topElement.current);
        }
        if ($bottomElement.current) {
            // console.log('observing bottom element.');
            observer.observe($bottomElement.current);
        }

        setObserver(observer);
    }

    const callback = (entries: any[], observer: any) => {
        entries.forEach((entry: any, index: any) => {
            if (entry.isIntersecting && entry.target.id === 'bottom') {
                // console.log('bottom enter.');
                props.setPage(props.page + 1);
                
                visibleContext(true); //useless
                // console.log('visible: ', visibleContext); //useless
            }
            if (entry.isIntersecting && entry.target.id === 'top') {
                // console.log('top enter.');
                visibleContext(false); //useless

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

                        <Card
                          key={item.id}
                          head={[item.title, item.author]}
                          body={item.paragraphs}
                          id={id}
                          passRef={refVal}
                        ></Card>

                    //   ))
                // <li className="li-card" key={index} ref={refVal} id={id}>{`${item.title} ${item.author} ${item.paragraphs}`}</li>
                )
            })}
        </ul>
    )
}

export default SlidingWindowScroll;