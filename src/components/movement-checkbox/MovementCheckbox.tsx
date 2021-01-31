import React, { ReactDOM, FunctionComponent, useState } from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'

import {MovementDict} from '../constants/Movements'
import FormLabel from '@material-ui/core/FormLabel'
import FormControl from '@material-ui/core/FormControl'
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormHelperText from '@material-ui/core/FormHelperText'
import Checkbox from '@material-ui/core/Checkbox'
import { move } from 'formik'



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
  
  
  //   return (
  //     <div>
  //       {movement.name}
  //     </div>
  //   )
  // })
    //   return (
    //     <FormLabel component="legend">
    // Pick Three {movementType} Movements:{' '}
    // </FormLabel>
    //     <FormControlLabel
    //       control={
    //         <Checkbox
    //           checked={movementType.name}
    //           name={movementType.name}
    //         />
    //       }
    //       label={`${movementType.name}`}
    //     />
    //   );
    // }
  


  //   <FormGroup>
  //   <FormLabel component="legend">Pick two {movement}</FormLabel>
  //    <FormControlLabel
  //         control={
  //           <Checkbox
  //             name={movement.name}
  //           />
  //         }
  //         label={`${movement.name}`}
  //   />

  // </FormGroup>

const MovementCheckbox = () => {
  const classes = useStyles()
  const movementNames = Object.entries(MovementDict)
  console.log(movementNames)


  
  return (
    <div className={classes.root}>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Please Select From These Movements</FormLabel>
        <FormControl
          required
          component="fieldset"
          className={classes.formControl}
        >

          {movementNames.map(([movementClass, movementList])=>  (
                  <FormGroup>
                  <FormLabel component="legend">Pick Two Movements for your {movementClass}</FormLabel>
                  { movementList.map((movement) => (
                          <FormControlLabel
                                control={
                                  <Checkbox
                                    name={movement.name}
                                  />
                                } 
                             label= {movement.name}   
                          />
                    
                    
                    
                    ))
                  }

                </FormGroup>
            ))
          }
          
          
          <FormHelperText>You can display an error</FormHelperText>
        </FormControl>
      </FormControl>
    </div>
  )
};

export default MovementCheckbox;
