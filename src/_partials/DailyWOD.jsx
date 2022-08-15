import React from "react";
import '../styles/DailyWOD.css';
import {Data} from '../Data'

function DailyWOD() {
    return(
        <div>
            {Data.slice(0, 1).map((data, key) => {
                    return (
                        <div className="featured" key={key}>
                            <span className="title">{data.name}</span>
                            <span className="type">{data.type}</span>
                            <span className="time">{data.time}</span>
                            <span className="movements">{data.movement1}</span>
                            <span className="movements">{data.movement2}</span>
                            <span className="movements">{data.movement3}</span>
                            <span className="movements">{data.movement4}</span>
                            <span className="movements">{data.movement5}</span>
                        </div>
                    );
                }
            )}
        </div>
    )
}

export {DailyWOD};