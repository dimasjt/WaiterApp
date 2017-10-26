import React from "react"
import { Field } from "redux-form"
import { Select } from "redux-form-material-ui"
import { MenuItem } from "material-ui"
import _ from "lodash"
import PropTypes from "prop-types"

const SelectField = ({ name, label, options }) => {
  const labelText = label || _.capitalize(name)

  const opts = options.map((opt) => (
    <MenuItem key={opt.id} value={opt.id}>
      {opt.name}
    </MenuItem>
  ))

  return (
    <Field
      name={name}
      label={labelText}
      component={Select}
      fullWidth
      margin="normal"
    >
      {opts}
    </Field>
  )
}

SelectField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.object),
}

export default SelectField
