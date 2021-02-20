import React, { FC } from 'react'
import * as Yup from 'yup'
import Button from '@material-ui/core/Button'
import { TextField } from 'formik-material-ui'
import { Formik, Field, Form } from 'formik'
import CssBaseline from '@material-ui/core/CssBaseline'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'

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
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Field
                  component={TextField}
                  name="first name"
                  type="first mame"
                  label="First Name"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Field
                  component={TextField}
                  name="last name"
                  type="last name"
                  label="Last Name"
                />
              </Grid>
              <Grid item xs={12}>
                <Field
                  component={TextField}
                  name="email"
                  type="email"
                  label="Email"
                />
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    </Container>
  )
}

export default ContactPage
