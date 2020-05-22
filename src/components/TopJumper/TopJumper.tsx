import React, { FC } from "react";
import "./TopJumper.scss";
import { useState } from "react";
import { useEffect } from "react";

import { throttleTime, filter, map } from "rxjs/operators";
import { fromEvent } from "rxjs";

const TopJumper: FC<{}> = (props) => {
    const [show, setShow] = useState(false);
    // const previousY = 0;

    useEffect(() => {
        const scroll = fromEvent(window, "scroll").pipe(
            map(() => window.scrollY),
            filter((_) => window.scrollY> 1000),
            throttleTime(500)
        );
        scroll.subscribe((currentY) => {
            console.log("Y*********", window.scrollY);
            const shouldShow = window.scrollY > 1000;
            console.log(
                "********************, shouldShow: " +
                    shouldShow +
                    ", show: " +
                    show
            );
            if (shouldShow !== show) {


                setShow(shouldShow);
            }
            // setShow(true);
        });
    }, [show]);

    // const createThrottle = (callback: Function, delay?: number, thisArg?: any): Function => {
    //     let lastInvokeTime: number = Date.now();
    //     const delay_time = Number(delay) || 200;
    //     return (...args: any[]): void => {
    //         const now = Date.now();
    //         if (now - delay_time <= lastInvokeTime) {
    //             return;
    //         }
    //         lastInvokeTime = now;
    //         callback.call(thisArg, ...args);
    //     }
    // }

    // useEffect(() => {
    //     const listener = createThrottle(() => {
    //         const shouldShow = window.scrollY > 300;
    //         if (shouldShow !== show) {
    //             setShow(shouldShow);
    //         }
    //     }, 500) as EventListener;

    //     document.addEventListener('scroll', listener);
    //     return () => {
    //         document.removeEventListener('scroll', listener);
    //     }
    // }, [show])

    return show ? (
        <>
            <div
                className="top-jumper"
                onClick={() => {
                    window.scrollTo(0, 0);
                    // setShow(false);
                }}
            >
                <span className="text"></span>
            </div>
        </>
    ) : null;
};

export default TopJumper;
