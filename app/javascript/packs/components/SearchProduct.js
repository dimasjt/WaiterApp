import React from "react"
import Input, { InputLabel, InputAdornment } from "material-ui/Input"
import { FormControl } from "material-ui/Form"
import {
  Clear as ClearIcon,
} from "material-ui-icons"
import { IconButton } from "material-ui"
import PropTypes from "prop-types"

const Adornment = ({ clearQuery, query }) => {
  if (query) {
    return (
      <InputAdornment position="end">
        <IconButton onClick={clearQuery}>
          <ClearIcon />
        </IconButton>
      </InputAdornment>
    )
  }

  return null
}

Adornment.propTypes = {
  clearQuery: PropTypes.func.isRequired,
  query: PropTypes.string,
}

const SearchProduct = ({ query, clearQuery, onChange }) => {
  return (
    <FormControl fullWidth>
      <InputLabel htmlFor="search">Search</InputLabel>
      <Input
        id="search"
        placeholder="Type a product..."
        value={query}
        onChange={(event) => onChange(event.target.value)}
        autoComplete="off"
        endAdornment={<Adornment query={query} clearQuery={clearQuery} />}
      />
    </FormControl>
  )
}

SearchProduct.propTypes = {
  query: PropTypes.string,
  clearQuery: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default SearchProduct
