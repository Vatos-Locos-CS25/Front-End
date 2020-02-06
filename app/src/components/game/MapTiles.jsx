import React from 'react';
import { useEffect, useState } from 'react';

import CharMapTile from "./CharMapTile";
import SurroundingMapTile from "./SurroundingMapTile";
import Controls from "./Controls";
import axios from 'axios';


const MapTiles = props => {
    const { mapData } = props;

    const [ mapLandState, setMapLandState ] = useState({ currentRoomId: 1 });

    const jsontoken = localStorage.getItem("mud_token");
    const token = JSON.parse(jsontoken);

    // Possdirect is how we track the history of movement
    // and where we store the directions a player can move
    const [ possDirect, setPossDirect ] = useState({
        lastTile: false,
        currentTile: {}
    })

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

        

        // createMap();
    };
    
    const moveChar = directClicked => {
        // Retrieve token from local storage, parse, pass to api call
        // Receive the direction, extract first letter, pass as data
        // Update hook with new current room
        // New current room triggers useEffect, 
        // use effect updates the map layout
        // from big map array.
        // Also check to make sure token is legit, first
        if (token && token.key) {
            axios({
                method: "POST",
                baseURL: "https://wack-ass-game.herokuapp.com/api/adv/move",
                headers: { "Authorization": `Token ${token.key}` },
                data: { "direction": directClicked.slice(0,1) }
            })
            .then(response => {
                let currRoom = mapData.filter(room => room.room_id === mapLandState.currentRoomId);
                setPossDirect({...possDirect, lastTile: { ...currRoom[0] }})
                setMapLandState({ currentRoomId: response.data.room_id }) 
            })
            .catch(error => console.log("We have a move error", error))
        };
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
        
                        <CharMapTile  
                            roomId={mapLandState.currentRoomId}  
                            possDirect={possDirect} 
                        />
                        <SurroundingMapTile 
                            direction={"north"}
                            possDirect={possDirect.currentTile.next_room_id_n}
                            lastTile={possDirect.lastTile}
                        />
                        <SurroundingMapTile 
                            direction={"east"}
                            possDirect={possDirect.currentTile.next_room_id_e}
                            lastTile={possDirect.lastTile}
                        />
                        <SurroundingMapTile 
                            direction={"south"}
                            possDirect={possDirect.currentTile.next_room_id_s}  
                            lastTile={possDirect.lastTile}  
                        />
                        <SurroundingMapTile 
                            direction={"west"}
                            possDirect={possDirect.currentTile.next_room_id_w}  
                            lastTile={possDirect.lastTile}  
                        />
        
                    </main>
                    <Controls currentTile={possDirect.currentTile}  moveChar={moveChar} />
                </>
            )}
        </>
    );
};


export default MapTiles;
