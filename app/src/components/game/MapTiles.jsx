import React from 'react';
import { useEffect, useState } from 'react';

import CharMapTile from "./CharMapTile";
import SurroundingMapTile from "./SurroundingMapTile";
import Controls from "./Controls";
import axios from 'axios';


const MapTiles = props => {
    const { mapData } = props;
    
    const [ mapLandState, setMapLandState ] = useState({ currentRoomId: 1 })

    // Possdirect is how we track the history of movement
    // and where we store the directions a player can move
    const [ possDirect, setPossDirect ] = useState({
        lastTile: {},
        currentTile: {
            north: false,
            south: false,
            east: false,
            west: false,
            room_id: 1,
        }
    })

    const createMapTiles = (currentRoom) => {
        // Creates map tiles that coordinate with user position
        // If position is 11, then it places map tile 10 and 12
        // Pulls in possible directions from filtering mapData
        // Sets the possDirect hook with complete room objects
        let currRoom = mapData.filter(room => room.room_id === currentRoom)

        setPossDirect({
            ...possDirect,
            lastTileId: mapLandState.currentRoomId,
            currentTile: { ...currRoom[0] },
        })
    };
    
    const moveChar = (directClicked) => {
        // Retrieve token from local storage, parse, pass to api call
        // Receive the direction, extract first letter, pass as data
        // Update hook with new current room
        // New current room triggers useEffect, 
        // use effect updates the map layout
        // from big map array.
        const jsontoken = localStorage.getItem("mud_token");
        const token = JSON.parse(jsontoken)
        
        return axios({
            method: "POST",
            baseURL: "https://wack-ass-game.herokuapp.com/api/adv/move",
            headers: { "Authorization": `Token ${token.key}` },
            data: {
                "direction": directClicked.slice(0,1)
            }
        })
        .then(response => setMapLandState({ currentRoomId: response.data.room_id }) )
        .catch(error => console.log("We have a move error", error))
    };

    useEffect(() => {
        setMapLandState({ ...mapLandState })
        createMapTiles(mapLandState.currentRoomId)
    }, [ mapLandState.currentRoomId, setPossDirect ])


    // Todo: programatically generate tiles
    return (
        <>
            <main className="main--map-tiles">
                <SurroundingMapTile  possDirect={"corner"} />

                <SurroundingMapTile 
                    possDirect={possDirect.currentTile.next_room_id_n}  
                />

                <SurroundingMapTile  possDirect={"corner"} />

                <SurroundingMapTile 
                    possDirect={possDirect.currentTile.next_room_id_w} 
                />

                <CharMapTile  roomId={mapLandState.currentRoomId}  possDirect={possDirect} />

                <SurroundingMapTile 
                    possDirect={possDirect.currentTile.next_room_id_e} 
                />

                <SurroundingMapTile  possDirect={"corner"} />

                <SurroundingMapTile 
                    possDirect={possDirect.currentTile.next_room_id_s} 
                />

                <SurroundingMapTile  possDirect={"corner"} />
            </main>
            <Controls currentTile={possDirect.currentTile}  moveChar={moveChar} />
        </>
    );
};


export default MapTiles;

