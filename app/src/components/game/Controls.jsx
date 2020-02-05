import React from 'react';

import { MdArrowForward, MdArrowBack, MdArrowUpward, MdArrowDownward, MdArrowDropUp, MdArrowDropDown } from "react-icons/md";


const Controls = props => {
    const { currentTile, possDirect, moveChar } = props;


    return (
        <div className="block--game-controls">
            <MdArrowBack 
                className={`icon-gamepad-key ${currentTile.next_room_id_w !== 0 ? "active" : "inactive"}`}
                onClick={() => moveChar("west")}
            />
            <MdArrowForward 
                className={`icon-gamepad-key ${currentTile.next_room_id_e !== 0 ?  "active" : "inactive"}`}
                onClick={() => moveChar("east")}
            />
            <MdArrowUpward 
                className={`icon-gamepad-key ${currentTile.next_room_id_n !== 0 ?  "active" : "inactive"}`}
                onClick={() => moveChar("north")}
            />
            <MdArrowDownward 
                className={`icon-gamepad-key ${currentTile.next_room_id_s !== 0 ?  "active" : "inactive"}`}
                onClick={() => moveChar("south")}
            />
        </div>
    );
}


export default Controls;

