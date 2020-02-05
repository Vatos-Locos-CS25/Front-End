import React from "react"
import { useEffect, useState } from "react"

import CharMapTile from "./CharMapTile"
import SurroundingMapTile from "./SurroundingMapTile"
import AutoMap from "./AutoMap"
import Controls from "./Controls"
import axios from "axios"

const MapTiles = ({
  mapData,
  mapLandState,
  setMapLandState,
  possDirect,
  setPossDirect
}) => {
  //const { mapData } = props;

  //const [mapLandState, setMapLandState] = useState({ currentRoomId: 1 })
  //const [mapArray, setMapArray] = useState([])

  const jsontoken = localStorage.getItem("mud_token")
  const token = JSON.parse(jsontoken)

  // Possdirect is how we track the history of movement
  // and where we store the directions a player can move
  //   const [possDirect, setPossDirect] = useState({
  //     lastTileId: {},
  //     currentTile: {
  //       north: false,
  //       south: false,
  //       east: false,
  //       west: false,
  //       room_id: 1
  //     }
  //   })

  const createMapTiles = currentRoom => {
    // Creates map tiles that coordinate with user position
    // If position is 11, then it places map tile 10 and 12
    // Pulls in possible directions from filtering mapData
    // Sets the possDirect hook with complete room objects
    let currRoom = mapData.filter(room => room.room_id === currentRoom)

    // Store prev tile in possDirect
    setPossDirect({
      ...possDirect,
      lastTileId: possDirect.currentTile.room_id,
      currentTile: { ...currRoom[0] }
    })

    // createMap();
  }

  //   const moveChar = directClicked => {
  //     // Retrieve token from local storage, parse, pass to api call
  //     // Receive the direction, extract first letter, pass as data
  //     // Update hook with new current room
  //     // New current room triggers useEffect,
  //     // use effect updates the map layout
  //     // from big map array.
  //     // Also check to make sure token is legit, first
  //     if (token && token.key) {
  //       axios({
  //         method: "POST",
  //         baseURL: "https://wack-ass-game.herokuapp.com/api/adv/move",
  //         headers: { Authorization: `Token ${token.key}` },
  //         data: { direction: directClicked.slice(0, 1) }
  //       })
  //         .then(response =>
  //           setMapLandState({ currentRoomId: response.data.room_id })
  //         )
  //         .catch(error => console.log("We have a move error", error))
  //     }
  //   }

  useEffect(() => {
    // trigger map tiles based on position
    createMapTiles(mapLandState.currentRoomId)

    // A little redundant, but check to see if there is a
    // token first before hitting the api for init
    // Every time the room changes, we call init
    // When the app loads, we override starting position with
    // init position
    if (token && token.key) {
      axios({
        method: "GET",
        baseURL: "https://wack-ass-game.herokuapp.com/api/adv/init",
        headers: { Authorization: `Token ${token.key}` }
      })
        .then(response =>
          setMapLandState({ currentRoomId: response.data.room_id })
        )
        .catch(error => console.log("We have an init error", error))
    }

    // Todo: utilize init data
    // Probably grab players data and do smething with it
    // somethingWithInitData()
  }, [mapLandState.currentRoomId, setPossDirect])

  // console.log('possDirect --> ', possDirect);
  // console.log('mapLandState --> ', mapLandState);

  // Todo: programatically generate tiles
  return (
    <>
      <main className="main--map-tiles">
        <SurroundingMapTile possDirect={"corner"} lastTile={"corner"} />

        <SurroundingMapTile
          possDirect={possDirect.currentTile.next_room_id_n}
          lastTile={possDirect.lastTileId}
        />

        <SurroundingMapTile possDirect={"corner"} lastTile={"corner"} />

        <SurroundingMapTile
          possDirect={possDirect.currentTile.next_room_id_w}
          lastTile={possDirect.lastTileId}
        />

        <CharMapTile
          roomId={mapLandState.currentRoomId}
          possDirect={possDirect}
        />

        <SurroundingMapTile
          possDirect={possDirect.currentTile.next_room_id_e}
          lastTile={possDirect.lastTileId}
        />

        <SurroundingMapTile possDirect={"corner"} lastTile={"corner"} />

        <SurroundingMapTile
          possDirect={possDirect.currentTile.next_room_id_s}
          lastTile={possDirect.lastTileId}
        />

        <SurroundingMapTile possDirect={"corner"} lastTile={"corner"} />
      </main>

      {/* <AutoMap mapData={mapData} /> */}

      {/* <Controls currentTile={possDirect.currentTile} moveChar={moveChar} /> */}
    </>
  )
}

export default MapTiles
