'use client'

import Image from 'next/image';
import { Carousel } from '@/components/ui/carousel';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';

const PartnerWithUs = () => {
  const testimonials = [
    {
      quote:
        '"Partnering with FourCore has enhanced our cybersecurity. Their ATTACK platform\'s real-time threat simulations keep us ahead of emerging risks, strengthening our services and protecting our clients."',
      author: 'Sachin Anand',
      role: 'SOC Manager - Plus971 Cybersecurity',
    },
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 text-center">
          Why Partner With Us
        </h2>
        <Carousel>
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col md:flex-row items-center justify-center"
            >
              <div className="md:mr-8 mb-6 md:mb-0">
                <Image
                  src="/cybernx-logo.png"
                  alt="CyberNX Logo"
                  width={200}
                  height={120}
                  className="w-40 md:w-48 h-auto"
                />
              </div>
              <Card className="bg-gray-800 w-full md:w-3/4 lg:w-2/3 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-blue-500/20 before:to-blue-800/20 before:m-[1px] before:rounded-lg before:z-0 hover:before:bg-gray-700 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-white">{testimonial.author}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">{testimonial.quote}</p>
                  <p className="text-gray-400 mt-2">{testimonial.role}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default PartnerWithUs;