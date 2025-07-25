"use client";

import React from 'react';

export default function AboutFeatures() {
  return (
    <div className="px-10 lg:px-20">
      <div className="mt-10 lg:flex">
        <div>
          <h6 className=" md:justify-center font-manrope font-medium text-[25px] text-[#4E18CD] leading-7">
            World-Class Learning for, Anyone, Anywhere
          </h6>
          <p className="font-inter lg:text-[17px] text-[13px] leading-5 text-[#565656] mt-5">
            Anywhere: Where knowledge knows no boundaries, and excellence is
            within reach—unleashing the potential of every learner.Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          </p>
        </div>

        {/* cards */}
        <div className="lg:flex lg:flex-col items-end lg:mt-0 mt-8">
          {/* cards 1st row */}
          <div className="lg:flex">
            {/* 1st card */}
            <div className="bg-[#020D2B] lg:w-[15rem] lg:h-[13rem] xl:w-[17rem] xl:h-[14rem] 2xl:w-[20rem] 2xl:h-[16rem] w-[90%] p-8">
              <h5 className="font-inter font-normal text-[1rem] leading-6 text-[#FFFFFF] mt-2">
                Curriculum Based on industry Needs
              </h5>
              <p className="font-inter text-[13px] leading-4 text-[#FFFFFF] mt-3">
                Save time and money! The Margdarshan Curriculumn is made to be
                easier to understand and in line with industry needs.
              </p>
            </div>
            {/* 2nd card */}
            <div className="bg-[#CAD8FF] lg:w-[15rem] lg:h-[13rem] xl:w-[17rem] xl:h-[14rem] 2xl:w-[20rem] 2xl:h-[16rem] w-[90%] p-8">
              <h5 className="font-inter font-normal text-[1rem] leading-6 text-[#020D2B] mt-2">
                “Blended-Learning “ Method
              </h5>
              <p className="font-inter text-[13px] leading-4 text-[#020D2B] mt-3">
                Save time and money! The Margdarshan Curriculumn is made to be
                easier to understand and in line with industry needs.
              </p>
            </div>
          </div>

          {/* cards 2nd row */}
          <div className="lg:flex">
            {/* 3rd card */}
            <div className="bg-[#020D2B] lg:w-[15rem] lg:h-[13rem] xl:w-[17rem] xl:h-[14rem] 2xl:w-[20rem] 2xl:h-[16rem] w-[90%] p-8">
              <h5 className="font-inter font-normal text-[1rem] leading-6 text-[#FFFFFF] mt-2">
                Certification
              </h5>
              <p className="font-inter text-[13px] leading-4 text-[#FFFFFF] mt-3">
                You will get a certificate that can be used as a certification
                during job hunting.
              </p>
            </div>
            {/* 4th card */}
            <div className="bg-[#CAD8FF] lg:w-[15rem] lg:h-[13rem] xl:w-[17rem] xl:h-[14rem] 2xl:w-[20rem] 2xl:h-[16rem] w-[90%] p-8">
              <h5 className="font-inter font-normal text-[1rem] leading-6 text-[#020D2B] mt-2">
                Rating “Auto-grading“
              </h5>
              <p className="font-inter text-[13px] leading-4 text-[#020D2B] mt-3">
                Save time and money! The Margdarshan Curriculumn is made to be
                easier to understand and in line with industry needs.
              </p>
            </div>
            {/* 5th card */}
            <div className="bg-[#020D2B] lg:w-[15rem] lg:h-[13rem] xl:w-[17rem] xl:h-[14rem] 2xl:w-[20rem] 2xl:h-[16rem] w-[90%] p-8">
              <h5 className="font-inter font-normal text-[1rem] leading-6 text-[#FFFFFF] mt-2">
                Certification
              </h5>
              <p className="font-inter text-[13px] leading-4 text-[#FFFFFF] mt-3">
                You will get a certificate that can be used as a certification
                during job hunting.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
