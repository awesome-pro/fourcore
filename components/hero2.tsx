'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from './ui/button';
import Image from 'next/image';

export default function Hero2() {
  return (
    <div className="min-h-screen relative overflow-hidden px-4 md:px-8 lg:pl-20">
      <div className="flex flex-col lg:flex-row gap-12 items-center relative z-10">
        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="relative max-w-4xl mx-auto lg:absolute lg:transform  lg:w-full md:right-0 top-2 overflow-hidden"
        >
          <Image
            src="/assets/grid.png"
            alt="hero"
            width={1000}
            height={735}
            className="overflow-hidden"
          />
        </motion.div>

        {/* Content Section */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="relative z-20  lg:text-left md:top-32 lg:w-1/2"
        >
          <h3 className="text-primary mb-6">
            FOURCORE INTEGRATION FOR SECURITY
          </h3>
          <h1 className="text-4xl md:text-7xl font-bold mb-6">
            FourCore Integrations
          </h1>
          <p className="text-xl text-gray-400 mb-8">
            Unlock new opportunities and elevate your accomplishments with the
            FourCore&apos;s Partner Network and Programs.
          </p>
          <Link href="/partner-guide.pdf" target="_blank">
            <Button className="rounded-full text-xl" size='lg'>Become a Partner</Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
