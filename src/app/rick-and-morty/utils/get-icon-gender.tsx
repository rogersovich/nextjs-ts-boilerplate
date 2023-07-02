import { enumGender } from "../types"
import {
  TbGenderMale,
  TbGenderFemale,
  TbGenderGenderless,
  TbGenderEpicene,
} from "react-icons/tb"
import { Icon } from "@chakra-ui/react"

const getIconGender = (gender: enumGender) => {
  let icons = null
  let size = 27
  switch (gender) {
    case "Female":
      icons = (
        <>
          <Icon color={"pink.300"}>
            <TbGenderFemale size={size} />
          </Icon>
        </>
      )
      break
    case "Male":
      icons = (
        <>
          <Icon color={"blue.300"}>
            <TbGenderMale size={size} />
          </Icon>
        </>
      )
      break
    case "Genderless":
      icons = (
        <>
          <Icon color={"orange.300"}>
            <TbGenderGenderless size={size} />
          </Icon>
        </>
      )
      break

    default:
      icons = (
        <>
          <Icon color={"gray.300"}>
            <TbGenderEpicene size={size} />
          </Icon>
        </>
      )
      break
  }

  return icons
}

export default getIconGender
