"use client"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import type { ThemeProviderProps } from "next-themes"

/**
 * 🌙 THEME PROVIDER COMPONENT
 *
 * Wraps the entire app to provide theme context
 * Enables switching between light and dark modes
 *
 * PROPS:
 * - children: React components to wrap
 * - ...props: All NextThemes provider props
 */
export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}

/* 
📝 EXPLANATION:
- "use client" makes this a Client Component (runs in browser)
- Wraps NextThemes provider for easier importing
- Will be used in layout.tsx to wrap entire app
- Provides theme context to all child components
*/
