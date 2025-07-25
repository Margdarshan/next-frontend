"use client";

import React from 'react';
import Image from 'next/image';
// react-slick
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// images
import image1 from '../../core/assets/img/about/img1.jpg';
import image2 from '../../core/assets/img/about/img2.jpg';
import image3 from '../../core/assets/img/about/img3.jpg';

export default function AboutPhotos() {
  // images
  const images = [
    {
      img: image1,
      src: 'image1',
      alt: 'About Margdarshan - Image 1',
    },
    {
      img: image2,
      src: 'image2',
      alt: 'About Margdarshan - Image 2',
    },
    {
      img: image3,
      src: 'image3',
      alt: 'About Margdarshan - Image 3',
    },
  ];

  // slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  return (
    <div className="px-10 lg:px-20">
      <div className="lg:flex lg:justify-evenly mt-16">
        {/* small screen */}
        <div className="lg:hidden">
          <Slider {...settings}>
            {images.map((item, index) => (
              <div key={index} className="p-2">
                <Image
                  className="w-full h-[14rem] md:h-[25rem] rounded-[2.5rem] object-cover"
                  src={item.img}
                  alt={item.alt}
                  width={800}
                  height={400}
                  priority={index === 0} // Prioritize loading first image
                  placeholder="blur"
                />
              </div>
            ))}
          </Slider>
        </div>

        {/* large screen */}
        <div className="hidden lg:flex lg:justify-between w-full">
          {images.map((item, index) => (
            <div key={index} className="lg:w-[31%] lg:mr-10 last:mr-0 aspect-[4/3]">
              <Image
                className="w-full h-full rounded-[13px] object-cover"
                src={item.img}
                alt={item.alt}
                width={400}
                height={300}
                priority={true} // All images visible on large screens
                placeholder="blur"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}