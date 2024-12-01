'use client'

import { motion } from 'framer-motion';
import { ChevronRight, Search } from 'lucide-react';
import Link from 'next/link';
import { Input } from './ui/input';
import Image from 'next/image';
import { Card } from './ui/card';
import { Badge } from './ui/badge';

interface Partener {
 id: number;
 name: string;
 tags: string[];
 image: string;
}

const integrations: Partener[] = [
  {
    id: 1,
    name: 'CyberNX',
    tags: ['MSSP', 'Reseller'],
    image: '/assets/partners/cyber.png',        
  },
  {
    id: 2,
    name: 'Eventus',
    tags: ['MSSP', 'Reseller'],
    image: '/assets/partners/eventus.png',
  },
  {
    id: 3,
    name: 'TrendMicro',
    tags: ['MSSP', 'Reseller'],
    image: '/assets/partners/cyber.png',    
  },
  {
    id: 4,
    name: 'SentinalOne',
    tags: ['MSSP', 'Reseller'],
    image: '/assets/partners/cyber.png',    
  },
  {
    id: 5,
    name: 'SentinalOne',
    tags: ['MSSP', 'Reseller'],
    image: '/assets/partners/cyber.png',    
  },
  {
    id: 6,
    name: 'SentinalOne',
    tags: ['MSSP', 'Reseller'],
    image: '/assets/partners/cyber.png',    
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

export function Parteners() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-black text-white py-20"
      id="parteners"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
       <h1 className="text-4xl md:text-5xl font-semibold text-center mb-12">
        Our Parteners
       </h1>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {integrations.map((integration) => (
           <motion.div 
           key={integration.id} 
           variants={itemVariants} 
           className='' 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5 }}
           >
            <Card className='bg-transparent border-primary  min-h-[200px] flex flex-col pl-6 justify-around shadow-primary'>
              <Image src={integration.image} alt={integration.name} width={200} height={30} />
              <div className='flex flex-col items-start '>
                <h1 className="text-4xl font-semibold text-slate-200">{integration.name}</h1>
                <div className='flex flex-row gap-2 mt-2'>
                    {integration.tags.map((tag) => (
                    <Badge key={tag} variant='outline' className='text-sm text-slate-400 rounded-full border-primary hover:bg-primary hover:text-white '>{tag}</Badge>
                    ))}
                </div>
              </div>
            </Card>
           </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}