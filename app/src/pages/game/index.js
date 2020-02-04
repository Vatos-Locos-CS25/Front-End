import React, { useEffect, useState } from "react"
import axios from "axios"
import GameNavBar from "../../components/navbar"
import { Grid } from "@material-ui/core"
const Game = ({ history }) => {
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
  return (
    <div>
      <Grid container>
        <Grid item xs={12}>
          <GameNavBar
            createNewGame={handleCreateNewGame}
            exitGame={handleExitGame}
          />
        </Grid>
        <Grid item xs={12}></Grid>
      </Grid>
    </div>
  )
}

export default Game
