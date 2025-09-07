import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Green Dash",
  description: "Learn about how Green Dash collects, uses, and protects your personal information.",
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
          <p className="text-lg text-gray-600 mb-8">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Introduction</h2>
            <p className="text-gray-700 mb-4">
              Green Dash (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy and personal information. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit 
              our website or use our ESG compliance and sustainability services.
            </p>
            <p className="text-gray-700">
              By using our services, you agree to the collection and use of information in accordance with this policy. 
              If you do not agree with our policies and practices, please do not use our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Information We Collect</h2>
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Personal Information</h3>
              <p className="text-gray-700 mb-4">
                We may collect personal information that you voluntarily provide to us, including:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Name and contact information (email, phone number, address)</li>
                <li>Company information and job title</li>
                <li>Account credentials and profile information</li>
                <li>Payment and billing information</li>
                <li>Communication preferences</li>
                <li>Any other information you choose to provide</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Usage Information</h3>
              <p className="text-gray-700 mb-4">
                We automatically collect certain information about your use of our services:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Device information (IP address, browser type, operating system)</li>
                <li>Usage patterns and preferences</li>
                <li>Website interaction data</li>
                <li>Log files and analytics data</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">ESG Data</h3>
              <p className="text-gray-700 mb-4">
                As part of our ESG compliance services, we may collect:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Environmental impact data</li>
                <li>Social responsibility metrics</li>
                <li>Governance information</li>
                <li>Compliance documentation</li>
                <li>Audit reports and assessments</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">How We Use Your Information</h2>
            <p className="text-gray-700 mb-4">
              We use the information we collect for various purposes, including:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li><strong>Service Delivery:</strong> Providing ESG compliance and sustainability services</li>
              <li><strong>Communication:</strong> Responding to inquiries and providing customer support</li>
              <li><strong>Account Management:</strong> Creating and managing user accounts</li>
              <li><strong>Billing:</strong> Processing payments and managing subscriptions</li>
              <li><strong>Improvement:</strong> Enhancing our services and user experience</li>
              <li><strong>Marketing:</strong> Sending promotional materials and updates (with consent)</li>
              <li><strong>Compliance:</strong> Meeting legal and regulatory requirements</li>
              <li><strong>Analytics:</strong> Understanding usage patterns and trends</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Information Sharing and Disclosure</h2>
            <p className="text-gray-700 mb-4">
              We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li><strong>Service Providers:</strong> With trusted third-party vendors who assist in our operations</li>
              <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
              <li><strong>Business Transfers:</strong> In connection with mergers, acquisitions, or asset sales</li>
              <li><strong>Consent:</strong> When you have given explicit consent</li>
              <li><strong>Protection:</strong> To protect the safety and security of our users and services</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Security</h2>
            <p className="text-gray-700 mb-4">
              We implement appropriate technical and organizational measures to protect your personal information against:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>Unauthorized access, use, or disclosure</li>
              <li>Accidental loss or destruction</li>
              <li>Malicious attacks and data breaches</li>
              <li>Improper alteration or modification</li>
            </ul>
            <p className="text-gray-700">
              However, no method of transmission over the internet or electronic storage is 100% secure. 
              While we strive to protect your information, we cannot guarantee absolute security.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Retention</h2>
            <p className="text-gray-700 mb-4">
              We retain your personal information for as long as necessary to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>Provide our services to you</li>
              <li>Comply with legal obligations</li>
              <li>Resolve disputes and enforce agreements</li>
              <li>Maintain business records</li>
            </ul>
            <p className="text-gray-700">
              When personal information is no longer needed, we will securely delete or anonymize it in accordance with our data retention policies.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Your Rights and Choices</h2>
            <p className="text-gray-700 mb-4">
              Depending on your location, you may have certain rights regarding your personal information:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li><strong>Access:</strong> Request access to your personal information</li>
              <li><strong>Correction:</strong> Request correction of inaccurate information</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information</li>
              <li><strong>Portability:</strong> Request transfer of your data to another service</li>
              <li><strong>Restriction:</strong> Request restriction of processing</li>
              <li><strong>Objection:</strong> Object to certain types of processing</li>
              <li><strong>Withdrawal:</strong> Withdraw consent where applicable</li>
            </ul>
            <p className="text-gray-700">
              To exercise these rights, please contact us using the information provided in the &quot;Contact Us&quot; section.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">International Data Transfers</h2>
            <p className="text-gray-700 mb-4">
              Your information may be transferred to and processed in countries other than your own. 
              We ensure that such transfers comply with applicable data protection laws and implement appropriate safeguards, including:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>Standard contractual clauses</li>
              <li>Adequacy decisions</li>
              <li>Certification schemes</li>
              <li>Other appropriate safeguards</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Children&apos;s Privacy</h2>
            <p className="text-gray-700">
              Our services are not intended for children under 13 years of age. We do not knowingly collect personal information 
              from children under 13. If we become aware that we have collected personal information from a child under 13, 
              we will take steps to delete such information promptly.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Changes to This Privacy Policy</h2>
            <p className="text-gray-700 mb-4">
              We may update this Privacy Policy from time to time. We will notify you of any changes by:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>Posting the new Privacy Policy on this page</li>
              <li>Sending you an email notification</li>
              <li>Updating the &quot;Last updated&quot; date</li>
            </ul>
            <p className="text-gray-700">
              We encourage you to review this Privacy Policy periodically for any changes. 
              Changes to this Privacy Policy are effective when they are posted on this page.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions about this Privacy Policy or our privacy practices, please contact us:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-2"><strong>Email:</strong> privacy@greendash.com</p>
              <p className="text-gray-700 mb-2"><strong>Address:</strong> Green Dash, 123 Business Street, City, State 12345</p>
              <p className="text-gray-700 mb-2"><strong>Phone:</strong> +1 (555) 123-4567</p>
              <p className="text-gray-700"><strong>Data Protection Officer:</strong> dpo@greendash.com</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
