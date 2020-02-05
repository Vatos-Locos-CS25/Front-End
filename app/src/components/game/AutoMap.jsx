import React from 'react';
import SurroundingMapTile from "./SurroundingMapTile";


const AutoMap = props => {
    // const createMap = () => {
    //     let startingRoomId = mapLandState.currentRoomId;
    //     let xcord = 0
    //     for (let i = startingRoomId; i < mapData.length; i++) {
    //         if (mapData[i].north) 
    //     }
    // }

    const mapGrid = {
        width: "80%",
        display: "grid",
        gridGap: "15px",
        gridTemplateColumns: `repeat(auto-fit, 100px)`,
        backgroundColor: "#131313",
        padding: "10px",
    }

    return (
        <main  style={mapGrid} >
            <SurroundingMapTile  possDirect={null}  lastTile={1} direction={"north"} />
            <SurroundingMapTile  possDirect={null}  lastTile={1} direction={"north"} />
        </main>
    );
}


export default AutoMap;

