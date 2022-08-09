import React, {useEffect, useState} from 'react';
import '../styles/Searchbar.css';
import { FaSearch } from "react-icons/fa";

function GetApi() {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`https://exercisedb.p.rapidapi.com/exercises`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(
                        `This is an HTTP error: the status is ${response.status}`
                    );
                }
                return response.json();
            })
            .then((actualData) => console.log(actualData))
            .catch((error) => {
                    console.log(error.message)
                })
    }, [])

    return <div>App</div>
}

function Searchbar() {
    return(
        <div className="findWod">
            <div className="search">
                <input
                    type="text"
                    placeholder="Find your wod"
                    className="searchbar"
                />
                <FaSearch className="FaSearch"/>
            </div>
        </div>
    )
}

export {GetApi};
export {Searchbar};