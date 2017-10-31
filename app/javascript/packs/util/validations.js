const required = (value) => (value ? undefined : "Required")

const email = (value) => (
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? "Invalid email" : undefined
)

const number = (value) => (
  value && isNaN(Number(value)) ? "Only number" : undefined
)

export {
  required,
  email,
  number,
}
