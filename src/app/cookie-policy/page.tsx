import type { Metadata } from "next";
import Layout from "@/components/layout/Index";

export const metadata: Metadata = {
  title: "Cookie Policy - Green Dash",
  description: "Learn about how Green Dash uses cookies to enhance your experience and provide our services.",
};

export default function CookiePolicy() {
  return (
    <Layout>
      <div className="min-h-screen bg-white pt-32">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <div className="prose prose-lg max-w-none">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Cookie Policy</h1>
            <p className="text-lg text-gray-600 mb-8">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">What Are Cookies</h2>
              <p className="text-gray-700 mb-4">
                Cookies are small text files that are placed on your computer or mobile device when you visit our website. 
                They are widely used to make websites work more efficiently and to provide information to website owners.
              </p>
              <p className="text-gray-700">
                Green Dash uses cookies to enhance your browsing experience, analyze site traffic, and personalize content. 
                By continuing to use our website, you consent to our use of cookies as described in this policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Types of Cookies We Use</h2>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Essential Cookies</h3>
                <p className="text-gray-700 mb-4">
                  These cookies are necessary for the website to function properly. They enable basic functions like page navigation, 
                  form submissions, and access to secure areas of the website. The website cannot function properly without these cookies.
                </p>
                <ul className="list-disc pl-6 text-gray-700">
                  <li>Session management cookies</li>
                  <li>Security cookies</li>
                  <li>Load balancing cookies</li>
                  <li>User interface customization cookies</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Analytics Cookies</h3>
                <p className="text-gray-700 mb-4">
                  These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. 
                  This helps us improve our website&apos;s performance and user experience.
                </p>
                <ul className="list-disc pl-6 text-gray-700">
                  <li>Google Analytics cookies</li>
                  <li>Page view tracking</li>
                  <li>User behavior analysis</li>
                  <li>Performance monitoring</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Functional Cookies</h3>
                <p className="text-gray-700 mb-4">
                  These cookies enable enhanced functionality and personalization, such as remembering your preferences and settings.
                </p>
                <ul className="list-disc pl-6 text-gray-700">
                  <li>Language preference cookies</li>
                  <li>Theme selection cookies</li>
                  <li>Form data cookies</li>
                  <li>User preference cookies</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Marketing Cookies</h3>
                <p className="text-gray-700 mb-4">
                  These cookies are used to track visitors across websites to display relevant and engaging advertisements.
                </p>
                <ul className="list-disc pl-6 text-gray-700">
                  <li>Advertising cookies</li>
                  <li>Social media cookies</li>
                  <li>Remarketing cookies</li>
                  <li>Conversion tracking cookies</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Third-Party Cookies</h2>
              <p className="text-gray-700 mb-4">
                We may use third-party services that set cookies on our website. These include:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li><strong>Google Analytics:</strong> For website analytics and performance monitoring</li>
                <li><strong>HubSpot:</strong> For customer relationship management and marketing automation</li>
                <li><strong>Social Media Platforms:</strong> For social sharing and integration features</li>
                <li><strong>Payment Processors:</strong> For secure payment processing</li>
              </ul>
              <p className="text-gray-700">
                These third-party services have their own privacy policies and cookie practices. We recommend reviewing their policies 
                to understand how they use cookies and your data.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Managing Your Cookie Preferences</h2>
              <p className="text-gray-700 mb-4">
                You have several options for managing cookies:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li><strong>Browser Settings:</strong> Most web browsers allow you to control cookies through their settings</li>
                <li><strong>Opt-Out Tools:</strong> Use industry opt-out tools for advertising cookies</li>
                <li><strong>Cookie Consent:</strong> Use our cookie consent banner to manage preferences</li>
                <li><strong>Contact Us:</strong> Reach out to us directly to discuss your preferences</li>
              </ul>
              <p className="text-gray-700">
                Please note that disabling certain cookies may affect the functionality of our website and your user experience.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Cookie Retention</h2>
              <p className="text-gray-700 mb-4">
                Different cookies have different retention periods:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li><strong>Session Cookies:</strong> Deleted when you close your browser</li>
                <li><strong>Persistent Cookies:</strong> Remain on your device for a set period (typically 30 days to 2 years)</li>
                <li><strong>Essential Cookies:</strong> Retained for the duration of your session</li>
                <li><strong>Analytics Cookies:</strong> Typically retained for 24-26 months</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Updates to This Policy</h2>
              <p className="text-gray-700 mb-4">
                We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, 
                legal, or regulatory reasons. We will notify you of any material changes by:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Posting the updated policy on our website</li>
                <li>Sending you an email notification</li>
                <li>Displaying a notice on our website</li>
              </ul>
              <p className="text-gray-700">
                We encourage you to review this policy periodically to stay informed about our use of cookies.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
              <p className="text-gray-700 mb-4">
                If you have any questions about this Cookie Policy or our use of cookies, please contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-2"><strong>Legal Department:</strong> legal@green-dash.com</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
}
