import React from "react"
import { IconButton } from "../src/ui/primitives/IconButton/IconButton"
import figma from "@figma/code-connect"

/**
 * -- This file was auto-generated by Code Connect --
 * `props` includes a mapping from Figma properties and variants to
 * suggested values. You should update this to match the props of your
 * code component, and update the `example` function to return the
 * code example you'd like to see in Figma
 */

figma.connect(
  IconButton,
  "https://www.figma.com/design/B8J4T0cWLVasuhjn9ljAjh/SDS-Code-Connect-Tutorial-(MAKE-A-COPY)?node-id=11%3A11508",
  {
    props: {
      icon: figma.instance("Icon"),
      variant: figma.enum("Variant", {
        Primary: "primary",
        Neutral: "neutral",
        Subtle: "subtle",
      }),
      state: figma.enum("State", {
        Default: "default",
        Hover: "hover",
        Disabled: "disabled",
      }),
      size: figma.enum("Size", {
        Medium: "medium",
        Small: "small",
      }),
    },
    example: (props) => <IconButton />,
  },
)
