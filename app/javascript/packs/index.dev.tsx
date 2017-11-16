import * as React from "react"
import { render } from "react-dom"
import { AppContainer } from "react-hot-loader"

import App from "./App"

const rootNode = document.getElementById("root")

const renderComponent = (Component) => {
  render(
    <AppContainer>
      <Component />
    </AppContainer>,
    rootNode,
  )
}

if (module.hot) {
  module.hot.accept("./App", () => {
    renderComponent(App)
  })
}

renderComponent(App)
