import React from "react"
import { mount } from "enzyme"

import CartItem from "./CartItem"
import Cart from "./Cart"

import { store } from "../store"

describe("<Cart />", () => {
  const product1 = { id: "1", name: "Bebek", price: { human: "Rp10.000", number: 10000 } }
  const product2 = { id: "2", name: "Ayam", price: { human: "Rp30.000", number: 30000 } }
  const items = [
    { id: "1", quantity: 2, product: product1 },
    { id: "2", quantity: 3, product: product2 },
  ]
  const cart = { items: items }
  const wrapper = mount(<Cart cart={cart} newCart={false} store={store} />)

  it("should have <CartItem />", () => {
    expect(wrapper.find(CartItem).length).toBe(2)
  })

  it("should have total price", () => {
    expect(wrapper.text()).toContain("Rp110.000")
  })
})