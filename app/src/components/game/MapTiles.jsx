import React from 'react';
import { useEffect, useState } from 'react';

import StartTile from "./StartTile";
import CharacterTile from "./CharacterTile";
import axios from 'axios';


const MapTiles = props => {
    const { mapData, mapLandState, setMapLandState, possDirect, setPossDirect } = props;

    const jsontoken = localStorage.getItem("mud_token");
    const token = JSON.parse(jsontoken);

    const createMapTiles = currentRoom => {
        // Creates map tiles that coordinate with user position
        // If position is 11, then it places map tile 10 and 12
        // Pulls in possible directions from filtering mapData
        // Sets the possDirect hook with complete room objects
        let currRoom = mapData.filter(room => room.room_id === currentRoom);

        // Store prev tile in possDirect
        setPossDirect({
            ...possDirect,
            lastTile: possDirect.currentTile,
            currentTile: { ...currRoom[0] },
        });
    };

    useEffect(() => {
        // trigger map tiles based on position
        createMapTiles(mapLandState.currentRoomId)

        // A little redundant, but check to see if there is a 
        // token first before hitting the api for init
        // Every time the room changes, we call init
        // When the app loads, we override starting position with
        // init position
        if (token && token.key) {
            axios({
                method: "GET",
                baseURL: "https://wack-ass-game.herokuapp.com/api/adv/init",
                headers: { "Authorization": `Token ${token.key}` }
            })
            .then(response => {
                setMapLandState({ currentRoomId: response.data.room_id }) 
            })
            .catch(error => console.log("We have an init error", error))
        }

        // Todo: utilize init data
        // Probably grab players data and do smething with it
        // somethingWithInitData()

    }, [ mapLandState.currentRoomId, setPossDirect ])

    // console.log('possDirect --> ', possDirect);
    // console.log('mapLandState --> ', mapLandState);

    // Todo: programatically generate tiles
    return (
        <>
            {possDirect && possDirect.lastTile && (
                <>
                    <main className="main--map-tiles">
                        <StartTile  />

                        <CharacterTile 
                            currentTile={possDirect.currentTile}
                            lastTile={possDirect.lastTile}
                            roomId={mapLandState.currentRoomId}  
                            possDirect={possDirect} 
                        />
                    </main>
                </>
            )}
        </>
    );
};


export default MapTiles;

