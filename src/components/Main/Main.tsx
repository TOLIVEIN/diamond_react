import React, { FC, useState } from "react";
import Card from "../Card/Card";
import "./Main.css";
// import { fromEvent } from 'rxjs';
import axios from "axios";
import { initialShiData } from "../../model/data.model";

const Main: FC<{ initial?: number }> = ({ initial = 0 }) => {

  const [click, setClick] = useState(initial);
  const [showData, setShowData] = useState(false);
  const [data, setData] = useState(initialShiData);

  // fromEvent(document, 'click').subscribe(() => console.log('Clicked!'));

  function getShi(url: string) {
    axios
      .get(url)
      .then(response => {
        console.log(response.data);
        setData(response.data);
      })
      .catch(error => {
        return "fail";
      });

  }
  // const data: any = getShi('http://localhost:8080/shi/author/李白')
  // getShi('http://localhost:8080/shi/author/李白')

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
        data.content.map(shi => (
          <Card
            key={shi.id}
            head={[shi.title, shi.author]}
            body={shi.paragraphs}
          ></Card>
        ))
      ) : (
        null
      )}
    </div>
  );
};

export default Main;
