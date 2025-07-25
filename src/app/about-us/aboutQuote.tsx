"use client";

import React from 'react';
import { ImQuotesLeft } from 'react-icons/im';

export default function AboutQuote() {
  return (
    <div className="px-10 lg:px-20">
      <div className="mt-16 lg:w-[50%] m-auto text-center">
        <p className="text-[2.3rem] text-[#4E18CD] ml-[45%] mt-[10%] lg:mt-[5%] ">
          <ImQuotesLeft />
        </p>
        <p className="font-manrope font-normal lg:text-[1.5rem] text-[21px] lg:leading-7 leading-6 text-[#020D2B] text-center mt-4 ">
          &quot;Learn to light a candle in the darkest moments <br /> of someone&apos; le
          the Eight that helps others see; <br /> it is what gives life its
          deepest significance.&quot;
        </p>
        <p className="font-inter font-semibold text-[#4E18CD] text-[15px] leading-4 tracking-wider mt-4">
          -Roy T. Bennett, The Light in the Heart
        </p>
      </div>
      {/* line */}
      <div className="border-t border-[#757575] mx-auto mt-8"></div>
    </div>
  );
}
