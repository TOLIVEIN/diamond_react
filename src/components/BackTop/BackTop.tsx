import React, { FC } from 'react';
import backtop from '../../assets/icons/backtop.png';
import './BackTop.scss';

const BackTop: FC<{ visible?: boolean }> = (props) => {
    return (
        <>
            {props.visible ? (
                <div className="back-top">
                    <img src={backtop} alt="" />
                </div>
            ) : null}
        </>
    );
};

export default BackTop;
