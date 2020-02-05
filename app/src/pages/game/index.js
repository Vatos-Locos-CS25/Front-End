import React, { useEffect, useState } from "react"
import axios from "axios"
import GameNavBar from "../../components/navbar"
import GameController from "../../components/controller"
import { Box, Grid } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import GameMapContainer from "../../components/game/GameMapContainer"

const useStyles = makeStyles(theme => ({
  playerLocationDisplay: {
    display: "flex",
    flexDirection: "row",
    padding: theme.spacing(2),
    backgroundColor: "#360849",
    color: "#FFFFFF"
  },
  gameControllerContainer: {
    marginTop: "calc(5% + 60px)",
    bottom: 0
  }
}))

const Game = ({ history }) => {
  const classes = useStyles()

  const request =
    process.env.NODE_ENV === "production"
      ? "https://wack-ass-game.herokuapp.com"
      : "http://localhost:8000"

  const [newGame, setNewGame] = useState(true)

  const [exitGame, setExitGame] = useState(false)

  useEffect(() => {
    if (exitGame) {
      history.push("/login")
    }
  }, [exitGame, history])

  const handleCreateNewGame = () => {
    // TODO:
  }

  const handleExitGame = () => {
    axios.post(`${request}/api/logout/`).then(response => {
      localStorage.removeItem("mud_token")
      setExitGame(true)
    })
  }

  //Directional Control Handlers
  const handleUpDirection = () => {}

  const handleLeftDirection = () => {}
  const handleRightDirection = () => {}

  const handleDownDirection = () => {}

  //Action Control Handlers
  const handleSpeak = () => {}

  const handleAction = () => {}

  return (
    <div>
      <Grid container>
        <Grid item xs={12}>
          <GameNavBar
            createNewGame={handleCreateNewGame}
            exitGame={handleExitGame}
          />
        </Grid>
        <Grid item xs={12}>
          <Box className={classes.playerLocationDisplay}>
            <div style={{ flex: 1 }}>You are in Room 1</div>
            <div>Room Description</div>
          </Box>
        </Grid>
        <section className="section--game-container">
          <div className="block--board">
            <GameMapContainer />
          </div>
        </section>

        <Grid item xs={12}>
          <GameController
            up={handleUpDirection}
            left={handleLeftDirection}
            right={handleRightDirection}
            down={handleDownDirection}
            speak={handleSpeak}
          />
        </Grid>
      </Grid>
    </div>
  )
}

export default Game
