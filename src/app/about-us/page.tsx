// app/about/page.js
import React, { Suspense, lazy } from 'react';
// custom CSS
// import './About.css';

const Loading = lazy(() => import('../../core/helpers/pageLoader/Loading'));
// const NewMentors = lazy(() => import('./NewMentors'));
const AboutHeader = lazy(() => import('./aboutHeader'));
const AboutPhotos = lazy(() => import('./aboutPhotos'));
const AboutQuote = lazy(() => import('./aboutQuote'));
const AboutStory = lazy(() => import('./aboutStory'));
const AboutStats = lazy(() => import('./AboutStats'));
const AboutFeatures = lazy(() => import('./aboutFeatures'));
const AboutTeamMembers = lazy(() => import('./aboutTeamMembers'));
const AboutContact = lazy(() => import('./aboutContact'));

// Metadata for the page (App Router way)
export const metadata = {
    title: 'About | Margdarshan',
    metaTitle: 'Personalized Margdarshan JEE Mentorship & College Counseling – Expert Guidance for Success',
    description: 'Margdarshan offers personalized JEE mentorship & college counselling to help students excel in entrance exams and secure admission to top engineering colleges.',
    keywords: 'JEE mentorship, JEE mentoring, JEE guidance, engineering mentorship, college counselling, college admissions guidance, JEE preparation, IIT JEE mentors, engineering college counselling, entrance exam mentorship, IIT JEE guidance, personalized mentoring, JEE counselling, engineering admission counselling',
    alternates: {
        canonical: 'https://marg-darshan.com/about-us',
    },
};

const About = () => {
  return (
    <div>
      <div
        // className="pt-[5%] h-100 -mt-20"
        style={{
          background:
            'linear-gradient(180deg, rgba(78, 24, 205, 0.12) 100%, rgba(78, 24, 205, 0) 100%)',
        }}
      ></div>

      {/* Wrap components with Suspense for lazy loading */}
      <Suspense fallback={<Loading />}>
        <AboutHeader />
        <AboutPhotos />
        <AboutQuote />
        <AboutStory />
        <AboutStats />
        <AboutFeatures />
        <AboutTeamMembers />
        <AboutContact />
      </Suspense>
    </div>
  );
};

export default About;