import React from 'react';


const SurroundingMapTile = props => {
    const { possDirect } = props;

    if (possDirect === "corner") {
        return (
            <div className="block--tile_corner"></div>
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

