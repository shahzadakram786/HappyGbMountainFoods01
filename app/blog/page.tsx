import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, User, ArrowRight } from "lucide-react"

// Mock blog data - in production, this would come from your CMS
const blogPosts = [
  {
    id: 1,
    title: "Introducing Our New Spring Menu",
    excerpt:
      "Fresh seasonal ingredients inspire our latest culinary creations, featuring locally sourced asparagus, spring peas, and more.",
    content: "Our spring menu celebrates the season's finest ingredients...",
    image: "/placeholder.svg?height=300&width=500",
    author: "Chef Marco Rossi",
    date: "2024-03-15",
    category: "Menu Updates",
    featured: true,
  },
  {
    id: 2,
    title: "Wine Pairing Dinner Series Returns",
    excerpt:
      "Join us for an exclusive evening of perfectly paired wines and signature dishes, featuring selections from renowned vineyards.",
    content: "Our sommelier has carefully selected wines...",
    image: "/placeholder.svg?height=300&width=500",
    author: "Sofia Martinez",
    date: "2024-03-10",
    category: "Events",
    featured: false,
  },
  {
    id: 3,
    title: "Behind the Scenes: Our Sustainable Practices",
    excerpt:
      "Learn about our commitment to sustainability, from farm-to-table sourcing to waste reduction initiatives.",
    content: "Sustainability is at the heart of everything we do...",
    image: "/placeholder.svg?height=300&width=500",
    author: "James Wilson",
    date: "2024-03-05",
    category: "Sustainability",
    featured: false,
  },
  {
    id: 4,
    title: "Chef's Special: Truffle Season",
    excerpt:
      "Discover the magic of truffle season with our limited-time dishes featuring both black and white truffles.",
    content: "Truffle season is one of our favorite times of year...",
    image: "/placeholder.svg?height=300&width=500",
    author: "Chef Marco Rossi",
    date: "2024-02-28",
    category: "Seasonal",
    featured: false,
  },
  {
    id: 5,
    title: "Customer Spotlight: Anniversary Celebrations",
    excerpt:
      "See how we helped make anniversary celebrations extra special with personalized menus and intimate dining experiences.",
    content: "We love being part of your special moments...",
    image: "/placeholder.svg?height=300&width=500",
    author: "James Wilson",
    date: "2024-02-20",
    category: "Customer Stories",
    featured: false,
  },
  {
    id: 6,
    title: "Cooking Class Series: Master the Basics",
    excerpt:
      "Join our chefs for hands-on cooking classes where you'll learn professional techniques and take home new skills.",
    content: "Our cooking classes are designed for all skill levels...",
    image: "/placeholder.svg?height=300&width=500",
    author: "Sofia Martinez",
    date: "2024-02-15",
    category: "Classes",
    featured: false,
  },
]

const categories = ["All", "Menu Updates", "Events", "Sustainability", "Seasonal", "Customer Stories", "Classes"]

export default function BlogPage() {
  const featuredPost = blogPosts.find((post) => post.featured)
  const regularPosts = blogPosts.filter((post) => !post.featured)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-12 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Restaurant News & Updates</h1>
          <p className="text-lg text-gray-600">
            Stay updated with our latest menu additions, events, and behind-the-scenes stories
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Featured Post */}
        {featuredPost && (
          <section className="mb-12">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-64 md:h-auto">
                  <Image
                    src={featuredPost.image || "/placeholder.svg"}
                    alt={featuredPost.title}
                    fill
                    className="object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-amber-600">Featured</Badge>
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <Badge variant="outline" className="w-fit mb-3">
                    {featuredPost.category}
                  </Badge>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">{featuredPost.title}</h2>
                  <p className="text-gray-600 mb-6 text-lg">{featuredPost.excerpt}</p>
                  <div className="flex items-center text-sm text-gray-500 mb-6">
                    <User className="w-4 h-4 mr-1" />
                    <span className="mr-4">{featuredPost.author}</span>
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                  </div>
                  <Button asChild className="w-fit bg-amber-600 hover:bg-amber-700">
                    <Link href={`/blog/${featuredPost.id}`}>
                      Read More <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </div>
            </Card>
          </section>
        )}

        {/* Category Filter */}
        <section className="mb-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant="outline"
                size="sm"
                className="hover:bg-amber-50 hover:border-amber-300 bg-transparent"
              >
                {category}
              </Button>
            ))}
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                </div>
                <CardHeader>
                  <Badge variant="outline" className="w-fit mb-2">
                    {post.category}
                  </Badge>
                  <CardTitle className="text-xl hover:text-amber-600 transition-colors">
                    <Link href={`/blog/${post.id}`}>{post.title}</Link>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <User className="w-4 h-4 mr-1" />
                    <span className="mr-4">{post.author}</span>
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                  <Button asChild variant="outline" size="sm">
                    <Link href={`/blog/${post.id}`}>Read More</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="mt-16 bg-amber-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Never Miss an Update</h2>
          <p className="text-gray-600 mb-6">
            Subscribe to our newsletter for the latest news, menu updates, and exclusive offers
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
            <Button className="bg-amber-600 hover:bg-amber-700 px-8">Subscribe</Button>
          </div>
        </section>
      </div>
    </div>
  )
}
