"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence, Variants } from "framer-motion"
import {
  Code2,
  Database,
  MonitorSmartphone,
  Smartphone,
  Palette,
  BrainCircuit,
  CheckCircle2,
  ArrowRight,
  Calendar,
  UserPlus,
  Trophy,
  Briefcase,
  ChevronDown,
  Server,
  Cloud,
  LayoutTemplate,
  TrendingUp,
  X
} from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CtaSection } from "@/components/sections/cta-section"
import { CertificateDemo } from "@/components/sections/certificate-demo"

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
}

const stagger: Variants = {
  visible: { transition: { staggerChildren: 0.15 } }
}

const programs = [
  {
    title: "Frontend Development Internship",
    icon: LayoutTemplate,
    duration: "3 Months",
    description: "Master modern web interfaces by building real-world enterprise applications with React and Next.js.",
    syllabus: [
      { period: "Week 1-2", topic: "Advanced HTML5, CSS3, Flexbox & Grid" },
      { period: "Week 3-4", topic: "JavaScript ES6+ & Asynchronous Programming" },
      { period: "Week 5-6", topic: "React.js Component Architecture & Hooks" },
      { period: "Week 7-8", topic: "State Management (Redux/Zustand) & Tailwind CSS" },
      { period: "Week 9-10", topic: "Next.js App Router, SSR & Server Components" },
      { period: "Week 11-12", topic: "Performance Optimization & Enterprise Capstone" }
    ]
  },
  {
    title: "Backend Development Internship",
    icon: Server,
    duration: "3 Months",
    description: "Learn to build high-performance, asynchronous server-side applications and RESTful APIs from scratch.",
    syllabus: [
      { period: "Week 1-2", topic: "Node.js Fundamentals, V8 Engine & Event Loop" },
      { period: "Week 3-4", topic: "Building Robust REST APIs with Express.js" },
      { period: "Week 5-6", topic: "Relational Database Design & PostgreSQL Integration" },
      { period: "Week 7-8", topic: "Authentication (JWT/OAuth) & Security Best Practices" },
      { period: "Week 9-10", topic: "Caching with Redis & Real-time WebSockets" },
      { period: "Week 11-12", topic: "CI/CD Pipelines, Docker Basics & Deployment" }
    ]
  },
  {
    title: "Full Stack Development Internship",
    icon: Database,
    duration: "6 Months",
    description: "Master the most popular full-stack technology. Build scalable web apps using MongoDB, Express, React, and Node.js.",
    syllabus: [
      { period: "Month 1", topic: "Frontend Foundations & Advanced JavaScript" },
      { period: "Month 2", topic: "React.js Mastery & State Management" },
      { period: "Month 3", topic: "Backend Architecture with Node.js & Express" },
      { period: "Month 4", topic: "Database Modeling with MongoDB & Mongoose" },
      { period: "Month 5", topic: "Full Stack Integration & JWT Authentication" },
      { period: "Month 6", topic: "Production Deployment & Capstone Project" }
    ]
  },
  {
    title: "Mobile Development Internship",
    icon: Smartphone,
    duration: "4 Months",
    description: "Build cross-platform mobile apps for iOS and Android using React Native and Flutter.",
    syllabus: [
      { period: "Month 1", topic: "Mobile Dev Fundamentals, Core Components & Styling" },
      { period: "Month 2", topic: "Navigation, Complex Routing & Global State" },
      { period: "Month 3", topic: "Device APIs, Local Storage (SQLite) & Animations" },
      { period: "Month 4", topic: "Push Notifications, API Integration & Play Store Deployment" }
    ]
  }
]

function ProgramCard({ program, index }: { program: typeof programs[0], index: number }) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden'
      document.documentElement.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
      document.documentElement.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
      document.documentElement.style.overflow = ''
    }
  }, [isModalOpen])

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
        whileHover={{ y: -5, transition: { duration: 0.2, ease: "easeOut" } }}
        onClick={() => setIsModalOpen(true)}
        className="group relative p-8 rounded-[2.5rem] bg-card/40 backdrop-blur-sm border border-border/60 hover:border-secondary/50 hover:shadow-2xl transition-[border-color,box-shadow] duration-500 overflow-hidden flex flex-col h-full cursor-pointer"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

        <div className="absolute -top-12 -right-12 w-32 h-32 bg-secondary/20 blur-[50px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

        <div className="relative z-10 flex flex-col flex-1">
          <div className="flex justify-between items-start mb-6">
            <div className="h-14 w-14 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary group-hover:scale-110 group-hover:bg-secondary group-hover:text-secondary-foreground group-hover:rotate-3 transition-all duration-500 shadow-sm">
              <program.icon className="h-7 w-7" />
            </div>
            <div className="inline-flex items-center text-xs font-bold bg-secondary/10 text-secondary px-3 py-1.5 rounded-full border border-secondary/20">
              {program.duration}
            </div>
          </div>

          <h3 className="text-2xl font-bold mb-3 tracking-tight group-hover:text-secondary transition-colors">{program.title}</h3>
          <p className="text-muted-foreground leading-relaxed mb-6">
            {program.description}
          </p>



          {/* Action Buttons */}
          <div className="mt-auto pt-6 border-t border-border/50 flex flex-col gap-3">
            <Link
              href={`/internship/apply?track=${encodeURIComponent(program.title)}`}
              className="w-full cursor-pointer"
              onClick={(e) => e.stopPropagation()}
            >
              <Button className="w-full cursor-pointer bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold h-11 rounded-xl shadow-lg shadow-secondary/20 transition-all hover:shadow-secondary/40 hover:-translate-y-0.5">
                Apply Now
              </Button>
            </Link>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsModalOpen(true);
              }}
              className="flex items-center justify-center gap-2 w-full text-sm font-semibold text-foreground/70 hover:text-foreground transition-colors outline-none cursor-pointer py-2 group/btn"
            >
              <span>See What You'll Learn</span>
              <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-background/80 backdrop-blur-sm cursor-pointer"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-card border border-border shadow-2xl rounded-3xl overflow-hidden flex flex-col max-h-[85vh] z-10"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 md:p-8 border-b border-border bg-muted/30">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary flex-shrink-0">
                    <program.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold leading-tight">{program.title}</h3>
                    <div className="text-sm font-medium text-secondary mt-1">Curriculum Overview</div>
                  </div>
                </div>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="h-10 w-10 rounded-full flex flex-shrink-0 items-center justify-center bg-background border border-border hover:bg-muted hover:text-secondary transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8 overflow-y-auto">
                <p className="text-muted-foreground mb-8 text-sm md:text-base leading-relaxed">
                  {program.description}
                </p>
                <div className="space-y-6">
                  {program.syllabus.map((item, idx) => (
                    <div key={idx} className="flex flex-col sm:flex-row gap-2 sm:gap-6">
                      <div className="w-auto sm:w-32 flex-shrink-0 pt-1">
                        <div className="inline-flex items-center text-xs font-bold bg-secondary/10 text-secondary px-3 py-1.5 rounded-full border border-secondary/20">
                          {item.period}
                        </div>
                      </div>
                      <div className="flex-1 pb-6 border-b border-border/50 last:border-0 last:pb-0">
                        <div className="font-semibold text-foreground md:text-lg leading-snug">{item.topic}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-6 md:p-8 border-t border-border bg-muted/10 flex justify-end">
                <Link href={`/internship/apply?track=${encodeURIComponent(program.title)}`}>
                  <Button className="cursor-pointer bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold px-8 h-12 rounded-xl shadow-lg shadow-secondary/20 transition-all hover:shadow-secondary/40">
                    Apply Now
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}

export default function InternshipPage() {
  const processSteps = [
    { icon: UserPlus, title: "Apply Online", desc: "Submit your resume and portfolio through our simple online application portal." },
    { icon: Code2, title: "Profile Review", desc: "Our team reviews your application to understand your background and current skill level." },
    { icon: Calendar, title: "Program Discussion", desc: "A 1-on-1 discussion to evaluate your skills and choose the best program for your career goals." },
    { icon: Trophy, title: "Selection & Onboarding", desc: "Receive your offer letter and begin your immersive learning journey with us." }
  ]

  const pricingTiers = [
    {
      name: "Standard",
      price: "₹599",
      originalPrice: "₹999",
      description: "Perfect for self-paced learners who just need materials.",
      features: [
        "Portal Access: Access to curriculum and reading materials",
        "PDF Materials: Comprehensive guides and project briefs",
        "Assessments: Module-wise quizzes & interview questions",
        "Certificate: Verified government certificate from MSME"
      ],
      buttonText: "Enroll Standard",
      popular: false,
      id: "standard"
    },
    {
      name: "Premium",
      price: "₹1,199",
      originalPrice: "₹2,499",
      description: "The complete training experience with video lectures.",
      features: [
        "Video Portal: Access to our premium video lectures",
        "PDF Materials: Comprehensive guides and project briefs",
        "Assessments: Module-wise quizzes & interview questions",
        "Doubt Sessions: Weekly group Q&A sessions",
        "Capstone Projects: Build advanced real-world projects",
        "Certificate: Verified government certificate from MSME"
      ],
      buttonText: "Enroll Premium",
      popular: false,
      id: "premium",
      isComingSoon: true
    },
    {
      name: "Elite Mentorship",
      price: "₹2,999",
      originalPrice: "₹4,999",
      description: "Guaranteed 1-on-1 mentorship and full premium access.",
      features: [
        "1-on-1 Mentorship: Dedicated senior engineer mentor",
        "Video Portal: Full access to premium video content",
        "PDF Materials: Comprehensive guides and project briefs",
        "Assessments: Module-wise quizzes & interview questions",
        "Capstone Projects: Build advanced real-world projects",
        "Certificate: Verified government certificate from MSME"
      ],
      buttonText: "Enroll Elite",
      popular: false,
      id: "elite",
      isComingSoon: true
    }
  ]

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-16 pb-16 bg-background flex items-center justify-center overflow-hidden border-b border-border">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-secondary/10 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-4xl mx-auto"
          >
            <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary mb-6 text-sm font-semibold tracking-wide uppercase border border-secondary/20">
              Applications Open for 2026 Batch
            </motion.div>
            <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8">
              Launch Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary/40 via-secondary/80 to-secondary">Tech Career</span>
            </motion.h1>
            <motion.p variants={fadeIn} className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-10">
              Join our industry-leading internship programs. Work on live projects, get mentored by senior engineers, and transition from student to professional.
            </motion.p>
            <motion.div variants={fadeIn}>
              <Link href="/internship/apply">
                <Button size="lg" className="cursor-pointer h-14 px-8 text-lg bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-[0_0_40px_-10px_rgba(6,182,212,0.4)]">
                  Apply Now <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Scholarship Program */}
      <section className="py-12 bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-secondary/10 via-card to-secondary/10 border border-secondary/20 rounded-3xl p-8 md:p-10 shadow-lg text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/20 blur-[50px] rounded-full pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary/20 blur-[50px] rounded-full pointer-events-none" />

              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary mb-4 text-sm font-bold tracking-wide uppercase border border-secondary/20">
                  <BrainCircuit className="h-4 w-4" /> Scholarship Program
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">Are you a gifted coder but facing financial constraints?</h3>
                <p className="text-muted-foreground mb-8 text-lg max-w-2xl mx-auto leading-relaxed">
                  We believe money shouldn't stop true talent. Take our rigorous coding assessment, and if you have what it takes, we'll provide you with a <span className="text-secondary font-bold">100% Free Internship</span> including all premium mentorship benefits.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link href="/internship/apply?plan=general">
                    <Button className="w-full sm:w-auto h-12 px-8 rounded-xl bg-secondary text-secondary-foreground hover:bg-secondary/90 transition-all font-bold cursor-pointer shadow-[0_0_30px_-5px_rgba(6,182,212,0.4)]">
                      Take the Scholarship Test
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Available Programs Grid */}
      <section className="py-16 bg-muted/30 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-6">Available <span className="text-secondary">Programs</span></h2>
            <p className="text-lg text-muted-foreground">
              Intensive, hands-on learning experiences designed to make you industry-ready.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, i) => (
              <ProgramCard key={i} program={program} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 relative overflow-hidden bg-background">
        <div className="container mx-auto px-4">
          <div className="bg-card/30 backdrop-blur-sm border border-border/60 rounded-[3rem] p-8 md:p-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary mb-6 text-sm font-semibold tracking-wide uppercase border border-secondary/20">
                  The Prokodex Advantage
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary/40 via-secondary/80 to-secondary">Intern With Us?</span></h2>
                <ul className="space-y-6">
                  {[
                    "Work on real-world, live enterprise projects",
                    "1-on-1 mentorship with senior developers",
                    "Industry-recognized certificate upon completion",
                    "Resume building and interview preparation",
                    "Modern tech stack and agile best practices"
                  ].map((benefit, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" }}
                      className="flex items-start gap-4"
                    >
                      <div className="mt-1 h-6 w-6 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="h-4 w-4 text-secondary" />
                      </div>
                      <span className="text-lg font-medium text-foreground/90">{benefit}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Stylized Floating UI Elements instead of a boring image */}
              <div className="relative h-[500px] hidden lg:block">
                <div className="absolute inset-0 bg-gradient-to-tr from-secondary/5 to-transparent rounded-[2rem] border border-border/50" />

                {/* Floating Card 1 */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-10 right-10 w-64 bg-background border border-border/80 rounded-2xl p-5 shadow-2xl backdrop-blur-md"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="h-10 w-10 rounded-full bg-secondary/20 flex items-center justify-center">
                      <Briefcase className="h-5 w-5 text-secondary" />
                    </div>
                    <div>
                      <div className="text-sm font-bold">Certificate</div>
                      <div className="text-xs text-muted-foreground">Industry Recognized</div>
                    </div>
                  </div>
                  <div className="h-2 w-full bg-muted rounded-full mb-2 overflow-hidden">
                    <div className="h-full w-full bg-secondary rounded-full" />
                  </div>
                  <div className="text-xs text-right text-muted-foreground">100% Verified</div>
                </motion.div>

                {/* Floating Card 2 */}
                <motion.div
                  animate={{ y: [0, 15, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute bottom-20 left-10 w-72 bg-background border border-border/80 rounded-2xl p-5 shadow-2xl backdrop-blur-md"
                >
                  <div className="flex justify-between items-center mb-4">
                    <div className="text-sm font-bold">Code Review</div>
                    <div className="text-xs font-semibold text-emerald-500 bg-emerald-500/10 px-2 py-1 rounded-md">Approved</div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 w-full bg-muted rounded-full" />
                    <div className="h-2 w-4/5 bg-muted rounded-full" />
                    <div className="h-2 w-5/6 bg-muted rounded-full" />
                  </div>
                  <div className="mt-4 pt-4 border-t border-border/50 flex items-center gap-3">
                    <div className="h-6 w-6 rounded-full bg-secondary/20 flex items-center justify-center text-xs text-secondary font-bold">Sr</div>
                    <div className="text-xs text-muted-foreground">"Great architecture, merged!"</div>
                  </div>
                </motion.div>

                {/* Central Decorative Circle */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 border-4 border-secondary/20 rounded-full flex items-center justify-center">
                  <div className="w-32 h-32 bg-secondary/10 rounded-full animate-pulse flex items-center justify-center">
                    <Code2 className="h-10 w-10 text-secondary" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Certificate Section */}
      <CertificateDemo />

      {/* Pricing Section */}
      <section className="py-16 relative overflow-hidden border-t border-border">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-secondary/5 rounded-full blur-[150px] pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Choose Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary/40 via-secondary/80 to-secondary">Plan</span></h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Fast-track your career with our guaranteed training and mentorship options.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier, i) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.15, duration: 0.6, ease: "easeOut" }}
                className={`relative p-8 rounded-[2rem] border transition-[border-color,box-shadow] duration-300 flex flex-col ${tier.popular
                  ? "bg-card/60 backdrop-blur-md border-secondary shadow-[0_0_40px_-10px_rgba(6,182,212,0.3)] lg:scale-105 z-10"
                  : "bg-card/30 backdrop-blur-sm border-border/60 hover:border-secondary/50"
                  }`}
              >
                {tier.popular && !tier.isComingSoon && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-secondary text-secondary-foreground text-sm font-bold uppercase tracking-wider rounded-full shadow-lg">
                    Most Popular
                  </div>
                )}

                {tier.isComingSoon && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-muted/80 text-muted-foreground text-sm font-bold uppercase tracking-wider rounded-full shadow-md border border-border">
                    Coming Soon
                  </div>
                )}

                <div className={`mb-8 ${tier.isComingSoon ? "opacity-60" : ""}`}>
                  <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                  <p className="text-muted-foreground text-sm h-10">{tier.description}</p>
                </div>

                <div className={`mb-8 pb-8 border-b border-border/50 ${tier.isComingSoon ? "opacity-60" : ""}`}>
                  <div className="flex items-center gap-3 flex-wrap">
                    <div className="flex items-baseline gap-2">
                      <span className="text-5xl font-black">{tier.price}</span>
                      {tier.originalPrice && (
                        <span className="text-xl font-bold text-muted-foreground/60 line-through decoration-muted-foreground/40">{tier.originalPrice}</span>
                      )}
                    </div>
                    {tier.originalPrice && parseInt(tier.originalPrice.replace(/\D/g, "")) > parseInt(tier.price.replace(/\D/g, "")) && (
                      <span className="text-sm font-bold text-emerald-500 bg-emerald-500/10 px-2.5 py-1 rounded-full whitespace-nowrap ml-1 border border-emerald-500/20">
                        Save ₹{(parseInt(tier.originalPrice.replace(/\D/g, "")) - parseInt(tier.price.replace(/\D/g, ""))).toLocaleString('en-IN')}
                      </span>
                    )}
                  </div>
                </div>

                <ul className={`space-y-4 mb-8 flex-1 ${tier.isComingSoon ? "opacity-60" : ""}`}>
                  {tier.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link href={`/internship/apply?plan=${tier.id}`} className={`w-full ${tier.isComingSoon ? "pointer-events-none" : ""}`}>
                  <Button
                    variant={tier.popular ? "default" : "outline"}
                    disabled={tier.isComingSoon}
                    className={`w-full h-12 rounded-xl font-bold text-lg transition-all ${tier.isComingSoon ? "cursor-not-allowed opacity-50 bg-secondary/10 text-secondary border-secondary/20 hover:bg-secondary/10" : "cursor-pointer"} ${tier.popular && !tier.isComingSoon
                      ? "bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-[0_0_20px_-5px_rgba(6,182,212,0.4)] hover:shadow-[0_0_30px_-5px_rgba(6,182,212,0.5)]"
                      : !tier.isComingSoon ? "bg-background/50 border-border/60 hover:bg-secondary hover:text-secondary-foreground hover:border-secondary" : ""
                      }`}
                  >
                    {tier.isComingSoon ? "Coming Soon" : tier.buttonText}
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>


        </div>
      </section>

      {/* How to Apply / Timeline */}
      <section className="py-16 bg-muted/30 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">How to <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary/40 via-secondary/80 to-secondary">Apply</span></h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A streamlined, 4-step process to kickstart your journey.
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            {/* Connecting Line */}
            <div className="absolute top-10 left-0 w-full h-1 bg-gradient-to-r from-border via-secondary/50 to-border -translate-y-1/2 hidden lg:block" />

            <div className="grid lg:grid-cols-4 gap-12 lg:gap-6 relative z-10">
              {processSteps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: i * 0.15, duration: 0.6, ease: "easeOut" }}
                  className="flex flex-col items-center text-center group"
                >
                  <div className="w-20 h-20 rounded-full bg-card border-2 border-border group-hover:border-secondary flex items-center justify-center mb-6 relative z-10 shadow-lg group-hover:scale-110 transition-all duration-300 group-hover:shadow-[0_0_30px_-5px_rgba(6,182,212,0.5)]">
                    <step.icon className="h-8 w-8 text-muted-foreground group-hover:text-secondary transition-colors" />
                    <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center font-bold text-sm shadow-md">
                      {i + 1}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold mb-3">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed px-2">
                    {step.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Dual CTA Section */}
      <CtaSection
        title="Ready to Kickstart Your"
        highlight="Career?"
        description="Don't miss the opportunity to learn from industry experts and build products that matter."
        primaryBtnText="Apply Now"
        primaryBtnLink="/internship/apply"
        primaryBtnIcon={<ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />}
        secondaryBtnText="Have Questions?"
        secondaryBtnLink="/contact"
      />
    </div>
  )
}
