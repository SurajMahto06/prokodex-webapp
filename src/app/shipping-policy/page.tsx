import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Shipping & Delivery Policy",
  description: "Read the Prokodex Shipping & Delivery Policy regarding our digital products and services.",
}

export default function ShippingPolicyPage() {
  return (
    <div className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-left">Shipping & Delivery Policy</h1>
        <div className="text-muted-foreground space-y-6 text-left max-w-5xl">
          <p><strong>Last Updated:</strong> 24 June 2026</p>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">1. Purely Digital Operations</h2>
          <p>
            Prokodex is a software development and digital solutions company focused entirely on digital products, including custom software, web applications, and digital marketing strategies. Because we do not deal in physical goods or hardware, there are no traditional shipping procedures, transit times, or freight charges associated with our services.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">2. Project Start & Delivery Time</h2>
          <p>
            We start working on your project as soon as your initial payment is confirmed and you provide all the necessary details we need to begin. The exact time it will take to finish the work or reach specific milestones will be clearly mentioned in your service agreement.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">3. How We Deliver Our Work</h2>
          <p>
            Since our work is 100% digital, all final handoffs, source codes, and reports are transmitted over the internet. Based on the project requirements, delivery typically occurs through one of these channels:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>Direct transfer of files to your designated email address.</li>
            <li>Providing access to secure repositories (like GitHub or GitLab).</li>
            <li>Sharing via encrypted cloud storage solutions (such as Google Drive or AWS).</li>
            <li>Live deployment directly to your web servers or app store accounts.</li>
          </ul>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">4. Client Review & Acceptance</h2>
          <p>
            After we hand over the final digital assets, we ask that you promptly review and test the deliverables. Should you face any difficulties downloading files, accessing repositories, or logging into your new system, please contact our support team immediately at <a href="mailto:info@prokodex.in" className="text-secondary hover:underline">info@prokodex.in</a>. We will quickly resolve the issue and ensure you have full access to your products.
          </p>
        </div>
      </div>
    </div>
  )
}
