'use client';

import { useState } from 'react';
import { Send, User, Mail, Phone, Building, MapPin, MessageSquare } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    location: '',
    serviceType: '',
    projectDetails: '',
    message: ''
  });

  const serviceTypes = [
    'Manufacturing & Industrial',
    'Aerospace & Automotive', 
    'HoReCa (Hotels, Restaurants, Cafes)',
    'Residential Cleaning',
    'Other - Please specify'
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Add form submission logic and Google Analytics conversion tracking
    console.log('Form submitted:', formData);
  };

  return (
    <div className="bg-white p-8 shadow-xl">
      <div className="text-center mb-8">
        <h3 className="font_5 text-gray-900 mb-4">
          Get Your Free Quote
        </h3>
        <p className="font_8 text-gray-600">
          Tell us about your project and we'll provide a customized solution for your cleaning needs.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name and Email Row */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="flex items-center font_7 text-gray-700 mb-2">
              <User className="w-4 h-4 mr-2 text-primary-600" />
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 font_8 text-gray-900 transition-colors"
              placeholder="Your full name"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="flex items-center font_7 text-gray-700 mb-2">
              <Mail className="w-4 h-4 mr-2 text-primary-600" />
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 font_8 text-gray-900 transition-colors"
              placeholder="your.email@company.com"
            />
          </div>
        </div>

        {/* Phone and Company Row */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="phone" className="flex items-center font_7 text-gray-700 mb-2">
              <Phone className="w-4 h-4 mr-2 text-primary-600" />
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 font_8 text-gray-900 transition-colors"
              placeholder="+971 XX XXX XXXX"
            />
          </div>
          
          <div>
            <label htmlFor="company" className="flex items-center font_7 text-gray-700 mb-2">
              <Building className="w-4 h-4 mr-2 text-primary-600" />
              Company/Organization
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 font_8 text-gray-900 transition-colors"
              placeholder="Your company name"
            />
          </div>
        </div>

        {/* Location and Service Type Row */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="location" className="flex items-center font_7 text-gray-700 mb-2">
              <MapPin className="w-4 h-4 mr-2 text-primary-600" />
              Location
            </label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 font_8 text-gray-900 transition-colors"
              placeholder="City, Country"
            />
          </div>
          
          <div>
            <label htmlFor="serviceType" className="flex items-center font_7 text-gray-700 mb-2">
              <MessageSquare className="w-4 h-4 mr-2 text-primary-600" />
              Service Type *
            </label>
            <select
              id="serviceType"
              name="serviceType"
              value={formData.serviceType}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 font_8 text-gray-900 transition-colors bg-white"
            >
              <option value="">Select service type</option>
              {serviceTypes.map((service, index) => (
                <option key={index} value={service}>
                  {service}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Project Details */}
        <div>
          <label htmlFor="projectDetails" className="flex items-center font_7 text-gray-700 mb-2">
            Project Details
          </label>
          <input
            type="text"
            id="projectDetails"
            name="projectDetails"
            value={formData.projectDetails}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 font_8 text-gray-900 transition-colors"
            placeholder="Brief description of surfaces/materials to be cleaned"
          />
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="flex items-center font_7 text-gray-700 mb-2">
            Additional Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 font_8 text-gray-900 transition-colors resize-vertical"
            placeholder="Any additional information about your cleaning requirements..."
          />
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="inline-flex items-center bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 font_7 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <Send className="w-5 h-5 mr-2" />
            Send Free Quote Request
          </button>
        </div>

        {/* Privacy Note */}
        <div className="text-center">
          <p className="font_9 text-gray-500">
            * Required fields. We respect your privacy and will never share your information.
          </p>
        </div>
      </form>
    </div>
  );
}