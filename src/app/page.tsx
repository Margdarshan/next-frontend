"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import RoadMap from '../components/home/RoadMap';

// Constants
// const BRAND_COLOR = '#4E18CD';

// Data arrays
const testimonialAvatars = [
  "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80",
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
];

const actionButtons: { id: string; text: string; href: string; variant: "primary" | "secondary"; className: string }[] = [
  {
    id: 'mentorship',
    text: 'Mentorship',
    href: '/iit-jee-mentorship',
    variant: 'primary',
    className: 'mr-8 max-w-56'
  },
  {
    id: 'predictor',
    text: 'College Predictor',
    href: '/jee-main/collegepredictor',
    variant: 'secondary',
    className: ''
  }
];

// Reusable Components
const StarIcon = ({ className = "" }) => (
  <svg
    className={`w-6 h-6 xl:w-4 xl:h-4 ms-1 ${className}`}
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 22 20"
  >
    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
  </svg>
);

const StarRating = ({ rating = 5, className = "" }) => (
  <div className={`flex items-center justify-center lg:justify-start ${className}`}>
    {[...Array(rating)].map((_, index) => (
      <StarIcon key={`star-${index}`} className="text-[#FBB040]" />
    ))}
  </div>
);

const AvatarGroup = ({ avatars, className = "" }: { avatars: string[]; className?: string }) => (
  <div className={`flex -space-x-2 overflow-hidden ${className}`}>
    {avatars.map((src, index) => (
      <Image
        key={index}
        className="inline-block h-12 w-12 xl:h-8 xl:w-8 rounded-full ring-2 ring-white"
        src={src}
        alt={`Student testimonial ${index + 1}`}
        width={48} // Adjust width as per your design
        height={48} // Adjust height as per your design
      />
    ))}
  </div>
);

const ActionButton = ({ text, href, variant, className = "", mobileOrder = 0 }: { text: string; href: string; variant: "primary" | "secondary"; className?: string; mobileOrder?: number }) => {
  const baseClasses = "flex justify-center items-center py-4 text-center rounded-xl px-8 font-manrope whitespace-nowrap transform transition-all duration-300 ease-in-out hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-purple-200 shadow-md hover:shadow-lg";
  const variantClasses = {
    primary: "border border-[#4E18CD] bg-[#4E18CD] text-white hover:bg-[#6b46ff] hover:border-[#6b46ff] hover:shadow-purple-300/50 active:bg-[#3d12a0]",
    secondary: "border-2 border-[#4E18CD] text-[#4E18CD] hover:bg-[#4E18CD] hover:text-white hover:shadow-purple-200/50 active:bg-[#6b46ff] active:border-[#6b46ff]"
  };
  
  const mobileClasses = mobileOrder === 1 ? "mt-4 md:mt-0" : "";
  const maxHeightClass = "max-h-16";
  
  return (
    <Link
      className={`${baseClasses} ${variantClasses[variant]} ${maxHeightClass} ${className} ${mobileClasses}`}
      href={href}
    >
      {text}
    </Link>
  );
};

const BackgroundBlob = ({ className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 319 374"
    fill="none"
    className={className}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M188.333 0.1478C230.431 2.90608 255.83 44.4097 281.392 77.4628C302.465 104.71 318.718 134.853 318.997 169.101C319.278 203.639 301.661 233.039 282.896 262.219C255.753 304.429 238.14 362.777 188.333 372.292C135.617 382.364 84.2964 346.24 48.2432 307.051C13.8773 269.696 -5.54834 219.039 1.40039 169.101C7.67701 123.993 47.9449 95.1854 82.0076 64.399C113.855 35.6148 145.2 -2.6783 188.333 0.1478Z"
      fill="#4E18CD"
    />
  </svg>
);

const SocialProof = () => (
  <div className="flex flex-col lg:flex-row items-center justify-center xl:justify-start space-x-3">
    <AvatarGroup avatars={testimonialAvatars} />
    <div className="flex flex-col space-y-2">
      <StarRating rating={5} />
      <p className="text-[13px] xl:text-xs pl-1">
        Trusted by 100K Students
      </p>
    </div>
  </div>
);

const HeroContent = () => (
  <div className="xl:w-[50%] flex flex-col justify-between">
    <div className="flex flex-col space-y-4 xl:space-y-8 lg:pt-12">
      {/* Main Heading */}
      <div className="text-start bg-[#4E18CD] bg-clip-text text-transparent text-2xl xl:text-4xl font-medium flex flex-col space-y-4">
        <div className="text-center xl:text-start xl:w-[90%] leading-7 xl:leading-[60px]">
          Explore colleges & conquer exams with confidence!
        </div>
      </div>
      
      {/* Description */}
      <div>
        <p className="hidden xl:text-start xl:block text-[#454545] font-inter text-lg xl:text-base">
          Master the IIT-JEE with comprehensive study materials, structured
          practice, and strategic revision to ace one of India&apos;s toughest
          engineering entrance exams
        </p>
      </div>
      
      {/* Social Proof */}
      <SocialProof />
    </div>
    
    {/* Desktop Action Buttons */}
    <div className="hidden xl:flex space-x-2">
      {actionButtons.map((button) => (
        <ActionButton
          key={button.id}
          text={button.text}
          href={button.href}
          variant={button.variant}
          className={button.className}
        />
      ))}
    </div>
  </div>
);

const HeroImage = () => (
  <div className="hidden lg:flex relative justify-center xl:justify-end xl:w-[50%]">
    {/* Desktop Background Blob */}
    <div className="hidden xl:block absolute top-[55%] left-[65%] transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px]">
      <BackgroundBlob className="w-full h-full" />
    </div>
    
    {/* Mobile Background Blob */}
    <div className="xl:hidden absolute inset-0 flex justify-center items-center z-0">
      <BackgroundBlob className="w-[300px] h-[300px] mt-24" />
    </div>
    
    {/* Hero Image */}
    <Image
      src="https://marg-darshan.com/website_images/boywithBook.png"
      className="relative z-10 w-[320px] h-[320px] xl:w-[470px] xl:h-[470px] mt-20 xl:mt-0"
      alt="Boy with books"
      width={470}
      height={470}
      priority
    />
  </div>
);

const MobileActionButtons = () => {
  // Create reversed array without mutating original
  const mobileButtonOrder = [...actionButtons].reverse();
  
  return (
    <div className="xl:hidden flex flex-col md:flex-row md:justify-center md:space-x-4 items-center mt-10">
      {mobileButtonOrder.map((button, index) => (
        <ActionButton
          key={button.id}
          text={button.text}
          href={button.href}
          variant={button.variant}
          className="w-fit"
          mobileOrder={index}
        />
      ))}
    </div>
  );
};

const HomeComponent = () => {
  return (
    <div className="m-0 w-full overflow-x-hidden xl:px-24 bg-gradient-to-br from-violet-100 via-purple-50 to-violet-200 max-w-full px-4 pt-4 pb-6">
      <div className="flex flex-col xl:flex-row mt-[40px] px-12 pt-[4px]">
        <HeroContent />
        <HeroImage />
        <MobileActionButtons />
      </div>
      
      <RoadMap />
    </div>
  );
};

export default HomeComponent;