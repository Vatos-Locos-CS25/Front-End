import React, { useEffect, useState } from "react"
import axios from "axios"
import GameNavBar from "../../components/navbar"
import GameController from "../../components/controller"
import { Grid } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
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
        {/*TODO: Game Board*/}
        <Grid>
          <div>Game Map</div>
        </Grid>
        <Grid item xs={12}>
          <GameController
            up={handleUpDirection}
            left={handleLeftDirection}
            right={handleRightDirection}
            down={handleDownDirection}
            speak={handleSpeak}
            action={handleAction}
          />
        </Grid>
      </Grid>
    </div>
  )
}

export default Game
