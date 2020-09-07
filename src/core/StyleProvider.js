import React from "react"
import { ThemeProvider } from "@wp-g2/styles"

export function StyleProvider({ children }) {
  const theme = {
    cardBorderRadius: "2px",
  }
  console.log(ThemeProvider, theme)

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
