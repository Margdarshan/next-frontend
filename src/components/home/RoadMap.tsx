"use client";

import React from 'react';
import { TbTargetArrow } from 'react-icons/tb';
import { PiBrainFill } from 'react-icons/pi';
import { HiCheckCircle } from 'react-icons/hi2';

// Constants for future use
// const BRAND_COLOR = '#4E18CD';

// Data configuration
const roadmapSteps = [
  {
    id: 'aim',
    title: 'Aim',
    icon: TbTargetArrow,
    description: 'Help students achieve success by unlocking the secret to winning',
  },
  {
    id: 'plan',
    title: 'Plan',
    icon: PiBrainFill,
    description: 'Provide personalized solutions for JEE Main and JEE Advanced',
  },
  {
    id: 'achieve',
    title: 'Achieve',
    icon: HiCheckCircle,
    description: 'Guide students on the perfect trajectory towards their dream institution',
  },
];

// Reusable Components
interface RoadmapStep {
  id: string;
  title: string;
  icon: React.ComponentType;
  description: string;
}

const RoadmapCard = ({ step, className = "" }: { step: RoadmapStep; className?: string }) => {
  const IconComponent = step.icon;
  
  return (
    <div className={`
        border border-[#4e18cd] sm:max-w-[450px] xl:max-w-none xl:w-[31%] 
        bg-white pt-2 px-3 pb-[14px] rounded-lg flex space-x-3 shadow-lg
        hover:shadow-2xl hover:scale-105 hover:border-[#6b46ff] hover:bg-gradient-to-br hover:from-white hover:to-purple-50
        transform transition-all duration-300 ease-in-out cursor-pointer group
        ${className}
      `}>
      <div>
        <div className="text-[#4E18CD] text-xl mt-2">
          <IconComponent />
        </div>
      </div>
      <div className="flex flex-col space-y-[6px]">
        <p className="text-[#4E18CD] text-[22px] font-medium">
          {step.title}
        </p>
        <p className="text-[#777] text-[14px] leading-relaxed">
          {step.description}
        </p>
      </div>
    </div>
  );
};

const SectionTitle = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`flex justify-center mb-6 ${className}`}>
    <p className="font-semibold text-[17px] text-[#4e18cd] font-inter">
      {children}
    </p>
  </div>
);

const RoadmapGrid = ({ steps, className = "" }: { steps: RoadmapStep[]; className?: string }) => (
  <div className={`flex flex-col items-center space-y-4 xl:space-y-0 xl:flex-row xl:space-x-4 px-2 xl:px-0 ${className}`}>
    {steps.map((step) => (
      <RoadmapCard 
        key={step.id} 
        step={step}
      />
    ))}
  </div>
);

const RoadMap = ({ 
  title = "Perfect Roadmap for you",
  steps = roadmapSteps,
  className = ""
}) => (
  <div className={`mt-16 mb-8 ${className}`}>
    <SectionTitle>{title}</SectionTitle>
    <RoadmapGrid steps={steps} />
  </div>
);

export default RoadMap;

// Export individual components for reuse
export { RoadmapCard, SectionTitle, RoadmapGrid };