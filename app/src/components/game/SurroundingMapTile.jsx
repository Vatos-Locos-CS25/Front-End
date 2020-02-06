import React from 'react';
import { useState } from "react";
import { useEffect } from 'react';


const SurroundingMapTile = props => {
    const { possDirect, lastTile, direction } = props;
    console.log('possDirect , lastTile, direction --> ', possDirect, lastTile, direction);
    const [ mapMatrix, setMapMatrix ] = useState({ x: 0, y: 0, display: true });

    let mapTransform = {
        transform: `translate(${mapMatrix.x}px, ${mapMatrix.y}px )`,
        display: `${mapMatrix.display ? "flex" : "none"}`
    }

    useEffect(() => {
        if (direction === "north" && possDirect !== 0) setMapMatrix({ ...mapMatrix, y: mapMatrix.y - 50, display: true })
        else if (direction === "south" && possDirect !== 0) setMapMatrix({ ...mapMatrix, y: mapMatrix.y + 50, display: true })
        else if (direction === "east" && possDirect !== 0) setMapMatrix({ ...mapMatrix, x: mapMatrix.x + 50, display: true })
        else if (direction === "west" && possDirect !== 0) setMapMatrix({ ...mapMatrix, x: mapMatrix.x - 50, display: true })
        else setMapMatrix({ ...mapMatrix, display: false })
    }, [possDirect])

    return (
        <>
            <div className="block--tile_path" style={{...mapTransform}}>{direction}</div>
        </>
    )
}


export default SurroundingMapTile;
