import * as React from "react"
import { createIcon } from "@chakra-ui/react"
import { commonIconDefaultProps } from "../utils"

export const MobileIcon = createIcon({
  displayName: "MobileIcon",
  viewBox: "0 0 256 256",
  defaultProps: {
    width: "256px",
    height: "256px",
    ...commonIconDefaultProps,
  },
  path: [
    <path d="M104.665 208C104.665 205.054 107.054 202.665 110 202.665H144C146.946 202.665 149.335 205.054 149.335 208C149.335 210.946 146.946 213.335 144 213.335H110C107.054 213.335 104.665 210.946 104.665 208Z" />,
    <path d="M128 59C132.418 59 136 55.4183 136 51C136 46.5817 132.418 43 128 43C123.582 43 120 46.5817 120 51C120 55.4183 123.582 59 128 59Z" />,
    <path d="M203 31.67C203 25.7771 198.223 21 192.33 21L63.67 21C57.7771 21 53 25.7771 53 31.67L53 224.33C53 230.223 57.7771 235 63.67 235H192.33C198.223 235 203 230.223 203 224.33L203 31.67ZM192.329 31.671L63.671 31.671L63.671 224.329H192.329V31.671Z" />,
  ],
})
