'use client'

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

const perks = [
  {
    image: '/assets/perks/cost.png',
    title: "End to End Automation",
    description: "Maximize value with competitive pricing tailored for partners."
  },
  {
    image: '/assets/perks/portal.png',
    title: "Real Time Outcomes",
    description: "Access essential tools and resources through a dedicated portal."
  },
  {
    image: '/assets/perks/early.png',
    title: "Early Access",
    description: "Stay ahead with early access to new products and updates.."
  },
  {
    image: '/assets/perks/tech.png',
    title: "Comprehensive tech Support",
    description: "Receive expert technical assistance whenever you need it."
  },
  {
    image: '/assets/perks/sales.png',
    title: "Sales & Marketing Support",
    description: "Boost your reach with exclusive marketing resources and strategies."
  }
]

export default function Perks() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="py-20 bg-black"
      id="perks"
    >
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl md:text-5xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Partner Perks
        </motion.h2>

        <motion.h4
          className="text-xl md:text-2xl text-center mb-12 text-slate-500"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
         &quot;Experience unparalleled advantages designed to drive mutual success. Our partner program offers exclusive access to resources, support, and opportunities for enhanced collaboration and growth.&quot;
        </motion.h4>

        <div className="grid md:grid-cols-3 gap-8">
          {perks.map((perk, index) => (
            <motion.div
              key={perk.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="bg-transparent border-transparent ">
                <CardContent className="p-6 flex flex-col items-center justify-center text-center gap-4">
                  <Image src={perk.image} alt={perk.title} width={120} height={120} />
                  <h3 className="text-xl font-bold mb-2 text-primary">{perk.title}</h3>
                  <p className="text-slate-200 text-lg">{perk.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

