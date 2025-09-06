'use client';

import { motion } from 'framer-motion';
import { Factory, Plane, ChefHat, Home } from 'lucide-react';

export default function Industries() {
  const industries = [
    {
      icon: <Factory className="w-12 h-12" />,
      title: "Manufacturing Industry",
      description: "Surface preparation, tool and mold cleaning, precision cleaning for components requiring careful handling.",
      features: [
        "Surface Preparation: Removing rust, oil, grease from metal surfaces before coating",
        "Tool and Mold Cleaning: Cleaning molds, dies, and industrial tools without damage",
        "Precision Cleaning: Ideal for delicate components without abrasion or chemicals"
      ]
    },
    {
      icon: <Plane className="w-12 h-12" />,
      title: "Aerospace & Automotive",
      description: "High-performance component cleaning, coating removal, rust and corrosion treatment.",
      features: [
        "Turbine Blade Cleaning: Removal of contaminants from high-performance engine components",
        "Coating Removal: Safe removal without damaging underlying materials",
        "Rust and Corrosion Removal: Efficiently removing rust from car chassis, body parts, and engines",
        "Paint Stripping: Precision paint removal from car parts before refinishing",
        "Component Cleaning: Complex parts like engine blocks, turbines, and brake components"
      ]
    },
    {
      icon: <ChefHat className="w-12 h-12" />,
      title: "HoReCa Industry",
      description: "Commercial kitchen equipment, ventilation systems, and food processing area maintenance.",
      features: [
        "Kitchen Equipment: Removing grease, oil, and food residues from ovens, grills, fryers",
        "Ventilation Systems: Grease removal from exhaust ducts and hoods, reducing fire risks",
        "Stainless Steel Surfaces: Cleaning countertops, appliances without scratching",
        "Food Processing Areas: Maintaining hygiene without harsh chemicals",
        "Catering Equipment: Cleaning utensils, chafing dishes, trays, and serving carts"
      ]
    },
    {
      icon: <Home className="w-12 h-12" />,
      title: "Residential",
      description: "Home maintenance, restoration, and cleaning services for various household surfaces.",
      features: [
        "Metal Furniture: Rust removal from outdoor furniture, gates, railings, tools, grills",
        "Stone and Tile Surfaces: Cleaning marble, granite countertops and tile grout",
        "Wooden Surfaces: Restoring furniture by removing old paint, stains, or grime",
        "Graffiti Removal: From walls, garage doors, and exterior surfaces",
        "Brick and Concrete: Cleaning facades, driveways, patios, pool areas",
        "Mold and Mildew: Chemical-free removal from bathrooms, kitchens, and moisture-prone areas"
      ]
    }
  ];

  return (
    <section id="industries" className="py-20 bg-gray-50">
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
            Industries We Serve
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-primary-600 mx-auto mb-8"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          ></motion.div>
          <motion.p 
            className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Laser cleaning is a versatile and advanced technology that is being adopted across a wide range of industries due to its precision, efficiency, and environmental benefits.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {industries.map((industry, index) => (
            <motion.div 
              key={index} 
              className="bg-white p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.15 + 0.8,
                ease: "easeOut"
              }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="flex items-center mb-6">
                <motion.div 
                  className="text-primary-600 mr-4"
                  initial={{ scale: 0, rotate: -90 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.15 + 1.0,
                    type: "spring",
                    stiffness: 100
                  }}
                >
                  {industry.icon}
                </motion.div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                    {industry.title}
                  </h3>
                  <p className="text-lg text-gray-600">
                    {industry.description}
                  </p>
                </div>
              </div>
              
              <div className="space-y-3">
                {industry.features.map((feature, featureIndex) => (
                  <motion.div 
                    key={featureIndex} 
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.4, 
                      delay: index * 0.15 + featureIndex * 0.1 + 1.2 
                    }}
                  >
                    <span className="text-primary-600 mr-3 mt-1 text-sm">▶</span>
                    <span className="text-base text-gray-700 leading-relaxed">
                      {feature.includes(':') ? (
                        <>
                          <span className="font-semibold text-gray-900">
                            {feature.split(':')[0]}:
                          </span>
                          {feature.split(':').slice(1).join(':')}
                        </>
                      ) : (
                        feature
                      )}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}