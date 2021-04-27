import React from 'react'
import {
  makeStyles,
  Theme,
  createMuiTheme,
  ThemeProvider,
} from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import MovementCheckbox from '../movement-checkbox/MovementCheckbox'
import ContactPage from '../form/Form'
import { blueGrey, blue } from '@material-ui/core/colors'

const outerTheme = createMuiTheme({
  palette: {
    primary: {
      main: blueGrey[200],
    },
    secondary: {
      main: blue[500],
    },
  },
})

interface TabPanelProps {
  children?: React.ReactNode
  index: any
  value: any
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

function a11yProps(index: any) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    textAlign: 'center',
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  h1: {
    textAlign: 'center',
  },
}))

export default function SimpleTabs() {
  const classes = useStyles()
  const [value, setValue] = React.useState(0)

  const handleChange = (event: any, newValue: number) => {
    setValue(newValue)
  }

  return (
    <div className={classes.root}>
      <ThemeProvider theme={outerTheme}>
        <AppBar position="static">
          <h1>sfit</h1>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="simple tabs example"
            centered
          >
            <Tab label="Workout Generator" {...a11yProps(0)} />
            <Tab label="Contact Me" {...a11yProps(1)} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          <MovementCheckbox />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <ContactPage />
        </TabPanel>
      </ThemeProvider>
    </div>
  )
}
