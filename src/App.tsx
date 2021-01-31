import React from 'react'

import MovementCheckbox from './components/movement-checkbox/MovementCheckbox'
import ContactPage from './components/form/Form'
import Header from './components/header/Header'

import { makeStyles } from '@material-ui/core/styles';


const App = () => {
  return (
    <div className="App">
      <Header />
      <MovementCheckbox />
      <ContactPage />
    </div>
  )
}

export default App
