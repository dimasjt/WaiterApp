import React from "react"
import { Field } from "redux-form"
import { TextField as Text } from "redux-form-material-ui"
import _ from "lodash"
import PropTypes from "prop-types"

const TextField = ({ name, placeholder, label, multiline, validate }) => {
  const placeholderText = placeholder || _.capitalize(name)
  const labelText = label || _.capitalize(name)

  return (
    <Field
      name={name}
      label={labelText}
      placeholder={placeholderText}
      component={Text}
      fullWidth
      multiline={multiline}
      rows={4}
      margin="normal"
      validate={validate}
    />
  )
}

TextField.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  multiline: PropTypes.bool,
  validate: PropTypes.any,
}

TextField.defaultProps = {
  multiline: false,
}

export default TextField
