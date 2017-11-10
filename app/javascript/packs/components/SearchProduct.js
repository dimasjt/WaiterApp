import React from "react"
import Input, { InputLabel, InputAdornment } from "material-ui/Input"
import { MenuItem } from "material-ui/Menu"
import { FormControl } from "material-ui/Form"
import {
  Clear as ClearIcon,
} from "material-ui-icons"
import { IconButton, Select } from "material-ui"
import { graphql } from "react-apollo"
import PropTypes from "prop-types"

import { GET_CATEGORIES } from "../queries"

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

const SearchProduct = ({ query, clearQuery, queryChange, categoryChange, categoriesQuery, category }) => {
  const categories = categoriesQuery.categories || []
  const categoryOptions = categories.map((cat) => (
    <MenuItem key={cat.id} value={cat.id}>
      {cat.name}
    </MenuItem>
  ))
  return (
    <div>
      <FormControl fullWidth margin="normal">
        <InputLabel htmlFor="search">Search</InputLabel>
        <Input
          id="search"
          placeholder="Type a product..."
          value={query}
          onChange={(event) => queryChange(event.target.value)}
          autoComplete="off"
          endAdornment={<Adornment query={query} clearQuery={clearQuery} />}
        />
      </FormControl>
      <FormControl fullWidth margin="normal">
        <InputLabel htmlFor="category-search">Category</InputLabel>
        <Select
          value={category}
          onChange={(event) => categoryChange(event.target.value)}
        >
          {categoryOptions}
          <MenuItem value="all">All</MenuItem>
        </Select>
      </FormControl>
    </div>
  )
}

SearchProduct.propTypes = {
  query: PropTypes.string,
  clearQuery: PropTypes.func.isRequired,
  queryChange: PropTypes.func.isRequired,
  categoryChange: PropTypes.func.isRequired,
}

export default graphql(GET_CATEGORIES, {
  name: "categoriesQuery",
})(SearchProduct)
