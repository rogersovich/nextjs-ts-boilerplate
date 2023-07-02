import { enumStatus } from "../types"

const getColorStatus = (status: enumStatus) => {
  if (status === "Alive") {
    return "green.300"
  }
  if (status === "Dead") {
    return "red.300"
  }
  if (status === "unknown") {
    return "gray.300"
  }
}

export default getColorStatus
