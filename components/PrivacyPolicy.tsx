import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="space-y-6">
      <section>
        <h3 className="font-oswald text-xl tracking-wider text-zinc-800 mb-3">Introduction</h3>
        <p className="mb-4">
          Bold Brick values and respects your privacy. This Privacy Policy explains how we collect, use, store, and protect your personal information when you use our website and related services.
        </p>
      </section>

      <section>
        <h3 className="font-oswald text-xl tracking-wider text-zinc-800 mb-3">1. Information We Collect</h3>
        <p className="mb-3">We collect the following types of information:</p>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li><strong>Personal Information:</strong> Name, email address, phone number, and KYC documents</li>
          <li><strong>Financial Information:</strong> Payment details and wallet addresses</li>
          <li><strong>Technical and Usage Data:</strong> IP address, browser type, device information, and interactions on our platform</li>
        </ul>
      </section>

      <section>
        <h3 className="font-oswald text-xl tracking-wider text-zinc-800 mb-3">2. How We Use Your Information</h3>
        <p className="mb-3">This information is collected to:</p>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>Create and manage user accounts</li>
          <li>Process tokenized real-estate transactions</li>
          <li>Verify identity in compliance with KYC and AML regulations</li>
          <li>Enhance platform functionality</li>
          <li>Communicate updates or marketing materials</li>
        </ul>
        <p className="mt-4">
          <strong>We do not sell or rent personal data to any third party.</strong>
        </p>
      </section>

      <section>
        <h3 className="font-oswald text-xl tracking-wider text-zinc-800 mb-3">3. Legal Basis for Processing</h3>
        <p className="mb-4">
          We process personal data based on your consent, to fulfill contractual obligations, to comply with legal requirements, or to serve legitimate business interests.
        </p>
      </section>

      <section>
        <h3 className="font-oswald text-xl tracking-wider text-zinc-800 mb-3">4. Data Security</h3>
        <p className="mb-4">
          We use encryption, access control, and other industry-standard security measures to protect your information; however, no online platform can guarantee absolute security.
        </p>
      </section>

      <section>
        <h3 className="font-oswald text-xl tracking-wider text-zinc-800 mb-3">5. Data Sharing</h3>
        <p className="mb-3">
          We may share limited personal data with trusted partners such as:
        </p>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>KYC verification providers</li>
          <li>Payment processors</li>
          <li>Legal or regulatory authorities when required by law</li>
        </ul>
        <p className="mt-4">
          We do not share user data for third-party marketing or advertising purposes.
        </p>
      </section>

      <section>
        <h3 className="font-oswald text-xl tracking-wider text-zinc-800 mb-3">6. Cookies and Tracking</h3>
        <p className="mb-4">
          Bold Brick uses cookies to enhance your user experience, track usage patterns, and improve site performance. You can modify or disable cookie preferences in your browser settings at any time.
        </p>
      </section>

      <section>
        <h3 className="font-oswald text-xl tracking-wider text-zinc-800 mb-3">7. Your Rights</h3>
        <p className="mb-3">
          Depending on applicable law, you may have the right to:
        </p>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>Access your personal data</li>
          <li>Correct inaccuracies</li>
          <li>Request deletion</li>
          <li>Withdraw consent for data processing</li>
          <li>Opt out of marketing communications</li>
        </ul>
        <p className="mt-4">
          To exercise these rights, you may contact us at <strong>boldbrickwebsite@gmail.com</strong>
        </p>
      </section>

      <section>
        <h3 className="font-oswald text-xl tracking-wider text-zinc-800 mb-3">8. Data Retention</h3>
        <p className="mb-4">
          We retain user data for as long as necessary to provide services, fulfill legal obligations, and meet KYC or AML requirements, which may extend to five years or longer as required by regulation. After this period, data will be securely deleted or anonymized.
        </p>
      </section>

      <section>
        <h3 className="font-oswald text-xl tracking-wider text-zinc-800 mb-3">9. Changes to This Policy</h3>
        <p className="mb-4">
          This Privacy Policy may be updated periodically to reflect changes in our practices or legal obligations. Any updates will be posted on this page, and continued use of our Services constitutes your acceptance of the revised policy.
        </p>
      </section>

      <section>
        <h3 className="font-oswald text-xl tracking-wider text-zinc-800 mb-3">10. Contact Us</h3>
        <p className="mb-2">
          For privacy-related questions or concerns, please contact us:
        </p>
        <p className="mb-1">
          <strong>Email:</strong> boldbrickwebsite@gmail.com
        </p>
        <p>
          <strong>Address:</strong> GP Arcade, 14/841, Kadamkode Chittur Road, Palakkad, 678551, Kerala, India
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
