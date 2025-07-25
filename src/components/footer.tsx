"use client";

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { IoCall } from "react-icons/io5";
import { IoMdMailUnread } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import { scrollToTop } from '@/core/helpers/scrollToTop';
import marglogo from '../../public/marglogo.svg';
import PropTypes from 'prop-types';

const address = 'Vijay Nagar Square, Indore, Madhya Pradesh, 452010';
// Encode special characters in the address for proper URL formatting
const encodedAddress = encodeURIComponent(address);

const ContactInfo = () => {
  return (
    <div className="flex flex-col md:w-[26%] max-lg:ml-0 max-lg:w-full">
      <div className="flex flex-col grow text-base text-neutral-800 max-lg:mt-10">
        <Link href="/" onClick={scrollToTop}>
          <Image
            src={marglogo}
            alt="Margdarshan logo"
            className="max-w-full aspect-[5.26] lg:w-[215px] w-[150px]"
            width={215}
            height={41}
            priority
          />
        </Link>
        <h2 className="mt-10 md:mt-24 text-xl font-semibold text-violet-800 max-lg:mt-10">
          Get In Touch
        </h2>
        <div className="flex gap-2.5 mt-5 tracking-wide">
          <div className='text-violet-800 pt-[2px]'><IoCall size={24}/></div>
          <div>+91 9522225177</div>
        </div>
        <div className="flex gap-2.5 mt-5 tracking-wide whitespace-nowrap">
          <div className='text-violet-800 pt-[2px]'><IoMdMailUnread size={24}/></div>
          <div>
            <a href="mailto:support@marg-darshan.com">
              support@marg-darshan.com
            </a>
          </div>
        </div>
        <div className="flex gap-2.5 mt-5 xl:mt-8 tracking-wide">
          <div className='text-violet-800 pt-[2px]'><IoLocationSharp size={24}/></div>
          <div>
            <a href={`https://www.google.com/maps/place/${encodedAddress}`} target="_blank" rel="noopener noreferrer">
              {address}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

interface FooterSectionProps {
  title: string;
  items: React.ReactNode[];
}

const FooterSection: React.FC<FooterSectionProps> = ({ title, items }) => {
  return (
    <div className="flex flex-col text-base text-neutral-800 max-lg:mt-10">
      <h3 className="text-xl font-semibold text-violet-800">{title}</h3>
      {items.map((item, index) => (
        <div key={index} className="mt-3 xl:mt-5">
          {item}
        </div>
      ))}
    </div>
  );
};

FooterSection.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.node),
};

const Footer = () => {
  const sections = [
    {
      title: 'Top Exam',
      items: [
        <Link key={1} href="/commingsoon" onClick={scrollToTop}>
          JEE Main 2025
        </Link>,
        <Link key={2} href="/commingsoon" onClick={scrollToTop}>
          GATE 2025
        </Link>,
      ],
    },
    {
      title: 'Predictors',
      items: [
        <Link key={3} href="/jee-main/collegepredictor" onClick={scrollToTop}>
          JEE Main College Predictor
        </Link>,
        <Link key={4} href="/commingsoon" onClick={scrollToTop}>
          JEE Main Rank Predictor
        </Link>,
        <Link key={5} href="/commingsoon" onClick={scrollToTop}>
          JEE Advanced Rank Predictor
        </Link>,
      ],
    },
    {
      title: 'Resources',
      items: [
        <Link key={6} href="/commingsoon" onClick={scrollToTop}>
          Q&A
        </Link>,
        <Link key={7} href="/commingsoon" onClick={scrollToTop}>
          JEE Main Free Mock Test
        </Link>,
        <Link key={8} href="/commingsoon" onClick={scrollToTop}>
          Zero Cost Test Series JEE
        </Link>,
        <Link key={9} href="/blogs" onClick={scrollToTop}>
          Blog
        </Link>,
        <Link key={10} href="/commingsoon" onClick={scrollToTop}>
          Previous Year Papers
        </Link>,
        <Link key={11} href="/commingsoon" onClick={scrollToTop}>
          Notes
        </Link>,
      ],
    },
    {
      title: 'Other Links',
      items: [
        <Link key={12} href="/about-us" onClick={scrollToTop}>
          About Margdarshan
        </Link>,
        <Link key={13} href="/about#contact" onClick={scrollToTop}>
          Contact Us
        </Link>,
        <Link key={14} href="/terms-and-conditions" target="_blank" rel="noopener noreferrer" onClick={scrollToTop}>
          Terms & Conditions
        </Link>,
        <Link key={15} href="/career-page" onClick={scrollToTop}>
          Careers
        </Link>,
        <Link key={16} href="/refund-cancel-policy" target="_blank" rel="noopener noreferrer" onClick={scrollToTop}>
          Cancellation/Refund Policy
        </Link>,
        <Link key={17} href="/privacy-policy" target="_blank" rel="noopener noreferrer" onClick={scrollToTop}>
          Privacy Policy
        </Link>,
        <Link key={18} href="/shipping-policy" target="_blank" rel="noopener noreferrer">
          Shipping Policy
        </Link>,
      ],
    },
  ];

  return (
    <footer className="flex flex-col items-center mx-auto px-7 xl:px-20 pt-10 pb-5 bg-violet-50 ">
      <div className="w-full max-lg:max-w-full">
        <div className="flex lg:gap-5 max-lg:flex-col max-lg:gap-0">
          <ContactInfo />
          <div className="flex flex-col lg:ml-5 lg:w-[74%] max-lg:ml-0 max-lg:w-full">
            <div className="self-stretch my-auto max-lg:mt-10 max-lg:max-w-full">
              <div className="flex lg:gap-5 max-lg:flex-col max-lg:gap-0">
                {sections.map((section, index) => (
                  <div
                    key={index}
                    className={`flex flex-col ${index === 0
                      ? 'lg:w-[16%]'
                      : index === 1
                        ? 'lg:ml-5 lg:w-[32%]'
                        : index === 2
                          ? 'lg:ml-5 lg:w-[30%]'
                          : 'lg:ml-5 lg:w-[22%]'
                      } max-lg:ml-0 max-lg:w-full`}
                  >
                    <FooterSection
                      title={section.title}
                      items={section.items}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="shrink-0 mt-14 max-w-full h-0.5 bg-neutral-600 bg-opacity-60 w-full max-lg:mt-10" />
      <div className="flex gap-5 justify-between mt-5 w-full max-lg:flex-wrap max-lg:max-w-full">
        <div className="self-start text-base font-medium leading-7 text-neutral-800">
          © 2025 Margdarshan, All Rights Reserved.
        </div>
        <div className="flex gap-5 justify-center items-center">
          <a
            href="https://www.facebook.com/Margdarshan89"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookSquare className="hover:text-violet-800" size={28}/>
          </a>
          <a
            href="https://twitter.com/Margdarshan89"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaXTwitter className="hover:text-violet-800" size={28}/>
          </a>
          <a
            href="https://www.linkedin.com/company/margdarshan89"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="hover:text-violet-800" size={28}/>
          </a>
          <a
            href="https://www.instagram.com/margdarshan89"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillInstagram className="hover:text-violet-800" size={28}/>
          </a>
          <a
            href="https://www.youtube.com/c/Margdarshan89"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube className="hover:text-violet-800" size={28}/>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;