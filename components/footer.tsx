import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Separator } from './ui/separator';

function Footer() {
  return (
    <footer className='w-full px-5 md:px-20 py-8'>
      <Separator className='my-5 lg:px-10 bg-slate-700' /> 
      <div className='w-full flex flex-col md:flex-row items-center justify-between md:px-10 my-5 bg-transparent'>
        <div className='flex justify-center mb-4 md:mb-0'>
          <Image src='/logo.svg' alt='logo' width={140} height={100} />
        </div>
        <div className='flex flex-col items-center justify-center text-sm'>
          <span className='text-sm'>
            &copy; 2024 Fourcore | All Rights Reserved
          </span>
          <div className='flex items-center justify-center gap-5 mt-2'>
            <Link href='/privacy' className='text-primary/90 hover:text-primary/70'>
              Privacy
            </Link>
            <Link href='/terms' className='text-primary/90 hover:text-primary/70'>
              Terms
            </Link>
          </div>
        </div>
        <div className='flex items-center justify-center gap-2 mt-4 md:mt-0'>
          <Link href='https://www.linkedin.com/company/fourcore' className='text-primary/90 hover:text-primary/70'>
            <FaLinkedin size={20} />
          </Link>
          <Link href='https://twitter.com/fourcore' className='text-primary/90 hover:text-primary/70'>
            <FaSquareXTwitter size={20} />
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer