import React from 'react';
import type { Metadata } from "next";

// Metadata for the page
export const metadata: Metadata = {
    title: "Terms and Conditions | Margdarshan",
    description: "Margdarshan's Terms and Conditions outlines how we collect, use, and protect your personal information.",
    keywords: "Terms and Conditions, Margdarshan, user agreement, Margdarshan",
    alternates: {
        canonical: 'https://marg-darshan.com/terms-and-conditions',
    },
};


const TermCondition = () => {
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
            Terms & Conditions
          </h1>
          <div className="mt-2 md:mt-0 md:text-right">
            <p className="text-[#5926D0] text-2xl">
              Margdarshan Mentorship Program - Terms & Conditions
            </p>
            <p className="text-gray-400 pt-5 md:hidden md:pt-5 text-xl">
              Effective Date: 24/03/2025
            </p>
          </div>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-bold mb-2">1. Acceptance of Terms</h2>
          <p>
            By enrolling in the Margdarshan Mentorship Program, you agree to
            abide by the following terms and conditions. Please read them
            carefully.
          </p>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-bold mb-2">2. Program Enrollment</h2>
          <ul className="list-disc pl-6">
            <li>
              Enrollment in the program is subject to the availability of slots.
            </li>
            <li>
              The program fee must be paid in full before the commencement of
              the mentorship sessions.
            </li>
          </ul>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-bold mb-2">3. Payment Terms</h2>
          <ul className="list-disc pl-6">
            <li>
              All payments are to be made through the payment gateway provided
              on our website.
            </li>
            <li>
              Payment details and transactions are securely handled by our
              payment processor, Razorpay.
            </li>
          </ul>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-bold mb-2">4. Program Content</h2>
          <ul className="list-disc pl-6">
            <li>
              The content and structure of the program are subject to change at
              the discretion of Margdarshan to ensure the best learning
              experience.
            </li>
            <li>
              All program materials provided are for personal use only and
              should not be redistributed or shared without prior permission.
            </li>
          </ul>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-bold mb-2">5. Code of Conduct</h2>
          <ul className="list-disc pl-6">
            <li>
              Participants are expected to maintain respectful and professional
              behavior throughout the program.
            </li>
            <li>
              Any form of harassment, discrimination, or misconduct will result
              in immediate expulsion from the program without a refund.
            </li>
          </ul>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-bold mb-2">6. Confidentiality</h2>
          <ul className="list-disc pl-6">
            <li>
              All personal information shared during the program will be kept
              confidential and used solely for program-related purposes.
            </li>
          </ul>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-bold mb-2">7. Limitation of Liability</h2>
          <ul className="list-disc pl-6">
            <li>
              Margdarshan is not responsible for any direct or indirect damages
              resulting from the use or inability to use the services provided
              in the program.
            </li>
          </ul>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-bold mb-2">8. Amendments</h2>
          <ul className="list-disc pl-6">
            <li>
              Margdarshan reserves the right to amend these terms and conditions
              at any time. Participants will be notified of any changes in a
              timely manner.
            </li>
          </ul>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-bold mb-2">9. Contact Information</h2>
          <p>
            For any questions or concerns regarding these terms, please contact
            us at support@marg-darshan.com.
          </p>
        </div>
      </div>
    </>
  );
};

export default TermCondition;
