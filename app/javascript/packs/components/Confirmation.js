import React from "react"
import { Button, Dialog } from "material-ui"
import {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "material-ui/Dialog"
import { confirmable } from "react-confirm"
import PropTypes from "prop-types"

const Confirmation = ({ proceed, cancel, show, confirmation }) => (
  <Dialog
    ignoreBackdropClick
    ignoreEscapeKeyUp
    open={show}
  >
    <DialogTitle>Alert</DialogTitle>
    <DialogContent>
      <DialogContentText>
        {confirmation}
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button color="primary" onClick={cancel}>
        Cancel
      </Button>
      <Button onClick={proceed}>
        OK
      </Button>
    </DialogActions>
  </Dialog>
)

Confirmation.propTypes = {
  proceed: PropTypes.func.isRequired,
  cancel: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
  confirmation: PropTypes.string.isRequired,
}

Confirmation.defaultProps = {
  confirmation: "Are you sure?"
}

export default confirmable(Confirmation)
