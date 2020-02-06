import React from 'react';
import SurroundingMapTile from "./SurroundingMapTile";
import { useState } from 'react';
import { useEffect } from 'react';


const AutoMap = props => {
    const { mapData } = props;

    const [ mapMatrix, setMapMatrix ] = useState({ x:0, y:0 });
    const [ sortedMapData, setSortedMapData ] = useState({})
    

    let startingRoomId = 1;

    let mapTransform = {
        transform: `matrix(1,0,0,1,0,${mapMatrix.x},${mapMatrix.y})`
    }

    const createMap = () => {
        for (let i = startingRoomId; i < 5; i++) {
            if (mapData[i].north) {
                console.log("ok")
            }
            if (mapData[i].north) {
                setMapMatrix({ ...mapMatrix, y: mapMatrix.y + 100 })
                return (
                    <SurroundingMapTile  possDirect={null}  lastTile={1} direction={"north"} style={mapTransform} />
                )
            }
        }
    }

    const dynamicSort = (property) => {
        return function(a, b) {
            return (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        }
    }

    useEffect(() => {
        setSortedMapData(mapData.sort(dynamicSort("room_id")))
    }, [])

    console.log('sortedMapData --> ', sortedMapData);

    return (
        <>
            {}
            <SurroundingMapTile  
                possDirect={null}  
                lastTile={1} 
                direction={"north"}  
                style={mapTransform} 
            />
        </>
    )
}


export default AutoMap;

