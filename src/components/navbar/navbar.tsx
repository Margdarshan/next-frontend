"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
// import Image from 'next/image';
import { ChevronDownIcon, Bars3Icon, XMarkIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline';

// Navigation data structure
const navigationData = [
  {
    name: 'Mentorship',
    href: '/mentorship',
    hasDropdown: true,
    dropdownItems: [
      { name: 'IIT-JEE Mentorship', href: '/iit-jee-mentorship', icon: '🎯', description: 'Expert guidance for JEE preparation' },
      { name: 'Personal Guidance', href: '/personal-guidance', icon: '👨‍🏫', description: 'One-on-one mentoring sessions' },
      { name: 'Career Counseling', href: '/career-counseling', icon: '🚀', description: 'Plan your engineering career' }
    ]
  },
  {
    name: 'Engineering',
    href: '/engineering',
    hasDropdown: true,
    dropdownItems: [
      { name: 'Study Material', href: '/study-material', icon: '📚', description: 'Comprehensive books and notes' },
      { name: 'Test Series', href: '/test-series', icon: '📝', description: 'Practice tests and mock exams' },
      { name: 'Video Lectures', href: '/video-lectures', icon: '🎥', description: 'Expert recorded sessions' },
      { name: 'Live Classes', href: '/live-classes', icon: '📡', description: 'Interactive live sessions' },
      { name: 'Previous Papers', href: '/previous-papers', icon: '📋', description: 'Last 10 years question papers' },
      { name: 'Quick Links', href: '/quick-links', icon: '🔗', description: 'Important resources and tools' }
    ]
  },
  {
    name: 'Counselling',
    href: '/counselling',
    hasDropdown: true,
    dropdownItems: [
      { name: 'Academic Counselling', href: '/academic-counselling', icon: '🎓', description: 'Subject and course guidance' },
      { name: 'Career Guidance', href: '/career-guidance', icon: '💼', description: 'Choose the right career path' },
      { name: 'Admission Support', href: '/admission-support', icon: '🏛️', description: 'College admission assistance' },
      { name: 'Scholarship Info', href: '/scholarships', icon: '💰', description: 'Financial aid opportunities' }
    ]
  },
  {
    name: 'College Predictor',
    href: '/college-predictor',
    hasDropdown: true,
    dropdownItems: [
      { name: 'JEE Main Predictor', href: '/jee-main-predictor', icon: '🎯', description: 'Predict your JEE Main colleges' },
      { name: 'JEE Advanced Predictor', href: '/jee-advanced-predictor', icon: '🏆', description: 'IIT admission chances' },
      { name: 'NEET Predictor', href: '/neet-predictor', icon: '🏥', description: 'Medical college predictions' },
      { name: 'Rank Predictor', href: '/rank-predictor', icon: '📊', description: 'Estimate your expected rank' }
    ]
  }
];

// Dropdown Component
interface DropdownItem {
  name: string;
  href: string;
  icon?: string;
  description?: string;
}

interface DropdownProps {
  items: DropdownItem[];
  isOpen: boolean;
  onClose: () => void;
}

const Dropdown = ({ items, isOpen, onClose }: DropdownProps) => {
  if (!isOpen) return null;

  return (
    <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-2xl border border-gray-100 py-4 z-50 transform transition-all duration-300 ease-out">
      <div className="px-4 py-2 border-b border-gray-100 mb-2">
        <h3 className="text-sm font-semibold text-purple-600 uppercase tracking-wide">Quick Access</h3>
      </div>
      <div className="grid gap-1">
        {items.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className="group flex items-center px-6 py-4 text-gray-700 hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 hover:text-purple-700 transition-all duration-300 transform hover:translate-x-1"
            onClick={onClose}
          >
            {item.icon && (
              <span className="mr-4 text-2xl group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </span>
            )}
            <div className="flex-1">
              <span className="text-base font-medium block">{item.name}</span>
              {item.description && (
                <span className="text-sm text-gray-500 block mt-1">{item.description}</span>
              )}
            </div>
            <div className="ml-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>
        ))}
      </div>
      <div className="px-6 py-3 mt-3 border-t border-gray-100">
        <Link 
          href="/all-resources" 
          className="text-sm text-purple-600 hover:text-purple-800 font-medium flex items-center group"
        >
          View All Resources
          <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

// Desktop Navigation Item
interface DesktopNavItemProps {
  item: NavItem;
}

const DesktopNavItem = ({ item }: DesktopNavItemProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 150);
  };

  return (
    <div 
      className="relative group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Invisible bridge to prevent dropdown collapse */}
      {isDropdownOpen && item.hasDropdown && (
        <div className="absolute top-full left-0 w-80 h-2 bg-transparent" />
      )}
      
      <Link
        href={item.href}
        className="relative flex items-center px-6 py-3 text-gray-700 hover:text-purple-600 transition-all duration-300 font-medium text-base group overflow-hidden rounded-lg hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50"
      >
        <span className="relative z-10 flex items-center">
          {item.name}
          {item.hasDropdown && (
            <ChevronDownIcon 
              className={`ml-2 h-4 w-4 transition-all duration-300 ${
                isDropdownOpen ? 'rotate-180 text-purple-600' : 'group-hover:text-purple-600'
              }`} 
            />
          )}
        </span>
        
        {/* Animated underline */}
        <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-blue-500 group-hover:w-full transition-all duration-300 ease-out"></div>
        
        {/* Hover background animation */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 to-blue-500/5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-lg"></div>
      </Link>
      
      {item.hasDropdown && (
        <Dropdown 
            items={item.dropdownItems || []} 
            isOpen={isDropdownOpen}
            onClose={() => setIsDropdownOpen(false)}
        />
      )}
    </div>
  );
};

// Mobile Navigation Item
interface NavItem {
  name: string;
  href: string;
  hasDropdown?: boolean;
  dropdownItems?: { name: string; href: string; icon?: string; description?: string }[];
}

const MobileNavItem = ({ item, onClose }: { item: NavItem; onClose: () => void }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    if (item.hasDropdown) {
      setIsExpanded(!isExpanded);
    } else {
      onClose();
    }
  };

  return (
    <div className="border-b border-gray-100 last:border-b-0">
      <div
        className="flex items-center justify-between px-6 py-5 text-gray-700 hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 hover:text-purple-700 cursor-pointer transition-all duration-300 group"
        onClick={toggleExpanded}
      >
        <Link href={item.href} className="font-medium text-lg group-hover:text-purple-700" onClick={onClose}>
          {item.name}
        </Link>
        {item.hasDropdown && (
          <div className="flex items-center space-x-2">
            <span className="text-xs text-gray-500 group-hover:text-purple-500">
              {(item.dropdownItems ?? []).length} items
            </span>
            <ChevronDownIcon 
              className={`h-5 w-5 transition-all duration-300 group-hover:text-purple-600 ${
                isExpanded ? 'rotate-180 text-purple-600' : ''
              }`} 
            />
          </div>
        )}
      </div>
      
      {item.hasDropdown && isExpanded && (
        <div className="bg-gradient-to-r from-gray-50 to-purple-50 py-3 animate-in slide-in-from-top duration-300">
          {(item.dropdownItems ?? []).map((subItem, index) => (
            <Link
              key={index}
              href={subItem.href}
              className="flex items-center px-8 py-4 text-gray-600 hover:text-purple-700 hover:bg-white/50 transition-all duration-300 group border-l-4 border-transparent hover:border-purple-400"
              onClick={onClose}
            >
              {subItem.icon && (
                <span className="mr-4 text-xl group-hover:scale-110 transition-transform duration-300">
                  {subItem.icon}
                </span>
              )}
              <div className="flex-1">
                <span className="block font-medium">{subItem.name}</span>
                {subItem.description && (
                  <span className="block text-sm text-gray-500 mt-1">{subItem.description}</span>
                )}
              </div>
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

// Main Navbar Component
const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-xl shadow-xl border-b border-purple-100' 
          : 'bg-white shadow-sm'
      }`}>
        <div className="max-w-8xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center group">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 via-blue-500 to-purple-700 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-purple-300/50">
                  <span className="text-white font-bold text-lg">MD</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                    MargDarshan
                  </span>
                  <span className="text-xs text-gray-500 -mt-1">Your Success Partner</span>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-2">
              {navigationData.map((item, index) => (
                <DesktopNavItem key={index} item={item} />
              ))}
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-4">
              {/* Chat Support Button */}
              <button className="relative p-3 text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded-xl transition-all duration-300 group">
                <ChatBubbleLeftRightIcon className="h-6 w-6" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white group-hover:scale-110 transition-transform duration-300"></div>
              </button>

              {/* Notification Button */}
              <button className="relative p-3 text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded-xl transition-all duration-300 group">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5zM10.032 14H5a2 2 0 01-2-2V7a2 2 0 012-2h14a2 2 0 012 2v5a2 2 0 01-2 2h-1.032" />
                </svg>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-400 rounded-full border-2 border-white animate-pulse"></div>
              </button>

              {/* Sign In Button - Hidden on mobile */}
              <Link
                href="/signin"
                className="hidden sm:inline-flex items-center px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all duration-300 font-medium shadow-lg hover:shadow-xl hover:scale-105 transform"
              >
                <span>Sign In</span>
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                </svg>
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={toggleMobileMenu}
                className="lg:hidden p-3 text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded-xl transition-all duration-300 relative overflow-hidden group"
              >
                <div className="relative z-10">
                  {isMobileMenuOpen ? (
                    <XMarkIcon className="h-6 w-6 transform group-hover:rotate-90 transition-transform duration-300" />
                  ) : (
                    <Bars3Icon className="h-6 w-6 transform group-hover:scale-110 transition-transform duration-300" />
                  )}
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-500 ease-in-out ${
          isMobileMenuOpen 
            ? 'max-h-screen opacity-100 translate-y-0' 
            : 'max-h-0 opacity-0 -translate-y-4 overflow-hidden'
        }`}>
          <div className="bg-white border-t border-gray-200 shadow-2xl backdrop-blur-xl">
            <div className="px-6 py-4">
              <div className="text-sm font-semibold text-purple-600 uppercase tracking-wide mb-4">Navigation Menu</div>
              {navigationData.map((item, index) => (
                <MobileNavItem 
                  key={index} 
                  item={item} 
                  onClose={() => setIsMobileMenuOpen(false)}
                />
              ))}
            </div>
            
            {/* Mobile Sign In */}
            <div className="px-6 py-6 border-t border-gray-100 bg-gradient-to-r from-purple-50 to-blue-50">
              <Link
                href="/signin"
                className="block w-full text-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all duration-300 font-medium shadow-lg transform hover:scale-105"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="flex items-center justify-center">
                  Sign In
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013 3v1" />
                  </svg>
                </span>
              </Link>
              
              {/* Mobile Contact Info */}
              <div className="mt-4 text-center">
                <p className="text-sm text-gray-600">Need help? Contact support</p>
                <div className="flex justify-center space-x-4 mt-2">
                  <button className="text-purple-600 hover:text-purple-800 text-sm font-medium">Chat</button>
                  <button className="text-purple-600 hover:text-purple-800 text-sm font-medium">Call</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer to prevent content overlap */}
      <div className="h-20"></div>
    </>
  );
};

export default Navbar;