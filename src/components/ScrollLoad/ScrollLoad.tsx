import React, { useState, createRef, useEffect, FC } from "react";

const ScrollLoad: FC<{ text?: any }> = ({ text }) => {
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
    });
    observer.observe(ref.current);
    return () => {
      observer.disconnect();
    };
  });

  return (
    <div className="scroll-item" ref={ref}>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
      {loading ? "Loading..." : text}
    </div>
  );
};

export default ScrollLoad;
