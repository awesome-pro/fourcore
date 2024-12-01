import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'

function Guide() {
  return (
   <section className="relative w-full bg-black py-12 md:p-24">
    <div className="container px-4 md:px-6">
      <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-[1fr_1.2fr]">
        <div className="flex flex-col justify-center space-y-4">
          <div className="space-y-2">
            <h1 className="text-3xl font-semibold tracking-tighter text-white sm:text-5xl xl:text-6xl/none mb-10">
              FourCore
              <br />
              Partner&apos;s Guide
            </h1>
            <p className="max-w-[600px] text-gray-300 md:text-2xl">
              Unlock new opportunities and elevate your accomplishments with the FourCore&apos;s Partner Network and Programs.
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Link href='/partner-guide.pdf' target='_blank'>
              <Button className='rounded-full text-xl mt-10 ' size='lg'>
                Download Guide
              </Button>
            </Link>
          </div>
        </div>
        <div className="relative hidden lg:block">
          {/* Curved Arrow SVG */}
          <Image src="/assets/arrow.svg" alt="Arrow" width={187} height={45} className='' />
            <Image
              src="/assets/book.png"
              alt="Corporate Design Magazine"
              width={500}
              height={600}
              className="absolute right-0 top-0 transform rounded-lg shadow-xl "
            />
        </div>
      </div>
    </div>
  </section>
  )
}

export default Guide