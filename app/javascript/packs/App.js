import React from "react"
import { MuiThemeProvider, createMuiTheme } from "material-ui/styles"

import "typeface-roboto"

import Routes from "./components/Routes"

const theme = createMuiTheme()

const App = () => (
  <MuiThemeProvider theme={theme}>
    <Routes />
  </MuiThemeProvider>
)

export default App
