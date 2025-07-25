import React from 'react';
import type { Metadata } from "next";

// Metadata for the page
export const metadata: Metadata = {
    title: "Privacy Policy | Margdarshan",
    description: "Margdarshan's Privacy Policy outlines how we collect, use, and protect your personal information.",
    keywords: "privacy policy, data protection, personal information, Margdarshan",
    alternates: {
        canonical: 'https://marg-darshan.com/policies/privacy-policy',
    },
};

const PrivacyPolicy = () => {
  return (
    <>
      <div className="bg-white p-10 pt-10 md:p-20 md:pt-10  text-gray-800">
        <div className="mt-2 md:mt-0 md:text-right">
          <p className="text-gray-400 pb-5 pt-0 hidden md:block md:pt-5 text-xl">
            Effective Date: 24/03/2025
          </p>
        </div>
        <div className="pb-10 flex flex-col md:flex-row justify-between items-start md:items-center">
          <h1 className="mt-5 md:mt-0 text-4xl font-bold">Privacy Policy</h1>
          <div className="mt-2 md:mt-0 md:text-right">
            <p className="text-[#5926D0] text-2xl">
              Margdarshan Mentorship Program - Privacy Policy
            </p>
            <p className="text-gray-400 pt-5 md:hidden md:pt-5 text-xl">
              Effective Date: 24/03/2025
            </p>
          </div>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-bold mb-2">1. Introduction</h2>
          <p>
            Welcome to Mardgarsan. We are committed to protecting your privacy
            and ensuring that your personal information is handled in a safe and
            responsible manner. This Privacy Policy outlines how we collect,
            use, and protect your information when you interact with our
            mentorship program and services.
          </p>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-bold mb-2">2. Information We Collect</h2>
          <p>
            We collect various types of information to provide and improve our
            services to you. This includes:
          </p>
          <ul className="list-disc pl-6">
            <li>
              Personal Information: Name, email address, phone number, mailing
              address, and payment information.
            </li>
            <li>
              Academic Information: Details about your academic background,
              goals, and performance.
            </li>
            <li>
              Technical Information: IP address, browser type, operating system,
              and usage data when you visit our website.
            </li>
            <li>
              Communication Data: Any communications with us, including emails,
              phone calls, and messages.
            </li>
          </ul>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-bold mb-2">
            3. How We Use Your Information
          </h2>
          <p>
            We use the collected information for various purposes, including:
          </p>
          <ul className="list-disc pl-6">
            <li>To provide and manage our mentorship program.</li>
            <li>To process payments and manage transactions.</li>
            <li>
              To communicate with you regarding your enrollment, sessions, and
              support inquiries.
            </li>
            <li>
              To personalize your experience and tailor our services to better
              meet your needs.
            </li>
            <li>To improve our website, services, and marketing efforts.</li>
            <li>
              To comply with legal obligations and protect our legal rights.
            </li>
          </ul>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-bold mb-2">
            4. Sharing Your Information
          </h2>
          <p>
            We do not sell or rent your personal information to third parties.
            We may share your information in the following circumstances:
          </p>
          <ul className="list-disc pl-6">
            <li>
              With Service Providers: Third-party vendors who help us operate
              our business, such as payment processors, communication tools, and
              analytics providers.
            </li>
            <li>
              For Legal Reasons: If required by law or in response to valid
              requests by public authorities (e.g., court orders, subpoenas).
            </li>
            <li>
              With Your Consent: When you give us explicit permission to share
              your information.
            </li>
          </ul>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-bold mb-2">5. Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to
            protect your personal information from unauthorized access, loss, or
            misuse. This includes encryption, secure servers, and access
            controls.
          </p>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-bold mb-2">6. Your Rights</h2>
          <p>
            You have the following rights regarding your personal information:
          </p>
          <ul className="list-disc pl-6">
            <li>
              Access: You can request a copy of the personal information we hold
              about you.
            </li>
            <li>
              Correction: You can request that we correct any inaccuracies in
              your personal information.
            </li>
            <li>
              Deletion: You can request that we delete your personal
              information, subject to certain conditions.
            </li>
            <li>
              Restriction: You can request that we restrict the processing of
              your personal information in certain circumstances.
            </li>
            <li>
              Objection: You can object to the processing of your personal
              information for direct marketing purposes.
            </li>
          </ul>
          <p className="text-gray-400">
            To exercise any of these rights, please contact us at{' '}
            <a href="mailto:support@marg-darshan.com" className="text-blue-600">
              support@marg-darshan.com
            </a>
            .
          </p>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-bold mb-2">
            7. Cookies and Tracking Technologies
          </h2>
          <p>
            We use cookies and similar tracking technologies to enhance your
            experience. You can control the use of cookies through your browser
            settings. For more information, please refer to our Cookie Policy.
          </p>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-bold mb-2">8. Third-Party Links</h2>
          <p>
            Our website may contain links to third-party sites. We are not
            responsible for the privacy practices or content of these sites.
            Please review the privacy policies of any third-party sites you
            visit.
          </p>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-bold mb-2">
            9. Changes to This Privacy Policy
          </h2>
          <p>
            We may update this Privacy Policy from time to time. Any changes
            will be posted on this page with an updated effective date. We
            encourage you to review this policy periodically.
          </p>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
