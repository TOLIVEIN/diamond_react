import React, { FC } from "react";
import './Card.scss';

const Card: FC<{id: string, passRef?: any, head: (string | undefined)[], body: string[] | string, notes?: string[], foot?: string}> = (props: any) => {
    return (
      <div className="card-container" ref={props.passRef} id={props.id}>
        <div className="card">
          <div className="card-head">
            <blockquote className="title">{props.head[0]}</blockquote>
            {/* <br/> */}
            <blockquote className="author">{props.head[1]}</blockquote>
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