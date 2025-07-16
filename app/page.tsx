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
    image: "/dumplings(1).png",
    category: "Main Course",
    dietary: ["halal"],
  },
  {
    id: 2,
    name: "Authentic Lagman",
    description: "Hand-pulled noodles in rich mutton broth with fresh vegetables and aromatic spices",
    price: 650,
    image: "/laqmanAuthenic.png",
    category: "Main Course",
    dietary: ["halal"],
  },
  {
    id: 3,
    name: "Fresh Daw Daw",
    description: "Traditional Balti flatbread baked in clay oven, served with local butter and honey",
    price: 250,
    image: "/dawdaw.png",
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
      {/* Hero Section - Updated colors */}
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
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="/menu">View Today's Menu</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-primary bg-transparent"
            >
              <Link href="#">Place an Order</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Our Heritage</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Happy GB Mountain Foods brings the authentic taste of Gilgit-Baltistan to Rawalpindi. Our recipes have
                been passed down through generations, preserving the rich culinary traditions of the northern mountains
                of Pakistan.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                From hand-pulled Lagman noodles to perfectly steamed Momos, every dish tells a story of our beautiful
                homeland. We use traditional cooking methods and the finest ingredients to ensure an authentic mountain
                food experience.
              </p>
              <Button
                asChild
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
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

      {/* Featured Dishes - Updated colors */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Today's Mountain Specialties</h2>
            <p className="text-lg text-muted-foreground">Handcrafted dishes from the heart of Gilgit-Baltistan</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredDishes.map((dish) => (
              <Card key={dish.id} className="overflow-hidden hover:shadow-lg transition-shadow bg-card">
                <div className="relative h-48">
                  <Image src={dish.image || "/dumplings(1).png"} alt={dish.name} fill className="object-cover" />
                  <div className="absolute top-2 right-2">
                    {dish.dietary.includes("vegetarian") && (
                      <Badge
                        variant="secondary"
                        className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100"
                      >
                        Vegetarian
                      </Badge>
                    )}
                    {dish.dietary.includes("halal") && (
                      <Badge variant="secondary" className="bg-primary/10 text-primary ml-1">
                        Halal
                      </Badge>
                    )}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-card-foreground">{dish.name}</h3>
                  <p className="text-muted-foreground mb-4">{dish.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-primary">PKR {dish.price}</span>
                    <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
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
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
            >
              <Link href="/menu">View Complete Menu</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">What Our Customers Say</h2>
            <p className="text-lg text-muted-foreground">Authentic reviews from our valued guests</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 bg-card">
                <CardContent className="p-0">
                  <div className="flex items-center mb-4">
                    <div className="flex text-secondary">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-current" />
                      ))}
                    </div>
                    <span className="ml-2 text-sm text-muted-foreground">{testimonial.date}</span>
                  </div>
                  <p className="text-muted-foreground mb-4">"{testimonial.comment}"</p>
                  <p className="font-semibold text-card-foreground">- {testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Info - Updated colors */}
      <section className="py-16 px-4 bg-primary text-primary-foreground">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <Clock className="w-12 h-12 text-secondary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Opening Hours</h3>
              <p className="opacity-90">
                Daily: 11:00 AM - 11:00 PM
                <br />
                Friday: 2:00 PM - 11:00 PM
                <br />
                (After Jummah Prayer)
              </p>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="w-12 h-12 text-secondary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Location</h3>
              <p className="opacity-90">
                Shop No. 3, Afandi Colony
                <br />
                Sadiqabad, Rawalpindi
                <br />
                Punjab, Pakistan
              </p>
            </div>
            <div className="flex flex-col items-center">
              <Phone className="w-12 h-12 text-secondary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Contact</h3>
              <p className="opacity-90">
                Phone: +92 51 123-4567
                <br />
                WhatsApp: +92 300 123-4567
                <br />
                <Button asChild variant="link" className="text-secondary p-0 h-auto hover:text-secondary/80">
                  <Link href="/contact">Send Message</Link>
                </Button>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup - Updated colors */}
      <section className="py-16 px-4 bg-secondary/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-foreground">Stay Connected</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Subscribe for daily menu updates, special mountain food events, and exclusive offers from GB
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8">Subscribe</Button>
          </div>
        </div>
      </section>
    </div>
  )
}

/* 
EXPLANATION OF MAJOR COLOR CHANGES:
1. Replaced all emerald-600 with 'primary' (teal from logo)
2. Replaced emerald-400 with 'secondary' (golden from logo)  
3. Used semantic colors (bg-background, text-foreground) for theme support
4. Updated button hover states to use primary/90 for subtle effects
5. Changed star ratings to use secondary (golden) color
6. Updated input fields to use proper theme colors
7. All colors now automatically adapt to light/dark mode
8. Background sections use bg-muted/50 for subtle contrast
*/
