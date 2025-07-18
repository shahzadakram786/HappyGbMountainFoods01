"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Phone } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

// 🧭 NAVIGATION MENU ITEMS
const navigation = [
  { name: "Home", href: "/" },
  { name: "Menu", href: "/menu" },
  { name: "About", href: "/about" },
  // { name: "Reservations", href: "/reservations" },
  { name: "Contact", href: "/contact" },
  { name: "Blog", href: "/blog" },
]

/**
 * 🧭 NAVBAR COMPONENT
 *
 * Responsive navigation header with:
 * - Logo and brand name
 * - Desktop navigation menu
 * - Mobile hamburger menu
 * - Theme toggle button
 * - Call-to-action button
 *
 * RESPONSIVE BEHAVIOR:
 * - Desktop: Full menu visible
 * - Mobile: Hamburger menu with slide-out panel
 */
export default function Navbar() {
  // 📱 MOBILE MENU STATE
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border shadow-sm">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* 🏷️ LOGO SECTION */}
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/GbLogo-BWIUzU0E4XnqgpE3Ice9QmQEK4AZkL.png"
              alt="Happy GB Mountain Foods Logo"
              width={50}
              height={50}
              className="object-contain"
              priority // Load logo immediately
            />
            <span className="hidden text-lg lg:flex font-bold text-foreground">Happy GB Mountain Foods</span>
            <span className="font-bold text-xl text-foreground  lg:hidden xlg:hidden">HGBMF</span>

          </Link>

          {/* 🖥️ DESKTOP NAVIGATION */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-muted-foreground hover:text-primary font-medium transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* 🖥️ DESKTOP CTA & THEME TOGGLE */}
          <div className="hidden md:flex items-center space-x-4">
            {/* 📞 PHONE NUMBER */}
            <a
              href="tel:+923469790711"
              className="flex items-center text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              <Phone className="w-4 h-4 mr-1" />
              <span className="text-sm ">+92 34 6979-0711</span>
            </a>

            {/* 🌙 THEME TOGGLE */}
            <ThemeToggle />

            {/* 🎯 CTA BUTTON */}
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link href="https://www.foodpanda.pk/restaurant/n7sn/gb-mountain-foods">
                        Place an Order
                      </Link>
            </Button>
          </div>

          {/* 📱 MOBILE MENU SECTION */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />

            {/* 🍔 HAMBURGER MENU */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Open menu">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>

              {/* 📱 MOBILE MENU CONTENT */}
              <SheetContent side="right" className="w-80">
                <div className="flex flex-col h-full">
                  {/* 📱 MOBILE HEADER */}
                  <div className="flex items-center justify-between pb-4 border-b border-border">
                    <Link href="/" className="flex items-center space-x-2" onClick={() => setIsOpen(false)}>
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/GbLogo-BWIUzU0E4XnqgpE3Ice9QmQEK4AZkL.png"
                        alt="Happy GB Mountain Foods Logo"
                        width={32}
                        height={32}
                        className="object-contain"
                      />
                      <span className="font-bold text-lg text-foreground">Happy GB Foods</span>
                    </Link>
                  </div>

                  {/* 📱 MOBILE NAVIGATION LINKS */}
                  <div className="flex flex-col space-y-4 py-6">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="text-lg font-medium text-muted-foreground hover:text-primary transition-colors py-2"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>

                  {/* 📱 MOBILE FOOTER */}
                  <div className="mt-auto space-y-4">
                    <a
                      href="tel:+923469790711"
                      className="flex items-center text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      <span>+92 34 6979-0711</span>
                    </a>

                    <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                      <Link href="https://www.foodpanda.pk/restaurant/n7sn/gb-mountain-foods" onClick={() => setIsOpen(false)}>
                        Place an Order
                      </Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}

/* 
📝 EXPLANATION:
- "use client" makes this interactive (needs JavaScript)
- Sticky positioning keeps navbar at top when scrolling
- backdrop-blur creates modern glass effect
- Responsive design: full menu on desktop, hamburger on mobile
- Sheet component creates slide-out mobile menu
- Theme toggle allows switching between light/dark modes
- All colors use CSS variables (automatically change with theme)
- Accessibility: aria-labels, semantic HTML, keyboard navigation
*/
