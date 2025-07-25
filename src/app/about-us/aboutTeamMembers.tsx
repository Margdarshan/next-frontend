"use client";

import * as React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { teamMembers } from '../../constants/about/team_members';
import Image from 'next/image';
import { StaticImageData } from 'next/image';
import RightArrow from '@/core/assets/img/arrow-right-line.png';

// TeamMember component to display individual team member details
interface TeamMemberProps {
    about: string;
    name: string;
    role: string;
    imageSrc: string | StaticImageData;
    meetLink: string;
}

function TeamMember({ about, name, role, imageSrc, meetLink }: TeamMemberProps) {
  const [isExpanded, setIsExpanded] = React.useState(false);

  return (
    <div className="flex flex-col grow max-md:mt-10">
      <div className="my-2 pb-5 text-[#A7A7A7] h-[100%]">
        {isExpanded || about.length <= 320 ? about : `${about.slice(0, 320)}...`}
        {about.length > 320 && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="ml-2 text-blue-400 hover:underline"
          >
            {isExpanded ? 'Read Less' : 'Read More'}
          </button>
        )}
      </div>

      <div className="flex gap-3.5 text-md leading-7 text-white text-opacity-50">
        <Image
          width={120}
          height={120}
          src={imageSrc}
          alt={name}
          className="shrink-0 max-w-full rounded-[50%] aspect-square w-[120px]"
        />
        <div className="flex-auto my-auto text-white">
          {name} <br />{' '}
          <span className="text-[#A7A7A7] font-light">{role}</span>
        </div>
      </div>

      <hr className="shrink-0 mt-5 h-1 bg-[#A7A7A7] bg-opacity-10" />

      <div className="flex gap-4 self-start mt-5 text-base leading-6 text-white">
        <div className="flex-auto my-auto">Meet {name.split(' ')[0]}</div>
        <a href={meetLink} target="_blank" rel="noreferrer">
          <Image
            width={24}
            height={24}
            src={RightArrow}
            alt="Meet icon"
            className="shrink-0 w-6 aspect-square transition-transform transform hover:translate-x-1.5"
          />
        </a>
      </div>
    </div>
  );
}

TeamMember.propTypes = {
  about: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  meetLink: PropTypes.string.isRequired,
};


export default function Mentors() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };


  return (
    <section className="flex flex-col items-center mt-5 px-4 md:px-20 py-8 bg-[#0f172a] max-md:px-5">
      <div className="w-full max-w-screen-xl text-white text-center text-3xl">Meet the Team!</div>
      <div className="mt-10 w-full max-w-screen-xl px-2">
        <Slider {...settings}>
          {teamMembers.map((member, index) => (
            <div key={index} className="px-2">
              <TeamMember {...member} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
