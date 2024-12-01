'use client'

import React from 'react';
import { motion } from 'framer-motion';

export default function NetworkGraph() {
  const dots = Array.from({ length: 8 });
  const colors = ['#3B82F6', '#EC4899', '#10B981', '#8B5CF6'];

  return (
    <div className="absolute top-0 right-0 w-1/2 h-full opacity-70">
      <div className="relative w-full h-full">
        {dots.map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full"
            style={{
              backgroundColor: colors[i % colors.length],
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </div>
    </div>
  );
};