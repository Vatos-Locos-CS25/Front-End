import React from 'react';
import axios from "axios";
import { useEffect, useState } from 'react';

import MapTiles from "./MapTiles";
import Loading from "../Loading";

const GameMapContainer = () => {
    const [ mapData, setMapData ] = useState(null);
    
    const testToken = "509bba415bd1211a1d65261cd86076c1c0581a5a"
    
    useEffect(() => {
        axios({
            method: "GET",
            baseURL: "https://wack-ass-game.herokuapp.com/api/adv/rooms",
            headers: { "Authorization": `Token ${testToken}` }
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

