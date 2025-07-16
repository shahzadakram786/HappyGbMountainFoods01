"use client"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import type { ThemeProviderProps } from "next-themes"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}

/* 
EXPLANATION:
- This component wraps our app to provide theme context
- Uses next-themes library for seamless light/dark mode switching
- Will be imported in layout.tsx to wrap the entire application
*/
