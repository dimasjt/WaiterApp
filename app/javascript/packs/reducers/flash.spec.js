import flash from "./flash"

import {
  SHOW_FLASH,
  HIDE_FLASH,
} from "../util/constants"

describe("reducers", () => {
  describe("flash", () => {
    const initialState = {
      open: false,
      message: "",
    }

    it("should have initialState", () => {
      expect(flash(undefined, {})).toEqual(initialState)
    })

    it("should showed", () => {
      const action = {
        type: SHOW_FLASH,
        message: "Success",
      }

      expect(flash(initialState, action)).toEqual({
        open: true,
        message: action.message,
      })
    })

    it("should hide", () => {
      const action = {
        type: HIDE_FLASH,
      }
      const state = flash(initialState, { type: SHOW_FLASH, message: "Hi" })

      expect(flash(state, action)).toEqual({
        open: false,
        message: "",
      })
    })
  })
})
