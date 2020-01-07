import React, { FC, useState, useEffect } from "react";
// import Card from "../Card/Card";
import "./Main.css";
// import { fromEvent } from 'rxjs';
import axios from "axios";
import { initialShiData } from '../../model/data.model';
import SLidingWindowScrollHook from "../../Hooks/SlidingWindowScrollHook";

const Main: FC<{ setVisible?: any; initial?: number }> = props => {
  const [click, setClick] = useState(0);
  // const [showData, setShowData] = useState(false);
  const [data, setData] = useState(initialShiData);
  const [pageNumber, setPageNumber] = useState(0);

  // fromEvent(document, 'click').subscribe(() => console.log('Clicked!'));

  useEffect(() => {
    getShi("http://localhost:8080/shi");
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageNumber]);

  function getShi(url: string) {
    axios
      .get(url, {
        params: {
          page: pageNumber
        }
      })
      // .post(url, {
      //   pageNumber: pageNumber,
      // })
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
              // console.log("data: ", data);
            }
            setShowData(!showData);
            props.setVisible(true);
          }}
        >
          Get Data
        </button>
      ) : null} */}
      <button
        className="getData-button"
        onClick={() => {
          setPageNumber(pageNumber + 1)
          // if (!showData) {
          //   getShi("http://localhost:8080/shi");
          //   console.log("data: ", data);
          // }
          // setShowData(!showData);
        }}
      >
        Get Data
      </button>
      {/* {showData
        ? data.content.map(shi => (
            <Card
              key={shi.id}
              head={[shi.title, shi.author]}
              body={shi.paragraphs}
            ></Card>
          ))
        : null} */}

      {data.size !== 0 ? (
        <SLidingWindowScrollHook
          list={data.content}
          height={195}
        ></SLidingWindowScrollHook>
      ) : null}
    </div>
  );
};

export default Main;
