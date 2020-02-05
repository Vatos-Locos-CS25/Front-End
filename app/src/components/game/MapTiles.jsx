import React from 'react';
import { useEffect, useState } from 'react';

import CharMapTile from "./CharMapTile";
import SurroundingMapTile from "./SurroundingMapTile";
import Controls from "./Controls";


const MapTiles = props => {
    const { mapData } = props;
    
    const [ mapLandState, setMapLandState ] = useState({ currentRoomId: 20 })

    // Holds the possible directions a player can go
    const [ possDirect, setPossDirect ] = useState({
        nextTile: {
            north: false,
            south: false,
            east: false,
            west: false,
            room_id: 21,
        },
        prevTile: {
            north: false,
            south: false,
            east: false,
            west: false,
            room_id: 19,
        },
        currentTile: {
            north: false,
            south: false,
            east: false,
            west: false,
            room_id: 20,
        }
    })

    const createMapTiles = (currentRoom) => {
        // Creates map tiles that coordinate with user position
        // If position is 11, then it places map tile 10 and 12
        // Pulls in possible directions from filtering mapData
        // Sets the possDirect hook with complete room objects
        let nextRoom = mapData.filter(room => room.room_id === (currentRoom + 1))
        let prevRoom = mapData.filter(room => room.room_id === (currentRoom - 1))
        let currRoom = mapData.filter(room => room.room_id === currentRoom)

        

        setPossDirect({
            ...possDirect,
            nextTile: { ...nextRoom[0] },
            prevTile: { ...prevRoom[0] },
            currentTile: { ...currRoom[0] },
        })
    }

    const moveChar = (directClicked) => {
        if (directClicked === "north" && possDirect.currentTile.next_room_id_n !== 0) setMapLandState({ currentRoomId: possDirect.currentTile.next_room_id_n })
        if (directClicked === "south" && possDirect.currentTile.next_room_id_s !== 0) setMapLandState({ currentRoomId: possDirect.currentTile.next_room_id_s })
        if (directClicked === "east" && possDirect.currentTile.next_room_id_e !== 0) setMapLandState({ currentRoomId: possDirect.currentTile.next_room_id_e })
        if (directClicked === "west" && possDirect.currentTile.next_room_id_w !== 0) setMapLandState({ currentRoomId: possDirect.currentTile.next_room_id_w })
    };

    useEffect(() => {
        setMapLandState({ ...mapLandState })
        createMapTiles(mapLandState.currentRoomId)
    }, [ mapLandState.currentRoomId, setPossDirect ])
    
    console.log('possDirect --> ', possDirect);
    console.log('mapLandState --> ', mapLandState);

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
            <Controls currentTile={possDirect.currentTile}  possDirect={possDirect}  moveChar={moveChar} />
        </>
    );
};


export default MapTiles;

