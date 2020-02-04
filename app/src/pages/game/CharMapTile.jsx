import React from 'react';


const CharMapTile = props => {
    const { roomId } = props;

    return (
        <div className="block--tile_char">
            hero rm {roomId}
        </div>
    );
};


export default CharMapTile;

