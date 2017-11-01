import React from "react"
import { mount } from "enzyme"
import {
  ListItemSecondaryAction,
} from "material-ui/List"

import CartItem from "./CartItem"

describe("<CartItem />", () => {
  const product1 = { id: "1", name: "Bebek", price: { human: "Rp10.000", number: 10000 } }
  const item = { id: "1", quantity: 8, product: product1 }
  const func = () => { }

  describe("newCart = true", () => {
    const wrapper = mount(<CartItem item={item} newCart addItem={func} removeItem={func} />)

    it("should have action button", () => {
      expect(wrapper.find(ListItemSecondaryAction).length).toBe(1)
    })

    it("should have product", () => {
      expect(wrapper.text()).toContain("Rp10.000")
      expect(wrapper.text()).toContain("Bebek")
      expect(wrapper.text()).toContain("8")
    })
  })

  describe("newCart = false", () => {
    const wrapper = mount(<CartItem item={item} newCart={false} addItem={func} removeItem={func} />)

    it("should not have action button", () => {
      expect(wrapper.find(ListItemSecondaryAction).length).toBe(0)
    })
  })
})