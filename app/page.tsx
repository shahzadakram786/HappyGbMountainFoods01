import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Clock, MapPin, Phone } from "lucide-react"

// Mock data - featuring Gilgit-Baltistan cuisine
const featuredDishes = [
  {
    id: 1,
    name: "Traditional Momos",
    description: "Steamed dumplings filled with seasoned yak meat and vegetables, served with spicy chutney",
    price: 450,
    image: "/placeholder.svg?height=300&width=400",
    category: "Main Course",
    dietary: ["halal"],
  },
  {
    id: 2,
    name: "Authentic Lagman",
    description: "Hand-pulled noodles in rich mutton broth with fresh vegetables and aromatic spices",
    price: 650,
    image: "/placeholder.svg?height=300&width=400",
    category: "Main Course",
    dietary: ["halal"],
  },
  {
    id: 3,
    name: "Fresh Daw Daw",
    description: "Traditional Balti flatbread baked in clay oven, served with local butter and honey",
    price: 250,
    image: "/placeholder.svg?height=300&width=400",
    category: "Bread",
    dietary: ["vegetarian", "halal"],
  },
]

const testimonials = [
  {
    name: "Ahmed Khan",
    rating: 5,
    comment: "Authentic taste of Gilgit! The momos remind me of my hometown. Excellent quality!",
    date: "2 days ago",
  },
  {
    name: "Fatima Ali",
    rating: 5,
    comment: "Best Lagman in Rawalpindi! The flavors are just like my grandmother's recipe.",
    date: "1 week ago",
  },
  {
    name: "Muhammad Hassan",
    rating: 5,
    comment: "Amazing mountain food experience. The Daw Daw bread is incredibly fresh!",
    date: "2 weeks ago",
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-black/60 to-black/40">
        <Image
          src="/Gilgit-Baltistan-Scenery.png"
          alt="Beautiful mountain landscape of Gilgit-Baltistan with traditional food setup"
          fill
          className="object-cover -z-10"
          priority
        />
        <div className="text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Happy GB Mountain Foods</h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Authentic flavors from the majestic mountains of Gilgit-Baltistan, bringing traditional recipes to your
            table
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white">
              <Link href="/menu">View Today's Menu</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-black bg-transparent"
            >
              <Link href="/reservations">Book Your Table</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Our Heritage</h2>
              <p className="text-lg text-gray-600 mb-6">
                Happy GB Mountain Foods brings the authentic taste of Gilgit-Baltistan to Rawalpindi. Our recipes have
                been passed down through generations, preserving the rich culinary traditions of the northern mountains
                of Pakistan.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                From hand-pulled Lagman noodles to perfectly steamed Momos, every dish tells a story of our beautiful
                homeland. We use traditional cooking methods and the finest ingredients to ensure an authentic mountain
                food experience.
              </p>
              <Button asChild variant="outline">
                <Link href="/about">Learn About Our Culture</Link>
              </Button>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src="/gilgitBaltistanCulinaryHeritage.png"
                alt="Traditional Gilgit-Baltistan kitchen with chef preparing authentic dishes"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Dishes */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Today's Mountain Specialties</h2>
            <p className="text-lg text-gray-600">Handcrafted dishes from the heart of Gilgit-Baltistan</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredDishes.map((dish) => (
              <Card key={dish.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <Image src={dish.image || "/placeholder.svg"} alt={dish.name} fill className="object-cover" />
                  <div className="absolute top-2 right-2">
                    {dish.dietary.includes("vegetarian") && (
                      <Badge variant="secondary" className="bg-green-100 text-green-800">
                        Vegetarian
                      </Badge>
                    )}
                    {dish.dietary.includes("halal") && (
                      <Badge variant="secondary" className="bg-emerald-100 text-emerald-800 ml-1">
                        Halal
                      </Badge>
                    )}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{dish.name}</h3>
                  <p className="text-gray-600 mb-4">{dish.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-emerald-600">PKR {dish.price}</span>
                    <Button asChild className="bg-emerald-600 hover:bg-emerald-700">
                      <Link
                        href={`https://foodpanda.com.pk/restaurant/happy-gb-mountain-foods/dish/${dish.id}`}
                        target="_blank"
                      >
                        Order Now
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline">
              <Link href="/menu">View Complete Menu</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">What Our Customers Say</h2>
            <p className="text-lg text-gray-600">Authentic reviews from our valued guests</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6">
                <CardContent className="p-0">
                  <div className="flex items-center mb-4">
                    <div className="flex text-emerald-400">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-current" />
                      ))}
                    </div>
                    <span className="ml-2 text-sm text-gray-500">{testimonial.date}</span>
                  </div>
                  <p className="text-gray-600 mb-4">"{testimonial.comment}"</p>
                  <p className="font-semibold text-gray-900">- {testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Info */}
      <section className="py-16 px-4 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <Clock className="w-12 h-12 text-emerald-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Opening Hours</h3>
              <p className="text-gray-300">
                Daily: 11:00 AM - 11:00 PM
                <br />
                Friday: 2:00 PM - 11:00 PM
                <br />
                (After Jummah Prayer)
              </p>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="w-12 h-12 text-emerald-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Location</h3>
              <p className="text-gray-300">
                Shop No. 3, Afandi Colony
                <br />
                Sadiqabad, Rawalpindi
                <br />
                Punjab, Pakistan
              </p>
            </div>
            <div className="flex flex-col items-center">
              <Phone className="w-12 h-12 text-emerald-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Contact</h3>
              <p className="text-gray-300">
                Phone: +92 51 123-4567
                <br />
                WhatsApp: +92 300 123-4567
                <br />
                <Button asChild variant="link" className="text-emerald-400 p-0 h-auto">
                  <Link href="/contact">Send Message</Link>
                </Button>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 px-4 bg-emerald-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Stay Connected</h2>
          <p className="text-lg text-gray-600 mb-8">
            Subscribe for daily menu updates, special mountain food events, and exclusive offers from GB
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            <Button className="bg-emerald-600 hover:bg-emerald-700 px-8">Subscribe</Button>
          </div>
        </div>
      </section>
    </div>
  )
}
