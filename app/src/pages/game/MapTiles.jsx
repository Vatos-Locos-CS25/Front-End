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

    const moveChar = (directClicked, possDirect) => {
        if (directClicked === "north" && possDirect.nextTile.north) setMapLandState({currentRoomId: possDirect.nextTile.room_id })
        if (directClicked === "south" && possDirect.nextTile.south) setMapLandState({currentRoomId: possDirect.nextTile.room_id })
        if (directClicked === "east" && possDirect.nextTile.east) setMapLandState({currentRoomId: possDirect.nextTile.room_id })
        if (directClicked === "west" && possDirect.nextTile.west) setMapLandState({currentRoomId: possDirect.nextTile.room_id })

        if (directClicked === "forward") setMapLandState({currentRoomId: possDirect.currentTile.room_id + 1 })
        if (directClicked === "backward") setMapLandState({currentRoomId: possDirect.currentTile.room_id - 1 })

        // if (directClicked === "north" && possDirect.prevTile.north) setMapLandState({currentRoomId: possDirect.prevTile.room_id })
        // if (directClicked === "south" && possDirect.prevTile.south) setMapLandState({currentRoomId: possDirect.prevTile.room_id })
        // if (directClicked === "east" && possDirect.prevTile.east) setMapLandState({currentRoomId: possDirect.prevTile.room_id })
        // if (directClicked === "west" && possDirect.prevTile.west) setMapLandState({currentRoomId: possDirect.prevTile.room_id })
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
                <SurroundingMapTile next={false} prev={false}   possDirect={"corner"} />

                <SurroundingMapTile 
                    next={possDirect.currentTile.north} 
                    prev={possDirect.currentTile.north} 
                    possDirect={possDirect}  
                />

                <SurroundingMapTile next={false} prev={false}   possDirect={"corner"} />

                <SurroundingMapTile 
                    next={possDirect.currentTile.west} 
                    prev={possDirect.currentTile.west} 
                    possDirect={possDirect} 
                />

                <CharMapTile  roomId={mapLandState.currentRoomId} possDirect={possDirect} />

                <SurroundingMapTile 
                    next={possDirect.currentTile.east}
                    prev={possDirect.currentTile.east} 
                    possDirect={possDirect} 
                />

                <SurroundingMapTile next={false} prev={false}   possDirect={"corner"} />

                <SurroundingMapTile 
                    next={possDirect.currentTile.south} 
                    prev={possDirect.currentTile.south} 
                    possDirect={possDirect} 
                />

                <SurroundingMapTile next={false} prev={false}   possDirect={"corner"} />
            </main>
            <Controls possDirect={possDirect} moveChar={moveChar} />
        </>
    );
};


export default MapTiles;

