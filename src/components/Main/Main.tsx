import React, { FC, useState, useEffect } from "react";
// import Card from "../Card/Card";
import "./Main.css";
// import { fromEvent } from 'rxjs';
import axios from "axios";
import { initialShi } from '../../model/data.model';
import SlidingWindowScroll from "../SlidingWindowScroll/SlidingWindowScroll";

const Main: FC<{ setVisible?: any; initial?: number }> = props => {
  const [click, setClick] = useState(0);
  // const [showData, setShowData] = useState(false);
  const [data, setData] = useState(initialShi);
  const [page, setPage] = useState(0);
  // const [sort, setSort] = useState(initialSort);

  // fromEvent(document, 'click').subscribe(() => console.log('Clicked!'));

  useEffect(() => {
    console.log('main effect......, page: ', page)
    getShi("http://localhost:8080/shi/author/李白");
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  function getShi(url: string) {
    axios
      .get(url, {
        params: {
          page: page
        }
      })
      // .post(url, {
      //   pageNumber: pageNumber,
      // })
      .then(response => {
        console.log(response.data);
        setPage(response.data.pageable.pageNumber)
        if (data === initialShi) {
          data.pop();
        }
        setData(data.concat(response.data.content));
        console.log('data: ', data)
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
      {/* <button
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
      </button> */}
      {/* {showData
        ? data.content.map(shi => (
            <Card
              key={shi.id}
              head={[shi.title, shi.author]}
              body={shi.paragraphs}
            ></Card>
          ))
        : null} */}

      {data.length === 1 && data[0].id === '' ? null : (
        <SlidingWindowScroll
          data={data}
          height={195}
          page={page}
          setPage={setPage}
        ></SlidingWindowScroll>
      )}
    </div>
  );
};

export default Main;
