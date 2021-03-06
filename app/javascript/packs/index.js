import React from "react"
import { render } from "react-dom"

import App from "./App"

const rootNode = document.getElementById("root")

const renderComponent = () => {
  render(
    <App />,
    rootNode,
  )
}

renderComponent()
