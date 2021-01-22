import React, { useState,useEffect} from 'react';

const API_URL = `https://www.omdbapi.com/`;
const API_KEY = `ac367ee5`;



export default function getMovie(name) {
    const [list, setList] = useState({});
    let array2 = {};
    const URL = `${API_URL}?t=${name}&apikey=${API_KEY}`;

    useEffect(() => {
        fetch(URL)
            .then(function (response) {
                console.log('1');
                return response.json()
            })
            .then(function (data) {
                array2 = data;
                setList(array2);
            })
            .catch((error) => console.log(error));

    }, []);

    return list;


};
