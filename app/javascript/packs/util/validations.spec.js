import {
  required,
  email,
  number,
} from "./validations"

describe("validations helper", () => {
  describe("required", () => {
    it("return message when invalid", () => {
      expect(required()).toBeTruthy()
    })

    it("return undefined when valid", () => {
      expect(required("Hi")).toBeFalsy()
    })
  })

  describe("email", () => {
    it("invalid email", () => {
      [
        "dimas",
        "dimasj@gmail",
        "dimasj@gmail.",
        "dimas jt@gmail.com",
        "julisa$@gmail.com",
      ].forEach((val) => {
        expect(email(val)).toBeTruthy()
      })
    })

    it("valid email", () => {
      expect(email("hello@dimasjt.com")).toBeFalsy()
    })
  })

  describe("number", () => {
    it("valid", () => {
      expect(number("100")).toBeFalsy()
      expect(number(100)).toBeFalsy()
    })

    it("invalid", () => {
      expect(number("dimas")).toBeTruthy()
    })
  })
})
