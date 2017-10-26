import Confirmation from "../components/Confirmation"
import { createConfirmation } from "react-confirm"

const confirm = createConfirmation(Confirmation)

export default (confirmation, options = {}) => {
  return confirm({ confirmation, ...options })
}
