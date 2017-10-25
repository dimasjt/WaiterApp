import React, { Component } from "react"

import FullScreenDialog from "../components/FullScreenDialog"

class AddProductPage extends Component {
  redirectBack = () => {
    console.log("redirect")
  }
  render() {
    return (
      <FullScreenDialog
        title="Add New Product"
      >
        <div>Ahai</div>
      </FullScreenDialog>
    )
  }
}

export default AddProductPage
