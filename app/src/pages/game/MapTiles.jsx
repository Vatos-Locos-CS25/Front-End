import React from 'react';
import { useEffect, useState } from 'react';

import CharMapTile from "./CharMapTile";
import SurroundingMapTile from "./SurroundingMapTile";


const MapTiles = props => {
    const { mapData, charData } = props;
    const [ mapLandState, setMapLandState ] = useState({
        currentRoomId: "100",
        tileNW: "corner",
        tileN: "path",
        tileNE: "corner",
        tileE: "path",
        tileSE: "corner",
        tileS: "path",
        tileSW: "corner",
        tileW: "path",
    })

    const createMapTiles = () => {

    }


    useEffect(() => {
        setMapLandState({ ...mapLandState, currentRoomId: charData.roomId })
    }, [])


    return (
        <main className="main--map-tiles">
            <SurroundingMapTile mapLandState={mapLandState.tileNW} />
            <SurroundingMapTile mapLandState={mapLandState.tileN} />
            <SurroundingMapTile mapLandState={mapLandState.tileNE} />
            <SurroundingMapTile mapLandState={mapLandState.tileE} />
            <CharMapTile  roomId={mapLandState.currentRoomId} />
            <SurroundingMapTile mapLandState={mapLandState.tileSE} />
            <SurroundingMapTile mapLandState={mapLandState.tileS} />
            <SurroundingMapTile mapLandState={mapLandState.tileSW} />
            <SurroundingMapTile mapLandState={mapLandState.tileW} />
        </main>
    );
};


export default MapTiles;

