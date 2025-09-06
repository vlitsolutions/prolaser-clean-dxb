'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, Globe, MapPin } from 'lucide-react';
import ContactForm from './ContactForm';
import WhatsAppButton from './WhatsAppButton';

export default function Contact() {
  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone Numbers",
      values: ["+971 58 275 1122", "+971 58 108 5800"],
      links: ["tel:+971582751122", "tel:+971581085800"]
    },
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      values: ["contact@prolaserdxb.com"],
      links: ["mailto:contact@prolaserdxb.com"]
    },
    {
      icon: <Globe className="w-6 h-6" />,
      label: "Website",
      values: ["prolaserdxb.com"],
      links: ["https://prolaserdxb.com"]
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      values: ["Dubai, UAE"],
      links: [""]
    }
  ];

  const reasons = [
    {
      title: "Advanced Technology",
      description: "We use the latest laser cleaning equipment for precise, efficient removal of stubborn residues without damaging surfaces."
    },
    {
      title: "Eco-Friendly",
      description: "Our process is chemical-free and generates no waste, making it safe for the environment and your property."
    },
    {
      title: "Fast & Efficient",
      description: "We deliver quick, effective results, reducing downtime and lowering costs compared to traditional methods."
    },
    {
      title: "Experienced Team",
      description: "Our skilled team is expert in laser cleaning, ensuring high-quality service."
    },
    {
      title: "Custom Solutions",
      description: "We provide tailored cleaning for various surfaces and industries, offering the best solution for your project."
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Contact Us
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            At PROLASER CLEAN DXB we specialize in providing cutting-edge laser cleaning technology to meet all your cleaning needs with precision, efficiency, and sustainability.
          </p>
        </div>

        

        {/* Contact Info Row */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Why Choose Us */}
          <div className="bg-white p-8 shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
              Why Choose Us?
            </h3>
            
            <div className="space-y-6">
              {reasons.map((reason, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900 mb-2">
                      {reason.title}
                    </h4>
                    <p className="text-base text-gray-600 leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-4 bg-primary-50 border-l-4 border-primary-600">
              <p className="text-lg text-primary-800 text-center">
                Choose us for a cleaner, safer, and more sustainable approach to cleaning - contact us today to learn how we can help!
              </p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-white p-8 shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
              Get In Touch
            </h3>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="text-primary-600 mt-1">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900 mb-2">
                      {info.label}
                    </h4>
                    <div className="space-y-1">
                      {info.values.map((value, valueIndex) => (
                        <div key={valueIndex}>
                          {info.links[valueIndex] ? (
                            <a
                              href={info.links[valueIndex]}
                              className="text-lg text-primary-600 hover:text-primary-700 transition-colors"
                            >
                              {value}
                            </a>
                          ) : (
                            <span className="text-lg text-gray-600">
                              {value}
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="mt-8 space-y-4">
              <a
                href="tel:+971582751122"
                className="block w-full bg-primary-600 hover:bg-primary-700 text-white text-center py-4 px-6 text-lg font-medium transition-colors duration-300"
              >
                Call Now for Free Quote
              </a>
              <WhatsAppButton
                phoneNumber="971582751122"
                className="w-full bg-green-500 hover:bg-green-600 text-white text-center py-4 px-6 text-lg font-medium transition-colors duration-300"
              />
              <a
                href="mailto:contact@prolaserdxb.com"
                className="block w-full bg-gray-600 hover:bg-gray-700 text-white text-center py-4 px-6 text-lg font-medium transition-colors duration-300"
              >
                Send Email Inquiry
              </a>
            </div>
          </div>
        </div>
        {/* Contact Form Row */}
        <div className="mt-16">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}