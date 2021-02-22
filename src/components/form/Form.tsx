import React, { FC } from 'react'
import * as Yup from 'yup'
import { TextField } from 'formik-material-ui'
import { Formik, Field, Form } from 'formik'
import styled from 'styled-components'
import {
  createMuiTheme,
  CssBaseline,
  makeStyles,
  createStyles,
  Container,
  Grid,
  Button,
  FormControlLabel,
  Checkbox,
  Theme,
} from '@material-ui/core'

const theme = createMuiTheme()

const SubmitButton = styled(Button)`
  margintop: ${theme.spacing(8)};
`

const validationSchema = Yup.object({
  firstName: Yup.string().required('First name is required'),
  lastName: Yup.string().required('Last name is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email address is required'),
})

const ContactPage: FC = () => {
  return (
    <Container component="main" maxWidth="xs">
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            setSubmitting(false)
            alert(JSON.stringify(values, null, 2))
          }, 500)
        }}
      >
        {({ submitForm, isSubmitting }) => (
          <Form>
            <CssBaseline />
            <Grid container justify="space-around" direction="row">
              <Grid item lg={10} md={10} sm={10} xs={10}>
                <Field
                  component={TextField}
                  name="first name"
                  type="first mame"
                  label="First Name"
                />
              </Grid>
              <Grid item lg={10} md={10} sm={10} xs={10}>
                <Field
                  component={TextField}
                  name="last name"
                  type="last name"
                  label="Last Name"
                />
              </Grid>
              <Grid item lg={10} md={10} sm={10} xs={10}>
                <Field
                  component={TextField}
                  name="email"
                  type="email"
                  label="Email"
                />
              </Grid>
              <Grid item lg={10} md={10} sm={10} xs={10}>
                <SubmitButton
                  type="submit"
                  variant="contained"
                  color="secondary"
                  disabled={isSubmitting}
                >
                  Submit
                </SubmitButton>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    </Container>
  )
}

export default ContactPage
