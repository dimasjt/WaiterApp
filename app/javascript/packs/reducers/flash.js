import {
  SHOW_FLASH,
  HIDE_FLASH,
} from "../util/constants"

const initialState = {
  open: false,
  message: "",
}

function flash(state = initialState, action) {
  switch (action.type) {
    case SHOW_FLASH:
      return {
        open: true,
        message: action.message,
      }
    case HIDE_FLASH:
      return {
        open: false,
        message: "",
      }
    default:
      return state
  }
}

export default flash
