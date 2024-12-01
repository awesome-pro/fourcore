'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from './ui/button'
import Image from 'next/image'


function Hero() {
  return (
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className='w-full'
          >
            <h3 className='text-primary -mt-6 mb-6'>
              FOURCORE INTEGRATION FOR SECURITY
            </h3>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              FourCore Partner&apos;s Guide
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              Unlock new opportunities and elevate your accomplishments with the FourCore&apos;s Partner Network and Programs.
            </p>
            <div className='flex flex-col md:flex-row items-start gap-5 w-full'>
            <Link href='/contact' className='w-full'>
              <Button className='rounded-full text-xl w-full' size='lg' >
                Book a Demo
              </Button>
            </Link>
            <Link href='/contact' className='w-full'>
              <Button variant='outline' className='rounded-full text-xl border-primary hover:bg-primary hover:text-white w-full md:w-auto' size='lg'>
                Contact Us
              </Button>
            </Link>
        </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className='w-full'
          >
            <Image src='/assets/her.png' alt='hero' width={500} height={500} />
          </motion.div>
        </div>
      </div>
  )
}

export default Hero