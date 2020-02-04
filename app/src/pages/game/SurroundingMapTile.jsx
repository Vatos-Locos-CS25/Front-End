import React from 'react';


const SurroundingMapTile = props => {
    console.log('props --> ', props);
    const { next, prev } = props;

    if (props.possDirect === "corner") {
        return (
            <div className="block--tile_corner"></div>
        )
    }

    return (
        <>
            {next ? (
                <div className="block--tile_path">
                    next
                </div>
            ) : prev ? (
                <div className="block--tile_path">
                    prev
                </div>
            ) : (
                <div className="block--tile_blocked">
                    land
                </div>
            )}
        </>
    );
}


export default SurroundingMapTile;

