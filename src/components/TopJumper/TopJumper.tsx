import React, { FC, useEffect, useState } from "react";
import { fromEvent } from "rxjs";
import { filter, map, throttleTime } from "rxjs/operators";
import "./TopJumper.scss";

const TopJumper: FC<{}> = (props) => {
    const [show, setShow] = useState(false);
    const [previousY, setPreviousY] = useState(0);

    useEffect(() => {
        const scroll = fromEvent(window, "scroll").pipe(
            map(() => window.scrollY),
            filter((_) => window.scrollY > 1000),
            throttleTime(500)
        );
        scroll.subscribe((currentY) => {
            // console.log("Y*********", window.scrollY, currentY, previousY);
            const shouldShow =
                window.scrollY > 1000 && currentY - previousY > 0;
            // console.log(
            //     "********************, shouldShow: " +
            //         shouldShow +
            //         ", show: " +
            //         show
            // );
            if (shouldShow !== show) {
                setShow(shouldShow);
                setPreviousY(currentY);
            }
            // setShow(true);
        });
    }, [previousY, show]);

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
