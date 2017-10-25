import React, { Component } from "react"
import {
  Dialog,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
} from "material-ui"
import {
  Close as CloseIcon
} from "material-ui-icons"
import PropTypes from "prop-types"

class FullScreenDialog extends Component {
  render() {
    const { title, children } = this.props

    return (
      <Dialog
        fullScreen
        open
        onRequestClose={this.redirectBack}
      >
        <AppBar position="static">
          <Toolbar>
            <IconButton>
              <CloseIcon />
            </IconButton>
            <Typography type="title">
              {title}
            </Typography>
          </Toolbar>
        </AppBar>

        {children}
      </Dialog>
    )
  }
}

FullScreenDialog.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
}

export default FullScreenDialog
