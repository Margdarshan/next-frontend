"use client";

import React from 'react';
import { IoMdPlayCircle } from 'react-icons/io';

export default function AboutHeader() {
  const handleWatchVideo = () => {
    // Add your video modal logic here
    console.log('Watch video clicked');
  };

  return (
    <div
      className="px-10 lg:px-20 lg:pt-0 pt-8"
      style={{
        background:
          'linear-gradient(180deg, rgba(78, 24, 205, 0.12) 30%, rgba(78, 24, 205, 0) 100%)',
      }}
    >
      <div className="lg:flex lg:gap-[10rem] lg:space-x-1">
        {/* left */}
        <div className="lg:w-[55%]">
          <h2 className="font-manrope font-normal text-[21px] leading-[26px] text-[#4E18CD] mt-20">
            ABOUT US
          </h2>
          <p className="font-manrope font-normal text-[27px] lg:text-[40px] leading-[34px] lg:leading-[40px] text-[#020D2B] mt-4">
            We&apos;re on mission to empower students worldwide
          </p>
        </div>
        
        {/* right */}
        <div className="lg:w-[45%] mt-8 lg:mt-0">
          <p className="font-inter text-[13px] lg:text-[17px] text-[#565656] lg:leading-[25px] leading-[20px] mt-20">
            Nurturing Dreams, Fostering Excellence, and Shaping Futures With
            Margdarshan - A Premier Platform for JEE and NEET Aspirants
          </p>
          
          <div 
            className="flex gap-2 lg:mt-4 mt-6 cursor-pointer hover:opacity-80 transition-opacity"
            onClick={handleWatchVideo}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                handleWatchVideo();
              }
            }}
          >
            <p className="text-[#4E18CD] text-[2.2rem] m-auto">
              <IoMdPlayCircle />
            </p>
            <p className="font-inter lg:text-[17px] text-[14px] text-[#565656] leading-[20px] lg:leading-[25px]">
              Find out what & how our company was founded and grow.{' '}
              <span className="text-[#4E18CD] font-semibold">Watch Video</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}