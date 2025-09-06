'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function CaseStudies() {

  
  const caseStudies = [
    {
      id: 1,
      title: "Automotive Parts Maintenance",
      challenge: "Rust and oil removal on car parts before repainting.",
      solution: "Laser cleaning provided a fast, uniform cleaning process.",
      result: "Removed rust, oil and dirt and reduced material waste.",
      beforeImage: "/images/examples/metal-car-parts-before.webp",
      afterImage: "/images/examples/metal-car-parts-after.webp"
    },
    {
      id: 2,
      title: "Residential/Commercial - Travertine and Marble",
      challenge: "Dirt and grime removal on travertine and marble used for outdoor areas.",
      solution: "Laser cleaning provided a fast, uniform cleaning process.",
      result: "Travertine, in particular, has a porous and textured surface, but laser cleaning accessed these hard-to-reach areas, ensuring a thorough clean.",
      beforeImage: "/images/examples/travertine-before.webp",
      afterImage: "/images/examples/travertine-after.webp"
    },
    {
      id: 3,
      title: "Residential Laser Cleaning - Floor Tiles",
      challenge: "Removing hard residue from floor tiles after renovation. The client tried for more than 8 years to find an effective cleaning solution for the tiles.",
      solution: "Laser cleaning allows for spot cleaning of hard residue on the tiles.",
      result: "The laser removes residue without abrasive tools, protecting the surface of the tiles from scratches or wear.",
      beforeImage: "/images/examples/ceramic-tiles-before.webp",
      afterImage: "/images/examples/ceramic-tiles-after.webp"
    },
    {
      id: 4,
      title: "Limestone (building facades, monuments, floors)",
      challenge: "Limestone is soft and porous, easily damaged by abrasive cleaning or chemicals. Needs careful soot, pollution, and biological growth removal without eroding details.",
      solution: "Applied controlled laser parameters with gradual passes to lift surface contaminants while protecting the substrate.",
      result: "Surface soils and soot removed while preserving stone color, carvings, and tool marks. No chemical residues, minimal dust, and improved longevity of the stone surface.",
      beforeImage: "/images/examples/limestone-before.webp",
      afterImage: "/images/examples/limestone-after.webp"
    },
    {
      id: 5,
      title: "Bakery Tray (metal baking trays with carbonized residues/oils)",
      challenge: "Carbonized dough, grease, and burnt-on food residues stick firmly to trays. Abrasives can thin the tray, chemicals risk contamination.",
      solution: "Used laser cleaning to break down and remove surface build-up without abrasive media or chemicals.",
      result: "Trays are restored to clean metal, free of residues, without wear or deformation. Hygiene improves, trays last longer, and cleaning downtime is reduced compared to caustic soaking.",
      beforeImage: "/images/examples/bakery-tray-before.webp",
      afterImage: "/images/examples/bakery-tray-after.webp"
    },
    {
      id: 6,
      title: "Bakery Production Line (conveyors, stainless steel, machinery parts)",
      challenge: "Oils, flour dust, and baked residues accumulate on belts, rollers, and stainless-steel surfaces. Traditional cleaning (water, chemicals) risks contamination and requires downtime.",
      solution: "Deployed non-contact laser cleaning to safely remove contaminants in sensitive food production environments.",
      result: "Equipment surfaces are sanitized and residue-free without chemicals. Reduced downtime, improved food safety compliance, and longer equipment life. Production can restart quickly after cleaning.",
      beforeImage: "/images/examples/bakery-production-before.webp",
      afterImage: "/images/examples/bakery-production-after.webp"
    },
    {
      id: 7,
      title: "Travertine with Epoxy Coat (epoxy removal)",
      challenge: "Epoxy coatings penetrate the porous structure of travertine. Mechanical removal risks gouging the soft stone, and chemical strippers can stain or weaken it. The goal is to strip epoxy without harming the stone surface.",
      solution: "Used laser cleaning to selectively ablate the epoxy layer while minimizing impact on the natural stone.",
      result: "Epoxy layer removed cleanly, travertine pores reopened, and the natural texture preserved. No chemical residues left behind, and the stone remains ready for restoration or re-coating.",
      beforeImage: "/images/examples/travertine-epoxy-before.webp",
      afterImage: "/images/examples/travertine-epoxy-after.webp"
    },
    {
      id: 8,
      title: "Metal Car Parts (engine, chassis, body components)",
      challenge: "Rust, grease, paint, and oxide layers reduce part performance and complicate repairs or recoating.",
      solution: "Applied laser cleaning to precisely remove unwanted layers without damaging the base metal or altering dimensions.",
      result: "Clean, rust-free surfaces that are ready for welding, coating, or assembly; improved durability and reliability of parts.",
      beforeImage: "/images/examples/metal-car-parts-new-before.webp",
      afterImage: "/images/examples/metal-car-parts-new-after.webp"
    }
  ];

  const BeforeAfterSlider = ({ beforeImage, afterImage }: { beforeImage: string; afterImage: string; caseId: number }) => {
    const [sliderPosition, setSliderPosition] = useState(50);

    const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setSliderPosition(Number(e.target.value));
    };

    return (
      <div className="relative w-full h-80 overflow-hidden cursor-pointer group"
      >
        {/* After Image (base layer) */}
        <div className="absolute inset-0">
          <Image
            src={afterImage}
            alt="After"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        {/* Before Image (clipped overlay) */}
        <div 
          className="absolute inset-0"
          style={{
            clipPath: `inset(0 0 0 ${sliderPosition}%)`
          }}
        >
          <Image
            src={beforeImage}
            alt="Before"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        {/* Dynamic Labels based on slider position */}
        <div 
          className="absolute top-4 left-4 bg-green-700 text-white px-3 py-1 text-sm font-medium rounded shadow-lg z-10 transition-opacity duration-200"
          style={{
            opacity: sliderPosition > 25 ? 1 : 0.3
          }}
        >
          AFTER
        </div>
        <div 
          className="absolute top-4 right-4 bg-red-700 text-white px-3 py-1 text-sm font-medium rounded shadow-lg z-10 transition-opacity duration-200"
          style={{
            opacity: sliderPosition < 75 ? 1 : 0.3
          }}
        >
          BEFORE
        </div>

        {/* Slider */}
        <div className="absolute inset-0 flex items-center">
          <input
            type="range"
            min="0"
            max="100"
            value={sliderPosition}
            onChange={handleSliderChange}
            className="w-full h-full appearance-none bg-transparent cursor-ew-resize slider"
            style={{ 
              background: 'transparent',
              outline: 'none'
            }}
            aria-label="Before and after comparison slider"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={sliderPosition}
            aria-valuetext={`${sliderPosition}% between before and after images`}
          />
          
          {/* Slider Line */}
          <div
            className="absolute top-0 bottom-0 w-1 bg-white shadow-lg pointer-events-none"
            style={{
              left: `${sliderPosition}%`,
              transform: 'translateX(-50%)'
            }}
          >
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
              <div className="w-4 h-4 border-2 border-gray-400 rounded-full bg-white"></div>
            </div>
          </div>
        </div>

        {/* Permanent instructions overlay */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/80 text-white px-4 py-2 text-sm backdrop-blur-sm rounded">
          👆 Drag slider to compare
        </div>
      </div>
    );
  };

  return (
    <section id="case-studies" className="py-20 bg-white">
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
            Case Studies & Success Stories
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-primary-600 mx-auto mb-8"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          ></motion.div>
          <motion.p 
            className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            See the remarkable transformation results achieved with our laser cleaning technology across different applications.
          </motion.p>
        </motion.div>

        <div className="space-y-16">
          {caseStudies.map((study, index) => (
            <motion.div 
              key={study.id} 
              className="grid lg:grid-cols-2 gap-8 items-center"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.3,
                ease: "easeOut"
              }}
            >
              <motion.div 
                className={`${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.3 + 0.3,
                  ease: "easeOut"
                }}
              >
                <BeforeAfterSlider 
                  beforeImage={study.beforeImage}
                  afterImage={study.afterImage}
                  caseId={study.id}
                />
              </motion.div>
              
              <motion.div 
                className={`${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.3 + 0.5,
                  ease: "easeOut"
                }}
              >
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                  Example {study.id}: {study.title}
                </h3>
                
                <div className="space-y-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.6, 
                      delay: index * 0.3 + 0.7 
                    }}
                  >
                    <h4 className="text-lg font-medium text-red-700 mb-2">Challenge:</h4>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {study.challenge}
                    </p>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.6, 
                      delay: index * 0.3 + 0.9 
                    }}
                  >
                    <h4 className="text-lg font-medium text-blue-700 mb-2">Solution:</h4>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {study.solution}
                    </p>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.6, 
                      delay: index * 0.3 + 1.1 
                    }}
                  >
                    <h4 className="text-lg font-medium text-green-700 mb-2">Result:</h4>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {study.result}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 0;
          height: 0;
        }
        .slider::-moz-range-thumb {
          width: 0;
          height: 0;
          border: none;
          background: transparent;
        }
      `}</style>
    </section>
  );
}