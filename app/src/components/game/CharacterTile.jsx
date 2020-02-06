import React from 'react';
import { useState } from "react";
import { useEffect } from 'react';
import { GiGriffinSymbol, GiThrust, GiAbstract039 } from "react-icons/gi";


const SurroundingMapTile = props => {
    const { currentTile, lastTile, roomId, possDirect } = props;

    
    const [ charTranslate, setCharTranslate ] = useState({ x: 0, y: 0, display: true });
    const [ moveHistory, setMoveHistory ] = useState([])
    
    let mapTransform = {
        transform: `translate(${charTranslate.x}px, ${charTranslate.y}px )`,
        display: `${charTranslate.display ? "flex" : "none"}`
    }
    
    // console.log('currentTile, lastTile, direction, move history, last move --> \n', 
    // currentTile, "\n", lastTile, "\n", direction, "\n", moveHistory, moveHistory[moveHistory.length - 1]);
    
    // console.log('current x,y --> ', currentTile.x_coor, currentTile.y_coor );
    // console.log('last x,y --> ', lastTile.x_coor, lastTile.y_coor );

    useEffect(() => {
        // Forwards
        if (currentTile.x_coor > lastTile.x_coor) setCharTranslate({ ...charTranslate, x: charTranslate.x + 50, display: true })
        if (currentTile.y_coor > lastTile.y_coor) setCharTranslate({ ...charTranslate, y: charTranslate.y - 50, display: true })

        // Backwards
        if (currentTile.x_coor < lastTile.x_coor) setCharTranslate({ ...charTranslate, x: charTranslate.x - 50, display: true })
        if (currentTile.y_coor < lastTile.y_coor) setCharTranslate({ ...charTranslate, y: charTranslate.y + 50, display: true })

        if (lastTile.room_id !== undefined) setMoveHistory(moveHistory.concat(lastTile.room_id))
    }, [currentTile])

    return (
        <>
            <div className="block--tile_char" style={{...mapTransform}}>
                <div className="block--char-direct-container">
                    <div className="icon--char-direct center" ></div>
                    {possDirect.currentTile.north && (
                        <GiThrust className="icon--char-direct north" style={{transform:"rotate(0deg) scale(0.75, 1.25)"}}  />
                    )}
                    {possDirect.currentTile.east && (
                        <GiThrust className="icon--char-direct east" style={{transform:"rotate(90deg) scale(0.75, 1.25)"}} />
                    )}
                    {possDirect.currentTile.south && (
                        <GiThrust className="icon--char-direct south" style={{transform:"rotate(180deg) scale(0.75, 1.25)"}} />
                    )}
                    {possDirect.currentTile.west && (
                        <GiThrust className="icon--char-direct west" style={{transform:"rotate(240deg) scale(0.75, 1.25)"}} />
                    )}
                </div>
                <GiGriffinSymbol className="icon--char" /> 
            </div>
        </>
    )
}

export default SurroundingMapTile;
