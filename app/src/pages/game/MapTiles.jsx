import React from 'react';
import { useEffect, useState } from 'react';
import { MdArrowForward, MdArrowBack, MdArrowUpward, MdArrowDownward } from "react-icons/md";

import CharMapTile from "./CharMapTile";
import SurroundingMapTile from "./SurroundingMapTile";


const MapTiles = props => {
    const { mapData, charData } = props;
    
    const [ mapLandState, setMapLandState ] = useState({
        currentRoomId: 100,
    })

    // Holds the possible directions a player can go
    const [ possDirect, setPossDirect ] = useState({
        nextTile: {
            north: false,
            south: true,
            east: false,
            west: false,
            room_id: 0,
        },
        prevTile: {
            north: false,
            south: false,
            east: true,
            west: false,
            room_id: 0,
        }
    })

    const createMapTiles = (currentRoom) => {
        // Creates map tiles that coordinate with user position
        // If position is 11, then it places map tile 10 and 12
        // Pulls in possible directions from filtering mapData
        // Sets the possDirect hook with complete room objects
        let roomIdNext = currentRoom + 1
        let roomIdPrev = currentRoom - 1
        let nextRoom = mapData.filter(room => room.room_id === roomIdNext)
        let prevRoom = mapData.filter(room => room.room_id === roomIdPrev)

        setPossDirect({
            ...possDirect,
            nextTile: {
                ...nextRoom[0]
            },
            prevTile: {
                ...prevRoom[0]
            }
        })
        console.log('possDirect --> ', possDirect);
    }

    const moveChar = direction => {
        direction === "up" && console.log(direction)
    }


    useEffect(() => {
        setMapLandState({ ...mapLandState, currentRoomId: charData.room_id })
        createMapTiles(charData.room_id)

    }, [mapLandState.currentRoomId])


    return (
        <>
            <main className="main--map-tiles">
                <SurroundingMapTile next={false} possDirect={"corner"} />
                <SurroundingMapTile next={possDirect.nextTile.north} prev={possDirect.prevTile.north} possDirect={possDirect}  />
                <SurroundingMapTile next={false} possDirect={"corner"} />
                <SurroundingMapTile next={possDirect.nextTile.west} prev={possDirect.prevTile.west} possDirect={possDirect} />
                <CharMapTile  roomId={mapLandState.currentRoomId} />
                <SurroundingMapTile next={possDirect.nextTile.east} prev={possDirect.prevTile.east} possDirect={possDirect} />
                <SurroundingMapTile next={false} possDirect={"corner"} />
                <SurroundingMapTile next={possDirect.nextTile.south} prev={possDirect.prevTile.south} possDirect={possDirect} />
                <SurroundingMapTile next={false} possDirect={"corner"} />
            </main>
            <div className="block--game-controls">
                <MdArrowBack 
                    className="icon-gamepad-key"
                    onClick={() => moveChar("left")}
                />
                <MdArrowUpward 
                    className="icon-gamepad-key"
                    onClick={() => moveChar("up")}
                />
                <MdArrowDownward 
                    className="icon-gamepad-key"
                    onClick={() => moveChar("down")}
                />
                <MdArrowForward 
                    className="icon-gamepad-key"
                    onClick={() => moveChar("right")}
                />
            </div>
        </>
    );
};


export default MapTiles;

