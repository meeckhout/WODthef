import React, {useEffect} from 'react';
import '../styles/Searchbar.css';
import { FaSearch } from "react-icons/fa";

function Searchbar() {

    // const [data, setData] = useState(null);
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);

    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
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

export {Searchbar};