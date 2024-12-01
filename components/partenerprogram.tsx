import { div } from 'framer-motion/client';
import Image from 'next/image';
import React from 'react'


const partenerProgram = [
    {
        title: 'Reseller Partner Program',
        points: ['Expand your portfolio with Fourcore’s solutions.', 'Boost revenue with competitive margins.', 'Access sales tools and support.'],
        image: 'reseller.svg'
    },
    {
        title: 'Technology Alliance Partner Program',
        points: ['Integrate and enhance your product with Fourcore.', 'Co-develop innovative security solutions.', 'Leverage joint marketing efforts.'],
        image: 'talliance.svg'
    },
    {
        title: 'MSSP Partner Program',
        points: ['Offer managed security with real-time monitoring.', 'Provide scalable cybersecurity for multiple clients.', 'Get ongoing technical support and updates..'],
        image: 'mssp.svg'
    }
]

function PartenerProgram() {
  return (
    <section className='w-full p-12 md:py-24'>
        <h1 className='text-4xl md:text-6xl text-center font-semibold mb-10 lg:m-20'>
            FourCore Partner Programs
        </h1>
        <div className='container px-4 md:px-6'>
            <div className='grid gap-6 lg:grid-cols-3 lg:gap-1'>
                {partenerProgram.map((item, index) => (
                  <div key={index} className='flex items-center justify-center'>
                    <PartenerProgramItem {...item} />
                    {index !== partenerProgram.length - 1 && (
                      <span className='w-[2px] h-[90%] bg-slate-700'></span>
                    )}
                  </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default PartenerProgram


function PartenerProgramItem({
    title,
    points,
    image
}: {
    title: string;
    points: string[];
    image: string;
}) {
  return (
    <div className='flex flex-col gap-4 items-center justify-center text-center mt-10'>
        <Image src={'/assets/'+image} alt={title} width={150} height={150} />
        <h1 className='text-4xl font-semibold self-center'>
            {title}
        </h1>
        <ul className='flex flex-col gap-5 list-none items-start justify-start text-start px-5'>
            {points.map((point, index) => (
                <li 
                    key={index} 
                    className=' text-lg gap-2 relative pl-4 before:content-["▶"] before:absolute before:-left-1 before:text-blue-500'
                >
                    {point}
                </li>
            ))}
        </ul>
    </div>
  )
}