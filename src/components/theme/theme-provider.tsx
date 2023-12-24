"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { type ThemeProviderProps } from "next-themes/dist/types"


/**
 * This is a client-side component because it relies on the window object, which is only available in the browser.
 * Wrapping this component individually allows us to encapsulate the theme logic and make it reusable across the application.
 */

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
