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
        <div className="text-center mb-16">
          <h2 className="font_3 text-gray-900 mb-6">
            How It Works
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-8"></div>
          <p className="font_8 text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
            Laser cleaning relies on the interaction between high-powered laser light and the surface material. A laser beam is directed onto the surface to be cleaned, and the energy from the laser causes the contaminants on the surface (such as rust, dirt, oil, paint or other unwanted layers) to be vaporized or ejected without damaging the base material.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center font_6 mb-6 mx-auto">
                {index + 1}
              </div>
              <h3 className="font_5 text-gray-900 mb-4">
                {step.title}
              </h3>
              <p className="font_8 text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}