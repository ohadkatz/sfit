import React from 'react'
import { createMuiTheme } from '@material-ui/core/styles'
import styled from 'styled-components'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'

const theme = createMuiTheme()

const SfitHeader = styled.h1`
  margin-top: ${theme.spacing(8)};
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom-style: dotted;
  font-size: 50px;
`

const HeaderButton = styled(Button)`
  width: 100%;
`

export default function Header() {
  return (
    <AppBar position="static" color="secondary">
      <SfitHeader>SFIT</SfitHeader>
      <Grid container spacing={1}>
        <Grid item xs={6} sm={6}>
          <HeaderButton variant="contained" color="default">
            FREE PROGRAM
          </HeaderButton>
        </Grid>
        <Grid item xs={6} sm={6}>
          <HeaderButton variant="contained" color="default">
            CONTACT ME
          </HeaderButton>
        </Grid>
      </Grid>
    </AppBar>
  )
}
