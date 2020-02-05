import React, { useEffect } from 'react';
// import { useState } from "react";
import { MdArrowForward, MdArrowBack, MdArrowUpward, MdArrowDownward, MdArrowDropUp, MdArrowDropDown } from "react-icons/md";


const Controls = props => {
    const { currentTile, possDirect, moveChar } = props;


    

    // useEffect(() => {
        
    // }, [possDirect])


    return (
        <div className="block--game-controls">
            {/* <MdArrowDropUp 
                // className={`icon-gamepad-key big-lever ${possDirect.nextTile.south || possDirect.prevTile.south ? "active" : "inactive"}`}
                onClick={() => moveChar("forward")}
            />
            <MdArrowDropDown 
                // className={`icon-gamepad-key big-lever ${possDirect.nextTile.south || possDirect.prevTile.south ? "active" : "inactive"}`}
                onClick={() => moveChar("backward")}
            /> */}

            <MdArrowBack 
                className={`icon-gamepad-key ${currentTile.next_room_id_w !== 0 ? "active" : "inactive"}`}
                onClick={() => moveChar("west")}
            />
            <MdArrowForward 
                className={`icon-gamepad-key ${currentTile.next_room_id_w !== 0 ?  "active" : "inactive"}`}
                onClick={() => moveChar("east")}
            />
            <MdArrowUpward 
                className={`icon-gamepad-key ${currentTile.next_room_id_w !== 0 ?  "active" : "inactive"}`}
                onClick={() => moveChar("north")}
            />
            <MdArrowDownward 
                className={`icon-gamepad-key ${currentTile.next_room_id_w !== 0 ?  "active" : "inactive"}`}
                onClick={() => moveChar("south")}
            />
        </div>
    );
}


export default Controls;

