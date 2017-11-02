import React from "react"
import { MuiThemeProvider, createMuiTheme } from "material-ui/styles"
import { ApolloProvider } from "react-apollo"
import { ConnectedRouter } from "react-router-redux"

import "typeface-roboto"

import Routes from "./components/Routes"
import { store, history } from "./store"
import { apolloClient } from "./apollo"

const theme = createMuiTheme()

const App = () => (
  <ApolloProvider store={store} client={apolloClient}>
    <MuiThemeProvider theme={theme}>
      <ConnectedRouter history={history}>
        <Routes />
      </ConnectedRouter>
    </MuiThemeProvider>
  </ApolloProvider>
)

export default App
