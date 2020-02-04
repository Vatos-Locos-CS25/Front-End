import React, { useEffect } from 'react';
// import { useState } from "react";
import { MdArrowForward, MdArrowBack, MdArrowUpward, MdArrowDownward, MdArrowDropUp, MdArrowDropDown } from "react-icons/md";


const Controls = props => {
    const { possDirect, moveChar } = props;


    

    useEffect(() => {
        
    }, [possDirect])


    return (
        <div className="block--game-controls">
            <MdArrowDropUp 
                className={`icon-gamepad-key big-lever ${possDirect.nextTile.south || possDirect.prevTile.south ? "active" : "inactive"}`}
                onClick={() => moveChar("forward", possDirect)}
            />
            <MdArrowDropDown 
                className={`icon-gamepad-key big-lever ${possDirect.nextTile.south || possDirect.prevTile.south ? "active" : "inactive"}`}
                onClick={() => moveChar("backward", possDirect)}
            />

            {/* <MdArrowBack 
                className={`icon-gamepad-key ${possDirect.nextTile.west || possDirect.prevTile.west ? "active" : "inactive"}`}
                onClick={() => moveChar("west", possDirect)}
            />
            <MdArrowForward 
                className={`icon-gamepad-key ${possDirect.nextTile.east || possDirect.prevTile.east ? "active" : "inactive"}`}
                onClick={() => moveChar("east", possDirect)}
            />
            <MdArrowUpward 
                className={`icon-gamepad-key ${possDirect.nextTile.north || possDirect.prevTile.north ? "active" : "inactive"}`}
                onClick={() => moveChar("north", possDirect)}
            />
            <MdArrowDownward 
                className={`icon-gamepad-key ${possDirect.nextTile.south || possDirect.prevTile.south ? "active" : "inactive"}`}
                onClick={() => moveChar("south", possDirect)}
            /> */}
        </div>
    );
}


export default Controls;

