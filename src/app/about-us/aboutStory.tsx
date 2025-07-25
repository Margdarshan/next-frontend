"use client";

import React from 'react';

// Configuration object
const theme = {
  colors: {
    primary: '#4E18CD',
    textSecondary: '#565656',
    border: '#757575'
  },
  fonts: {
    heading: 'font-manrope font-medium',
    body: 'font-inter'
  }
};

// Content data
const content = {
  foundingStory: {
    title: "Our Founding Story",
    text: "Margdarshan was initiated with the intent of guiding aspirants towards their destiny. We specialize in advising and mentoring individuals gearing up for entrance exams such as JEE and NEET. For over two years now, we've been dedicated to assisting candidates in realizing their aspirations. Our primary goal revolves around offering mentorship, equipping them with resources and tools, and fostering a supportive community. Initially conceived as a platform for educational resources, our vision has expanded to encompass career counselling, aiming to enlighten candidates about aspects of their career path they may not yet be aware of."
  },
  vision: {
    title: "Our Vision",
    text: "Our vision is to empower every aspirant to achieve their dreams."
  },
  mission: {
    title: "Our Mission", 
    text: "We aspire to achieve our vision by delivering personalized support and a deep understanding of competitive exams, ensuring that each student receives the guidance they need to excel."
  }
};

export default function AboutStory() {
  return (
    <section className="px-10 lg:px-20">
      <div className="mt-8 space-y-8">
        {/* Founding Story Section */}
        <StorySection 
          title={content.foundingStory.title}
          text={content.foundingStory.text}
          titleSize="xl"
        />

        {/* Vision and Mission Section */}
        <div className="lg:flex lg:gap-8">
          <Card {...content.vision} />
          <Card {...content.mission} className="mt-10 lg:mt-0" />
        </div>

        {/* Divider */}
        <hr className={`border-t border-[${theme.colors.border}]`} />
      </div>
    </section>
  );
}

// Reusable Story Section Component
interface StorySectionProps {
  title: string;
  text: string;
  titleSize?: string;
}

function StorySection({ title, text, titleSize = "2xl" }: StorySectionProps) {
  return (
    <div className="lg:flex lg:gap-8">
      <h4 className={`
        ${theme.fonts.heading} 
        text-${titleSize} 
        text-[${theme.colors.primary}] 
        lg:w-1/2 
        leading-9
      `}>
        {title}
      </h4>
      <p className={`
        ${theme.fonts.body} 
        text-[17px] 
        leading-6 
        text-[${theme.colors.textSecondary}] 
        lg:w-1/2 
        mt-2 lg:mt-0
      `}>
        {text}
      </p>
    </div>
  );
}

// Reusable Card Component
interface CardProps {
  title: string;
  text: string;
  className?: string;
}

function Card({ title, text, className = "" }: CardProps) {
  return (
    <div className={`lg:w-1/2 ${className}`}>
      <h4 className={`
        ${theme.fonts.heading} 
        text-2xl 
        leading-6 
        text-[${theme.colors.primary}]
      `}>
        {title}
      </h4>
      <p className={`
        ${theme.fonts.body} 
        text-[17px] 
        leading-6 
        text-[${theme.colors.textSecondary}] 
        mt-3
      `}>
        {text}
      </p>
    </div>
  );
}