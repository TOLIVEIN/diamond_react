import React, { FC, useState } from "react";
import Card from "../Card/Card";
import './Main.css';
// import { fromEvent } from 'rxjs';
import axios from 'axios';

const Main: FC<{ initial?: number }> = ({ initial = 0 }) => {
    const [click, setClick] = useState(initial);
    const [showData, setShowData] = useState(false)
    // fromEvent(document, 'click').subscribe(() => console.log('Clicked!'));

    // const getShi = (url: string) => {

    // }


    function getShi(url: string): any {
        axios.get(url).then((response) => {
            // 在这儿实现 setState
            console.log(response)
            return response.data
        }).catch((error) => {
            // 处理请求出错的情况
            return 'fail'
        });
    }
    // const data: any = getShi('http://localhost:8080/shi/author/李白')
    // getShi('http://localhost:8080/shi/author/李白')

    const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    return(
        <div className="main-container">
            <div className="test-button">
                <button onClick={ () => setClick(click + 1)}>+</button>
                <button onClick={ () => setClick(click - 1)}>-</button>
                <label>{click}</label>
            </div>

            <button className="getData-button" onClick={ () => {
                getShi('http://localhost:8080/shi/author/李白');
                setShowData(!showData);
            }
            }>Get Data</button>

            { showData ? cards.map((card) => <Card key={card} data={card}></Card>) :<></> }
            {/* // { cards.map((card) => {
            //     return (
            //     // <Card key={card}>{getShi('http://localhost:8080/')}</Card>
            //     <Card key={card} data={card}></Card>
            //     )
            // })} */}
            {/* <Card></Card> */}
        </div>
    )

}




export default Main;