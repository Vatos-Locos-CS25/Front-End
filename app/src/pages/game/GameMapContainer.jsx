import React from 'react';
import axios from "axios";
import { useEffect, useState } from 'react';

import MapTiles from "./MapTiles";

const GameMapContainer = () => {
    const [ mapData, setMapData ] = useState(null);
    const [ charData, setCharData ] = useState({
        room_id: 11
    })
    const testToken = "e3db3b5598cd05d216894142accce241ec16b20d"
    
    useEffect(() => {
        axios({
            method: "GET",
            baseURL: "https://wack-ass-game.herokuapp.com/api/adv/rooms",
            headers: { "Authorization": `Token ${testToken}` }
        })
        .then(response => setMapData(response.data))
        .catch(error=>console.log(error))
    }, [])
    
    console.log('this is your mapData pendejo --> ', mapData);
    return (
        <>
            <section className="section--map-container">
                {mapData && charData ? (
                    <MapTiles mapData={mapData} charData={charData} />
                ) : null}
            </section>
        </>
    );
};


export default GameMapContainer;

