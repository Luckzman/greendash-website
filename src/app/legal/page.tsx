import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Legal - Green Dash",
  description: "Legal information, terms of service, and compliance details for Green Dash services.",
};

export default function Legal() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Legal Information</h1>
          <p className="text-lg text-gray-600 mb-8">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Terms of Service</h2>
            <p className="text-gray-700 mb-4">
              By accessing and using Green Dash's services, you agree to be bound by our Terms of Service. 
              These terms govern your use of our ESG compliance and sustainability platform.
            </p>
            <div className="bg-blue-50 p-6 rounded-lg mb-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">Key Terms</h3>
              <ul className="list-disc pl-6 text-blue-800">
                <li>Service usage is subject to our acceptable use policy</li>
                <li>Users must provide accurate information and maintain account security</li>
                <li>We reserve the right to modify or discontinue services with notice</li>
                <li>Intellectual property rights are protected under applicable laws</li>
                <li>Service availability is provided on a best-effort basis</li>
              </ul>
            </div>
            <p className="text-gray-700">
              For the complete Terms of Service, please contact us to request a copy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Service Level Agreement (SLA)</h2>
            <p className="text-gray-700 mb-4">
              Our SLA outlines the performance standards and availability commitments for our services:
            </p>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Service</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Availability</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Response Time</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Support Level</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Platform Access</td>
                    <td className="px-6 py-4 text-sm text-gray-700">99.9%</td>
                    <td className="px-6 py-4 text-sm text-gray-700">24/7</td>
                    <td className="px-6 py-4 text-sm text-gray-700">Standard</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Data Processing</td>
                    <td className="px-6 py-4 text-sm text-gray-700">99.5%</td>
                    <td className="px-6 py-4 text-sm text-gray-700">Business Hours</td>
                    <td className="px-6 py-4 text-sm text-gray-700">Standard</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Report Generation</td>
                    <td className="px-6 py-4 text-sm text-gray-700">99.0%</td>
                    <td className="px-6 py-4 text-sm text-gray-700">Business Hours</td>
                    <td className="px-6 py-4 text-sm text-gray-700">Priority</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Customer Support</td>
                    <td className="px-6 py-4 text-sm text-gray-700">Business Hours</td>
                    <td className="px-6 py-4 text-sm text-gray-700">24 hours</td>
                    <td className="px-6 py-4 text-sm text-gray-700">Standard</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Processing Agreement (DPA)</h2>
            <p className="text-gray-700 mb-4">
              Our DPA governs how we process personal data on behalf of our customers in compliance with applicable data protection laws:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li><strong>Purpose Limitation:</strong> Data is processed only for specified, legitimate purposes</li>
              <li><strong>Data Minimization:</strong> We collect and process only necessary data</li>
              <li><strong>Security Measures:</strong> Appropriate technical and organizational safeguards are implemented</li>
              <li><strong>Data Subject Rights:</strong> We assist with data subject requests and rights</li>
              <li><strong>Breach Notification:</strong> Prompt notification of any data security incidents</li>
              <li><strong>Data Retention:</strong> Data is retained only as long as necessary</li>
              <li><strong>International Transfers:</strong> Adequate safeguards for cross-border data transfers</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Compliance and Certifications</h2>
            <p className="text-gray-700 mb-4">
              Green Dash maintains various compliance certifications and adheres to industry standards:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Security Certifications</h3>
                <ul className="list-disc pl-6 text-gray-700">
                  <li>SOC 2 Type II</li>
                  <li>ISO 27001</li>
                  <li>ISO 27017</li>
                  <li>ISO 27018</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Data Protection</h3>
                <ul className="list-disc pl-6 text-gray-700">
                  <li>GDPR Compliance</li>
                  <li>CCPA Compliance</li>
                  <li>PIPEDA Compliance</li>
                  <li>Data Residency Controls</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Intellectual Property</h2>
            <p className="text-gray-700 mb-4">
              All content, features, and functionality of our services are owned by Green Dash and are protected by copyright, 
              trademark, and other intellectual property laws. This includes:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>Software and platform code</li>
              <li>User interface designs and layouts</li>
              <li>Documentation and training materials</li>
              <li>Brand names, logos, and trademarks</li>
              <li>Methodologies and processes</li>
              <li>Data models and algorithms</li>
            </ul>
            <p className="text-gray-700">
              Users retain ownership of their data and content but grant us necessary licenses to provide our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Limitation of Liability</h2>
            <p className="text-gray-700 mb-4">
              To the maximum extent permitted by law, Green Dash's liability is limited as follows:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>Services are provided "as is" without warranties of any kind</li>
              <li>We are not liable for indirect, incidental, or consequential damages</li>
              <li>Total liability is limited to the amount paid for services in the 12 months preceding the claim</li>
              <li>We are not responsible for third-party actions or content</li>
              <li>Force majeure events are excluded from liability</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Dispute Resolution</h2>
            <p className="text-gray-700 mb-4">
              Any disputes arising from our services will be resolved through the following process:
            </p>
            <ol className="list-decimal pl-6 text-gray-700 mb-4">
              <li><strong>Direct Negotiation:</strong> Parties will attempt to resolve disputes through good faith negotiations</li>
              <li><strong>Mediation:</strong> If negotiation fails, disputes may be submitted to mediation</li>
              <li><strong>Arbitration:</strong> Unresolved disputes will be subject to binding arbitration</li>
              <li><strong>Governing Law:</strong> Disputes are governed by the laws of [Jurisdiction]</li>
            </ol>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Regulatory Compliance</h2>
            <p className="text-gray-700 mb-4">
              Green Dash operates in compliance with applicable laws and regulations, including:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Environmental Regulations</h3>
                <ul className="list-disc pl-6 text-gray-700">
                  <li>CSRD (Corporate Sustainability Reporting Directive)</li>
                  <li>VSME (Very Small and Medium Enterprises) requirements</li>
                  <li>Local environmental reporting laws</li>
                  <li>Carbon disclosure requirements</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Data Protection Laws</h3>
                <ul className="list-disc pl-6 text-gray-700">
                  <li>GDPR (General Data Protection Regulation)</li>
                  <li>CCPA (California Consumer Privacy Act)</li>
                  <li>PIPEDA (Personal Information Protection Act)</li>
                  <li>Local privacy regulations</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Changes to Legal Terms</h2>
            <p className="text-gray-700 mb-4">
              We may update our legal terms from time to time. When we do:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>We will post the updated terms on our website</li>
              <li>We will notify users via email or platform notification</li>
              <li>Material changes will require user acceptance</li>
              <li>Continued use constitutes acceptance of updated terms</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Information</h2>
            <p className="text-gray-700 mb-4">
              For legal inquiries, compliance questions, or to request copies of our legal documents:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-2"><strong>Legal Department:</strong> legal@greendash.com</p>
              <p className="text-gray-700 mb-2"><strong>Compliance Officer:</strong> compliance@greendash.com</p>
              <p className="text-gray-700 mb-2"><strong>Address:</strong> Green Dash, 123 Business Street, City, State 12345</p>
              <p className="text-gray-700 mb-2"><strong>Phone:</strong> +1 (555) 123-4567</p>
              <p className="text-gray-700"><strong>Fax:</strong> +1 (555) 123-4568</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
