import React from "react"
import { MuiThemeProvider, createMuiTheme } from "material-ui/styles"
import { ApolloProvider } from "react-apollo"

import "typeface-roboto"

import Routes from "./components/Routes"
import { store } from "./store"
import { apolloClient } from "./apollo"

const theme = createMuiTheme()

const App = () => (
  <ApolloProvider store={store} client={apolloClient}>
    <MuiThemeProvider theme={theme}>
      <Routes />
    </MuiThemeProvider>
  </ApolloProvider>
)

export default App
