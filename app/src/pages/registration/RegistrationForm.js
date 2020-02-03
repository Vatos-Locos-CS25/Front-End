import React from 'react'
import { makeStyles } from "@material-ui/core/styles"
import {
    Avatar,
    Button,
    CircularProgress,
    Divider,
    Grid,
    Link,
    TextField,
    Typography
  } from "@material-ui/core"

  const useStyles = makeStyles(theme => ({
      
    paper: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
        },
        form: {
            width: "100%",
            padding: "0 20px",
            marginTop: theme.spacing(3)
        },
        link: {
            textAlign: "center"
        }
      
  }))

const RegistrationForm = ({values, errors, touched, handleChange, handleSubmit, handleBlur, isLoading}) => {
    const classes = useStyles()
    return (
        <>
            <Grid 
            container spacing={0} 
            direction="column" 
            alignItems="center" 
            justify="center"
            style={{minHeight:"100vh"}}
            >
                <div className={classes.paper}>
                    <form className={classes.form} noValidate onSubmit={handleSubmit}>
                       <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    name="username"
                                    required
                                    fullWidth
                                    id="username"
                                    value={values.username}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    label="Username"
                                    type="text"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    name="email"
                                    required
                                    fullWidth
                                    id="email"
                                    value={values.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    label="Email"
                                    type="text"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    name="password1"
                                    required
                                    fullWidth
                                    id="password1"
                                    value={values.password1}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    label="Password"
                                    type="text"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    name="password2"
                                    required
                                    fullWidth
                                    id="password2"
                                    value={values.password2}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    label="Confirm Password"
                                    type="text"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Button type="submit" fullWidth>Register</Button>
                                <div className={classes.link}>
                                    <Link href="/login">Already has an account ? Log In</Link>
                                </div>
                            </Grid>
                        </Grid> 
                    </form>
                </div>
            </Grid>
        </>
    )
}

export default RegistrationForm
