import React from 'react';
import type { Metadata } from "next";

// Metadata for the page
export const metadata: Metadata = {
    title: "Shipping Policy | Margdarshan",
    description: "Margdarshan's Shipping Policy outlines how we collect, use, and protect your personal information.",
    keywords: "Margdarshan, Shipping Policy, delivery policy, Margdarshan",
    alternates: {
        canonical: 'https://marg-darshan.com/shipping',
    },
};


const Shipping = () => {
  return (
    <>
      <div className="bg-white p-10 pt-10 md:p-20 md:pt-10  text-gray-800">
        <div className="mt-2 md:mt-0 md:text-right">
          <p className="text-gray-400 pb-5 pt-0 hidden md:block md:pt-5 text-xl">
            Effective Date: 24/03/2025
          </p>
        </div>
        <div className="pb-10 flex flex-col md:flex-row justify-between items-start md:items-center">
          <h1 className="mt-5 md:mt-0 text-4xl font-bold">
            Session Delivery Policy
          </h1>
          <div className="mt-2 md:mt-0 md:text-right">
            <p className="text-[#5926D0] text-2xl">
              Margdarshan Mentorship Program - Session Delivery Policy
            </p>
            <p className="text-gray-400 pt-5 md:hidden md:pt-5 text-xl">
              Effective Date: 24/03/2025
            </p>
          </div>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-bold mb-2">1. General Information</h2>
          <p>
            At Margdarshan, we ensure that all mentorship sessions are conducted
            smoothly and efficiently. Please review our session delivery policy
            to understand how sessions are scheduled, delivered, and managed.
          </p>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-bold mb-2">2. Session Scheduling</h2>
          <ul className="list-disc pl-6">
            <li>
              <span className="font-bold">POC Assignment</span>: After the
              payment is confirmed, each participant will be assigned a
              dedicated Point of Contact (POC).
            </li>
            <li>
              <span className="font-bold">POC Communication</span>: The assigned
              POC will contact the participants via email or phone to introduce
              themselves and provide further instructions.
            </li>
            <li>
              <span className="font-bold">Booking Sessions</span>: Participants
              can book their mentorship sessions through their assigned POC, who
              will assist in scheduling based on the availability of the
              mentors.
            </li>
          </ul>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-bold mb-2">3. Session Delivery</h2>
          <ul className="list-disc pl-6">
            <li>
              <span className="font-bold">Online Sessions</span>: All mentorship
              sessions are conducted online via video conferencing tools such as
              Zoom, Google Meet, or Microsoft Teams.
            </li>
            <li>
              <span className="font-bold">Access Links</span>: Participants will
              receive a link to join the session from their POC in advance via
              email. Please ensure you have a stable internet connection and a
              suitable device for the session.
            </li>
            <li>
              <span className="font-bold">Duration:</span>: Each session lasts
              for 45 mins. Please be punctual to make the most out of your
              session.
            </li>
          </ul>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-bold mb-2">4. Technical Requirements</h2>
          <ul className="list-disc pl-6">
            <li>
              <span className="font-bold">Device:</span> A computer, tablet, or
              smartphone with a camera and microphone.
            </li>
            <li>
              <span className="font-bold">Internet:</span> A stable internet
              connection with sufficient bandwidth for video calls.
            </li>
            <li>
              <span className="font-bold">Software:</span>: Zoom, Google Meet,
              or Microsoft Teams installed and updated to the latest version.
            </li>
          </ul>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-bold mb-2">
            5. Rescheduling and Cancellations
          </h2>
          <ul className="list-disc pl-6">
            <li>
              <span className="font-bold">Rescheduling:</span> Participants may
              reschedule their sessions by contacting their POC at least 24
              hours in advance. Rescheduling is subject to mentor availability.
            </li>
            <li>
              <span className="font-bold">Cancellations:</span> If you need to
              cancel a session, please notify your POC at least 24 hours in
              advance. Missed sessions without prior notice will be forfeited.
            </li>
            <li>
              <span className="font-bold">Emergency Cancellations:</span> In
              case of emergencies, please inform your POC as soon as possible to
              discuss rescheduling options.
            </li>
          </ul>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-bold mb-2">6. Conduct During Sessions</h2>
          <ul className="list-disc pl-6">
            <li>
              <span className="font-bold">Preparation:</span> Come prepared with
              any questions or topics you wish to discuss.
            </li>
            <li>
              <span className="font-bold">Environment:</span> Ensure you are in
              a quiet, distraction-free environment to maximize the
              effectiveness of the session.
            </li>
            <li>
              <span className="font-bold">Respect:</span> Maintain respectful
              and professional behavior throughout the session.
            </li>
          </ul>
        </div>

        <div className="mb-4">
          <h2 className="text-xl font-bold mb-2">7. Contact Information</h2>
          <p>
            For any questions or concerns regarding session scheduling or
            delivery, please contact your assigned POC or reach us at
            support@marg-darshan.com or call us at +91-9522225177
          </p>
        </div>
      </div>
    </>
  );
};

export default Shipping;
