'use client'

import { motion } from 'framer-motion';
import { ChevronRight, Search } from 'lucide-react';
import Link from 'next/link';
import { Input } from './ui/input';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';

interface Integration {
 id: number;
 name: string;
 description: string;
 image: string;
 link: string;
}

const integrations: Integration[] = [
  {
    id: 1,
    name: 'SentinalOne',
    description: 'Threat-Informed Defense With windows defender Threat-Informed Defense With windows defender',
    image: '/assets/integrations/1.svg',
    link: '/integrations/sentinalone'
  },
  {
    id: 2,
    name: 'LimaCharlie',
    description: 'Threat-Informed Defense With windows defender Threat-Informed Defense With windows defender',
    image: '/assets/integrations/2.png',
    link: '/integrations/sentinalone'
  },
  {
    id: 3,
    name: 'TrendMicro',
    description: 'Threat-Informed Defense With windows defender Threat-Informed Defense With windows defender',
    image: '/assets/integrations/1.svg',
    link: '/integrations/sentinalone'
  },
  {
    id: 4,
    name: 'SentinalOne',
    description: 'Threat-Informed Defense With windows defender Threat-Informed Defense With windows defender',
    image: '/assets/integrations/1.svg',
    link: '/integrations/sentinalone'
  },
  {
    id: 5,
    name: 'SentinalOne',
    description: 'Threat-Informed Defense With windows defender Threat-Informed Defense With windows defender',
    image: '/assets/integrations/1.svg',
    link: '/integrations/sentinalone'
  },
  {
    id: 6,
    name: 'SentinalOne',
    description: 'Threat-Informed Defense With windows defender Threat-Informed Defense With windows defender',
    image: '/assets/integrations/1.svg',
    link: '/integrations/sentinalone'
  },

];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function Integrations() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-black text-white py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
       <h1 className="text-4xl font-semibold text-center mb-12">
        Our Integrations
       </h1>
        <div className="relative max-w-2xl mx-auto mb-12">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input
            type="text"
            placeholder="Search integrations..."
            className="w-full bg-gray-900 border border-gray-700 py-3 px-12 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent h-12 rounded-full" 
          />
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2, margin: '0px 0px -100px' }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {integrations.map((integration) => (
            <motion.div key={integration.id} variants={itemVariants} className='' >
            <Card className='bg-transparent border-primary  min-h-[200px] flex flex-col pl-6 justify-around shadow-primary'>
              
              <CardHeader className='flex flex-row items-center gap-2'>
                <Image src={integration.image} alt={integration.name} width={35} height={35} />
                <CardTitle className='text-slate-200 text-4xl'>{integration.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{integration.description}</CardDescription>
              </CardContent>
              <CardFooter>
                <Link href={integration.link} className='text-primary hover:text-primary/70 transition-colors flex items-center gap-1'>
                  View details <ChevronRight className="h-4 w-4" />
                </Link>
              </CardFooter>
            </Card>
           </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}