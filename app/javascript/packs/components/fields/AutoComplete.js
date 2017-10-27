import React from "react"
import { AutoComplete as RFAutoComplete } from "redux-form-material-ui"
import { Field } from "redux-form"
import { AutoComplete as MUIAutoComplete } from "material-ui"
import _ from "lodash"
import PropTypes from "prop-types"

const AutoComplete = ({ name, label, dataSource }) => {
  const labelText = label || _.capitalize(label)

  return (
    <Field
      name={name}
      component={RFAutoComplete}
      label={labelText}
      filter={MUIAutoComplete.fuzzyFilter}
      dataSource={dataSource}
      dataSourceConfig={{ text: "name", value: "id" }}
      openOnFocus
    />
  )
}

AutoComplete.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  dataSource: PropTypes.arrayOf(PropTypes.object),
}

export default AutoComplete
