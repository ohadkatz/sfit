import React, { FC } from 'react'
import { MovementDict } from '../../constants/Movements'
import {
  createMuiTheme,
  FormLabel,
  FormControl,
  FormGroup,
  FormControlLabel,
  FormHelperText,
  Checkbox,
} from '@material-ui/core'

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
