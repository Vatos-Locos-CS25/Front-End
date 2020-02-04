import React from 'react';
import axios from "axios";
import { useEffect, useState } from 'react';

const Map = () => {
    const [ mapData, setMapData ] = useState(null);
    
    useEffect(() => {
        axios.get("https://lambda-mud-512.herokuapp.com/api/")
        .then()
        .catch(error=>console.log(error))
    }, [])
    
    console.log('mapData --> ', mapData);
    return (
        <section className="section--map-container">

        </section>
    );
};


export default Map;

