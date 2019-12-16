import React, { FC, useState } from "react";
import Card from "../Card/Card";
import './Main.css';

const Main: FC<{ initial?: number }> = ({ initial = 0 }) => {
    const [click, setClick] = useState(initial);

    const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    return(
        <div className="main-container">
            {/* <button onClick={ () => setClick(click + 1)}>+</button>
            <button onClick={ () => setClick(click - 1)}>-</button>
            <label>{click}</label> */}

            { cards.map((card) => {
                return (
                    <Card></Card>
                )
            })}
            {/* <Card></Card> */}
        </div>
    )
}

export default Main;