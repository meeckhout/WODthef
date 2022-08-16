import React , {useState} from 'react';
import {Data} from '../Data';
import '../styles/WOD.css';

function WOD() {
    const [name, setName] = useState('');

    const [foundData, setFoundData] = useState(Data);

    const filter = (e) => {
        const keyword = e.target.value;

        if (keyword !== '') {
            const results = Data.filter((data) => {
                return data.name.toLowerCase().startsWith(keyword.toLowerCase());
            });
            setFoundData(results);
        } else {
            setFoundData(Data);
        }

        setName(keyword);
    };
    return (
        <div className="search-container">
            <span className="searchWOD">Search WOD</span>
            <input
                type="search"
                value={name}
                onChange={filter}
                className="input"
                placeholder="Enter your WOD name"
            />

            <div className="wod-container">
                {foundData && foundData.length > 0 ? (
                    foundData.map((data) => (
                        <div key={data.id} className="featured wods">
                            <span className="title">{data.name}</span>
                            <span className="type">{data.type}</span>
                            <span className="time">{data.time}</span>
                            <span className="movements">{data.movement1}</span>
                            <span className="movements">{data.movement2}</span>
                            <span className="movements">{data.movement3}</span>
                            <span className="movements">{data.movement4}</span>
                            <span className="movements movement5">{data.movement5}</span>
                        </div>
                    ))
                ) : (
                    <h1>No results found!</h1>
                )}
            </div>
        </div>
    );
}

export {WOD};