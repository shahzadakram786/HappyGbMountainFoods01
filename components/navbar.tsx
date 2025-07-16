"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Phone } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

const navigation = [
  { name: "Home", href: "/" },
  { name: "Menu", href: "/menu" },
  { name: "About", href: "/about" },
  { name: "Reservations", href: "/reservations" },
  { name: "Contact", href: "/contact" },
  { name: "Blog", href: "/blog" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border shadow-sm">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo - Updated with your actual logo */}
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/GbLogo-BWIUzU0E4XnqgpE3Ice9QmQEK4AZkL.png"
              alt="Happy GB Mountain Foods Logo"
              width={40}
              height={40}
              className="object-contain"
            />
            <span className="font-bold text-xl text-foreground">Happy GB Mountain Foods</span>
          </Link>

          {/* Desktop Navigation */}
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

          {/* Desktop CTA & Theme Toggle */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:+925112345678"
              className="flex items-center text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              <Phone className="w-4 h-4 mr-1" />
              <span className="text-sm">+92 51 123-4567</span>
            </a>
            <ThemeToggle />
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="/reservations">Book Table</Link>
            </Button>
          </div>

          {/* Mobile Menu Button & Theme Toggle */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="flex flex-col h-full">
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

                  <div className="mt-auto space-y-4">
                    <a
                      href="tel:+925112345678"
                      className="flex items-center text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      <span>+92 51 123-4567</span>
                    </a>
                    <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                      <Link href="/reservations" onClick={() => setIsOpen(false)}>
                        Book Table
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
EXPLANATION OF CHANGES:
1. Added your actual logo image using the provided URL
2. Replaced all green colors (emerald-600) with primary (teal from logo)
3. Added ThemeToggle component in both desktop and mobile layouts
4. Updated hover states to use primary color
5. Used semantic color classes (bg-background, text-foreground) for theme support
6. Added backdrop blur effect for modern glass-morphism look
7. Colors now automatically switch between light/dark modes
*/
