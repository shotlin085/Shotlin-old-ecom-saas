import React from 'react';
import BlurBox from "@/components/layout component/BlurBox.component";

const PrivacyPolicy = () => {
  return (
    <main className="pt-24">
      <div className="bg-[radial-gradient(circle_at_center,_#010c3b_0%,_#000003_100%)] h-screen fixed z-10 top-0 left-0 right-0 bottom-0">

      </div>
      <BlurBox className=" w-11/12 xs:w-4/5 md2:max-w-5xl mx-auto px-4 py-8 text-gray-800 transition-colors duration-300 dark:bg-gray-900 dark:text-gray-200 relative z-20">
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-3xl font-bold mb-2">PRIVACY POLICY</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Last updated December 01, 2024
          </p>
        </header>

        {/* Introduction */}
        <section className="mb-8">
          <p className="mb-4 leading-relaxed text-base text-gray-700 dark:text-gray-300">
            This Privacy Notice for <strong>Shotlin</strong> (“we”, “us”, or
            “our”) describes how and why we might access, collect, store, use,
            and/or share (“process”) your personal information when you use our
            services (“Services”), including when you:
          </p>
          <ul className="list-disc pl-5 mb-4 space-y-2 text-gray-700 dark:text-gray-300">
            <li>
              Visit our website at{" "}
              <a
                href="https://shotlin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                https://shotlin.com/
              </a>
              , or any website of ours that links to this Privacy Notice.
            </li>
            <li>
              Use our services. Our expertise spans website development, app
              development, and UX design, offering comprehensive solutions to
              elevate your digital presence. We craft innovative, user-focused
              products that seamlessly integrate functionality and design to
              deliver exceptional experiences.
            </li>
            <li>
              Engage with us in other related ways, including any sales,
              marketing, or events.
            </li>
          </ul>
          <p className="mb-4 leading-relaxed text-base text-gray-700 dark:text-gray-300">
            Questions or concerns? Reading this Privacy Notice will help you
            understand your privacy rights and choices. We are responsible for
            making decisions about how your personal information is processed.
            If you do not agree with our policies and practices, please do not
            use our Services. If you still have any questions or concerns,
            please contact us at{" "}
            <a
              href="mailto:support@shotlin.com"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              support@shotlin.com
            </a>
            .
          </p>
        </section>

        <hr className="my-8 border-gray-300 dark:border-gray-700" />

        {/* Summary of Key Points */}
        <section id="summary" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">SUMMARY OF KEY POINTS</h2>
          <p className="mb-4 leading-relaxed text-base text-gray-700 dark:text-gray-300">
            This summary provides key points from our Privacy Notice. You can
            find out more details about any of these topics by clicking the link
            following each key point or by using our table of contents below to
            navigate to the section you are looking for.
          </p>
          <p className="mb-2 text-base text-gray-700 dark:text-gray-300">
            <strong>What personal information do we process?</strong> When you
            visit, use, or navigate our Services, we may process personal
            information depending on how you interact with us, the choices you
            make, and the products and features you use.
          </p>
          <p className="mb-2 text-base text-gray-700 dark:text-gray-300">
            <strong>Do we process any sensitive personal information?</strong>{" "}
            Some of the information may be considered “special” or “sensitive”
            in certain jurisdictions. We do not process sensitive personal
            information.
          </p>
          <p className="mb-2 text-base text-gray-700 dark:text-gray-300">
            <strong>Do we collect any information from third parties?</strong>{" "}
            We do not collect any information from third parties.
          </p>
          <p className="mb-2 text-base text-gray-700 dark:text-gray-300">
            <strong>How do we process your information?</strong> We process your
            information to provide, improve, and administer our Services,
            communicate with you, prevent fraud, and comply with law.
          </p>
          <p className="mb-2 text-base text-gray-700 dark:text-gray-300">
            <strong>
              In what situations and with which parties do we share personal
              information?
            </strong>{" "}
            We may share your personal information in specific situations and
            with specific third parties.
          </p>
          <p className="mb-2 text-base text-gray-700 dark:text-gray-300">
            <strong>How do we keep your information safe?</strong> We have
            appropriate security measures in place, though no system is 100%
            secure.
          </p>
          <p className="mb-2 text-base text-gray-700 dark:text-gray-300">
            <strong>What are your rights?</strong> Depending on your location,
            you may have certain rights regarding your personal information.
          </p>
          <p className="mb-2 text-base text-gray-700 dark:text-gray-300">
            <strong>How do you exercise your rights?</strong> You can review,
            update, or delete your information by contacting us.
          </p>
        </section>

        <hr className="my-8 border-gray-300 dark:border-gray-700" />

        {/* Table of Contents */}
        <section id="toc" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">TABLE OF CONTENTS</h2>
          <ol className="list-decimal pl-5 mb-4 space-y-1 text-gray-700 dark:text-gray-300">
            <li>
              <a
                href="#infocollect"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                1. WHAT INFORMATION DO WE COLLECT?
              </a>
            </li>
            <li>
              <a
                href="#infouse"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                2. HOW DO WE PROCESS YOUR INFORMATION?
              </a>
            </li>
            <li>
              <a
                href="#whoshare"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                3. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
              </a>
            </li>
            <li>
              <a
                href="#cookies"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                4. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?
              </a>
            </li>
            <li>
              <a
                href="#ai"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                5. DO WE OFFER ARTIFICIAL INTELLIGENCE-BASED PRODUCTS?
              </a>
            </li>
            <li>
              <a
                href="#sociallogins"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                6. HOW DO WE HANDLE YOUR SOCIAL LOGINS?
              </a>
            </li>
            <li>
              <a
                href="#inforetain"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                7. HOW LONG DO WE KEEP YOUR INFORMATION?
              </a>
            </li>
            <li>
              <a
                href="#infosafe"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                8. HOW DO WE KEEP YOUR INFORMATION SAFE?
              </a>
            </li>
            <li>
              <a
                href="#privacyrights"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                9. WHAT ARE YOUR PRIVACY RIGHTS?
              </a>
            </li>
            <li>
              <a
                href="#DNT"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                10. CONTROLS FOR DO-NOT-TRACK FEATURES
              </a>
            </li>
            <li>
              <a
                href="#policyupdates"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                11. DO WE MAKE UPDATES TO THIS NOTICE?
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                12. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
              </a>
            </li>
            <li>
              <a
                href="#request"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                13. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT
                FROM YOU?
              </a>
            </li>
          </ol>
        </section>

        <hr className="my-8 border-gray-300 dark:border-gray-700" />

        {/* 1. WHAT INFORMATION DO WE COLLECT? */}
        <section id="infocollect" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            1. WHAT INFORMATION DO WE COLLECT?
          </h2>
          <h3 className="text-xl font-semibold mb-2">
            Personal information you disclose to us
          </h3>
          <p className="mb-4 leading-relaxed text-base text-gray-700 dark:text-gray-300">
            We collect personal information that you voluntarily provide to us
            when you register on the Services, express an interest in obtaining
            information about us or our products and Services, participate in
            activities on the Services, or otherwise when you contact us.
          </p>
          <ul className="list-disc pl-5 mb-4 space-y-2 text-gray-700 dark:text-gray-300">
            <li>Names</li>
            <li>Email addresses</li>
            <li>Phone numbers</li>
            <li>Usernames</li>
            <li>Passwords</li>
            <li>Billing addresses</li>
            <li>Contact or authentication data</li>
          </ul>
          <p className="mb-4 leading-relaxed text-base text-gray-700 dark:text-gray-300">
            All personal information that you provide to us must be true,
            complete, and accurate, and you must notify us of any changes.
          </p>
          <h3 className="text-xl font-semibold mb-2">Sensitive Information</h3>
          <p className="mb-4 leading-relaxed text-base text-gray-700 dark:text-gray-300">
            We do not process sensitive personal information.
          </p>
          <h3 className="text-xl font-semibold mb-2">Payment Data</h3>
          <p className="mb-4 leading-relaxed text-base text-gray-700 dark:text-gray-300">
            We may collect data necessary to process your payment if you choose
            to make purchases, such as your payment instrument number and the
            security code associated with your payment instrument. All payment
            data is handled and stored by our payment processors. We exclusively
            rely on the PhonePe and Razorpay payment gateways for processing all
            transactions, ensuring seamless, secure, and efficient payment
            solutions for our customers.
          </p>
          <p className="mb-4 leading-relaxed text-base text-gray-700 dark:text-gray-300">
            You may review their privacy notices here:{" "}
            <a
              href="https://www.phonepe.com/privacy-policy/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              PhonePe Privacy Policy
            </a>{" "}
            and{" "}
            <a
              href="https://razorpay.com/privacy/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Razorpay Privacy Policy
            </a>
            .
          </p>
          <h3 className="text-xl font-semibold mb-2">
            Social Media Login Data
          </h3>
          <p className="mb-4 leading-relaxed text-base text-gray-700 dark:text-gray-300">
            We may provide you the option to register with us using your
            existing social media account details (such as Facebook, X, or
            others). If you choose to register in this way, we will collect
            certain profile information about you from the social media
            provider.
          </p>
          <h3 className="text-xl font-semibold mb-2">Google API</h3>
          <p className="mb-4 leading-relaxed text-base text-gray-700 dark:text-gray-300">
            Our use of information received from Google APIs will adhere to the{" "}
            <a
              href="https://developers.google.com/terms/api-services-user-data-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Google API Services User Data Policy
            </a>
            , including the{" "}
            <a
              href="https://developers.google.com/terms/api-services-user-data-policy#limited-use"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Limited Use requirements
            </a>
            .
          </p>
        </section>

        <hr className="my-8 border-gray-300 dark:border-gray-700" />

        {/* 2. HOW DO WE PROCESS YOUR INFORMATION? */}
        <section id="infouse" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            2. HOW DO WE PROCESS YOUR INFORMATION?
          </h2>
          <p className="mb-4 leading-relaxed text-base text-gray-700 dark:text-gray-300">
            In Short: We process your information to provide, improve, and
            administer our Services, communicate with you, for security and
            fraud prevention, and to comply with law. We may also process your
            information for other purposes with your consent.
          </p>
          <p className="mb-4 leading-relaxed text-base text-gray-700 dark:text-gray-300">
            We process your personal information for a variety of reasons,
            depending on how you interact with our Services, including:
          </p>
          <ul className="list-disc pl-5 mb-4 space-y-2 text-gray-700 dark:text-gray-300">
            <li>
              <strong>
                To facilitate account creation and authentication and otherwise
                manage user accounts.
              </strong>{" "}
              We process your information so you can create and log in to your
              account and keep it in working order.
            </li>
            <li>
              <strong>To send administrative information to you.</strong> We
              process your information to send you details about our products
              and services, changes to our terms and policies, and other similar
              updates.
            </li>
            <li>
              <strong>To fulfill and manage your orders.</strong> We process
              your information to manage your orders, payments, returns, and
              exchanges made through our Services.
            </li>
            <li>
              <strong>To request feedback.</strong> We process your information
              when necessary to request feedback and to contact you about your
              use of our Services.
            </li>
            <li>
              <strong>
                To send you marketing and promotional communications.
              </strong>{" "}
              If this is in accordance with your marketing preferences, we may
              process your information for marketing purposes. You can opt out
              at any time. For more details, see{" "}
              <a
                href="#privacyrights"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                WHAT ARE YOUR PRIVACY RIGHTS?
              </a>
            </li>
            <li>
              <strong>To deliver targeted advertising to you.</strong> We
              process your information to develop and display personalized
              content and advertising tailored to your interests, location, and
              more. For further details, please review our{" "}
              <a
                href="https://shotlin.com/cookie-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                Cookie Notice
              </a>
              .
            </li>
            <li>
              <strong>
                To evaluate and improve our Services, products, marketing, and
                your experience.
              </strong>{" "}
              We analyze usage trends and campaign effectiveness to enhance our
              offerings.
            </li>
          </ul>
        </section>

        <hr className="my-8 border-gray-300 dark:border-gray-700" />

        {/* 3. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION? */}
        <section id="whoshare" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            3. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
          </h2>
          <p className="mb-4 leading-relaxed text-base text-gray-700 dark:text-gray-300">
            <strong>In Short:</strong> We may share information in specific
            situations described in this section and/or with the following third
            parties.
          </p>
          <p className="mb-4 leading-relaxed text-base text-gray-700 dark:text-gray-300">
            We may need to share your personal information in the following
            situations:
          </p>
          <ul className="list-disc pl-5 mb-4 space-y-2 text-gray-700 dark:text-gray-300">
            <li>
              <strong>Business Transfers.</strong> We may share or transfer your
              information in connection with, or during negotiations of, any
              merger, sale of company assets, financing, or acquisition of all
              or a portion of our business to another company.
            </li>
            <li>
              <strong>Business Partners.</strong> We may share your information
              with our business partners to offer you certain products,
              services, or promotions.
            </li>
          </ul>
        </section>

        <hr className="my-8 border-gray-300 dark:border-gray-700" />

        {/* 4. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES? */}
        <section id="cookies" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            4. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?
          </h2>

          {/* In Short statement */}
          <p className="mb-4 leading-relaxed text-base text-gray-700 dark:text-gray-300">
            <strong>In Short:</strong> We may use cookies and similar tracking
            technologies to collect and store your information.
          </p>

          {/* General cookies/tracking info */}
          <p className="mb-4 leading-relaxed text-base text-gray-700 dark:text-gray-300">
            We also permit third parties and service providers to use online
            tracking technologies for analytics and advertising, including to
            help manage and display advertisements, to evaluate the use of our
            Services, or to analyze usage and traffic on our Services. These
            third parties and service providers may have their own privacy
            policies regarding how they handle your data.
          </p>

          {/* Link to Cookie Policy */}
          <p className="mb-4 leading-relaxed text-base text-gray-700 dark:text-gray-300">
            For more information on how we use such technologies and how you can
            refuse certain cookies, please see our Cookie Notice at{" "}
            <a
              href="https://shotlin.com/cookie-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              https://shotlin.com/cookie-policy
            </a>
            .
          </p>

          {/* Google Analytics subsection */}
          <h3 className="text-xl font-semibold mb-2">Google Analytics</h3>
          <p className="mb-4 leading-relaxed text-base text-gray-700 dark:text-gray-300">
            We may use Google Analytics to track and analyze the usage of the
            Services. The Google Analytics Advertising Features that we may
            enable include Remarketing with Google Analytics and other
            interest-based advertising services. You can opt out of Google
            Analytics Advertising Features through{" "}
            <a
              href="https://adssettings.google.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Ads Settings
            </a>{" "}
            and{" "}
            <a
              href="https://tools.google.com/dlpage/gaoptout"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              https://tools.google.com/dlpage/gaoptout
            </a>
            .
          </p>

          {/* Interest-based ads opt-out info */}
          <p className="mb-4 leading-relaxed text-base text-gray-700 dark:text-gray-300">
            For more information about interest-based advertising, you may also
            visit{" "}
            <a
              href="http://optout.networkadvertising.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              http://optout.networkadvertising.org
            </a>{" "}
            or{" "}
            <a
              href="http://www.networkadvertising.org/mobile-choice"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              http://www.networkadvertising.org/mobile-choice
            </a>
            .
          </p>
        </section>

        <hr className="my-8 border-gray-300 dark:border-gray-700" />

        {/* 5. DO WE OFFER ARTIFICIAL INTELLIGENCE-BASED PRODUCTS? */}
        <section id="ai" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            5. DO WE OFFER ARTIFICIAL INTELLIGENCE-BASED PRODUCTS?
          </h2>

          {/* In Short statement */}
          <p className="mb-4 leading-relaxed text-base text-gray-700 dark:text-gray-300">
            <strong>In Short:</strong> We offer products, features, or services
            powered by artificial intelligence, machine learning, or similar
            technologies.
          </p>

          {/* AI-based services introduction */}
          <p className="mb-4 leading-relaxed text-base text-gray-700 dark:text-gray-300">
            As part of our Services, we offer AI-based products (referred to
            collectively as “AI Products”). These tools are designed to enhance
            your experience and improve the performance, efficiency, or
            functionality of our Services. They may include image processing,
            text analysis, recommendation engines, or other intelligent features
            that leverage machine learning.
          </p>

          {/* Use of AI Technologies */}
          <h3 className="text-xl font-semibold mb-2">Use of AI Technologies</h3>
          <p className="mb-4 leading-relaxed text-base text-gray-700 dark:text-gray-300">
            We provide the AI Products through third-party service providers
            (“AI Service Providers”), including (but not limited to) Google
            Cloud AI, OpenAI, and NVIDIA AI. As outlined in this Privacy Notice,
            your input, output, and personal information may be shared with
            these AI Service Providers to enable your use of our AI Products for
            purposes outlined in{" "}
            <a
              href="#whoshare"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
            </a>{" "}
            You must note that once the AI Products process your data, it may be
            subject to those providers’ own privacy policies.
          </p>

          {/* AI Products */}
          <h3 className="text-xl font-semibold mb-2">Our AI Products</h3>
          <ul className="list-disc pl-5 mb-4 space-y-2 text-gray-700 dark:text-gray-300">
            <li>AI applications</li>
            <li>AI tools</li>
            <li>Any other relevant AI-based solutions</li>
          </ul>

          {/* Data usage disclaimer */}
          <h3 className="text-xl font-semibold mb-2">
            How We Process Your Data Using AI
          </h3>
          <p className="mb-4 leading-relaxed text-base text-gray-700 dark:text-gray-300">
            All personal information processed by our AI Products is handled in
            line with our Privacy Notice. This ensures high security and
            confidentiality standards throughout the data processing journey,
            giving you peace of mind about your data’s safety.
          </p>
        </section>

        <hr className="my-8 border-gray-300 dark:border-gray-700" />

        {/* 6. HOW DO WE HANDLE YOUR SOCIAL LOGINS? */}
        <section id="sociallogins" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            6. HOW DO WE HANDLE YOUR SOCIAL LOGINS?
          </h2>
          <p className="mb-4 leading-relaxed text-base text-gray-700 dark:text-gray-300">
            <strong>In Short:</strong> If you choose to register or log in to
            our Services using a social media account, we may have access to
            certain information about you.
          </p>
          <p className="mb-4 leading-relaxed text-base text-gray-700 dark:text-gray-300">
            Our Services offer you the ability to register and log in using your
            third-party social media account details (like your Facebook or X
            logins). Where you choose to do this, we will receive certain
            profile information about you from your social media provider. The
            profile information we may receive can vary depending on the social
            media provider concerned, but will often include your name, email
            address, friends list, and profile picture, as well as other
            information you choose to make public on such a social media
            platform.
          </p>
          <p className="mb-4 leading-relaxed text-base text-gray-700 dark:text-gray-300">
            We will use the information we receive only for the purposes
            described in this Privacy Notice or that are otherwise made clear to
            you on the relevant Services. Please note that we do not control,
            and are not responsible for, other uses of your personal information
            by your third-party social media provider. We recommend that you
            review their privacy notice to understand how they collect, use, and
            share your personal information, and how you can set your privacy
            preferences on their sites and apps.
          </p>
        </section>

        <hr className="my-8 border-gray-300 dark:border-gray-700" />

        {/* 7. HOW LONG DO WE KEEP YOUR INFORMATION? */}
        <section id="inforetain" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            7. HOW LONG DO WE KEEP YOUR INFORMATION?
          </h2>
          <p className="mb-4 leading-relaxed text-base text-gray-700 dark:text-gray-300">
            <strong>In Short:</strong> We keep your information for as long as
            necessary to fulfill the purposes outlined in this Privacy Notice
            unless otherwise required by law.
          </p>
          <p className="mb-4 leading-relaxed text-base text-gray-700 dark:text-gray-300">
            We will only keep your personal information for as long as it is
            necessary for the purposes set out in this Privacy Notice, unless a
            longer retention period is required or permitted by law (such as
            tax, accounting, or other legal requirements). No purpose in this
            notice will require us keeping your personal information for longer
            than one (1) month past the termination of your user account.
          </p>
          <p className="mb-4 leading-relaxed text-base text-gray-700 dark:text-gray-300">
            When we have no ongoing legitimate business need to process your
            personal information, we will either delete or anonymize such
            information (in which case we may continue to use the anonymized
            data for analytics purposes), or, if this is not possible (for
            example, because your personal information has been stored in backup
            archives), then we will securely store your personal information and
            isolate it from any further processing until deletion is possible.
          </p>
        </section>

        <hr className="my-8 border-gray-300 dark:border-gray-700" />

        {/* 8. HOW DO WE KEEP YOUR INFORMATION SAFE? */}
        <section id="infosafe" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            8. HOW DO WE KEEP YOUR INFORMATION SAFE?
          </h2>

          <p className="mb-4 leading-relaxed text-base text-gray-700 dark:text-gray-300">
            <strong>In Short:</strong> We aim to protect your personal
            information through a system of organizational and technical
            security measures.
          </p>

          <p className="mb-4 leading-relaxed text-base text-gray-700 dark:text-gray-300">
            We have implemented appropriate and reasonable technical and
            organizational security measures designed to protect the security of
            any personal information we process. However, despite our safeguards
            and efforts to secure your information, no electronic transmission
            over the Internet or information storage technology can be
            guaranteed to be 100% secure, so we cannot promise or guarantee that
            hackers, cybercriminals, or other unauthorized third parties will
            not be able to defeat our security and improperly collect, access,
            steal, or modify your information.
          </p>

          <p className="leading-relaxed text-base text-gray-700 dark:text-gray-300">
            Although we will do our best to protect your personal information,
            transmission of personal information to and from our Services is at
            your own risk. You should only access the Services within a secure
            environment.
          </p>
        </section>

        <hr className="my-8 border-gray-300 dark:border-gray-700" />

        {/* 9. WHAT ARE YOUR PRIVACY RIGHTS? */}
        <section id="privacyrights" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            9. WHAT ARE YOUR PRIVACY RIGHTS?
          </h2>

          {/* In Short statement */}
          <p className="mb-4 leading-relaxed text-base text-gray-700 dark:text-gray-300">
            <strong>In Short:</strong> You may review, change, or terminate your
            account at any time, depending on your country, province, or state
            of residence.
          </p>

          {/* Withdrawing consent */}
          <p className="mb-4 leading-relaxed text-base text-gray-700 dark:text-gray-300">
            <strong>Withdrawing your consent:</strong> If we are relying on your
            consent to process your personal information (which may be express
            and/or implied consent depending on the applicable law), you have
            the right to withdraw your consent at any time. You can withdraw
            your consent by contacting us using the details provided in the
            section{" "}
            <a
              href="#contact"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
            </a>
            . Please note that this withdrawal will not affect the lawfulness of
            any processing conducted before your withdrawal, nor will it affect
            processing conducted in reliance on lawful processing grounds other
            than consent.
          </p>

          {/* Unsubscribing from marketing */}
          <p className="mb-4 leading-relaxed text-base text-gray-700 dark:text-gray-300">
            <strong>Opting out of email and promotional communications:</strong>{" "}
            You can unsubscribe from our marketing and promotional
            communications at any time by clicking on the unsubscribe link in
            the emails we send, replying “STOP” or “UNSUBSCRIBE” to the SMS
            messages we send, or by contacting us using the details provided in
            the section{" "}
            <a
              href="#contact"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
            </a>
            . You will then be removed from the marketing lists. However, we may
            still communicate with you, for example, to send you service-related
            messages necessary for your account administration and use, to
            respond to service requests, or for other non-marketing purposes.
          </p>

          {/* Account Information */}
          <h3 className="text-xl font-semibold mb-2">Account Information</h3>
          <p className="mb-4 leading-relaxed text-base text-gray-700 dark:text-gray-300">
            If you would like to review or terminate your account at any time,
            please contact us at{" "}
            <a
              href="mailto:support@shotlin.com"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              support@shotlin.com
            </a>
            . Depending on your jurisdiction, you may also have the right to
            request access to, update, or delete your personal information from
            our databases. In certain circumstances, you may request that we
            restrict or object to the processing of your personal information.
          </p>

          {/* Cookies and Similar Technologies */}
          <p className="mb-4 leading-relaxed text-base text-gray-700 dark:text-gray-300">
            <strong>Cookies and similar technologies:</strong> Most web browsers
            are set to accept cookies by default. If you prefer, you can usually
            choose to set your browser to remove and reject cookies. If you
            choose to remove or reject cookies, this could affect certain
            features or services of our Services. To learn more about how we use
            cookies, please visit our{" "}
            <a
              href="https://shotlin.com/cookie-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Cookie Policy
            </a>
            .
          </p>

          {/* Contact for questions */}
          <p className="leading-relaxed text-base text-gray-700 dark:text-gray-300">
            If you have questions or comments concerning your privacy rights,
            you may email us at{" "}
            <a
              href="mailto:support@shotlin.com"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              support@shotlin.com
            </a>
            .
          </p>
        </section>

        <hr className="my-8 border-gray-300 dark:border-gray-700" />

        {/* 10. CONTROLS FOR DO-NOT-TRACK FEATURES */}
        <section id="DNT" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            10. CONTROLS FOR DO-NOT-TRACK FEATURES
          </h2>
          <p className="mb-4 leading-relaxed text-base text-gray-700 dark:text-gray-300">
            <strong>In Short:</strong> We do not currently respond to DNT
            browser signals or any other mechanism that automatically
            communicates your choice not to be tracked online.
          </p>
          <p className="mb-4 leading-relaxed text-base text-gray-700 dark:text-gray-300">
            Most web browsers and some mobile operating systems and mobile
            applications include a Do-Not-Track (“DNT”) feature or setting you
            can activate to signal your privacy preference not to have data
            about your online browsing activities monitored and collected. At
            this stage, no uniform technology standard for recognizing and
            implementing DNT signals has been finalized. As such, we do not
            currently respond to DNT browser signals or any other mechanism that
            automatically communicates your choice not to be tracked online. If
            a standard for online tracking is adopted that we must follow in the
            future, we will inform you about that practice in a revised version
            of this Privacy Notice.
          </p>
        </section>

        <hr className="my-8 border-gray-300 dark:border-gray-700" />

        {/* 11. DO WE MAKE UPDATES TO THIS NOTICE? */}
        <section id="policyupdates" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            11. DO WE MAKE UPDATES TO THIS NOTICE?
          </h2>
          <p className="mb-4 leading-relaxed text-base text-gray-700 dark:text-gray-300">
            <strong>In Short:</strong> Yes, we will update this notice as
            necessary to stay compliant with relevant laws.
          </p>
          <p className="mb-4 leading-relaxed text-base text-gray-700 dark:text-gray-300">
            We may update this Privacy Notice from time to time. The updated
            version will be indicated by an updated “Revised” date at the top of
            this Privacy Notice. If we make material changes to this Privacy
            Notice, we may notify you by posting a notice of such changes or by
            contacting you directly. We encourage you to review this Privacy
            Notice frequently to be informed of how we are protecting your
            information.
          </p>
        </section>

        <hr className="my-8 border-gray-300 dark:border-gray-700" />

        {/* 12. HOW CAN YOU CONTACT US ABOUT THIS NOTICE? */}
        <section id="contact" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            12. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
          </h2>
          <p className="mb-4 leading-relaxed text-base text-gray-700 dark:text-gray-300">
            If you have questions or comments about this notice, you may email
            us at{" "}
            <a
              href="mailto:support@shotlin.com"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              support@shotlin.com
            </a>{" "}
            or by post to:
          </p>
          <address className="not-italic text-base text-gray-700 dark:text-gray-300 mb-4">
            Shotlin
            <br />
            379/N,BANIPUR PALPARA WARD 13,BANIPUR PALPARA,S.N. DEY ROAD<br />
            North 24 Parganas,West Bengal 743287, India
          </address>
          <p className="leading-relaxed text-base text-gray-700 dark:text-gray-300">
            We will do our best to address your concerns promptly.
          </p>
        </section>

        <hr className="my-8 border-gray-300 dark:border-gray-700" />

        {/* 13. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU? */}
        <section id="request" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            13. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM
            YOU?
          </h2>
          <p className="mb-4 leading-relaxed text-base text-gray-700 dark:text-gray-300">
            Depending on the applicable laws of your country, you may have the
            right to request access to the personal information we collect from
            you, change that information, or delete it in some circumstances. To
            request to review, update, or delete your personal information,
            please contact us at{" "}
            <a
              href="mailto:support@shotlin.com"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              support@shotlin.com
            </a>{" "}
            or visit{" "}
            <a
              href="https://shotlin.com/contact"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              https://shotlin.com/contact
            </a>
            . We will respond to your request in accordance with applicable data
            protection laws.
          </p>
        </section>
      </BlurBox>
    </main>
  );
};

export default PrivacyPolicy;
