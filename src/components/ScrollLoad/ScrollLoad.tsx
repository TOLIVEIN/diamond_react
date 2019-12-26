import React, { useState, useEffect, FC, createRef } from "react";
import Card from "../Card/Card";
import { initialShiData } from "../../model/data.model";
import axios from "axios";

const ScrollLoad: FC<{ text?: any }> = ({text}) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(initialShiData);
  const ref: any = createRef();

  // const [start, setStart] = useState(0);
  // const [end, setEnd] = useState(THRESHOLD);
  // const [observer, setObserver] = useState(null);

  // const $bottomElement = useRef();
  // const $topElement = useRef();


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

  useEffect(() => {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          console.log('into the area.')
          setLoading(false);
          observer.unobserve(entry.target);
        }
      });
    });


    observer.observe(ref);
    getShi("http://localhost:8080/shi/author/李白");
    console.log("data: ", data);
    return () => {
      observer.disconnect();
    };
  });

  return (
    <div className="scroll-item">
      {loading
        ? "Loading..."
        : data.content.map(shi => (
            <Card
              key={shi.id}
              head={[shi.title, shi.author]}
              body={shi.paragraphs}
            ></Card>
          ))}
    </div>
  );
};

export default ScrollLoad;
