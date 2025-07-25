import React from 'react';
import type { Metadata } from "next";

// Metadata for the page
export const metadata: Metadata = {
    title: "Refound Cancellation | Margdarshan",
    description: "Margdarshan's Refund Cancellation Policy outlines how we collect, use, and protect your personal information.",
    keywords: "Refund Policy, cancellation policy, Margdarshan",
    alternates: {
        canonical: 'https://marg-darshan.com/refund-cancel',
    },
};


const RefundCancel = () => {
  return (
    <>
      <div className="bg-white p-10 pt-10 md:p-20 md:pt-10  text-gray-800">
        <div className="mt-2 md:mt-0 md:text-right">
          <p className="text-gray-400 pb-5 pt-0 hidden md:block md:pt-5 text-xl">
            Effective Date: 24/03/2025
          </p>
        </div>
        <div className="pb-10 flex flex-col md:flex-row justify-between items-start md:items-center">
          <h1 className="mt-5 md:mt-0 text-4xl font-bold">Refund Policy</h1>
          <div className="mt-2 md:mt-0 md:text-right">
            <p className="text-[#5926D0] text-2xl">
              Margdarshan Mentorship Program - Refund Policy
            </p>
            <p className="text-gray-400 pt-5 md:hidden md:pt-5 text-xl">
              Effective Date: 24/03/2025
            </p>
          </div>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-bold mb-2">1. Refund Eligibility</h2>
          <ul className="list-disc pl-6">
            <li>Refund requests must be made within 7 days of payment.</li>
            <li>
              Refunds are only available for participants who have not yet
              attended any mentorship sessions.
            </li>
          </ul>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-bold mb-2">2. Refund Process</h2>
          <ul className="list-disc pl-6">
            <li>
              To request a refund, contact our support team at
              support@marg-darshan.com with your payment details and reason for
              the refund.
            </li>
            <li>
              Approved refunds will be processed within 14 business days to the
              original payment method.
            </li>
          </ul>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-bold mb-2">3. Non-Refundable Fees</h2>
          <ul className="list-disc pl-6">
            <li>
              Any administrative fees, processing charges, or costs for
              materials already provided are non-refundable.
            </li>
          </ul>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-bold mb-2">4. Special Circumstances</h2>
          <ul className="list-disc pl-6">
            <li>
              In case of unforeseen circumstances such as medical emergencies,
              partial refunds may be considered on a case-by-case basis.
            </li>
          </ul>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-bold mb-2">5. Contact Information</h2>
          <p>
            For any questions or concerns regarding the refund policy, please
            contact us at support@marg-darshan.com.
          </p>
        </div>
      </div>
      <hr />
      <div className="bg-white p-10 pt-10 md:p-20 md:pt-10  text-gray-800">
        <div className="mt-2 md:mt-0 md:text-right">
          <p className="text-gray-400 pb-5 pt-0 hidden md:block md:pt-5 text-xl">
            Effective Date: 24/03/2025
          </p>
        </div>
        <div className="pb-10 flex flex-col md:flex-row justify-between items-start md:items-center">
          <h1 className="mt-5 md:mt-0 text-4xl font-bold">
            Cancellation Policy
          </h1>
          <div className="mt-2 md:mt-0 md:text-right">
            <p className="text-[#5926D0] text-2xl">
              Margdarshan Mentorship Program - Cancellation Policy
            </p>
            <p className="text-gray-400 pt-5 md:hidden md:pt-5 text-xl">
              Effective Date: 24/03/2025
            </p>
          </div>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-bold mb-2">
            1. Cancellation by Participant
          </h2>
          <ul className="list-disc pl-6">
            <li>
              Participants may cancel their enrollment in the program at any
              time by notifying us at support@marg-darshan.com
            </li>
          </ul>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-bold mb-2">
            2. Cancellation by Margdarshan
          </h2>
          <ul className="list-disc pl-6">
            <li>
              Margdarshan reserves the right to cancel the program or any
              session at any time due to insufficient enrollment, mentor
              availability, or other unforeseen circumstances.
            </li>
            <li>
              In the event of such a cancellation, participants will be notified
              as soon as possible and will receive a full refund for any
              remaining sessions.
            </li>
          </ul>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-bold mb-2">3. Rescheduling</h2>
          <ul className="list-disc pl-6">
            <li>
              Participants may request to reschedule their sessions by
              contacting their mentor at least 24 hours in advance. Rescheduling
              is subject to mentor availability.
            </li>
            <li>
              Failure to attend a session without prior notice will result in
              the session being forfeited.
            </li>
          </ul>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-bold mb-2">
            4. Refunds for Cancellations
          </h2>
          <ul className="list-disc pl-6">
            <li>
              Refunds for cancellations by the participant are subject to the
              terms outlined in our Refund Policy.
            </li>
          </ul>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-bold mb-2">5. Contact Information</h2>
          <p>
            For any questions or concerns regarding the cancellation policy,
            please contact us at support@marg-darshan.com
          </p>
        </div>
      </div>
    </>
  );
};

export default RefundCancel;
