import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderStyle: 'dotted bottom',
    fontSize: '50px'
  },
  button: {
    width: '100%'
  }
}));


export default function Header() {
  const classes = useStyles()
  return (
    <AppBar position="static" color="secondary">
        <h1 className={classes.paper}> SFIT </h1>
      <Grid container spacing={1}>
        <Grid item xs={6} sm={6}>
          <Button className={classes.button} variant="contained" color="default">
            FREE PROGRAM
          </Button>
        </Grid>
        <Grid item xs={6} sm={6}>
          <Button className={classes.button} variant="contained" color="default">
            CONTACT ME
          </Button>
        </Grid>
      </Grid>
    </AppBar>
  )
}
