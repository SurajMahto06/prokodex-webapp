import { servicesData } from "../data"
import { notFound } from "next/navigation"
import { CtaSection } from "@/components/sections/cta-section"
import { CheckCircle2, ArrowRight, Zap } from "lucide-react"
import { Metadata } from "next"

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug)
  if (!service) return {}

  return {
    title: `${service.title} Services - Prokodex`,
    description: service.description,
  }
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug)

  if (!service) {
    notFound()
  }

  return (
    <div className="flex flex-col min-h-screen overflow-hidden bg-background">
      {/* 1. Hero Section */}
      <section className="relative pt-12 pb-16 md:pt-16 md:pb-24 border-b border-border overflow-hidden">
        {/* Background Effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-secondary/10 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary mb-8 text-sm font-bold tracking-wider uppercase border border-secondary/20 shadow-sm">
              <service.icon className="w-5 h-5" />
              <span>{service.title}</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-[1.15]">
              {service.heroTagline}
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-10">
              {service.description}
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a href="/contact" className="inline-flex items-center justify-center h-14 px-8 font-semibold rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/90 hover:scale-105 transition-all shadow-lg shadow-secondary/20">
                Get a Free Proposal <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a href="#overview" className="inline-flex items-center justify-center h-14 px-8 font-semibold rounded-full bg-secondary/10 text-secondary hover:bg-secondary/20 transition-all border border-secondary/20">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Overview Section */}
      <section id="overview" className="py-16 md:py-24 relative bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center max-w-6xl mx-auto">
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-secondary/20 to-primary/20 blur-2xl rounded-3xl opacity-50" />
                <div className="relative bg-card border border-border/50 rounded-3xl p-8 md:p-12 shadow-2xl">
                  <h3 className="text-2xl font-bold mb-6">Core Capabilities</h3>
                  <ul className="space-y-4">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-4 p-4 rounded-xl bg-muted/50 border border-border/50">
                        <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0 text-secondary">
                          <CheckCircle2 className="w-5 h-5" />
                        </div>
                        <span className="font-semibold text-lg">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">The Solution</h2>
              <div className="w-16 md:w-20 h-1.5 bg-secondary rounded-full mb-6 md:mb-8" />
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                {service.overview}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Benefits Grid */}
      <section className="py-16 md:py-24 relative">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">Why Choose Our {service.title}</h2>
            <p className="text-base md:text-lg text-muted-foreground">We focus on delivering measurable ROI, exceptional performance, and robust security.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.benefits.map((benefit, idx) => (
              <div key={idx} className="group p-6 rounded-3xl bg-card border border-border/50 hover:border-secondary/50 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary mb-5 group-hover:scale-110 group-hover:bg-secondary group-hover:text-secondary-foreground transition-all duration-500">
                  <benefit.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Tech Stack */}
      <section className="py-16 md:py-24 bg-muted/30 border-y border-border relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-8 md:mb-12">Powered by Modern Technologies</h2>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-4xl mx-auto">
            {service.techStack.map((tech, idx) => (
              <div key={idx} className="px-4 py-2 md:px-6 md:py-3 text-sm md:text-base rounded-full bg-card border border-border/50 text-foreground font-semibold shadow-sm hover:border-secondary/50 transition-colors">
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Process Timeline */}
      <section className="py-16 md:py-24 relative">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">How We Work</h2>
            <p className="text-base md:text-lg text-muted-foreground">A proven methodology to ensure your project is delivered on time, within budget, and beyond expectations.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {service.process.map((p, idx) => (
              <div key={idx} className="relative flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center text-3xl font-black mb-6 shadow-lg shadow-secondary/30 relative z-10">
                  {p.step}
                </div>
                {/* Connecting Line */}
                {idx !== service.process.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-[60%] w-full h-[2px] bg-gradient-to-r from-secondary to-transparent -z-0" />
                )}
                <h3 className="text-xl font-bold mb-3">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CtaSection
        title="Ready to Transform Your"
        highlight="Business?"
        description="Schedule a free strategy call to discuss your requirements and see how we can help."
        primaryBtnText="Get in Touch"
        primaryBtnLink="/contact"
        primaryBtnIcon={<ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />}
        secondaryBtnText="View All Services"
        secondaryBtnLink="/services"
      />
    </div>
  )
}
