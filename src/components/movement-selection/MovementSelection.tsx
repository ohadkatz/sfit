import React, { FunctionComponent, useState } from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import FormLabel from '@material-ui/core/FormLabel'
import FormControl from '@material-ui/core/FormControl'
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormHelperText from '@material-ui/core/FormHelperText'
import Checkbox from '@material-ui/core/Checkbox'

interface props {
  movement: string
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    formControl: {
      margin: theme.spacing(3),
    },
  })
)

const MovementSelection: FunctionComponent<props> = ({ movement }) => {
  const classes = useStyles()

  const [state, setState] = useState({
    movement1: false,
    movement2: false,
    movement3: false,
  })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.checked })
  }

  const { movement1, movement2, movement3 } = state
  const error = [movement1, movement2, movement3].filter((v) => v).length !== 3

  return (
    <div className={classes.root}>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Assign responsibility</FormLabel>
        <FormControl
          required
          error={error}
          component="fieldset"
          className={classes.formControl}
        >
          <FormLabel component="legend">
            Pick Three {movement} Movements:{' '}
          </FormLabel>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={movement1}
                  onChange={handleChange}
                  name="movement1"
                />
              }
              label={`${movement} 1 `}
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={movement2}
                  onChange={handleChange}
                  name="movement2"
                />
              }
              label={`${movement} 2 `}
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={movement3}
                  onChange={handleChange}
                  name="movement3"
                />
              }
              label={`${movement} 3 `}
            />
          </FormGroup>
          <FormHelperText>You can display an error</FormHelperText>
        </FormControl>
      </FormControl>
    </div>
  )
}
export default MovementSelection
