import React from "react";
import {useEffect, useState} from 'react';

function DailyWOD() {
    const [data, setData] = useState(null);

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
                    setData([0].)
                }
            )
            .catch((err) => {
                console.error(err)
            })
    }, [])
    return(
        <div>

        </div>
    )
}

export {DailyWOD};