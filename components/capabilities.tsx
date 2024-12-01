'use client'

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

const capabilities = [
  {
    image: '/assets/capabilities/end.png',
    title: "End to End Automation",
    description: "Improve cloud threat detection and prioritization by sharing rich signals across cloud security ecosystem."
  },
  {
    image: '/assets/capabilities/real.png',
    title: "Real Time Outcomes",
    description: "Save time and avoid knowledge gaps in your security operations by creating truly integrated workflows."
  },
  {
    image: '/assets/capabilities/flex.png',
    title: "Unified Visibility",
    description: "Enable a flexible & open security architecture by leveraging our expansive integrations."
  }
]

export default function Capabilities() {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl md:text-5xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Capabilities of Integrations
        </motion.h2>

        <motion.h4
          className="text-xl md:text-2xl text-center mb-12 text-slate-500"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Wiz works with your existing technology stack to complement current workflows and streamline your cloud security strategy - all in one seamless platform.
        </motion.h4>

        <div className="grid md:grid-cols-3 gap-8">
          {capabilities.map((capability, index) => (
            <motion.div
              key={capability.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="bg-transparent border-transparent ">
                <CardContent className="p-6 flex flex-col items-center justify-center text-center gap-4">
                  <Image src={capability.image} alt={capability.title} width={180} height={180} />
                  <h3 className="text-xl font-bold mb-2 text-primary">{capability.title}</h3>
                  <p className="text-slate-200 text-lg">{capability.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

