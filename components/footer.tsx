import Link from "next/link"
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Restaurant Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">GB</span>
              </div>
              <span className="font-bold text-xl">Happy GB Mountain Foods</span>
            </div>
            <p className="text-gray-300 mb-4">
              Authentic flavors from the majestic mountains of Gilgit-Baltistan, bringing traditional recipes and
              mountain hospitality to Rawalpindi.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">
                <Facebook className="w-5 h-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">
                <Instagram className="w-5 h-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">
                <Twitter className="w-5 h-5" />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/menu" className="text-gray-300 hover:text-emerald-400 transition-colors">
                  Mountain Menu
                </Link>
              </li>
              <li>
                <Link href="/reservations" className="text-gray-300 hover:text-emerald-400 transition-colors">
                  Table Booking
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-emerald-400 transition-colors">
                  Our Heritage
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-emerald-400 transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-emerald-400 transition-colors">
                  News & Culture
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-emerald-400 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">
                  Shop No. 3, Afandi Colony
                  <br />
                  Sadiqabad, Rawalpindi
                  <br />
                  Punjab, Pakistan
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-emerald-400 mr-2" />
                <a href="tel:+925112345678" className="text-gray-300 hover:text-emerald-400 transition-colors">
                  +92 51 123-4567
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-emerald-400 mr-2" />
                <a
                  href="mailto:info@happygbfoods.com"
                  className="text-gray-300 hover:text-emerald-400 transition-colors"
                >
                  info@happygbfoods.com
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-semibold text-lg mb-4">
              <Clock className="w-5 h-5 inline mr-2" />
              Opening Hours
            </h3>
            <ul className="space-y-1 text-gray-300">
              <li>Daily: 24 Hours</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Happy GB Mountain Foods. All rights reserved. |
            <Link href="/privacy" className="hover:text-emerald-400 transition-colors ml-1">
              Privacy Policy
            </Link>{" "}
            |
            <Link href="/terms" className="hover:text-emerald-400 transition-colors ml-1">
              Terms of Service
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
