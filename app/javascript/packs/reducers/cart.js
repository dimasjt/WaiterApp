import { fromJS } from "immutable"

import {
  ADD_ITEM_TO_CART,
  REMOVE_ITEM_FROM_CART,
  CLEAR_ITEMS_FROM_CART,
} from "../util/constants"

const initialState = fromJS({
  items: [],
})

const findIndexProduct = (state, action) => {
  return state.get("items").findIndex((p) => p.get("id") === action.product.get("id"))
}

const findProduct = (state, action) => {
  return state.get("items").find((p) => p.get("id") === action.product.get("id"))
}

function cart(state = initialState, action) {
  let productIndex
  switch (action.type) {
    case ADD_ITEM_TO_CART:
      productIndex = findIndexProduct(state, action)

      if (productIndex >= 0) {
        return state.updateIn(["items", productIndex], (item) => item.set("quantity", item.get("quantity") + 1))
      } else {
        const product = action.product.set("quantity", 1)
        return state.updateIn(["items"], (list) => list.push(product))
      }
    case REMOVE_ITEM_FROM_CART:
      const product = findProduct(state, action)
      productIndex = findIndexProduct(state, action)

      if (!product) {
        return state
      }

      if (product.get("quantity") > 1) {
        return state.updateIn(["items", productIndex], (item) => item.set("quantity", item.get("quantity") - 1))
      } else {
        return state.deleteIn(["items", productIndex])
      }
    case CLEAR_ITEMS_FROM_CART:
      return {
        ...initialState,
      }
    default:
      return state
  }
}

export default cart
