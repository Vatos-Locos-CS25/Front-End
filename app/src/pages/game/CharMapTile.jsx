import React from 'react';
import { GiGriffinSymbol } from "react-icons/gi";


const CharMapTile = props => {
    const { roomId } = props;

    return (
        <div className="block--tile_char">
            <GiGriffinSymbol className="icon--char" /> 
            <div className="block--char-data">{roomId}</div>
        </div>
    );
};


export default CharMapTile;

