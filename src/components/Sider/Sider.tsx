import React, { FC } from "react";
import "./Sider.scss";
import { Subject } from "rxjs";
import { navItem } from "../../config/property";

const Sider: FC = () => {
    // const [buttonState, setButtonState] = useState(false);
    // const items = navItem;
    // const [category, setCategory] = useState("诗");

    // const category$ = new Subject();
    return (
        <div className="menu">
            <ul className="menu-option">
                {navItem
                    .map((item) => [item.code, item.text])
                    .map((item: string[], index: number) => {
                        return (
                            <li key={index}>
                                <button
                                    // disabled={buttonState}
                                    onClick={(e) => {
                                        // setCategory(item);
                                        // setButtonState(!buttonState);
                                        category$.next(item[0]);
                                        // console.log("类别：", item[1]);
                                    }}
                                >
                                    {item[1]}
                                </button>
                            </li>
                        );
                    })}
            </ul>
        </div>
    );
};
// export category$;
export const category$ = new Subject<string>();
export default Sider;
