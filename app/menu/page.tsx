"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Search, Filter } from "lucide-react"

// Authentic Gilgit-Baltistan menu data
const menuData = {
  dumplings: [
    {
      id: 1,
      name: "Beef Momos",
      description: "Steamed dumplings filled with seasoned yak meat and vegetables, served with spicy chutney",
      price: 450,
      image: "/dumplings(1).png",
      dietary: ["halal"],
      foodpandaUrl: "https://foodpanda.com.pk/restaurant/n7sn/gb-mountain-foods/dish/1",
    },
    {
      id: 2,
      name: "Chicken Momos",
      description: "Steamed dumplings stuffed with fresh mountain vegetables and herbs",
      price: 350,
      image: "/dumplings(1).png",
      dietary: ["vegetarian", "halal"],
      foodpandaUrl: "https://foodpanda.com.pk/restaurant/n7sn/gb-mountain-foods/dish/2",
    },
  ],
  noodles: [
    {
      id: 4,
      name: "Authentic Lagman",
      description: "Hand-pulled noodles in rich mutton broth with fresh vegetables and aromatic spices",
      price: 650,
      image: "/laqmanAuthenic.png",
      dietary: ["halal"],
      foodpandaUrl: "https://foodpanda.com.pk/restaurant/n7sn/gb-mountain-foods/dish/4",
    },
    {
      id: 5,
      name: "Vegetable Lagman",
      description: "Traditional hand-pulled noodles in vegetable broth with seasonal mountain vegetables",
      price: 550,
      image: "/laqmanAuthenic.png",
      dietary: ["vegetarian", "halal"],
      foodpandaUrl: "https://foodpanda.com.pk/restaurant/n7sn/gb-mountain-foods/dish/5",
    },
    {
      id: 6,
      name: "Chicken Lagman",
      description: "Hearty noodle soup with tender chicken pieces and traditional GB spices",
      price: 600,
      image: "/laqmanAuthenic.png",
      dietary: ["halal"],
      foodpandaUrl: "https://foodpanda.com.pk/restaurant/n7sn/gb-mountain-foods/dish/6",
    },
  ],
  breads: [
    {
      id: 7,
      name: "Fresh Daw Daw",
      description: "Traditional Balti flatbread baked in clay oven, served with local butter and honey",
      price: 250,
      image: "/dawdaw.png",
      dietary: ["vegetarian", "halal"],
      foodpandaUrl: "https://foodpanda.com.pk/restaurant/n7sn/gb-mountain-foods/dish/7",
    },
    {
      id: 8,
      name: "Khameeri Roti",
      description: "Soft leavened bread perfect with curries and stews",
      price: 80,
      image: "/placeholder.svg?height=200&width=300",
      dietary: ["vegetarian", "halal"],
      foodpandaUrl: "https://foodpanda.com.pk/restaurant/n7sn/gb-mountain-foods/dish/8",
    },
    {
      id: 9,
      name: "Chapshoro",
      description: "Stuffed bread with spiced meat filling, a Hunza specialty",
      price: 400,
      image: "/placeholder.svg?height=200&width=300",
      dietary: ["halal"],
      foodpandaUrl: "https://foodpanda.com.pk/restaurant/n7sn/gb-mountain-foods/dish/9",
    },
  ],
  beverages: [
    {
      id: 10,
      name: "Butter Tea (Po Cha)",
      description: "Traditional Tibetan-style salted butter tea, perfect for mountain weather",
      price: 150,
      image: "/placeholder.svg?height=200&width=300",
      dietary: ["vegetarian", "halal"],
      foodpandaUrl: "https://foodpanda.com.pk/restaurant/n7sn/gb-mountain-foods/dish/10",
    },
    {
      id: 11,
      name: "Apricot Juice",
      description: "Fresh juice from Hunza's famous apricots, rich in vitamins",
      price: 200,
      image: "/placeholder.svg?height=200&width=300",
      dietary: ["vegetarian", "vegan", "halal"],
      foodpandaUrl: "https://foodpanda.com.pk/restaurant/n7sn/gb-mountain-foods/dish/11",
    },
    {
      id: 12,
      name: "Kashmiri Chai",
      description: "Pink tea with almonds and cardamom, a regional favorite",
      price: 120,
      image: "/placeholder.svg?height=200&width=300",
      dietary: ["vegetarian", "halal"],
      foodpandaUrl: "https://foodpanda.com.pk/restaurant/n7sn/gb-mountain-foods/dish/12",
    },
  ],
}

const categories = [
  { id: "all", name: "All Items" },
  { id: "dumplings", name: "Momos & Dumplings" },
  { id: "noodles", name: "Lagman & Noodles" },
  { id: "breads", name: "Traditional Breads" },
  { id: "beverages", name: "Mountain Beverages" },
]

const dietaryFilters = [
  { id: "all", name: "All" },
  { id: "vegetarian", name: "Vegetarian" },
  { id: "vegan", name: "Vegan" },
  { id: "halal", name: "Halal" },
]

// WhatsApp business number (replace with actual number)
const WHATSAPP_NUMBER = "+923469790711" // Replace with the actual WhatsApp business number

export default function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedDietary, setSelectedDietary] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")

  // Flatten all menu items
  const allItems = Object.values(menuData).flat()

  // Filter items based on category, dietary preferences, and search
  const filteredItems = allItems.filter((item) => {
    const matchesCategory =
      selectedCategory === "all" ||
      Object.entries(menuData).some(([category, items]) => category === selectedCategory && items.includes(item))

    const matchesDietary = selectedDietary === "all" || item.dietary.includes(selectedDietary)

    const matchesSearch =
      searchTerm === "" ||
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase())

    return matchesCategory && matchesDietary && matchesSearch
  })

  // Function to generate WhatsApp link with item details
  const generateWhatsAppLink = (item) => {
    const message = `Hello! I'm interested in ordering ${item.name} (Price: PKR ${item.price}). Can you provide details about this item and delivery options?`
    const encodedMessage = encodeURIComponent(message)
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-secondary/20 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-400 mb-4">Authentic GB Mountain Menu</h1>
            <p className="text-lg text-gray-600 mb-6">
              Traditional recipes from Gilgit-Baltistan - Updated daily with fresh ingredients
            </p>
            <div className="text-sm text-gray-500">Last updated: {new Date().toLocaleDateString()}</div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-background white border-b">
        <div className="max-w-6xl mx-auto px-4 py-6">
          {/* Search */}
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              type="text"
              placeholder="Search menu items..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 w-full max-w-md"
            />
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 mb-4">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category.id)}
                className={selectedCategory === category.id ? "bg-amber-600 hover:bg-amber-700" : ""}
              >
                {category.name}
              </Button>
            ))}
          </div>

          {/* Dietary Filters */}
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-gray-500" />
            <span className="text-sm text-gray-600 mr-2">Dietary:</span>
            {dietaryFilters.map((filter) => (
              <Button
                key={filter.id}
                variant={selectedDietary === filter.id ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedDietary(filter.id)}
                className={selectedDietary === filter.id ? "bg-green-600 hover:bg-green-700" : ""}
              >
                {filter.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Items */}
      <section className="py-8">
        <div className="max-w-6xl mx-auto px-4">
          {filteredItems.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-lg text-gray-600">No items found matching your criteria.</p>
              <Button
                variant="outline"
                onClick={() => {
                  setSelectedCategory("all")
                  setSelectedDietary("all")
                  setSearchTerm("")
                }}
                className="mt-4"
              >
                Clear Filters
              </Button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map((item) => (
                <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative h-48">
                    <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                    <div className="absolute top-2 right-2 flex flex-wrap gap-1">
                      {item.dietary.map((diet) => (
                        <Badge
                          key={diet}
                          variant="secondary"
                          className={
                            diet === "vegetarian"
                              ? "bg-green-100 text-green-800"
                              : diet === "vegan"
                                ? "bg-green-200 text-green-900"
                                : diet === "gluten-free"
                                  ? "bg-blue-100 text-blue-800"
                                  : "bg-gray-100 text-gray-800"
                          }
                        >
                          {diet.charAt(0).toUpperCase() + diet.slice(1).replace("-", " ")}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                    <p className="text-gray-600 mb-4 text-sm">{item.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-amber-600">PKR {item.price}</span>
                      <Button asChild className="bg-amber-600 hover:bg-amber-700">
                        <Link href={generateWhatsAppLink(item)} target="_blank" rel="noopener noreferrer">
                          Order Now
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Order CTA */}
      <section className="bg-amber-600 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Order?</h2>
          <p className="text-lg mb-6 opacity-90">Get your favorite dishes delivered fresh to your door</p>
          <Button asChild size="lg" variant="secondary">
            <Link href="https://www.foodpanda.pk/restaurant/n7sn/gb-mountain-foods" target="_blank" rel="noopener noreferrer">
              Order on Foodpanda
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}