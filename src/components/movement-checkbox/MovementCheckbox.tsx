import React, { FC } from 'react'
import * as Yup from 'yup'
import { MovementDict } from '../../constants/Movements'
import { Formik, Field, Form } from 'formik'
import {
  createMuiTheme,
  FormLabel,
  FormControl,
  FormGroup,
  FormControlLabel,
  FormHelperText,
  Checkbox,
  Button,
} from '@material-ui/core'

import styled from 'styled-components'

const theme = createMuiTheme()

const error = []

const StyledFormControl = styled(({ ...rest }) => (
  <FormControl component="fieldset" {...rest} />
))`
  margin: ${theme.spacing(3)};
`

const CheckboxContainer = styled.div`
  display: flex;
`

const validationSchema = Yup.object({
  checkedItems: Yup.array().required(
    'Please Select the Proper Amount of Movements'
  ),
})

const MovementCheckbox: FC = () => {
  const movementNames = Object.entries(MovementDict)
  const [state, setState] = React.useState(movementNames[1][1])
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.checked })
  }
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
                  control={
                    <Checkbox name={movement.name} onChange={handleChange} />
                  }
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

{
  /* <Formik
        initialValues={{
          checkedItems: [],
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            setSubmitting(false)
            alert(JSON.stringify(values, null, 2))
          }, 500)
        }}
      ></Formik> */
}
{
  /* <FormLabel component="legend">
          Please Select From These Movements
        </FormLabel>
        <StyledFormControl required>
{
  movementNames.map(([movementClass, movementList]) => (
    <FormGroup key={movementClass}>
      <FormLabel component="legend">
        Pick Two Movements for your {movementClass}
      </FormLabel>
      {movementList.map((movement) => (
        <FormControlLabel
          key={movement.name}
          control={<Checkbox name={movement.name} onChange={handleChange} />}
          label={movement.name}
        />
      ))}
    </FormGroup>
  ))
}

          <FormHelperText>You can display an error</FormHelperText>
        </StyledFormControl>
        <Button>Submit</Button> */
}
