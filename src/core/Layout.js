/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { SEO } from "./SEO"
import { StyleProvider } from "./StyleProvider"

export function Layout({ children, title, description }) {
  return (
    <StyleProvider>
      <SEO title={title} description={description} />
      {children}
    </StyleProvider>
  )
}
