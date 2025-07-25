'use client';

import { useState } from 'react';
import { GetInTouchAPIs } from '@/core/services/getInTouch.tsx/getInTouch';

type FormData = {
    fname: string;
    lname: string;
    email: string;
    phone: string;
    message: string;
    agreeToPolicy: boolean;
    source: string,
};

type FormErrors = Partial<Record<keyof FormData, string>>;

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    fname: '',
    lname: '',
    email: '',
    phone: '',
    message: '',
    agreeToPolicy: false,
    source: 'about-us',
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { createAbout } = GetInTouchAPIs();

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors: FormErrors = {};

    if (!formData.fname.trim()) {
      newErrors.fname = 'First name is required';
    }

    if (!formData.lname.trim()) {
      newErrors.lname = 'Last name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }

    if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = 'Phone number must be 10 digits';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    if (!formData.agreeToPolicy) {
      newErrors.agreeToPolicy = 'You must agree to the privacy policy';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);

    try {
      // Call the API to create the about entry
      const response = createAbout(formData);

      console.log('Form submitted successfully:', response);
      

      if (!response) {
        throw new Error('Failed to send message');
      }

      setIsSubmitted(true);
      setFormData({
        fname: '',
        lname: '',
        email: '',
        phone: '',
        message: '',
        agreeToPolicy: false,
        source: 'about-us',
      });
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="max-w-4xl mx-auto p-8 bg-white rounded-lg">
        <div className="text-center">
          <div className="text-green-600 text-5xl mb-4">✓</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Thank You!</h2>
          <p className="text-gray-600 mb-6">Your message has been sent successfully. We&apos;ll get back to you soon.</p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="bg-purple-600 text-white px-6 py-2 rounded-md hover:bg-purple-700 transition duration-200"
          >
            Send Another Message
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white rounded-lg">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="text-purple-600 text-sm font-medium mb-2">Newsletter</div>
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Get in touch</h1>
        <p className="text-gray-600">We&apos;d love to hear from you. Please fill out this form</p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* First Name and Last Name */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="fname" className="block text-sm font-medium text-gray-700 mb-2">
              First Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="fname"
              name="fname"
              value={formData.fname}
              onChange={handleInputChange}
              placeholder="First name"
              className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200 ${
                errors.fname ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.fname && <p className="mt-1 text-sm text-red-500">{errors.fname}</p>}
          </div>

          <div>
            <label htmlFor="lname" className="block text-sm font-medium text-gray-700 mb-2">
              Last Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="lname"
              name="lname"
              value={formData.lname}
              onChange={handleInputChange}
              placeholder="Last name"
              className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200 ${
                errors.lname ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.lname && <p className="mt-1 text-sm text-red-500">{errors.lname}</p>}
          </div>
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="you@email.com"
            className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200 ${
              errors.email ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
            Phone <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="9999888877"
            className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200 ${
              errors.phone ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Your message here..."
            rows="5"
            className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200 resize-vertical ${
              errors.message ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
        </div>

        {/* Privacy Policy Checkbox */}
        <div className="flex justify-center">
          <label className="flex items-start space-x-3">
            <input
              type="checkbox"
              name="agreeToPolicy"
              checked={formData.agreeToPolicy}
              onChange={handleInputChange}
              className="mt-1 h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
            />
            <span className={`text-sm ${errors.agreeToPolicy ? 'text-red-500' : 'text-gray-600'}`}>
              You agree to our friendly{' '}
              <a href="/policies/privacy-policy/" className="text-purple-600 hover:text-purple-700 underline">
                Privacy policy
              </a>
            </span>
          </label>
          {errors.agreeToPolicy && <p className="mt-1 text-sm text-red-500">{errors.agreeToPolicy}</p>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-purple-600 text-white py-3 px-6 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition duration-200 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  );
}