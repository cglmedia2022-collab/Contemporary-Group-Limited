import React from "react";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Privacy Policy | Contemporary Group Limited",
  description: "Privacy Policy of Contemporary Group Limited.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <main className="flex-1 pt-32 pb-24">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 max-w-4xl">
          <div className="mb-12">
            <span className="font-gotham text-xs uppercase tracking-[0.2em] text-brand-primary font-bold">
              LEGAL
            </span>
            <h1 className="font-gotham text-4xl md:text-5xl font-extrabold tracking-tight mt-4 mb-6">
              Privacy Policy
            </h1>
            <p className="font-sans text-sm text-foreground/60">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
            </p>
          </div>

          <div className="prose prose-neutral max-w-none font-sans text-foreground/80 leading-relaxed">
            <p>
              At Contemporary Group Limited ("we", "our", or "us"), we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or interact with our services.
            </p>

            <h2 className="font-gotham text-2xl font-bold text-foreground mt-12 mb-4">
              1. Information We Collect
            </h2>
            <p>
              We may collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and services, when you participate in activities on the website, or when you contact us. The personal information we collect depends on the context of your interactions with us and the website.
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li><strong>Personal Data:</strong> Name, email address, phone number, and any other information you provide via our contact or career application forms.</li>
              <li><strong>Derivative Data:</strong> Information our servers automatically collect when you access the website, such as your IP address, browser type, operating system, access times, and the pages you have viewed directly before and after accessing the website.</li>
            </ul>

            <h2 className="font-gotham text-2xl font-bold text-foreground mt-12 mb-4">
              2. How We Use Your Information
            </h2>
            <p>
              We use the information we collect or receive to:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Respond to your inquiries and offer support.</li>
              <li>Process and manage career applications.</li>
              <li>Send administrative information to you.</li>
              <li>Improve our website and services to better serve our clients.</li>
            </ul>

            <h2 className="font-gotham text-2xl font-bold text-foreground mt-12 mb-4">
              3. Disclosure of Your Information
            </h2>
            <p>
              We do not sell, trade, or rent your personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification information regarding visitors and users with our business partners and trusted affiliates for the purposes outlined above.
            </p>

            <h2 className="font-gotham text-2xl font-bold text-foreground mt-12 mb-4">
              4. Security of Your Information
            </h2>
            <p>
              We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
            </p>

            <h2 className="font-gotham text-2xl font-bold text-foreground mt-12 mb-4">
              5. Contact Us
            </h2>
            <p>
              If you have questions or comments about this Privacy Policy, please contact us at:
            </p>
            <div className="bg-neutral-100 p-6 rounded-2xl mt-4">
              <p className="font-bold text-foreground">Contemporary Group Limited</p>
              <p>1 Engineering Close, NSE Building, Victoria Island, Lagos.</p>
              <p>Contemporary Building, Interbau Roundabout, Asaba.</p>
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
