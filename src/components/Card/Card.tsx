import React, { FC } from "react";
import './Card.css';

const Card: FC<{head: string[], body: string, foot?: string}> = (props: any) => {
    return (
      <div className="card-container">
        <div className="card">
          <div className="card-head">
            <blockquote>{props.head[0]}</blockquote>
            {/* <br/> */}
            <blockquote>{props.head[1]}</blockquote>
          </div>

          <div className="card-body">
            <blockquote>{props.body}</blockquote>
          </div>

          {props.foot ? (
            <div className="card-footer">
              <blockquote>{props.foot}</blockquote>
            </div>
          ) : null}
        </div>
      </div>
    );
}

export default Card;