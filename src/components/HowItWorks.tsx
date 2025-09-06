'use client';

import { motion } from 'framer-motion';

export default function HowItWorks() {
  const steps = [
    {
      title: "Laser Emission",
      description: "A laser source generates high-energy light, typically in the form of short pulses or continuous beams."
    },
    {
      title: "Surface Interaction", 
      description: "The laser light is directed at the surface where contaminants are present. The laser's energy is absorbed by the material on the surface, creating a high temperature that causes the contaminants to either vaporize or be physically removed."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            How It Works
          </motion.h2>
          
          <motion.div 
            className="w-24 h-1 bg-primary-600 mx-auto mb-8"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          ></motion.div>
          
          <motion.p 
            className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Laser cleaning relies on the interaction between high-powered laser light and the surface material. A laser beam is directed onto the surface to be cleaned, and the energy from the laser causes the contaminants on the surface (such as rust, dirt, oil, paint or other unwanted layers) to be vaporized or ejected without damaging the base material.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {steps.map((step, index) => (
            <motion.div 
              key={index} 
              className="text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.2 + 0.8,
                ease: "easeOut"
              }}
            >
              <motion.div 
                className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-xl font-semibold mb-6 mx-auto"
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.2 + 1.0,
                  type: "spring",
                  stiffness: 100
                }}
              >
                {index + 1}
              </motion.div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                {step.title}
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}