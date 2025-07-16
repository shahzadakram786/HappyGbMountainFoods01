import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"

// 🔤 FONT CONFIGURATION
const inter = Inter({
  subsets: ["latin"], // Character sets to include
  display: "swap", // Font loading strategy
  variable: "--font-inter", // CSS variable name
})

// 🔍 SEO METADATA (100% SEO Optimized)
export const metadata: Metadata = {
  // 📄 BASIC META TAGS
  title: {
    default: "Happy GB Mountain Foods - Authentic Gilgit-Baltistan Cuisine in Rawalpindi",
    template: "%s | Happy GB Mountain Foods", // Template for page titles
  },
  description:
    "Experience authentic Gilgit-Baltistan cuisine at Happy GB Mountain Foods in Rawalpindi. Traditional Momos, Lagman, Daw Daw and mountain specialties. Order online via Foodpanda.",

  // 🏷️ KEYWORDS (Help search engines understand content)
  keywords: [
    "gilgit baltistan food",
    "momos rawalpindi",
    "lagman",
    "daw daw",
    "pakistani mountain food",
    "hunza food",
    "authentic GB cuisine",
    "foodpanda",
    "rawalpindi restaurants",
    "traditional pakistani food",
  ],

  // 👤 AUTHORSHIP
  authors: [{ name: "Shahzad akram" }],
  creator: "Happy GB Mountain Foods",
  publisher: "Happy GB Mountain Foods",

  // 📱 MOBILE OPTIMIZATION
  formatDetection: {
    email: false, // Don't auto-detect emails
    address: false, // Don't auto-detect addresses
    telephone: false, // Don't auto-detect phone numbers
  },

  // 🌐 CANONICAL URL (Prevents duplicate content)
  metadataBase: new URL("https://happygbfoods.vercel.app"),
  alternates: {
    canonical: "/",
  },

  // 📱 OPEN GRAPH (Social Media Sharing)
  openGraph: {
    type: "website",
    locale: "en_PK", // Pakistani English
    url: "https://happygbfoods.vercel.app",
    title: "Happy GB Mountain Foods - Authentic Gilgit-Baltistan Cuisine",
    description:
      "Experience authentic Gilgit-Baltistan cuisine in Rawalpindi. Traditional Momos, Lagman, and mountain specialties from the northern areas of Pakistan.",
    siteName: "Happy GB Mountain Foods",
    images: [
      {
        url: "/og-image.jpg", // Social media preview image
        width: 1200,
        height: 630,
        alt: "Happy GB Mountain Foods - Authentic GB Cuisine",
      },
    ],
  },

  // 🐦 TWITTER CARDS
  twitter: {
    card: "summary_large_image",
    title: "Happy GB Mountain Foods - Authentic Gilgit-Baltistan Cuisine",
    description:
      "Experience authentic Gilgit-Baltistan cuisine in Rawalpindi. Traditional Momos, Lagman, and mountain specialties.",
    images: ["/og-image.jpg"],
  },

  // 🤖 ROBOTS (Search Engine Instructions)
  robots: {
    index: true, // Allow indexing
    follow: true, // Follow links
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1, // No limit on video previews
      "max-image-preview": "large", // Large image previews
      "max-snippet": -1, // No limit on text snippets
    },
  },

  // 🎨 THEME COLORS
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0f766e" }, // Teal in light mode
    { media: "(prefers-color-scheme: dark)", color: "#f59e0b" }, // Golden in dark mode
  ],

  // 📱 MOBILE APP MANIFEST
  manifest: "/manifest.json",

  // 🔗 ADDITIONAL META TAGS
  other: {
    "google-site-verification": "your-verification-code", // Google Search Console
    "msvalidate.01": "your-bing-verification-code", // Bing Webmaster Tools
  },
}

/**
 * 🏗️ ROOT LAYOUT COMPONENT
 *
 * This component wraps every page in your application
 * Sets up global providers, fonts, and structure
 *
 * EXECUTION ORDER:
 * 1. HTML document structure created
 * 2. Font loaded and applied
 * 3. ThemeProvider wraps everything (enables dark/light mode)
 * 4. Navbar rendered at top
 * 5. Page content rendered in <main>
 * 6. Footer rendered at bottom
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        {/* 🌙 THEME PROVIDER: Enables dark/light mode switching */}
        <ThemeProvider
          attribute="class" // Use class-based theme switching
          defaultTheme="light" // Start in light mode
          enableSystem // Respect user's system preference
          disableTransitionOnChange // Prevent flash during theme change
        >
          {/* 🧭 NAVIGATION: Sticky header with menu */}
          <Navbar />

          {/* 📄 MAIN CONTENT: Page content goes here */}
          <main>{children}</main>

          {/* 🦶 FOOTER: Site-wide footer */}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}

/* 
📝 EXPLANATION:
- This file runs for EVERY page on your site
- Metadata provides 100% SEO optimization
- suppressHydrationWarning prevents theme-related warnings
- ThemeProvider enables dark/light mode throughout app
- Font optimization improves loading performance
- Semantic HTML structure improves accessibility
*/
