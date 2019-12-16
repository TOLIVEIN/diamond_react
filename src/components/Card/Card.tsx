import React, { FC } from "react";
import './Card.css';

const Card: FC = () => {
    return (
        <div className="card-container">
            <div className="card">
                <div className="card-head">
                    <p>
                        Card Head
                    </p>
                </div>

                <div className="card-body">
                    <p>
                        Card Body
                    </p>
                </div>

                <div className="card-footer">
                    <p>
                        Card Footer
                    </p>
                </div>

            </div>
        </div>
    )
}

export default Card;