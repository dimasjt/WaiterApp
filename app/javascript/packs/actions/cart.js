import {
  ADD_ITEM_TO_CART,
  REMOVE_ITEM_FROM_CART,
  CLEAR_ITEMS_FROM_CART,
} from "../util/constants"

export function addItem(product) {
  return (dispatch) => {
    dispatch({
      type: ADD_ITEM_TO_CART,
      product,
    })
  }
}

export function removeItem(product) {
  return (dispatch) => {
    dispatch({
      type: REMOVE_ITEM_FROM_CART,
      product,
    })
  }
}

export function clearItems() {
  return (dispatch) => {
    dispatch({
      type: CLEAR_ITEMS_FROM_CART,
    })
  }
}
