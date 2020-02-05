import React from 'react';
import axios from "axios";
import { useEffect, useState } from 'react';

import MapTiles from "./MapTiles";
import Loading from "../Loading";

const GameMapContainer = () => {
    const [ mapData, setMapData ] = useState(null);

    const serializedToken = localStorage.getItem("mud_token")
    const token = JSON.parse(serializedToken)
    
    useEffect(() => {
        axios({
            method: "GET",
            baseURL: "https://wack-ass-game.herokuapp.com/api/adv/rooms",
            headers: { "Authorization": `Token ${token.key}` }
        })
        .then(response => setMapData(response.data))
        .catch(error=>console.log(error))
    }, [])

    console.log('mapData --> ', mapData);
    // If there is mapData, render the maptiles
    return (
        <section className="section--map-container">
            {mapData ? (
                <MapTiles mapData={mapData} />
            ) : (
                <Loading />
            )}
        </section>
    );
};


export default GameMapContainer;

