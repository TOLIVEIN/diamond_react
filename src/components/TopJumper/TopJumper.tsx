import React, { FC, useEffect, useState } from 'react';
import { fromEvent } from 'rxjs';
import { filter, map, throttleTime } from 'rxjs/operators';
import './TopJumper.scss';

const TopJumper: FC<Record<string, unknown>> = (props) => {
    const [show, setShow] = useState(false);
    const [previousY, setPreviousY] = useState(0);

    useEffect(() => {
        const scroll = fromEvent(window, 'scroll').pipe(
            map(() => window.scrollY),
            filter((_) => window.scrollY > 1000),
            throttleTime(1000)
        );
        scroll.subscribe((currentY) => {
            const shouldShow = window.scrollY > 1000 && currentY - previousY > 0;
            if (shouldShow !== show) {
                setShow(shouldShow);
                setPreviousY(currentY);
            }
        });
    }, [previousY, show]);

    return show ? (
        <>
            <div
                className="top-jumper"
                onClick={() => {
                    window.scrollTo(0, 0);
                }}
            >
                <span className="text"></span>
            </div>
        </>
    ) : null;
};

export default TopJumper;
