'use client'

import * as React from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { FaQuoteLeft } from "react-icons/fa";
import { motion } from "framer-motion";


interface Testimonial {
  quote: string
  author: string
  position: string
  companyLogo: string
}

const testimonials: Testimonial[] = [
  {
    quote: "Partnering with FourCore has enhanced our cybersecurity. Their ATTACK platform's real-time threat simulations keep us ahead of emerging risks, strengthening our services and protecting our clients.",
    author: "Sachin Anand",
    position: "SOC Manager - Plus971 Cybersecurity",
    companyLogo: "/assets/partners/cyber.png"
  },
  {
    quote: "The real-time threat intelligence has been invaluable for our security operations.",
    author: "Jane Smith",
    position: "Security Director - TechShield",
    companyLogo: "/assets/partners/cyber.png"
  },
  {
    quote: "FourCore's platform has revolutionized how we approach cyber threat prevention.",
    author: "Michael Chen",
    position: "CISO - SecureNet Solutions",
    companyLogo: "/assets/partners/cyber.png"
  },
]

export default function PartnerSection() {
  const [currentSlide, setCurrentSlide] = React.useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="w-full py-8 md:px-24"
      id="why"
    >
      <div className="container px-4 md:px-6">
        <h1 className="text-white text-center text-4xl font-bold mb-10">
          Why Partner With Us
        </h1>
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-4 ">
            <p className="text-slate-100 text-lg sm:text-xl">
              As a Fourcore partner, you&apos;ll gain access to real-time threat intelligence, immediate alerts, and actionable
              insights to help secure your clients from emerging cyber risks. Our platform empowers you to stay ahead of
              evolving threats, delivering unmatched protection.
            </p>
          </div>
          <div className="relative">
            <Card className="bg-zinc-900/50 border-zinc-800 absolute top-0 right-0 w-1/2 h-full direction-reverse">
              <CardContent className="p-6">
                <Image src={testimonials[currentSlide].companyLogo} alt='testimonial' width={500} height={500} />
              </CardContent>
            </Card>
            <div className="relative pt-20">
              <Card className="bg-zinc-900/50 border-zinc-800 min-h-[220px]">
                <div className="absolute  -translate-x-10 -translate-y-10 text-6xl font-serif  bg-clip-text">
                  <FaQuoteLeft className="bg-gradient-to-b from-blue-500 to-blue-900 bg-clip-text text-transparent" />     
                </div>
                <CardContent className="p-6">
                  <div className="relative space-y-4">
                    <blockquote className="text-lg text-gray-300">
                      {testimonials[currentSlide].quote}
                    </blockquote>
                    <footer className="text-sm">
                      <cite className="font-medium text-white not-italic">
                        {testimonials[currentSlide].author}
                      </cite>
                      <div className="text-gray-400">{testimonials[currentSlide].position}</div>
                    </footer>
                  </div>
                  </CardContent>
              </Card>
            </div>
            <div className="absolute left-0 right-0 -bottom-8 flex justify-center gap-2 mt-4">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`h-3 w-3 rounded-full transition-colors ${
                    index === currentSlide ? "bg-blue-500" : "bg-gray-600"
                  }`}
                  onClick={() => setCurrentSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            <div className="absolute left-0 right-0 top-1/2 flex justify-between -translate-y-1/2">
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-zinc-50/50 -translate-x-8 rounded-full"
                onClick={prevSlide}
                aria-label="Previous slide"
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-zinc-50/50 translate-x-8 rounded-full"
                onClick={nextSlide}
                aria-label="Next slide"
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

