import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * 🎨 UTILITY FUNCTION: Combine and merge CSS classes
 *
 * @param inputs - Array of class names (strings, objects, arrays)
 * @returns Merged and deduplicated class string
 *
 * EXAMPLE:
 * cn("px-4 py-2", "bg-blue-500", { "text-white": true, "font-bold": false })
 * Returns: "px-4 py-2 bg-blue-500 text-white"
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * 📱 UTILITY FUNCTION: Format phone numbers
 *
 * @param phone - Raw phone number string
 * @returns Formatted phone number
 */
export function formatPhoneNumber(phone: string): string {
  // Remove all non-digits
  const cleaned = phone.replace(/\D/g, "")

  // Format Pakistani numbers
  if (cleaned.startsWith("92")) {
    return `+${cleaned.slice(0, 2)} ${cleaned.slice(2, 4)} ${cleaned.slice(4, 7)}-${cleaned.slice(7)}`
  }

  return phone
}

/**
 * 💰 UTILITY FUNCTION: Format currency (Pakistani Rupees)
 *
 * @param amount - Number to format
 * @returns Formatted currency string
 */
export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("en-PK", {
    style: "currency",
    currency: "PKR",
    minimumFractionDigits: 0,
  }).format(amount)
}

/**
 * 📅 UTILITY FUNCTION: Format dates
 *
 * @param date - Date to format
 * @returns Formatted date string
 */
export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat("en-PK", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date)
}

/**
 * 🔍 UTILITY FUNCTION: Generate SEO-friendly slugs
 *
 * @param text - Text to convert to slug
 * @returns URL-friendly slug
 */
export function generateSlug(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "") // Remove special characters
    .replace(/[\s_-]+/g, "-") // Replace spaces/underscores with hyphens
    .replace(/^-+|-+$/g, "") // Remove leading/trailing hyphens
}

/**
 * 🎯 UTILITY FUNCTION: Debounce function calls
 *
 * @param func - Function to debounce
 * @param wait - Wait time in milliseconds
 * @returns Debounced function
 */
export function debounce<T extends (...args: any[]) => any>(func: T, wait: number): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout

  return (...args: Parameters<T>) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), wait)
  }
}

/* 
📝 EXPLANATION:
- cn() combines CSS classes intelligently (removes duplicates)
- clsx() handles conditional classes
- twMerge() resolves Tailwind class conflicts
- Other utilities handle common formatting tasks
- These functions are used throughout the application
*/
