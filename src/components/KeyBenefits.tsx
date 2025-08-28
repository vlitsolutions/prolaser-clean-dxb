import { Leaf, Shield, DollarSign, Target } from 'lucide-react';

export default function KeyBenefits() {
  const benefits = [
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Eco-Friendly & Sustainable",
      points: [
        "No chemicals or solvents",
        "No secondary waste disposal required",
        "Reduces environmental impact",
        "No exposure to toxic chemicals"
      ]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Non-Abrasive & Safe for Surfaces",
      points: [
        "Protects delicate materials (e.g. historical artifacts, aerospace components)",
        "No damage to base material compared to sanding or grinding"
      ]
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Cost-Effective & Low Maintenance",
      points: [
        "Reduces long-term maintenance costs",
        "No need for consumables (sand, chemicals, water)",
        "Longer lifespan of cleaned surfaces"
      ]
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "High Precision & Automation Compatible",
      points: [
        "Selectively removes contaminants, ideal for delicate or intricate surfaces",
        "Can be automated for industrial applications"
      ]
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Key Benefits of Laser Cleaning
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Laser cleaning offers numerous advantages over traditional cleaning methods, 
            making it the smart choice for modern surface cleaning needs.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Icon & Title */}
              <div className="flex items-start space-x-4 mb-6">
                <div className="flex-shrink-0 w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center text-primary-600">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                </div>
              </div>

              {/* Benefits List */}
              <ul className="space-y-3">
                {benefit.points.map((point, pointIndex) => (
                  <li key={pointIndex} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                    <span className="text-gray-700 leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <a
            href="#industries"
            className="inline-flex items-center bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            See Industries We Serve
            <svg
              className="ml-2 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}