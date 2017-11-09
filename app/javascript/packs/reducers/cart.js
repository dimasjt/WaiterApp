import { fromJS, Map } from "immutable"

import money from "../util/money"

import {
  ADD_ITEM_TO_CART,
  REMOVE_ITEM_FROM_CART,
  CLEAR_ITEMS_FROM_CART,
} from "../util/constants"

const initialState = fromJS({
  items: [],
})

const findProductByID = (action) =>
  (p) => p.getIn(["product", "id"]) === action.product.get("id")

const findIndexProduct = (state, action) =>
  state.get("items").findIndex(findProductByID(action))

const findProduct = (state, action) =>
  state.get("items").find(findProductByID(action))

function cart(state = initialState, action) {
  let productIndex
  switch (action.type) {
    case ADD_ITEM_TO_CART:
      productIndex = findIndexProduct(state, action)

      if (productIndex >= 0) {
        return state.updateIn(["items", productIndex], (item) => item.set("quantity", item.get("quantity") + 1))
      } else {
        const product = Map({ quantity: 1, product: action.product })
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
      return initialState
    default:
      return state
  }
}

function countTotalPrice(items) {
  const total = items.reduce((n, item) => n + (item.product.price.number * item.quantity), 0)
  return {
    human: money(total),
    number: total,
  }
}

function countQuantity(items) {
  return items.reduce((n, item) => n + item.quantity, 0)
}

export {
  countQuantity,
  countTotalPrice,
  cart as default,
}
