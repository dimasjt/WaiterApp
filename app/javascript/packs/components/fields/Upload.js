import React, { Component } from "react"
import Dropzone from "react-dropzone"
import { ButtonBase } from "material-ui"
import { withStyles } from "material-ui/styles"
import {
  AddAPhoto as AddIcon,
} from "material-ui-icons"
import PropTypes from "prop-types"

const token = window.localStorage.getItem("token")

const styleSheet = (theme) => ({
  wrapper: {
    paddingTop: 12,
  },
  label: {
    display: "block",
    marginBottom: 12,
  },
  dropzone: {
    width: 100,
    height: 100,
    border: "1px solid #ccc",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
  },
})

class Upload extends Component {
  state = { uploaded: false }

  onDrop = async (accepted, rejected) => {
    const headers = new Headers()
    headers.append("Authorization", `Bearer ${token}`)

    const formData = new FormData()
    formData.append("image[file]", accepted[0])

    try {
      const response = await fetch("/api/images", {
        method: "POST",
        headers,
        mode: "cors",
        body: formData,
      })

      const data = await response.json()
      this.setState({ uploaded: true })
      this.props.onSuccess(data)
    } catch (error) {
      this.props.onError(error)
    }
  }
  render() {
    const { classes } = this.props

    return (
      <div className={classes.wrapper}>
        <label className={classes.label}>Upload image</label>
        <ButtonBase>
          <Dropzone
            accept="image/jpg, image/jpeg, image/png"
            onDrop={this.onDrop}
            className={classes.dropzone}
          >
            <AddIcon />
          </Dropzone>
        </ButtonBase>
      </div>
    )
  }
}

Upload.propTypes = {
  onSuccess: PropTypes.func,
  onError: PropTypes.func,
  classes: PropTypes.object,
}

export default withStyles(styleSheet)(Upload)
