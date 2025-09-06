'use client';

import { motion } from 'framer-motion';

export default function IntroSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Introduction to Laser Cleaning
          </motion.h2>
          
          <motion.div 
            className="w-24 h-1 bg-primary-600 mx-auto mb-8"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          ></motion.div>
          
          <div className="max-w-4xl mx-auto">
            <motion.p 
              className="text-lg text-gray-600 leading-relaxed mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Laser cleaning is an advanced, non-contact surface treatment technology that uses focused laser beams to remove unwanted layers such as rust, paint, oil, oxides, or other contaminants. Unlike traditional cleaning methods - such as sandblasting, chemical stripping, or abrasive brushing - laser cleaning is highly selective, allowing contaminants to be removed without damaging the underlying material.
            </motion.p>
            
            <motion.p 
              className="text-lg text-gray-600 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              This precision makes it particularly valuable for delicate surfaces, high-value components, and applications where preservation of the base material is critical.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}