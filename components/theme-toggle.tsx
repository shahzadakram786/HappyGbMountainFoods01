"use client"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

/**
 * 🌙 THEME TOGGLE COMPONENT
 *
 * Button that switches between light and dark themes
 * Shows sun icon in light mode, moon icon in dark mode
 * Includes smooth transitions and accessibility features
 */
export function ThemeToggle() {
  const { setTheme, theme } = useTheme()

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="h-9 w-9 hover:bg-teal-100 dark:hover:bg-teal-800"
      aria-label="Toggle theme"
    >
      {/* ☀️ SUN ICON (visible in light mode) */}
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-golden-500" />

      {/* 🌙 MOON ICON (visible in dark mode) */}
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-teal-600" />

      {/* 🔍 SCREEN READER TEXT (Accessibility) */}
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}

/* 
📝 EXPLANATION:
- useTheme() hook provides current theme and setter
- Icons have smooth rotate/scale transitions
- Colors match your logo (golden sun, teal moon)
- aria-label and sr-only text improve accessibility
- Button changes hover color based on current theme
*/
