import React, { FC } from 'react'
import { createMuiTheme } from '@material-ui/core/styles'

import { MovementDict } from '../../constants/Movements'
import FormLabel from '@material-ui/core/FormLabel'
import FormControl from '@material-ui/core/FormControl'
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormHelperText from '@material-ui/core/FormHelperText'
import Checkbox from '@material-ui/core/Checkbox'
import styled from 'styled-components'

const theme = createMuiTheme()

const StyledFormControl = styled(({ ...rest }) => (
  <FormControl component="fieldset" {...rest} />
))`
  margin: ${theme.spacing(3)};
`

const CheckboxContainer = styled.div`
  display: flex;
`

const MovementCheckbox: FC = () => {
  const movementNames = Object.entries(MovementDict)

  return (
    <CheckboxContainer>
      <StyledFormControl>
        <FormLabel component="legend">
          Please Select From These Movements
        </FormLabel>
        <StyledFormControl required>
          {movementNames.map(([movementClass, movementList]) => (
            <FormGroup key={movementClass}>
              <FormLabel component="legend">
                Pick Two Movements for your {movementClass}
              </FormLabel>
              {movementList.map((movement) => (
                <FormControlLabel
                  key={movement.name}
                  control={<Checkbox name={movement.name} />}
                  label={movement.name}
                />
              ))}
            </FormGroup>
          ))}

          <FormHelperText>You can display an error</FormHelperText>
        </StyledFormControl>
      </StyledFormControl>
    </CheckboxContainer>
  )
}

export default MovementCheckbox
