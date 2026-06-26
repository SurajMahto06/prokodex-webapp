import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Read the Prokodex Privacy Policy. Learn how we handle client data, secure user information, and ensure privacy across our software and digital marketing services.",
}

export default function PrivacyPolicyPage() {
  return (
    <div className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-left">Privacy Policy</h1>
        <div className="text-muted-foreground space-y-6 text-left max-w-5xl">
          <p><strong>Effective Date:</strong> {new Date().toLocaleDateString()}</p>
          
          <p>
            At <strong>Prokodex</strong> ("we", "our", or "us"), your privacy is of utmost importance. This Privacy Policy outlines how we collect, use, process, and protect your personal data when you visit our website, use our services, or engage with our software development, digital marketing, and internship programs.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">1. Information We Collect</h2>
          <p>
            We collect information that you voluntarily provide to us when you express an interest in obtaining information about our services, when you participate in activities on the website, or otherwise when you contact us. This may include:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Personal Identifiers:</strong> Name, email address, phone number, and professional titles.</li>
            <li><strong>Business Information:</strong> Company name, project requirements, and related business data provided during consultations.</li>
            <li><strong>Technical Data:</strong> IP addresses, browser types, device information, and usage metrics collected automatically via cookies.</li>
          </ul>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">2. How We Use Your Information</h2>
          <p>
            We strictly use the information we collect for the following legitimate business purposes:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>To facilitate account creation and logon processes.</li>
            <li>To deliver and facilitate delivery of our digital services, software development, and internship programs to the user.</li>
            <li>To respond to user inquiries, provide technical support, and offer customer service.</li>
            <li>To send administrative information, updates regarding your project, and promotional materials (only if you have opted in).</li>
          </ul>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">3. Data Sharing & Disclosure</h2>
          <p>
            We do not sell, rent, or trade your personal information to third parties. We may share your data only in the following situations:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Service Providers:</strong> We may share data with trusted third-party vendors (e.g., cloud hosting providers) who perform services for us or on our behalf.</li>
            <li><strong>Legal Obligations:</strong> We may disclose your information where we are legally required to do so in order to comply with applicable law, governmental requests, or a judicial proceeding.</li>
            <li><strong>Business Transfers:</strong> In connection with, or during negotiations of, any merger, sale of company assets, or acquisition.</li>
          </ul>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">4. Data Security</h2>
          <p>
            We implement robust, industry-standard organizational and technical security measures specifically designed to protect the security of any personal information we process. Despite our safeguards, no electronic transmission over the internet can be guaranteed to be 100% secure.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">5. Contact Us</h2>
          <p>
            If you have questions, comments, or concerns about this Privacy Policy, please contact our Data Protection Officer at:
            <br /><br />
            <strong>Email:</strong> <a href="mailto:info@prokodex.in" className="text-cyan-500 hover:underline">info@prokodex.in</a>
            <br />
            <strong>Phone:</strong> <a href="tel:+917250591448" className="text-cyan-500 hover:underline">+91 72505 91448</a>
          </p>
        </div>
      </div>
    </div>
  )
}
