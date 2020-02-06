import React from 'react';
import { useState } from "react";
import { useEffect } from 'react';
import { GiGriffinSymbol } from "react-icons/gi";


const SurroundingMapTile = props => {
    const { possDirect, lastTile, direction } = props;

    
    const [ charTranslate, setCharTranslate ] = useState({ x: 0, y: 0, display: true });
    const [ moveHistory, setMoveHistory ] = useState([])
    
    let mapTransform = {
        transform: `translate(${charTranslate.x}px, ${charTranslate.y}px )`,
        display: `${charTranslate.display ? "flex" : "none"}`
    }
    
    console.log('possDirect , lastTile, direction, last move, move history --> \n', possDirect, lastTile.room_id, direction, moveHistory[moveHistory.length - 1], moveHistory);
    useEffect(() => {
        if (direction === "east" && moveHistory[moveHistory.length - 1] === possDirect) console.log("this is hitting")
        if (direction === "west" && moveHistory[moveHistory.length - 1] === possDirect) console.log("this is hitting west")
        
        // // Move backwards
        // if (direction === "north" && moveHistory[moveHistory.length - 2] === possDirect) setCharTranslate({ ...charTranslate, y: charTranslate.y + 50, display: true })
        // if (direction === "south" && moveHistory[moveHistory.length - 2] === possDirect) setCharTranslate({ ...charTranslate, y: charTranslate.y - 50, display: true })
        // if (direction === "east" && moveHistory[moveHistory.length - 2] === possDirect) setCharTranslate({ ...charTranslate, x: charTranslate.x - 50, display: true })
        // if (direction === "west" && moveHistory[moveHistory.length - 2] === possDirect) setCharTranslate({ ...charTranslate, x: charTranslate.x + 50, display: true })

        // // Move forwards
        // if (direction === "north" && possDirect !== 0) setCharTranslate({ ...charTranslate, y: charTranslate.y - 50, display: true })
        // else if (direction === "south" && possDirect !== 0) setCharTranslate({ ...charTranslate, y: charTranslate.y + 50, display: true })
        // else if (direction === "east" && possDirect !== 0) setCharTranslate({ ...charTranslate, x: charTranslate.x + 50, display: true })
        // else if (direction === "west" && possDirect !== 0) setCharTranslate({ ...charTranslate, x: charTranslate.x - 50, display: true })
        // else setCharTranslate({ ...charTranslate, display: false })

        if (lastTile.room_id !== undefined) setMoveHistory(moveHistory.concat(lastTile.room_id))
    }, [possDirect])

    return (
        <>
            <div className="block--tile_char" style={{...mapTransform}}>
                <GiGriffinSymbol className="icon--char" /> 
            </div>
            
        </>
    )
}

export default SurroundingMapTile;
