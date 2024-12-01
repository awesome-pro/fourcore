'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Button } from './ui/button'
import Link from 'next/link'

function Validate() {
  return (
    <section className='flex flex-col-reverse lg:flex-row justify-center items-center p-8 md:p-16 '>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className=' size-full h-full flex flex-col items-start justify-between gap-5 lg:gap-16 md:px-10 lg:px-20'
      >
        <h1 className='text-5xl text-center font-semibold'>
          Validate Your Security Controls
        </h1>
        <p className=' text-slate-300 text-xl'>
          Build observability of your defense surface. Get started with FourCore ATTACK and emulate threats to assess, validate and improve your security controls.
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
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className=' lg:p-16'
      >
        <Image src='/assets/chart.png' alt='Validate' width={1000} height={1000} />
      </motion.div>

    </section>
  )
}

export default Validate