import React from "react"
import {
  Snackbar,
  IconButton,
} from "material-ui"
import CloseIcon from "material-ui-icons/Close"
import { connect } from "react-redux"
import PropTypes from "prop-types"

import { hideFlash } from "../actions/flash"

const Flash = ({ open, message, close }) => {
  const messageSpan = (
    <span>
      {message}
    </span>
  )

  const action = (
    <IconButton
      key="close"
      aria-label="Close"
      onClick={close}
    >
      <CloseIcon />
    </IconButton>
  )
  return (
    <Snackbar
      open={open}
      message={messageSpan}
      action={[action]}
      autoHideDuration={5000}
    />
  )
}

Flash.propTypes = {
  open: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
  close: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  open: state.flash.open,
  message: state.flash.message,
})

const mapDispatchToProps = (dispatch) => ({
  close: () => dispatch(hideFlash()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Flash)
