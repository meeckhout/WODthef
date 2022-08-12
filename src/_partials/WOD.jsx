import React from 'react';
import {Data} from '../Data';

function WOD() {
    return(
        <div>
        <h1>TEST</h1>
            <div className="stock-container">
                {Data.map((data, key) => {
                    return (
                        <div key={key}>
                            {data.name + " , " + data.type + " ," + data.time + ", " + data.movements}
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export {WOD};