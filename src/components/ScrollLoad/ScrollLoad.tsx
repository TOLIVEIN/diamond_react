import React, { useState, useEffect, FC, createRef } from "react";
import './ScrollLoad.css';

const ScrollLoad: FC<{ passRef: any, text?: any }> = (props) => {
  const [loading, setLoading] = useState(true);
  const ref: any = createRef();
  useEffect(() => {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          console.log(entry, 'into the area.')
          setLoading(false);
          observer.unobserve(entry.target);
        }
      });
    }, {
      root: props.passRef.current,
    });
    observer.observe(ref.current);
    return () => {
      observer.disconnect();
    };
  });

  return (
    <div className="scroll-item" ref={ref} id="test-text">
      {loading ? "Loading..." : props.text}
    </div>
  );
};

export default ScrollLoad;
