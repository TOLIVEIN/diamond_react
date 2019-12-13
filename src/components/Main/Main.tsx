import React, { FC, useState } from "react";
import { Button } from "antd";

const Main: FC<{ initial?: number }> = ({ initial = 0 }) => {
    const [click, setClick] = useState(initial);
    return(
        <div>
            <Button onClick={ () => setClick(click + 1)}>+</Button>
            <Button onClick={ () => setClick(click -1 )}>-</Button>

            <label>{click}</label>
        </div>
    )
}

export default Main;