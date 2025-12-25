import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Users, Clock, Heart } from "lucide-react"

const teamMembers = [
  {
    name: "Ustad Ali Khan",
    role: "Head Chef",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Master chef from Hunza valley with 25 years of experience in traditional GB cuisine and authentic cooking methods.",
  },
  {
    name: "Fatima Begum",
    role: "Kitchen Manager",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Expert in traditional bread making and dumpling preparation, preserving ancestral recipes from Skardu.",
  },
  {
    name: "Muhammad Karim",
    role: "Restaurant Manager",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Ensuring authentic mountain hospitality and maintaining the cultural essence of Gilgit-Baltistan dining experience.",
  },
]

const achievements = [
  {
    icon: Award,
    title: "Authentic Cuisine Award",
    description: "Recognized for preserving traditional GB recipes",
  },
  {
    icon: Users,
    title: "10,000+ Satisfied Customers",
    description: "Serving authentic mountain food since 2018",
  },
  {
    icon: Clock,
    title: "10 Years of Excellence",
    description: "Consistent quality and cultural authenticity",
  },
  {
    icon: Heart,
    title: "Community Focused",
    description: "Supporting GB community in Rawalpindi",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center">
        <Image
          src="/Gilgit-Baltistan Culinary Heritage_simple_compose_01k09hed2jexra5jp0eek837g0.png"
          alt="Beautiful mountain landscape of Gilgit-Baltistan with traditional food setup"
          fill
          className="object-cover brightness-50"
        />
        <div className="text-center text-white z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Happy GB Mountain Foods</h1>
          <p className="text-xl opacity-90">Preserving the culinary heritage of Gilgit-Baltistan</p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-4 bg-primary-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-white-900">Our Heritage Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                Happy GB Mountain Foods was established in 2018 with a mission to bring the authentic flavors of
                Gilgit-Baltistan to the people of Rawalpindi. Our founder, originally from Hunza valley, wanted to share
                the rich culinary traditions of the northern mountains with food lovers across Pakistan.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Every recipe we serve has been passed down through generations, from the hand-pulled Lagman noodles to
                the perfectly steamed Momos. We use traditional cooking methods and source ingredients that stay true to
                the authentic mountain flavors of our homeland.
              </p>
              <p className="text-lg text-gray-600">
                Our restaurant serves as a cultural bridge, bringing the warmth of GB hospitality and the taste of the
                mountains to create a unique dining experience that celebrates our beautiful heritage.
              </p>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src="/Gilgit-Baltistan Culinary Heritage_simple_compose_01k09hed2jexra5jp0eek837g0.png"
                alt="Traditional kitchen setup with chef preparing authentic GB dishes"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Our Achievements</h2>
            <p className="text-lg text-gray-600">Recognition for preserving and sharing our cultural cuisine</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <achievement.icon className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{achievement.title}</h3>
                  <p className="text-gray-600">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Meet Our Team</h2>
            <p className="text-lg text-gray-600">The passionate people preserving GB culinary traditions</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-64">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={`${member.name}, ${member.role}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <Badge variant="secondary" className="mb-3">
                    {member.role}
                  </Badge>
                  <p className="text-gray-600">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-16 px-4 bg-emerald-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Philosophy</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-emerald-700">Authentic Recipes</h3>
              <p className="text-gray-600">
                We preserve traditional cooking methods and recipes passed down through generations, ensuring every dish
                maintains its authentic mountain flavor and cultural significance.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-emerald-700">Cultural Heritage</h3>
              <p className="text-gray-600">
                Every meal tells the story of Gilgit-Baltistan's rich culture, from the preparation techniques to the
                serving traditions that reflect our mountain hospitality.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-emerald-700">Community Connection</h3>
              <p className="text-gray-600">
                We serve as a cultural hub for the GB community while introducing others to our beautiful traditions,
                creating connections through food and shared experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Contact */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Visit Our Restaurant</h2>
              <div className="space-y-4 text-lg">
                <div>
                  <h3 className="font-semibold text-gray-900">Address</h3>
                  <p className="text-gray-600">
                    Shop No. 3, Afandi Colony
                    <br />
                    Sadiqabad, Rawalpindi
                    <br />
                    Punjab, Pakistan
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Hours</h3>
                  <p className="text-gray-600">
                    24/7 Service Available
                    <br />
                    Order Anytime via WhatsApp or with Foodpanda
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Contact</h3>
                  <p className="text-gray-600">
                    Phone: +92 312 979-0711
                    <br />
                    WhatsApp: +92 312 979-0711
                    <br />
                    Email: info@happygbfoods.com
                  </p>
                </div>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2673.1130916398024!2d73.07790477475217!3d33.633136073317665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df9588690ff4cd%3A0x44a9e3263439699f!2sHappy%20GB%20Mountain%20Foods!5e1!3m2!1sen!2s!4v1752829950891!5m2!1sen!2s" 
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Happy GB Mountain Foods Location in Rawalpindi"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
