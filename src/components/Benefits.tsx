'use client';

import { motion } from 'framer-motion';
import { Leaf, Shield, DollarSign, Target } from 'lucide-react';

export default function Benefits() {
  const benefits = [
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Eco-Friendly & Sustainable",
      features: [
        "No chemicals or solvents",
        "No secondary waste disposal required", 
        "Reduces environmental impact",
        "No exposure to toxic chemicals"
      ]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Non-Abrasive & Safe for Surfaces",
      features: [
        "Protects delicate materials (e.g. historical artifacts, aerospace components)",
        "No damage to base material compared to sanding or grinding"
      ]
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Cost-Effective & Low Maintenance",
      features: [
        "Reduces long-term maintenance costs",
        "No need for consumables (sand, chemicals, water)",
        "Longer lifespan of cleaned surfaces"
      ]
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "High Precision & Automation Compatibility",
      features: [
        "Selectively removes contaminants, ideal for delicate or intricate surfaces",
        "Can be automated for industrial applications"
      ]
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-white">
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
            Key Benefits of Laser Cleaning
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-primary-600 mx-auto mb-8"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          ></motion.div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div 
              key={index} 
              className="bg-gray-50 p-8 hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1 + 0.6,
                ease: "easeOut"
              }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="flex items-center mb-6">
                <motion.div 
                  className="text-primary-600 mr-4"
                  initial={{ rotate: -90, opacity: 0 }}
                  whileInView={{ rotate: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.1 + 0.8
                  }}
                >
                  {benefit.icon}
                </motion.div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {benefit.title}
                </h3>
              </div>
              <ul className="space-y-3">
                {benefit.features.map((feature, featureIndex) => (
                  <motion.li 
                    key={featureIndex} 
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.4, 
                      delay: index * 0.1 + featureIndex * 0.1 + 1.0 
                    }}
                  >
                    <span className="text-primary-600 mr-3 mt-1">•</span>
                    <span className="text-base text-gray-600 leading-relaxed">
                      {feature}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Comparison Section */}
        <motion.div 
          className="mt-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <motion.h3 
            className="text-2xl font-semibold text-gray-900 text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Comparison to Traditional Methods
          </motion.h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Sandblasting",
                description: "Involves blasting sand particles at high velocity, which can be abrasive and may cause damage to delicate or softer surfaces. Generates significant dust and particulate matter, posing serious respiratory hazards."
              },
              {
                title: "Chemical Cleaning",
                description: "Many chemicals used for cleaning can be toxic and pose serious health risks if inhaled, ingested, or absorbed through the skin, resulting in potential environmental harm."
              },
              {
                title: "Pressure Washing",
                description: "Water can infiltrate cracks, causing hidden damage or mold growth. Potential damage to delicate surfaces and uses large amounts of water with chemical runoff that can pollute the environment."
              }
            ].map((method, index) => (
              <motion.div 
                key={index}
                className="bg-red-50 border-l-4 border-red-400 p-6"
                initial={{ opacity: 0, x: -30, rotateY: -15 }}
                whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.2 + 0.4,
                  ease: "easeOut"
                }}
                whileHover={{ 
                  scale: 1.03, 
                  rotateY: 2,
                  transition: { duration: 0.2 }
                }}
              >
                <h4 className="text-xl font-semibold text-red-800 mb-4">{method.title}</h4>
                <p className="text-base text-red-700 leading-relaxed">
                  {method.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}