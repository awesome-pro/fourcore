'use client'

import * as React from 'react'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Badge } from './ui/badge'

interface Resource {
  type: string
  title: string
  image: string
  link: string
}

const resources: Resource[] = [
  {
    type: 'Case Study',
    title: 'Threat-Informed Defense With LimaCharlie And FourCore ATTACK',
    image: '/assets/carousels/1.png',
    link: '#'
  },
  {
    type: 'Case Study',
    title: 'Threat-Informed Defense With LimaCharlie And FourCore ATTACK',
    image: '/assets/carousels/1.png',
    link: '#'
  },
  {
    type: 'Case Study',
    title: 'Threat-Informed Defense With LimaCharlie And FourCore ATTACK',
    image: '/assets/carousels/1.png',
    link: '#'
  },
  // Add more resources as needed
]

export default function ResourcesCarousel() {
  const [currentIndex, setCurrentIndex] = React.useState(0)

  return (
     <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="w-full bg-black py-20"
    >
      <div className="container px-4 md:px-6">
        <h2 className="text-center text-4xl font-semibold tracking-tighter text-white/90 sm:text-5xl xl:text-6xl/none mb-16">
          Discover Our Latest Resources
        </h2>
        
        <div className="relative max-w-5xl mx-auto">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="overflow-hidden bg-zinc-900 border-blue-500/20">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative aspect-video">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20" />
                  <Image
                    src={resources[currentIndex].image}
                    alt=""
                    className="object-cover w-full h-full"
                    width={600}
                    height={400}
                  />
                </div>
                <div className="p-6 lg:p-8 flex flex-col justify-center">
                  <Badge className='bg-primary/10 text-primary hover:text-white w-fit rounded-full mb-4'>
                    {resources[currentIndex].type}
                  </Badge>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {resources[currentIndex].title}
                  </h3>
                  <Link
                    href={resources[currentIndex].link}
                    className="inline-flex items-center text-primary hover:text-primary/70 transition-colors"
                  >
                    Read More
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </Card>
          </motion.div>

          <div className="flex justify-center mt-8 gap-2">
            {resources.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={cn(
                  'w-3 h-3 rounded-full transition-colors',
                  currentIndex === index ? 'bg-primary' : 'bg-zinc-500'
                )}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

