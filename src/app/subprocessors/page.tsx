import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Subprocessors - Green Dash",
  description: "Learn about the third-party subprocessors that Green Dash uses to provide our services.",
};

export default function Subprocessors() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Subprocessors</h1>
          <p className="text-lg text-gray-600 mb-8">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Overview</h2>
            <p className="text-gray-700 mb-4">
              Green Dash works with carefully selected third-party service providers (subprocessors) to deliver our ESG compliance 
              and sustainability services. This page provides transparency about the subprocessors we use and how they process your data.
            </p>
            <p className="text-gray-700">
              All subprocessors are required to maintain appropriate data protection measures and comply with applicable privacy laws. 
              We regularly review and update our subprocessor relationships to ensure they meet our high standards for data protection.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Current Subprocessors</h2>
            
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Subprocessor</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Purpose</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Data Location</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Data Types</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Amazon Web Services (AWS)</td>
                    <td className="px-6 py-4 text-sm text-gray-700">Cloud infrastructure and hosting</td>
                    <td className="px-6 py-4 text-sm text-gray-700">United States, EU</td>
                    <td className="px-6 py-4 text-sm text-gray-700">Application data, user data, analytics</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">HubSpot</td>
                    <td className="px-6 py-4 text-sm text-gray-700">Customer relationship management, marketing automation</td>
                    <td className="px-6 py-4 text-sm text-gray-700">United States, EU</td>
                    <td className="px-6 py-4 text-sm text-gray-700">Contact information, communication data, marketing data</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Google Analytics</td>
                    <td className="px-6 py-4 text-sm text-gray-700">Website analytics and performance monitoring</td>
                    <td className="px-6 py-4 text-sm text-gray-700">United States</td>
                    <td className="px-6 py-4 text-sm text-gray-700">Usage data, device information, IP addresses</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Stripe</td>
                    <td className="px-6 py-4 text-sm text-gray-700">Payment processing</td>
                    <td className="px-6 py-4 text-sm text-gray-700">United States, EU</td>
                    <td className="px-6 py-4 text-sm text-gray-700">Payment information, billing data</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">SendGrid</td>
                    <td className="px-6 py-4 text-sm text-gray-700">Email delivery and management</td>
                    <td className="px-6 py-4 text-sm text-gray-700">United States</td>
                    <td className="px-6 py-4 text-sm text-gray-700">Email addresses, communication content</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Calendly</td>
                    <td className="px-6 py-4 text-sm text-gray-700">Scheduling and appointment management</td>
                    <td className="px-6 py-4 text-sm text-gray-700">United States</td>
                    <td className="px-6 py-4 text-sm text-gray-700">Calendar data, contact information</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">MongoDB Atlas</td>
                    <td className="px-6 py-4 text-sm text-gray-700">Database services</td>
                    <td className="px-6 py-4 text-sm text-gray-700">United States, EU</td>
                    <td className="px-6 py-4 text-sm text-gray-700">Application data, user data, ESG data</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Vercel</td>
                    <td className="px-6 py-4 text-sm text-gray-700">Website hosting and deployment</td>
                    <td className="px-6 py-4 text-sm text-gray-700">Global</td>
                    <td className="px-6 py-4 text-sm text-gray-700">Website data, performance metrics</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Processing Agreements</h2>
            <p className="text-gray-700 mb-4">
              We have Data Processing Agreements (DPAs) in place with all subprocessors that process personal data on our behalf. 
              These agreements ensure that:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>Subprocessors only process data for the specific purposes we have instructed</li>
              <li>Appropriate technical and organizational measures are in place to protect data</li>
              <li>Subprocessors comply with applicable data protection laws</li>
              <li>We maintain control over the data and can audit subprocessor compliance</li>
              <li>Subprocessors notify us of any data breaches or security incidents</li>
              <li>Data is returned or deleted at the end of the service relationship</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Subprocessor Categories</h2>
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Infrastructure Providers</h3>
              <p className="text-gray-700 mb-4">
                These subprocessors provide the technical infrastructure that powers our services:
              </p>
              <ul className="list-disc pl-6 text-gray-700">
                <li>Amazon Web Services (AWS) - Cloud computing and storage</li>
                <li>Vercel - Website hosting and deployment</li>
                <li>MongoDB Atlas - Database services</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Business Operations</h3>
              <p className="text-gray-700 mb-4">
                These subprocessors help us manage our business operations and customer relationships:
              </p>
              <ul className="list-disc pl-6 text-gray-700">
                <li>HubSpot - CRM and marketing automation</li>
                <li>Stripe - Payment processing</li>
                <li>SendGrid - Email delivery</li>
                <li>Calendly - Scheduling services</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Analytics and Monitoring</h3>
              <p className="text-gray-700 mb-4">
                These subprocessors help us understand and improve our services:
              </p>
              <ul className="list-disc pl-6 text-gray-700">
                <li>Google Analytics - Website analytics</li>
                <li>Various monitoring tools - Performance and security monitoring</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Transfers</h2>
            <p className="text-gray-700 mb-4">
              Some of our subprocessors may process data outside of your country of residence. When this occurs, we ensure that:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>Appropriate safeguards are in place (e.g., Standard Contractual Clauses)</li>
              <li>The destination country has adequate data protection laws</li>
              <li>We have obtained necessary authorizations for the transfer</li>
              <li>Data subjects are informed about the transfer</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Subprocessor Changes</h2>
            <p className="text-gray-700 mb-4">
              We may add or change subprocessors from time to time. When we do:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>We will update this page within 30 days</li>
              <li>We will notify existing customers via email</li>
              <li>We will ensure new subprocessors meet our data protection standards</li>
              <li>We will provide an opportunity to object to new subprocessors (where legally required)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Your Rights</h2>
            <p className="text-gray-700 mb-4">
              You have the right to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>Request information about our subprocessors</li>
              <li>Object to the use of specific subprocessors (where legally permitted)</li>
              <li>Request that we not transfer your data to certain countries</li>
              <li>Receive notification of any subprocessor changes</li>
            </ul>
            <p className="text-gray-700">
              To exercise these rights, please contact us using the information provided in the "Contact Us" section.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Security and Compliance</h2>
            <p className="text-gray-700 mb-4">
              All subprocessors are required to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>Implement appropriate technical and organizational security measures</li>
              <li>Comply with applicable data protection laws and regulations</li>
              <li>Maintain certifications such as SOC 2, ISO 27001, or equivalent</li>
              <li>Provide regular security assessments and audits</li>
              <li>Notify us immediately of any security incidents</li>
              <li>Cooperate with our data protection compliance efforts</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions about our subprocessors or data processing practices, please contact us:
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
