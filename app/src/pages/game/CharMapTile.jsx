import React from 'react';
import { GiGriffinSymbol } from "react-icons/gi";
import { MdChevronRight, MdChevronLeft, MdExpandLess, MdExpandMore } from "react-icons/md";


const CharMapTile = props => {
    const { roomId, possDirect } = props;

    return (
        <div className="block--tile_char">
            <GiGriffinSymbol className="icon--char" /> 
            <div className="block--char-data">{roomId}</div>

            <div className="block--char-direct-container">
                {possDirect.currentTile.north && (
                    <MdExpandLess className="icon--char-direct north" />
                )}
                {possDirect.currentTile.south && (
                    <MdExpandMore className="icon--char-direct south" />
                )}
                {possDirect.currentTile.west && (
                    <MdChevronLeft className="icon--char-direct west" />
                )}
                {possDirect.currentTile.east && (
                    <MdChevronRight className="icon--char-direct east" />
                )}
            </div>

        </div>
    );
};


export default CharMapTile;

