'use client';

import { useState } from 'react';
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
        <div className="text-center mb-16">
          <h2 className="font_3 text-gray-900 mb-6">
            Case Studies & Success Stories
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-8"></div>
          <p className="font_8 text-gray-600 max-w-3xl mx-auto leading-relaxed">
            See the remarkable transformation results achieved with our laser cleaning technology across different applications.
          </p>
        </div>

        <div className="space-y-16">
          {caseStudies.map((study, index) => (
            <div key={study.id} className="grid lg:grid-cols-2 gap-8 items-center">
              <div className={`${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                <BeforeAfterSlider 
                  beforeImage={study.beforeImage}
                  afterImage={study.afterImage}
                  caseId={study.id}
                />
              </div>
              
              <div className={`${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                <h3 className="font_5 text-gray-900 mb-6">
                  Example {study.id}: {study.title}
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font_7 text-red-700 mb-2">Challenge:</h4>
                    <p className="font_8 text-gray-600 leading-relaxed">
                      {study.challenge}
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font_7 text-blue-700 mb-2">Solution:</h4>
                    <p className="font_8 text-gray-600 leading-relaxed">
                      {study.solution}
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font_7 text-green-700 mb-2">Result:</h4>
                    <p className="font_8 text-gray-600 leading-relaxed">
                      {study.result}
                    </p>
                  </div>
                </div>
              </div>
            </div>
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