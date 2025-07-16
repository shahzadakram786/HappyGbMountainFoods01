"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  // Prevent hydration mismatch
  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="h-9 w-9 hover:bg-teal-100 dark:hover:bg-teal-800"
    >
      <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-amber-500" />
      <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-teal-600" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}

/* 
EXPLANATION:
- Creates a toggle button that switches between light and dark themes
- Uses Lucide icons (Sun/Moon) with smooth transitions
- Colors updated to match logo: amber-500 (golden) and teal-600 (dark teal)
- Includes accessibility with screen reader text
- Prevents hydration issues with mounted state
*/
