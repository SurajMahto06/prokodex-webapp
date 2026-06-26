import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Refund & Cancellation Policy",
  description: "Read the Prokodex Refund and Cancellation Policy for our software development, digital marketing, and internship services.",
}

export default function RefundPolicyPage() {
  return (
    <div className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-left">Refund & Cancellation Policy</h1>
        <div className="text-muted-foreground space-y-6 text-left max-w-5xl">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          
          <p>
            At Prokodex, we strive to ensure that our clients and students are completely satisfied with our services and programs. 
            Because we offer digital products, custom software development, and specialized training programs, our refund policies are tailored to the nature of the specific service.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">1. Software Development & Digital Services</h2>
          <p>
            For custom software development, web development, app development, and digital marketing services:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Initial Deposits:</strong> Any advance payments or initial deposits made to commence a project are generally non-refundable once the project strategy, wireframing, or development work has begun.</li>
            <li><strong>Milestone Payments:</strong> If a project is terminated by the client mid-development, the client is responsible for paying for all work completed up to that point. No refunds will be issued for completed milestones that were already approved.</li>
            <li><strong>Subscription Services:</strong> For ongoing services (like server maintenance or SEO), cancellations must be made 15 days prior to the next billing cycle. We do not provide prorated refunds for mid-cycle cancellations.</li>
          </ul>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">2. Internship & Training Programs</h2>
          <p>
            For our educational and practical training programs:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Before Cohort Starts:</strong> If you wish to cancel your enrollment before the official start date of your internship/training batch, you may be eligible for a partial or full refund (minus administrative fees), subject to the specific terms provided at the time of enrollment.</li>
            <li><strong>After Cohort Starts:</strong> Once the program has officially commenced and access to resources, portals, or mentors has been provided, no refunds will be issued under any circumstances.</li>
          </ul>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">3. Digital Products & Templates</h2>
          <p>
            Due to the non-returnable nature of digital products, source codes, and downloadable templates, all sales of these items are final. We do not offer refunds for digital downloads once the purchase is complete.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">4. Processing of Refunds</h2>
          <p>
            If a refund is approved by our management team, it will be processed and credited back to the original method of payment within 7 to 10 business days.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">5. Contact Us</h2>
          <p>
            If you have any questions or concerns regarding our Refund Policy, or if you wish to initiate a cancellation request, please contact us at:
            <br />
            <strong>Email:</strong> <a href="mailto:info@prokodex.in" className="text-cyan-500 hover:underline">info@prokodex.in</a>
            <br />
            <strong>Phone:</strong> <a href="tel:+917250591448" className="text-cyan-500 hover:underline">+91 72505 91448</a>
          </p>
        </div>
      </div>
    </div>
  )
}
