'use client';

import { useState, useRef } from 'react';
import { Send, User, Mail, Phone, Building, MapPin, MessageSquare } from 'lucide-react';
import ReCAPTCHA from 'react-google-recaptcha';

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

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const [validationErrors, setValidationErrors] = useState<{
    [key: string]: string;
  }>({});

  const [captchaValue, setCaptchaValue] = useState<string | null>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const serviceTypes = [
    'Manufacturing & Industrial',
    'Aerospace & Automotive', 
    'HoReCa (Hotels, Restaurants, Cafes)',
    'Residential Cleaning',
    'Other - Please specify'
  ];

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone: string): boolean => {
    if (!phone.trim()) return true; // Phone is optional
    // Accept various international phone formats
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    const cleanPhone = phone.replace(/[\s\-\(\)]/g, '');
    return phoneRegex.test(cleanPhone) && cleanPhone.length >= 7;
  };

  const validateForm = (): boolean => {
    const errors: { [key: string]: string } = {};

    // Name validation
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }

    // Email validation
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }

    // Phone validation (optional but must be valid if provided)
    if (formData.phone.trim() && !validatePhone(formData.phone)) {
      errors.phone = 'Please enter a valid phone number';
    }

    // Service type validation
    if (!formData.serviceType) {
      errors.serviceType = 'Please select a service type';
    }

    // CAPTCHA validation
    if (!captchaValue) {
      errors.captcha = 'Please complete the CAPTCHA';
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    setFormData({
      ...formData,
      [name]: value
    });

    // Clear validation error for this field when user starts typing
    if (validationErrors[name]) {
      setValidationErrors({
        ...validationErrors,
        [name]: ''
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus({ type: null, message: '' });

    // Validate form before submitting
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          captcha: captchaValue
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: data.message || 'Your message has been sent successfully!'
        });
        
        // Reset form on success
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          location: '',
          serviceType: '',
          projectDetails: '',
          message: ''
        });
        
        // Reset CAPTCHA
        setCaptchaValue(null);
        if (recaptchaRef.current) {
          recaptchaRef.current.reset();
        }
      } else {
        setSubmitStatus({
          type: 'error',
          message: data.error || 'Failed to send message. Please try again.'
        });
      }
    } catch {
      setSubmitStatus({
        type: 'error',
        message: 'Network error. Please check your connection and try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white p-8 shadow-xl">
      <div className="text-center mb-8">
        <h3 className="font_5 text-gray-900 mb-4">
          Get Your Free Quote
        </h3>
        <p className="font_8 text-gray-600">
          Tell us about your project and we&apos;ll provide a customized solution for your cleaning needs.
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
              className={`w-full px-4 py-3 border font_8 text-gray-900 transition-colors ${
                validationErrors.name 
                  ? 'border-red-500 focus:ring-2 focus:ring-red-500 focus:border-red-500' 
                  : 'border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500'
              }`}
              placeholder="Your full name"
            />
            {validationErrors.name && (
              <p className="mt-1 text-sm text-red-600">{validationErrors.name}</p>
            )}
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
              className={`w-full px-4 py-3 border font_8 text-gray-900 transition-colors ${
                validationErrors.email 
                  ? 'border-red-500 focus:ring-2 focus:ring-red-500 focus:border-red-500' 
                  : 'border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500'
              }`}
              placeholder="your.email@company.com"
            />
            {validationErrors.email && (
              <p className="mt-1 text-sm text-red-600">{validationErrors.email}</p>
            )}
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
              className={`w-full px-4 py-3 border font_8 text-gray-900 transition-colors ${
                validationErrors.phone 
                  ? 'border-red-500 focus:ring-2 focus:ring-red-500 focus:border-red-500' 
                  : 'border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500'
              }`}
              placeholder="+971 XX XXX XXXX"
            />
            {validationErrors.phone && (
              <p className="mt-1 text-sm text-red-600">{validationErrors.phone}</p>
            )}
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
              className={`w-full px-4 py-3 border font_8 text-gray-900 transition-colors bg-white ${
                validationErrors.serviceType 
                  ? 'border-red-500 focus:ring-2 focus:ring-red-500 focus:border-red-500' 
                  : 'border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500'
              }`}
            >
              <option value="">Select service type</option>
              {serviceTypes.map((service, index) => (
                <option key={index} value={service}>
                  {service}
                </option>
              ))}
            </select>
            {validationErrors.serviceType && (
              <p className="mt-1 text-sm text-red-600">{validationErrors.serviceType}</p>
            )}
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

        {/* CAPTCHA */}
        <div>
          <label className="flex items-center font_7 text-gray-700 mb-2">
            Security Verification *
          </label>
          <div className="flex justify-center">
            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"}
              onChange={(value) => {
                setCaptchaValue(value);
                // Clear captcha validation error when user completes it
                if (validationErrors.captcha) {
                  setValidationErrors({
                    ...validationErrors,
                    captcha: ''
                  });
                }
              }}
              onExpired={() => setCaptchaValue(null)}
            />
          </div>
          {validationErrors.captcha && (
            <p className="mt-1 text-sm text-red-600 text-center">{validationErrors.captcha}</p>
          )}
        </div>

        {/* Status Messages */}
        {submitStatus.type && (
          <div className={`p-4 rounded-lg border ${
            submitStatus.type === 'success' 
              ? 'bg-green-50 border-green-200 text-green-700' 
              : 'bg-red-50 border-red-200 text-red-700'
          }`}>
            <p className="font_7 text-center">{submitStatus.message}</p>
          </div>
        )}

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`inline-flex items-center px-8 py-4 font_7 transition-all duration-300 shadow-lg ${
              isSubmitting 
                ? 'bg-gray-400 cursor-not-allowed' 
                : 'bg-primary-600 hover:bg-primary-700 transform hover:scale-105 hover:shadow-xl'
            } text-white`}
          >
            <Send className="w-5 h-5 mr-2" />
            {isSubmitting ? 'Sending...' : 'Send Free Quote Request'}
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