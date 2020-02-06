import React, { useEffect, useState } from "react"
import axios from "axios"
import GameNavBar from "../../components/navbar"
import GameController from "../../components/controller"
import { Box, Grid } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import GameMapContainer from "../../components/game/GameMapContainer"
<<<<<<< HEAD
import locationIcon from "../../assets/images/location.png"
=======
import Chat from '../../components/game/Chat'

>>>>>>> 896cc7c51a79abd6236e6b2736f89b30c89ac4c6
const useStyles = makeStyles(theme => ({
  playerLocationDisplay: {
    display: "flex",
    flexDirection: "row",
    padding: theme.spacing(2),
    backgroundColor: "#360849",
    color: "#FFFFFF",

    alignItems: "center"
  },
  gameControllerContainer: {
    marginTop: "calc(5% + 60px)",
    bottom: 0
  }
}))

const Game = ({ history }) => {
  const classes = useStyles()
<<<<<<< HEAD

  const jsontoken = localStorage.getItem("mud_token")
  const token = JSON.parse(jsontoken)
=======
  const [chat, setCat] = useState(false)
>>>>>>> 896cc7c51a79abd6236e6b2736f89b30c89ac4c6

  const [newGame, setNewGame] = useState(true)

  const [exitGame, setExitGame] = useState(false)

  const [possDirect, setPossDirect] = useState({
    lastTileId: {},
    currentTile: {
      north: false,
      south: false,
      east: false,
      west: false,
      room_id: 1
    }
  })

  const [mapData, setMapData] = useState(null)

  const [mapLandState, setMapLandState] = useState({ currentRoomId: 1 })

  const [currentRoom, setCurrentRoom] = useState({ title: "" })

  useEffect(() => {
    if (exitGame) {
      history.push("/login")
    }
  }, [exitGame, history])

  useEffect(() => {
    if (token && token.key) {
      axios({
        method: "GET",
        baseURL: "https://wack-ass-game.herokuapp.com/api/adv/rooms",
        headers: { Authorization: `Token ${token.key}` }
      })
        .then(response => {
          setMapData(response.data)
        })
        .catch(error => console.log(error))
    }
  }, [])

  const handleCreateNewGame = () => {
    // TODO:
  }

  const handleExitGame = () => {
<<<<<<< HEAD
    axios
      .post(`https://wack-ass-game.herokuapp.com/api/logout/`)
      .then(response => {
        localStorage.removeItem("mud_token")
        setExitGame(true)
      })
=======
    axios.post(`https://wack-ass-game.herokuapp.com/api/logout/`).then(response => {
      localStorage.removeItem("mud_token")
      setExitGame(true)
    })
>>>>>>> 896cc7c51a79abd6236e6b2736f89b30c89ac4c6
  }

  const chatToggle = () => {
    setCat(!chat)
  }

  //Directional Control Handlers

  const moveChar = directClicked => {
    // Retrieve token from local storage, parse, pass to api call
    // Receive the direction, extract first letter, pass as data
    // Update hook with new current room
    // New current room triggers useEffect,
    // use effect updates the map layout
    // from big map array.
    // Also check to make sure token is legit, first
    if (token && token.key) {
      axios({
        method: "POST",
        baseURL: "https://wack-ass-game.herokuapp.com/api/adv/move",
        headers: { Authorization: `Token ${token.key}` },
        data: { direction: directClicked.slice(0, 1) }
      })
        .then(response => {
          setMapLandState({ currentRoomId: response.data.room_id })
        })
        .catch(error => console.log("We have a move error", error))
    }
  }

  //Action Control Handlers
  const handleSpeak = () => {}

  return (
    <div>
      {/* <Grid container> */}
        <Grid item xs={12}>
          <GameNavBar
            createNewGame={handleCreateNewGame}
            exitGame={handleExitGame}
          />
        </Grid>

        <Grid item xs={12}>
          {possDirect && possDirect.currentTile && (
            <Box className={classes.playerLocationDisplay}>
              <img src={locationIcon} alt="location" />
              <div style={{ flex: 1 }}>
                You are in the {possDirect.currentTile.title} room
              </div>
              <div>{possDirect.currentTile.description}</div>
            </Box>
          )}
        </Grid>
        <div className='flex'>
          {/* <div> */}
            <section className="section--game-container">
              <div className="block--board">
                <GameMapContainer />
              </div>
            </section>

            {/* <Grid item xs={12}> */}
              <GameController
                up={handleUpDirection}
                left={handleLeftDirection}
                right={handleRightDirection}
                down={handleDownDirection}
                speak={handleSpeak}
                chatToggle={chatToggle}
              />
            {/* </Grid> */}
          {/* </div> */}
          <Chat chat={chat}/>
        </div>
      {/* </Grid> */}
    </div>
  )
}

export default Game
