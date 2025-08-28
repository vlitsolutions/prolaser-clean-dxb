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
        <div className="text-center mb-16">
          <h2 className="font_3 text-gray-900 mb-6">
            Industries We Serve
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-8"></div>
          <p className="font_8 text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Laser cleaning is a versatile and advanced technology that is being adopted across a wide range of industries due to its precision, efficiency, and environmental benefits.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {industries.map((industry, index) => (
            <div key={index} className="bg-white p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="text-primary-600 mr-4">
                  {industry.icon}
                </div>
                <div>
                  <h3 className="font_5 text-gray-900 mb-2">
                    {industry.title}
                  </h3>
                  <p className="font_9 text-gray-600">
                    {industry.description}
                  </p>
                </div>
              </div>
              
              <div className="space-y-3">
                {industry.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start">
                    <span className="text-primary-600 mr-3 mt-1 text-sm">▶</span>
                    <span className="font_9 text-gray-700 leading-relaxed">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}