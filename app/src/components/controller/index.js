import React from "react"
import { AppBar, Button, Fab, Grid } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import upArrow from "../../assets/images/up_arrow.png"
import leftArrow from "../../assets/images/left_arrow.png"
import rightArrow from "../../assets/images/right_arrow.png"
import downArrow from "../../assets/images/down_arrow.png"
import speakIcon from "../../assets/images/speak.png"
import actionIcon from "../../assets/images/action_b.png"

const useStyles = makeStyles(theme => ({
  controller: {
    top: "auto",
    bottom: 0,
    backgroundColor: "#F45866",
    padding: theme.spacing(8, 2)
  },
  directionalController: {
    padding: theme.spacing(1)
  },
  upDownButton: {
    backgroundColor: "#360849",
    color: "#FFFFFF"
  },
  leftButton: {
    backgroundColor: "#360849",
    color: "#FFFFFF",
    marginRight: "3px"
  },
  rightButton: {
    backgroundColor: "#360849",
    color: "#FFFFFF"
  },
  actionButton: {
    margin: theme.spacing(1),
    backgroundColor: "#3C153B",
    color: "#FFFFFF"
  }
}))
const GameController = ({ up, left, right, down, speak, action }) => {
  const classes = useStyles()
  return (
    <AppBar position="fixed" className={classes.controller}>
      <Grid container justify="space-around">
        <Grid item>
          <div
            style={{
              display: "flex",
              flexDirection: "column"
            }}>
            <Button className={classes.upDownButton} onClick={up}>
              <img src={upArrow} alt="up_arrow" />
            </Button>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                margin: "5px 0"
              }}>
              <Button className={classes.leftButton} onClick={left}>
                <img src={leftArrow} alt="left_arrow" />
              </Button>
              <Button className={classes.rightButton} onClick={right}>
                <img src={rightArrow} alt="right_arrow" />
              </Button>
            </div>

            <Button className={classes.upDownButton} onClick={down}>
              <img src={downArrow} alt="down_arrow" />
            </Button>
          </div>
        </Grid>
        <Grid item>Mini Map Placeholder</Grid>
        <Grid item>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Fab className={classes.actionButton} onClick={speak}>
              <img src={speakIcon} alt="speak" />
            </Fab>

            <Fab
              className={classes.actionButton}
              onClick={action}
              variant="extended">
              <img src={actionIcon} alt="action" />
            </Fab>
          </div>
        </Grid>
      </Grid>
    </AppBar>
  )
}

export default GameController
