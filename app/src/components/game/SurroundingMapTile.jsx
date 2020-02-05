import React from 'react';


const SurroundingMapTile = props => {
    const { possDirect, lastTile, direction } = props;

    if (possDirect === "corner" || lastTile === "corner") {
        return (
            <div className="block--tile_corner"></div>
        )
    }

    if (possDirect === lastTile) {
        return (
            <div className="block--tile_oldpath"></div>
        )
    }

    if (direction === "north") {
        return (
            <div className="block--tile_path"></div>
        )
    }
    
    return (
        <>
            {possDirect  !== 0  ?  (
                <div className="block--tile_path"></div>
            ) : (
                <div className="block--tile_blocked"></div>
            )}
        </>
    );
}


export default SurroundingMapTile;

