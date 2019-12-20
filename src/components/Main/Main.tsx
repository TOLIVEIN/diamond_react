import React, { FC, useState } from "react";
import Card from "../Card/Card";
import "./Main.css";
// import { fromEvent } from 'rxjs';
import axios from "axios";
import { Shi } from "../../model/data";

const Main: FC<{ initial?: number }> = ({ initial = 0 }) => {
  const initialShi: Shi[] = [
    { id: "", title: "", author: "", paragraphs: [""] }
  ];
  const [click, setClick] = useState(initial);
  const [showData, setShowData] = useState(false);
  const [data, setData] = useState(initialShi);
  // fromEvent(document, 'click').subscribe(() => console.log('Clicked!'));

  // const getShi = (url: string) => {

  // }

  // let shiList: Shi[] = [];

  function getShi(url: string) {
    axios
      .get(url)
      .then(response => {
        console.log(response.data.content);

        setData(response.data.content);
        // shiList = response.data.content
        // return response.data.content
      })
      .catch(error => {
        return "fail";
      });

    // return shiList;
  }
  // const data: any = getShi('http://localhost:8080/shi/author/李白')
  // getShi('http://localhost:8080/shi/author/李白')
  // let shiList: Shi[] = [];

  // const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  return (
    <div className="main-container">
      <div className="test-button">
        <button onClick={() => setClick(click + 1)}>+</button>
        <button onClick={() => setClick(click - 1)}>-</button>
        <label>{click}</label>
      </div>

      {/* {!showData ? (
        <button
          className="getData-button"
          onClick={() => {
            if (!showData) {
              getShi("http://localhost:8080/shi/author/李白");
              console.log("data: ", data);
            }
            setShowData(!showData);
          }}
        >
          Get Data
        </button>
      ) : null} */}
      <button
        className="getData-button"
        onClick={() => {
          if (!showData) {
            getShi("http://localhost:8080/shi/author/李白");
            console.log("data: ", data);
          }
          setShowData(!showData);
        }}
      >
        Get Data
      </button>

      {showData ? (
        data.map(shi => (
          <Card
            key={shi.id}
            head={[shi.title, shi.author]}
            body={shi.paragraphs}
          ></Card>
        ))
      ) : (
        <></>
      )}
    </div>
  );
};

export default Main;
