"use client"

import {
  extendTheme,
  withDefaultColorScheme,
  withDefaultVariant,
} from "@chakra-ui/react"

const colors = {
  primary: {
    50: "#eae9fc", //* for hover on variant ghost and outlined
    100: "#cac8f7",
    200: "#a7a3f2",
    300: "#847eed",
    400: "#6962e9",
    500: "#4f46e5",
    600: "#483fe2",
    700: "#3f37de",
    800: "#362fda",
    900: "#2620d3",
  },
}

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
}

const defaultColorScheme = {
  colorScheme: "primary",
}

const customTheme = extendTheme(
  {
    config,
    colors,
  },
  withDefaultColorScheme(defaultColorScheme),
  withDefaultVariant({
    variant: "outline",
    components: ["Input", "NumberInput", "PinInput"],
  })
)

export default customTheme
