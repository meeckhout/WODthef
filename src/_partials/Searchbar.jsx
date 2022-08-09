import React, {useEffect, useState} from 'react';
import '../styles/Searchbar.css';
import { FaSearch } from "react-icons/fa";

function GetApi() {

    // const [data, setData] = useState(null);
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);

    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '13a70d2f90msh4be17b36f27a2fcp11a47ajsna9101a51e768',
                'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
            }
        };

        fetch('https://exercisedb.p.rapidapi.com/exercises', options)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(
                        `This is an HTTP error: the status is ${response.status}`
                    );
                }
                return response.json();
            })
            .then((response) => {
                console.log(response)
                }
            )
            .catch((err) => {
                console.error(err)
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