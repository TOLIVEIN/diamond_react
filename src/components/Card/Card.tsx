import React, { FC } from "react";
import './Card.css';

const Card: FC<{id: string, passRef?: any, head: string[], body: string[] | string, foot?: string}> = (props: any) => {
    return (
      <div className="card-container" ref={props.passRef} id={props.id}>
        <div className="card">
          <div className="card-head">
            <blockquote>{props.head[0]}</blockquote>
            {/* <br/> */}
            <blockquote>{props.head[1]}</blockquote>
          </div>

          <div className="card-body">
              {props.body instanceof Array ? props.body.map((b: any) => <blockquote key={b}>{b}</blockquote>) : <blockquote>{props.body}</blockquote>}
            {/* <blockquote>{props.body}</blockquote> */}
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