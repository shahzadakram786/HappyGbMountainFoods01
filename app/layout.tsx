import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0f766e" },
    { media: "(prefers-color-scheme: dark)", color: "#f59e0b" },
  ],
};

export const metadata: Metadata = {
  title: {
    default: "Happy GB Mountain Foods - Authentic Gilgit-Baltistan Cuisine in Rawalpindi",
    template: "%s | Happy GB Mountain Foods",
  },
  description:
    "Experience authentic Gilgit-Baltistan cuisine at Happy GB Mountain Foods in Rawalpindi. Traditional Momos, Lagman, Daw Daw and mountain specialties. Order online via Foodpanda.",
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
  authors: [{ name: "Shahzad akram" }],
  creator: "Happy GB Mountain Foods",
  publisher: "Happy GB Mountain Foods",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://happygbfoods.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_PK",
    url: "https://happygbfoods.vercel.app",
    title: "Happy GB Mountain Foods - Authentic Gilgit-Baltistan Cuisine",
    description:
      "Experience authentic Gilgit-Baltistan cuisine in Rawalpindi. Traditional Momos, Lagman, and mountain specialties from the northern areas of Pakistan.",
    siteName: "Happy GB Mountain Foods",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Happy GB Mountain Foods - Authentic GB Cuisine",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Happy GB Mountain Foods - Authentic Gilgit-Baltistan Cuisine",
    description:
      "Experience authentic Gilgit-Baltistan cuisine in Rawalpindi. Traditional Momos, Lagman, and mountain specialties.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.ico",
  },
  other: {
    "google-site-verification": "your-verification-code",
    "msvalidate.01": "your-bing-verification-code",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}