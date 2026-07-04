import React from "react";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Terms & Conditions | Contemporary Group Limited",
  description: "Terms & Conditions of Contemporary Group Limited.",
};

export default function TermsAndConditionsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <main className="flex-1 pt-32 pb-24">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 max-w-4xl">
          <div className="mb-12">
            <span className="font-gotham text-xs uppercase tracking-[0.2em] text-brand-primary font-bold">
              LEGAL
            </span>
            <h1 className="font-gotham text-4xl md:text-5xl font-extrabold tracking-tight mt-4 mb-6">
              Terms & Conditions
            </h1>
            <p className="font-sans text-sm text-foreground/60">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
            </p>
          </div>

          <div className="prose prose-neutral max-w-none font-sans text-foreground/80 leading-relaxed">
            <p>
              Welcome to Contemporary Group Limited. These Terms and Conditions govern your use of our website and services. By accessing or using our website, you agree to be bound by these Terms.
            </p>

            <h2 className="font-gotham text-2xl font-bold text-foreground mt-12 mb-4">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing our website, you confirm that you have read, understood, and agree to these Terms and Conditions. If you do not agree with any part of these terms, you must not use our website.
            </p>

            <h2 className="font-gotham text-2xl font-bold text-foreground mt-12 mb-4">
              2. Intellectual Property Rights
            </h2>
            <p>
              Unless otherwise stated, Contemporary Group Limited and/or its licensors own the intellectual property rights for all material on this website. All intellectual property rights are reserved. You may access this from Contemporary Group Limited for your own personal use subjected to restrictions set in these terms and conditions.
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>You must not republish material from our website without prior consent.</li>
              <li>You must not sell, rent or sub-license material from our website.</li>
              <li>You must not reproduce, duplicate or copy material from our website.</li>
            </ul>

            <h2 className="font-gotham text-2xl font-bold text-foreground mt-12 mb-4">
              3. User Content
            </h2>
            <p>
              In these Terms and Conditions, "User Content" shall mean any audio, video text, images or other material you choose to submit to this Website. By displaying Your Content, you grant Contemporary Group Limited a non-exclusive, worldwide irrevocable, sub-licensable license to use, reproduce, adapt, publish, translate and distribute it in any and all media.
            </p>

            <h2 className="font-gotham text-2xl font-bold text-foreground mt-12 mb-4">
              4. Limitation of Liability
            </h2>
            <p>
              In no event shall Contemporary Group Limited, nor any of its officers, directors, and employees, be held liable for anything arising out of or in any way connected with your use of this website whether such liability is under contract. Contemporary Group Limited, including its officers, directors, and employees shall not be held liable for any indirect, consequential, or special liability arising out of or in any way related to your use of this website.
            </p>

            <h2 className="font-gotham text-2xl font-bold text-foreground mt-12 mb-4">
              5. Governing Law & Jurisdiction
            </h2>
            <p>
              These Terms will be governed by and interpreted in accordance with the laws of the Federal Republic of Nigeria, and you submit to the non-exclusive jurisdiction of the state and federal courts located in Nigeria for the resolution of any disputes.
            </p>

            <h2 className="font-gotham text-2xl font-bold text-foreground mt-12 mb-4">
              6. Contact Us
            </h2>
            <p>
              If you have any queries regarding any of our terms, please contact us at:
            </p>
            <div className="bg-neutral-100 p-6 rounded-2xl mt-4">
              <p className="font-bold text-foreground">Contemporary Group Limited</p>
              <p>Email: <a href="mailto:info@contemporarygroupng.com" className="text-brand-primary hover:underline">info@contemporarygroupng.com</a></p>
              <p>Phone: +234 802 592 3134</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
