import React from 'react';


const SurroundingMapTile = props => {
    const { next, prev, possDirect } = props;

    if (possDirect === "corner") {
        return (
            <div className="block--tile_corner"></div>
        )
    }
    

    return (
        <>
            {next ? (
                <div className="block--tile_path">
                </div>
            ) : 
            prev ? (
                <div className="block--tile_oldpath">
                </div>
            ) : (
                <div className="block--tile_blocked"></div>
            )}
        </>
    );
}


export default SurroundingMapTile;

