import cart from "./cart"
import {
  ADD_ITEM_TO_CART,
  REMOVE_ITEM_FROM_CART,
  CLEAR_ITEMS_FROM_CART,
} from "../util/constants"

import { fromJS, Map, List } from "immutable"

describe("reducers", () => {
  describe("cart", () => {
    const initialState = fromJS({
      items: [],
    })

    const product1 = Map({ id: 1, name: "Bebek" })
    const product2 = Map({ id: 2, name: "Ayam" })

    const addAction = (product) => ({
      type: ADD_ITEM_TO_CART,
      product,
    })

    const removeAction = (product) => ({
      type: REMOVE_ITEM_FROM_CART,
      product,
    })

    it("have initialState", () => {
      const defaultState = cart(undefined, {})
      expect(defaultState).toEqual(initialState)
      expect(defaultState.get("items")).toEqual(List())
    })

    describe("add item or add quantity", () => {
      it("should have quantity", () => {
        const state = cart(initialState, addAction(product1))
        expect(state.get("items").first().get("quantity")).toBe(1)
      })

      it("item should in cart", () => {
        let state = cart(initialState, addAction(product1))
        state = cart(state, addAction(product2))

        expect(state.get("items").size).toBe(2)
      })

      it("should add quantity when same product", () => {
        let state = cart(initialState, addAction(product1))
        state = cart(state, addAction(product1))

        expect(state.get("items").size).toBe(1)
        expect(state.get("items").first().get("quantity")).toBe(2)
      })
    })

    describe("remove item or decrement quantity", () => {
      it("remove product when qty is 1", () => {
        let state = cart(initialState, addAction(product1))
        state = cart(state, removeAction(product1))
        expect(state).toEqual(initialState)
        expect(state.get("items").size).toBe(0)
      })

      it("decrement the quantity", () => {
        let state = cart(initialState, addAction(product1))
        state = cart(state, addAction(product1))
        state = cart(state, addAction(product1))
        expect(state.get("items").first().get("quantity")).toBe(3)

        state = cart(state, removeAction(product1))
        expect(state.get("items").first().get("quantity")).toBe(2)
      })

      it("not change when product not exist in cart", () => {
        let state = cart(initialState, addAction(product1))

        expect(cart(state, removeAction(product2))).toEqual(state)
      })
    })

    describe("clear all items", () => {
      const clearAction = {
        type: CLEAR_ITEMS_FROM_CART,
      }

      it("should clear to initialState", () => {
        let state = cart(initialState, addAction(product1))
        state = cart(state, addAction(product2))

        expect(cart(state, clearAction)).toEqual(initialState)
      })
    })
  })
})
