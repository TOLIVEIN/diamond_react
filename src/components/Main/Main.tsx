import React, { FC, useState } from "react";

const Main: FC<{ initial?: number }> = ({ initial = 0 }) => {
    const [click, setClick] = useState(initial);
    return(
        <div>
            <button onClick={ () => setClick(click + 1)}>+</button>
            <button onClick={ () => setClick(click - 1)}>-</button>
            <label>{click}</label>
        </div>
    )
}

export default Main;