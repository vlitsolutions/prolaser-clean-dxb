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
        <div className="text-center mb-16">
          <h2 className="font_3 text-gray-900 mb-6">
            Key Benefits of Laser Cleaning
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-gray-50 p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="text-primary-600 mr-4">
                  {benefit.icon}
                </div>
                <h3 className="font_6 text-gray-900">
                  {benefit.title}
                </h3>
              </div>
              <ul className="space-y-3">
                {benefit.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <span className="text-primary-600 mr-3 mt-1">•</span>
                    <span className="font_8 text-gray-600 leading-relaxed">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Comparison Section */}
        <div className="mt-20">
          <h3 className="font_5 text-gray-900 text-center mb-12">
            Comparison to Traditional Methods
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-red-50 border-l-4 border-red-400 p-6">
              <h4 className="font_6 text-red-800 mb-4">Sandblasting</h4>
              <p className="font_9 text-red-700 leading-relaxed">
                Involves blasting sand particles at high velocity, which can be abrasive and may cause damage to delicate or softer surfaces. Generates significant dust and particulate matter, posing serious respiratory hazards.
              </p>
            </div>
            
            <div className="bg-red-50 border-l-4 border-red-400 p-6">
              <h4 className="font_6 text-red-800 mb-4">Chemical Cleaning</h4>
              <p className="font_9 text-red-700 leading-relaxed">
                Many chemicals used for cleaning can be toxic and pose serious health risks if inhaled, ingested, or absorbed through the skin, resulting in potential environmental harm.
              </p>
            </div>
            
            <div className="bg-red-50 border-l-4 border-red-400 p-6">
              <h4 className="font_6 text-red-800 mb-4">Pressure Washing</h4>
              <p className="font_9 text-red-700 leading-relaxed">
                Water can infiltrate cracks, causing hidden damage or mold growth. Potential damage to delicate surfaces and uses large amounts of water with chemical runoff that can pollute the environment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}