import {
  SHOW_FLASH,
  HIDE_FLASH,
} from "../util/constants"

export function showFlash(message) {
  return (dispatch) => {
    dispatch({
      type: SHOW_FLASH,
      message,
    })
  }
}

export function hideFlash() {
  return (dispatch) => {
    dispatch({
      type: HIDE_FLASH,
    })
  }
}
