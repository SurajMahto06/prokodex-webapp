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
  X,
  Globe,
  Layers,
  Terminal,
  Shield,
  BookOpen,
  Clock,
  Sparkles,
  Award,
  FileText,
  GitPullRequest,
  GitBranch,
  Users,
  ExternalLink,
  GraduationCap,
  HelpCircle
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

// Map icon name string -> Lucide component
const ICON_MAP: Record<string, React.ElementType> = {
  Code2, Database, MonitorSmartphone, Smartphone, Palette, BrainCircuit,
  Server, Cloud, LayoutTemplate, TrendingUp, Globe, Layers, Terminal, Shield,
}

export interface SyllabusItem { period: string; topic: string; description?: string }
export interface Program {
  id: string
  title: string
  description: string
  duration: string
  iconName: string
  highlights: string[]
  syllabus: SyllabusItem[]
  isPublished: boolean
  order: number
}

function ProgramAccordionItem({
  program,
  index,
  isOpen,
  onToggle,
}: {
  program: Program
  index: number
  isOpen: boolean
  onToggle: () => void
}) {
  const IconComponent = ICON_MAP[program.iconName] ?? Code2

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ delay: index * 0.05, duration: 0.4, ease: "easeOut" }}
      className={`border rounded-xl md:rounded-2xl overflow-hidden transition-all duration-300 ${isOpen
        ? "bg-card/95 border-secondary/50 border-l-4 border-l-secondary shadow-xl shadow-secondary/5 ring-1 ring-secondary/20"
        : "bg-card/40 hover:bg-card/70 border-border/60 hover:border-secondary/30"
        }`}
    >
      <button
        onClick={onToggle}
        type="button"
        aria-expanded={isOpen}
        className="w-full text-left px-4 py-3 sm:px-5 sm:py-3.5 flex items-center justify-between gap-3 sm:gap-4 cursor-pointer focus:outline-none transition-colors group"
      >
        <div className="flex items-center gap-3 sm:gap-4 flex-1 min-w-0">
          <div
            className={`h-10 w-10 sm:h-11 sm:w-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 ${isOpen
              ? "bg-secondary text-secondary-foreground scale-105 shadow-md shadow-secondary/25 rotate-1"
              : "bg-secondary/10 text-secondary group-hover:bg-secondary/20 group-hover:scale-105"
              }`}
          >
            <IconComponent className="h-5 w-5 sm:h-5 sm:w-5" />
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
              <h3
                className={`text-base sm:text-lg font-bold tracking-tight transition-colors ${isOpen ? "text-secondary" : "text-foreground group-hover:text-secondary"
                  }`}
              >
                {program.title}
              </h3>
              <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded-full bg-secondary/10 text-secondary border border-secondary/20 w-fit">
                <Clock className="h-3 w-3" />
                {program.duration}
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 flex-shrink-0">
          <div
            className={`p-1.5 sm:p-2 rounded-xl transition-all duration-300 flex-shrink-0 ${isOpen
              ? "bg-secondary text-secondary-foreground rotate-180 shadow-md shadow-secondary/20"
              : "bg-muted/60 text-muted-foreground group-hover:bg-muted group-hover:text-foreground"
              }`}
          >
            <ChevronDown className="h-4 w-4" />
          </div>
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-4 sm:px-5 pb-5 pt-0">
              <div className="h-px w-full bg-border/50 mb-4" />

              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {program.description}
              </p>

              {/* Technologies / Highlights */}
              {program.highlights && program.highlights.length > 0 && (
                <div className="mb-4">
                  <span className="text-xs text-foreground uppercase block mb-2">
                    Technologies & Skills Covered
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {program.highlights.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-xs font-semibold bg-secondary/10 text-secondary px-2.5 py-0.5 rounded-md border border-secondary/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Interactive Curriculum Roadmap Timeline */}
              {program.syllabus && program.syllabus.length > 0 && (
                <div className="mb-4 bg-muted/15 border border-border/60 rounded-xl p-3.5 sm:p-4.5">
                  <div className="flex items-center justify-between gap-2 mb-3.5 pb-2 border-b border-border/40">
                    <div className="flex items-center gap-2">
                      <BookOpen className="h-4 w-4 text-secondary" />
                      <span className="text-xs text-foreground uppercase tracking-wide">
                        Curriculum & Project Roadmap
                      </span>
                    </div>
                    <span className="text-[11px] text-muted-foreground font-medium hidden sm:inline-block">
                      {program.syllabus.length} Modules • Weekly Doubt Sessions
                    </span>
                  </div>

                  <div className="space-y-1">
                    {program.syllabus.map((item, sIdx) => {
                      const isLast = sIdx === (program.syllabus.length - 1);
                      return (
                        <div key={sIdx} className="flex items-start gap-3">
                          {/* Left Track: Perfectly centered Dot + Connecting Line */}
                          <div className="flex flex-col items-center flex-shrink-0 self-stretch">
                            <div className="h-3.5 w-3.5 rounded-full bg-background border-2 border-secondary flex items-center justify-center mt-1 z-10 shadow-sm">
                              <div className="h-1.5 w-1.5 rounded-full bg-secondary" />
                            </div>
                            {!isLast && (
                              <div className="w-0.5 bg-secondary/30 flex-1 my-1" />
                            )}
                          </div>

                          {/* Right Content */}
                          <div className={`flex-1 min-w-0 ${!isLast ? "pb-3" : "pb-0.5"}`}>
                            <div className="flex flex-wrap items-center gap-2 mb-0.5">
                              <span className="text-[11px] font-bold text-secondary tracking-wide uppercase px-2 py-0.5 rounded bg-secondary/10 border border-secondary/20">
                                {item.period}
                              </span>
                              <span className="text-foreground text-sm leading-snug">
                                {item.topic}
                              </span>
                            </div>
                            {item.description && (
                              <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                                {item.description}
                              </p>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Footer with Apply CTA */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-1">
                <span className="text-xs text-muted-foreground text-center sm:text-left">
                  Real-world project experience • Weekly doubt sessions • Government Certificate included
                </span>
                <Link
                  href={`/internship/apply?track=${encodeURIComponent(program.title)}`}
                  className="w-full sm:w-auto"
                >
                  <Button className="w-full sm:w-auto cursor-pointer bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold px-5 h-10 rounded-xl shadow-lg shadow-secondary/20 transition-all hover:shadow-secondary/40">
                    Apply for {program.title} <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}



export const FALLBACK_PROGRAMS: Program[] = [
  {
    id: "default-1",
    title: "Frontend Development",
    description: "Master modern web interfaces by building real-world enterprise applications with React and Next.js.",
    duration: "3 Months",
    iconName: "Code2",
    highlights: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    syllabus: [
      { period: "Month 1", topic: "Advanced JavaScript, ES6+, and React Fundamentals" },
      { period: "Month 2", topic: "Next.js App Router, SSR, SSG, State Management, and Tailwind CSS" },
      { period: "Month 3", topic: "Cap-stone Enterprise Project, Performance Optimization & Deployment" }
    ],
    isPublished: true,
    order: 1
  },
  {
    id: "default-2",
    title: "Node.js & Express Backend",
    description: "Learn to build high-performance, asynchronous server-side applications and RESTful APIs from scratch.",
    duration: "3 Months",
    iconName: "Server",
    highlights: ["Node.js", "Express", "MongoDB", "Prisma ORM"],
    syllabus: [
      { period: "Month 1", topic: "Node.js Event Loop, Express Middleware, and REST Architecture" },
      { period: "Month 2", topic: "Database Design with MongoDB & MySQL, Authentication & Security" },
      { period: "Month 3", topic: "Microservices, Caching with Redis, and Production Deployment" }
    ],
    isPublished: true,
    order: 2
  },
  {
    id: "default-3",
    title: "Full Stack MERN & GenAI",
    description: "Master full-stack technology. Build scalable web apps using MongoDB, Express, React, and Node.js.",
    duration: "6 Months",
    iconName: "Database",
    highlights: ["React", "Node.js", "MongoDB", "Express"],
    syllabus: [
      { period: "Months 1-2", topic: "Frontend Mastery with React & Redux Toolkit" },
      { period: "Months 3-4", topic: "Backend Development with Node.js, Express & MongoDB" },
      { period: "Months 5-6", topic: "Full-Stack Integration, Payment Gateways & Real-Time Socket.io Apps" }
    ],
    isPublished: true,
    order: 3
  },
  {
    id: "default-4",
    title: "MEAN Stack Development",
    description: "Learn enterprise-grade full-stack development using MongoDB, Express, Angular, and Node.js.",
    duration: "6 Months",
    iconName: "LayoutTemplate",
    highlights: ["Angular", "TypeScript", "Node.js", "MongoDB"],
    syllabus: [
      { period: "Months 1-2", topic: "Angular Components, RxJS, and Services" },
      { period: "Months 3-4", topic: "Node.js REST API & JWT Authentication" },
      { period: "Months 5-6", topic: "Full-Stack Enterprise Applications & Deployment" }
    ],
    isPublished: true,
    order: 4
  },
  {
    id: "default-5",
    title: "Laravel Backend",
    description: "Build secure, scalable backend architectures using PHP and the powerful Laravel framework.",
    duration: "3 Months",
    iconName: "Globe",
    highlights: ["PHP", "Laravel", "MySQL", "REST APIs"],
    syllabus: [
      { period: "Month 1", topic: "PHP OOP Core & Laravel MVC Architecture" },
      { period: "Month 2", topic: "Eloquent ORM, Authentication, and API Endpoints" },
      { period: "Month 3", topic: "Payment Gateway Integration & Cloud Deployment" }
    ],
    isPublished: true,
    order: 5
  },
  {
    id: "default-6",
    title: "React Native App Dev",
    description: "Build cross-platform mobile apps for iOS and Android using React Native and Expo.",
    duration: "3 Months",
    iconName: "Smartphone",
    highlights: ["React Native", "Expo", "Mobile UI", "APIs"],
    syllabus: [
      { period: "Month 1", topic: "React Native Basics, Components & Navigation" },
      { period: "Month 2", topic: "State Management, Native Device APIs & Storage" },
      { period: "Month 3", topic: "Publishing to App Store & Google Play" }
    ],
    isPublished: true,
    order: 6
  },
  {
    id: "default-7",
    title: "Flutter App Development",
    description: "Create beautiful, natively compiled, multi-platform applications from a single codebase using Flutter and Dart.",
    duration: "3 Months",
    iconName: "MonitorSmartphone",
    highlights: ["Flutter", "Dart", "BLoC Pattern", "Firebase"],
    syllabus: [
      { period: "Month 1", topic: "Dart Programming & Flutter UI Widgets" },
      { period: "Month 2", topic: "State Management (Provider/BLoC) & REST APIs" },
      { period: "Month 3", topic: "Firebase Integration & Production Release" }
    ],
    isPublished: true,
    order: 7
  },
  {
    id: "default-8",
    title: "UI/UX Design",
    description: "Design intuitive digital products. Master user research, wireframing, and high-fidelity prototyping in Figma.",
    duration: "3 Months",
    iconName: "Palette",
    highlights: ["Figma", "User Research", "Wireframing", "Prototyping"],
    syllabus: [
      { period: "Month 1", topic: "Design Principles, Color Theory & Typography" },
      { period: "Month 2", topic: "Figma Mastery, Component Systems & Auto Layout" },
      { period: "Month 3", topic: "User Research, Usability Testing & Portfolio Creation" }
    ],
    isPublished: true,
    order: 8
  },
  {
    id: "default-9",
    title: "Gen AI & AI Web Dev",
    description: "Integrate Artificial Intelligence into web applications. Build custom AI agents, chatbots, and generative AI tools.",
    duration: "3 Months",
    iconName: "BrainCircuit",
    highlights: ["OpenAI API", "LangChain", "Vector DBs", "Python/Next.js"],
    syllabus: [
      { period: "Month 1", topic: "Prompt Engineering & OpenAI API Integration" },
      { period: "Month 2", topic: "RAG Systems, Vector Databases (Pinecone/Chroma)" },
      { period: "Month 3", topic: "Building Autonomous AI Agents & Full-Stack AI SaaS" }
    ],
    isPublished: true,
    order: 9
  }
];

export default function InternshipPage({ initialPrograms = FALLBACK_PROGRAMS }: { initialPrograms?: Program[] }) {
  const [programs, setPrograms] = useState<Program[]>(initialPrograms && initialPrograms.length > 0 ? initialPrograms : FALLBACK_PROGRAMS);
  const [loading, setLoading] = useState<boolean>(false);
  const [openProgramId, setOpenProgramId] = useState<string | null>(null);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  useEffect(() => {
    // Keep client synced in background if new programs are published
    async function syncPrograms() {
      try {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api/v1";
        const res = await fetch(`${apiUrl}/programs?publishedOnly=true`);
        if (res.ok) {
          const data = await res.json();
          if (Array.isArray(data) && data.length > 0) {
            setPrograms(data);
          }
        }
      } catch (err) {
        console.error("Failed to sync programs in background:", err);
      }
    }
    syncPrograms();
  }, []);

  const processSteps = [
    {
      stepNumber: "01",
      phase: "Phase 1",
      stage: "Application",
      icon: UserPlus,
      title: "Apply Online",
      desc: "Submit your basic details and select your preferred internship track through our simple application form.",
      bullets: [
        "Choose Frontend, Backend, MERN with GenAI etc.",
        "Quick 2-minute online application form",
        "Instant confirmation & track guidance",
      ],
    },
    {
      stepNumber: "02",
      phase: "Phase 2",
      stage: "Onboarding",
      icon: Terminal,
      title: "Offer & Portal Onboarding",
      desc: "Receive your official offer letter and immediate login credentials to your dedicated student portal.",
      bullets: [
        "Official college-acceptable offer letter",
        "Dedicated student portal access",
        "Project syllabus & roadmap overview",
      ],
    },
    {
      stepNumber: "03",
      phase: "Phase 3",
      stage: "Learning & Prep",
      icon: BookOpen,
      title: "Months 1–2: Study, Prep & Mini Projects",
      desc: "Master key concepts with structured notes, solve topic quizzes, attend doubt sessions, and build practical mini projects.",
      bullets: [
        "Topic-wise study notes & cheat sheets",
        "Interactive quizzes after every module",
        "Guided hands-on mini assignments",
      ],
    },
    {
      stepNumber: "04",
      phase: "Phase 4",
      stage: "Capstone & Career",
      icon: Code2,
      title: "Month 3: Project, Deployment, Mock Interview & Certification",
      desc: "Build & deploy a live enterprise project, clear 1-on-1 mock technical interviews, and earn your verified certificate.",
      bullets: [
        "Live deployed project with GitHub repo",
        "1-on-1 mock technical interview defense",
        "Govt. recognized certificate (custom tenure)",
      ],
    },
  ];

  const internshipOverview = [
    {
      duration: "1 Month",
      level: "Beginner Level",
      desc: "For students starting from scratch to build strong coding fundamentals.",
      tag: "Beginner",
      icon: Clock,
      popular: false,
    },
    {
      duration: "2 Months",
      level: "Intermediate Level",
      desc: "Project-based skill development with hands-on practical assignments.",
      tag: "Intermediate",
      icon: Layers,
      popular: false,
    },
    {
      duration: "3 Months",
      level: "Advanced Level",
      desc: "Career-ready training with real-world projects and mentor reviews.",
      tag: "Most Popular",
      icon: TrendingUp,
      popular: true,
    },
    {
      duration: "Custom Duration",
      level: "As Per Student Requirement",
      desc: "Flexible timeline based on learning pace, college schedule, or goals.",
      tag: "Flexible",
      icon: Calendar,
      popular: false,
    },
  ];

  const internshipAdvantages = [
    {
      icon: Terminal,
      title: "Dedicated Internship Portal",
      desc: "Your personal dashboard to access project tasks, Q&A, and study materials, and track your daily progress in one place.",
    },
    {
      icon: BookOpen,
      title: "Complete Study Material & Notes",
      desc: "Easy-to-understand study notes, practical guides, and cheat sheets so you can learn clearly without any confusion.",
    },
    {
      icon: FileText,
      title: "Topic Quizzes & Interview Prep",
      desc: "Short quizzes and common interview questions after every topic to test what you learned and get interview-ready.",
    },
    {
      icon: Users,
      title: "Weekly Live Doubt Sessions",
      desc: "Interact with senior developers in weekly live sessions to solve code blockers, fix errors, and keep your progress on track.",
    },
    {
      icon: Code2,
      title: "Real-World Projects",
      desc: "Work on practical, live project deliverables with real requirements rather than dummy exercises or basic classroom tutorials.",
    },
    {
      icon: GitPullRequest,
      title: "Senior Code Reviews",
      desc: "Get your project code reviewed regularly by senior developers with helpful feedback to write clean, bug-free code.",
    },
    {
      icon: Layers,
      title: "Industry Standards & Clean Code",
      desc: "Learn professional development standards, modular file organization, and best coding practices used in actual software companies.",
    },
    {
      icon: BrainCircuit,
      title: "1-on-1 Mock Technical Interviews",
      desc: "Practice technical questions and project defense 1-on-1 with experienced mentors to build confidence for real interviews.",
    },
    {
      icon: Award,
      title: "Government Recognized Certificate",
      desc: "Earn an official government-recognized certificate with a verifiable QR code to showcase your achievement on LinkedIn and your resume.",
    },
  ];

  const completionDeliverables = [
    {
      icon: Award,
      badge: "Govt. Recognized",
      title: "Government Recognized Certificate",
      description: "Official certificate with unique QR code verification for LinkedIn & recruiters.",
    },
    {
      icon: Globe,
      badge: "Production Ready",
      title: "Live Deployed Project",
      description: "Enterprise web/mobile app deployed live with public GitHub source code.",
    },
    {
      icon: Trophy,
      badge: "Merit Based",
      title: "Letter of Recommendation (LOR)",
      description: "Signed Letter of Recommendation (LOR) for top performers highlighting excellence.",
    },
    {
      icon: FileText,
      badge: "Placement Asset",
      title: "Interview-Ready Resume Points",
      description: "ATS-optimized bullet points & project architecture summary for tech interviews.",
    },
    {
      icon: Terminal,
      badge: "Interview Ready",
      title: "1-on-1 Mock Technical Interview",
      description: "Live project defense & mock technical interview with senior engineers to prepare for company rounds.",
    },
    {
      icon: TrendingUp,
      badge: "Industry Standard",
      title: "Student-to-Professional Transition",
      description: "Transform from a college beginner into a job-ready developer equipped for real company environments.",
    },
  ];

  const heroHighlights = [
    { icon: Award, label: "Govt. Recognized Certificate" },
    { icon: Terminal, label: "Dedicated Internship Portal" },
    { icon: BrainCircuit, label: "1-on-1 Mock Interviews" },
    { icon: BookOpen, label: "Complete Study Material & Notes" },
    { icon: FileText, label: "Topic Quizzes & Interview Prep" },
    { icon: CheckCircle2, label: "Live Projects & Weekly Doubts" },
  ];

  const eligibilityAudience = [
    {
      icon: GraduationCap,
      badge: "College Students",
      title: "B.Tech, BCA, MCA & BSc Students",
      desc: "Ideal for mandatory semester internships, minor/major projects, or summer training with official college verification support.",
      criteria: [
        "Eligible from 1st year to final semester",
        "Official college NOC & offer letter support",
        "Flexible timeline matching college classes",
      ],
    },
    {
      icon: Users,
      badge: "Career Switchers",
      title: "Non-IT & Career Changers",
      desc: "Transition into tech with beginner-friendly notes, guided coding exercises, and patient 1-on-1 mentor support.",
      criteria: [
        "Zero prior coding degree required",
        "Structured zero-to-hero curriculum",
        "Practical hands-on doubt solving",
      ],
    },
    {
      icon: Code2,
      badge: "Self-Learners",
      title: "Self-Taught Developers",
      desc: "Break out of tutorial fatigue by working with Git branches, PRs, senior code reviews, and shipping live products.",
      criteria: [
        "Collaborative Git team workflows",
        "Live deployment on production cloud",
        "Clean architecture & senior code reviews",
      ],
    },
    {
      icon: Briefcase,
      badge: "Placement Seekers",
      title: "Job-Ready Freshers & Graduates",
      desc: "Build tangible proof-of-work for recruiters with live projects, ATS-optimized resume points, and 1-on-1 mock interviews.",
      criteria: [
        "Resume-ready live project GitHub links",
        "1-on-1 mock technical defense sessions",
        "Verified QR certificate & LOR on merit",
      ],
    },
  ];

  const faqList = [
    {
      q: "Is this internship program online or offline?",
      a: "We offer both 100% Online (Flexible) and Offline options. Online interns get 24/7 access to our dedicated student portal, structured study notes, weekly mentor doubt sessions, and sprint reviews. You can easily manage your internship alongside college classes or jobs.",
    },
    {
      q: "What is the duration of the internship?",
      a: "We offer flexible durations of 1 Month (Beginner), 2 Months (Intermediate), and 3 Months (Advanced & Career-Ready). We also support Custom Durations tailored to your college semester credits, summer training requirements, or personal learning pace.",
    },
    {
      q: "Will my college/university accept this certificate and offer letter?",
      a: "Yes, 100%. Our offer letters and completion certificates include official corporate credentials, registration details, and unique QR code verification.",
    },
    {
      q: "Will I receive certificates or recommendations?",
      a: "Yes! Every candidate who completes their project deliverables receives an official, government-recognized Certificate of Completion with a verifiable QR code. Top-performing interns also receive a signed Letter of Recommendation (LOR) for their job and placement applications.",
    },
    {
      q: "I am a complete beginner with no coding experience. Can I apply?",
      a: "Absolutely. Our 1-Month and 2-Month tracks begin with core programming fundamentals from scratch. You will receive chapter-wise notes, cheat sheets, interactive topic quizzes, and mentor support to guide you every step of the way.",
    },
    {
      q: "How do I access study materials, quizzes, and project tasks?",
      a: "Upon onboarding, you receive immediate credentials to your dedicated Student Portal. Everything—from your track syllabus, downloadable study notes, and module quizzes to assignment submissions and certificates—is seamlessly available in your portal dashboard.",
    },
    {
      q: "Will I work on a live project that I can showcase to recruiters?",
      a: "Yes. Every intern builds a production-grade capstone application that is deployed live to the cloud with a public GitHub repository. You will also participate in a 1-on-1 mock technical interview to prepare you to defend your code in real company interviews.",
    },
    {
      q: "How does the Merit-Based 100% Free Scholarship test work?",
      a: "We believe finances should never stop genuine talent. Any student facing financial constraints can take our online coding and aptitude assessment test. Clearing the benchmark unlocks a 100% Free Internship with full mentor support, live projects, and certificate issuance.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/* 1. Hero Section */}
      <section className="relative pt-12 pb-12 sm:pt-14 sm:pb-14 bg-background flex items-center justify-center overflow-hidden border-b border-border">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-secondary/10 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-4xl mx-auto"
          >
            <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary/10 text-secondary mb-6 text-xs sm:text-sm font-semibold tracking-wide uppercase border border-secondary/20">
              <span className="flex h-2 w-2 rounded-full bg-secondary animate-pulse" />
              Applications Open for 2026 Batch
            </motion.div>
            <motion.h1 variants={fadeIn} className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-6">
              Launch Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary/40 via-secondary/80 to-secondary">Tech Career</span>
            </motion.h1>
            <motion.p variants={fadeIn} className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-7">
              Build real-world projects with our all-in-one dedicated portal, access complete study notes, practice topic quizzes &amp; mock interviews, and earn an official government-recognized certificate.
            </motion.p>

            {/* Feature Highlight Pills */}
            <motion.div variants={fadeIn} className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 max-w-3xl mx-auto mb-9">
              {heroHighlights.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-card/70 border border-border/70 text-xs sm:text-sm font-medium text-foreground/90 shadow-sm backdrop-blur-sm hover:border-secondary/40 transition-colors"
                  >
                    <Icon className="h-3.5 w-3.5 text-secondary flex-shrink-0" />
                    <span>{item.label}</span>
                  </div>
                );
              })}
            </motion.div>

            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4">
              <Link href="/internship/apply">
                <Button size="lg" className="w-full sm:w-auto cursor-pointer h-13 px-8 text-base font-semibold bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-[0_0_40px_-10px_rgba(6,182,212,0.4)]">
                  Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <a href="#programs">
                <Button size="lg" variant="outline" className="w-full sm:w-auto cursor-pointer h-13 px-7 text-base font-semibold border-secondary/30 hover:border-secondary/60 hover:bg-secondary/10 hover:text-secondary text-foreground transition-all">
                  View Programs
                </Button>
              </a>
              <a
                href={process.env.NEXT_PUBLIC_PORTAL_URL || "https://portal.prokodex.in"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" variant="outline" className="w-full sm:w-auto cursor-pointer h-13 px-6 text-base font-semibold border-border/80 hover:border-secondary/60 hover:bg-secondary/10 hover:text-secondary text-foreground transition-all">
                  <ExternalLink className="mr-2 h-4 w-4 text-secondary" /> Student Portal
                </Button>
              </a>
            </motion.div>

            {/* Hero Stats Strip */}
            <motion.div
              variants={fadeIn}
              className="mt-12 pt-8 border-t border-border/50 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6 max-w-3xl mx-auto"
            >
              <div className="flex items-center sm:flex-col justify-center gap-3 sm:gap-1.5 p-4 rounded-xl bg-card/40 sm:bg-card/25 border border-border/50 backdrop-blur-sm hover:border-secondary/40 transition-colors">
                <div className="flex items-center gap-2 text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                  <Users className="h-5 w-5 sm:h-6 sm:w-6 text-secondary flex-shrink-0" />
                  <span>100<span className="text-secondary">+</span></span>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground font-medium text-left sm:text-center">
                  Interns Trained &amp; Mentored
                </p>
              </div>

              <div className="flex items-center sm:flex-col justify-center gap-3 sm:gap-1.5 p-4 rounded-xl bg-card/40 sm:bg-card/25 border border-border/50 backdrop-blur-sm hover:border-secondary/40 transition-colors">
                <div className="flex items-center gap-2 text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                  <Code2 className="h-5 w-5 sm:h-6 sm:w-6 text-secondary flex-shrink-0" />
                  <span>10<span className="text-secondary">+</span></span>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground font-medium text-left sm:text-center">
                  Live Real-World Projects
                </p>
              </div>

              <div className="flex items-center sm:flex-col justify-center gap-3 sm:gap-1.5 p-4 rounded-xl bg-card/40 sm:bg-card/25 border border-border/50 backdrop-blur-sm hover:border-secondary/40 transition-colors">
                <div className="flex items-center gap-2 text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                  <Award className="h-5 w-5 sm:h-6 sm:w-6 text-secondary flex-shrink-0" />
                  <span>100<span className="text-secondary">%</span></span>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground font-medium text-left sm:text-center">
                  Verified QR Certificates
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. Available Programs Accordion */}
      <section id="programs" className="py-10 sm:py-14 bg-muted/30 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary/10 text-secondary mb-3 text-xs font-semibold tracking-wide uppercase border border-secondary/20">
              <Sparkles className="h-3.5 w-3.5" /> Internship Tracks
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-2">Available <span className="text-secondary">Programs</span></h2>
            <p className="text-base sm:text-lg text-muted-foreground">
              Hands-on practical tracks designed for real project exposure. Select any program to explore its practical project milestones.
            </p>
          </div>

          {loading ? (
            <div className="max-w-5xl mx-auto space-y-2.5">
              {[1, 2, 3, 4, 5].map((idx) => (
                <div key={idx} className="p-4 rounded-xl bg-card/40 border border-border/60 animate-pulse h-14" />
              ))}
            </div>
          ) : (
            <div className="max-w-5xl mx-auto space-y-2.5">
              {programs.map((program, i) => {
                const programId = program.id || String(i);
                return (
                  <ProgramAccordionItem
                    key={programId}
                    program={program}
                    index={i}
                    isOpen={openProgramId === programId}
                    onToggle={() => setOpenProgramId(prev => prev === programId ? null : programId)}
                  />
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* 3. Why Intern With Us? / The Prokodex Advantage */}
      <section className="py-10 sm:py-14 relative overflow-hidden bg-background border-t border-border">
        <div className="container mx-auto px-4">
          <div className="bg-card/30 backdrop-blur-sm border border-border/60 rounded-2xl md:rounded-3xl p-6 sm:p-10 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="relative z-10 w-full">
              <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary mb-3 text-xs sm:text-sm font-semibold tracking-wide uppercase border border-secondary/20">
                  <Briefcase className="h-3.5 w-3.5" /> Hands-On Internship Experience
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-3 tracking-tight">
                  Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary/40 via-secondary/80 to-secondary">Intern With Us?</span>
                </h2>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  Gain real practical project exposure. Work on live deliverables, receive constructive code feedback from senior developers, and build real development confidence.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 w-full">
                {internshipAdvantages.map((adv, i) => {
                  const Icon = adv.icon;
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-30px" }}
                      transition={{ delay: i * 0.08, duration: 0.4, ease: "easeOut" }}
                      className="flex flex-col items-start p-5 sm:p-6 rounded-xl sm:rounded-2xl bg-card/50 hover:bg-card/80 border border-border/60 hover:border-secondary/40 transition-all hover:shadow-md"
                    >
                      <div className="h-10 w-10 rounded-xl bg-secondary/15 text-secondary flex items-center justify-center mb-3.5 border border-secondary/25 shadow-sm">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h4 className="text-base sm:text-lg font-bold text-foreground mb-1.5">{adv.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{adv.desc}</p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Internship Overview */}
      <section className="py-10 sm:py-14 bg-muted/20 relative overflow-hidden border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary/10 text-secondary mb-3 text-xs sm:text-sm font-semibold tracking-wide uppercase border border-secondary/20">
              <Calendar className="h-3.5 w-3.5" /> Program Duration Models
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-3 tracking-tight">
              Internship <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary/40 via-secondary/80 to-secondary">Overview</span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Flexible online &amp; offline internship programs designed for students, freshers, and working professionals to build career-ready skills with industry experts.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 max-w-6xl mx-auto">
            {internshipOverview.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ delay: i * 0.08, duration: 0.4, ease: "easeOut" }}
                  className={`relative p-5 sm:p-6 rounded-2xl border transition-all duration-300 flex flex-col justify-between group ${item.popular
                    ? "bg-card/70 border-secondary/50 shadow-lg shadow-secondary/10 hover:border-secondary"
                    : "bg-card/40 hover:bg-card/70 border-border/60 hover:border-secondary/40 hover:shadow-md"
                    }`}
                >
                  {item.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="bg-secondary text-secondary-foreground text-[11px] font-bold px-3 py-0.5 rounded-full shadow-md uppercase tracking-wider">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div>
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <div className="h-10 w-10 rounded-xl bg-secondary/10 text-secondary border border-secondary/25 flex items-center justify-center group-hover:scale-105 group-hover:bg-secondary group-hover:text-secondary-foreground transition-all duration-300 shadow-sm">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="text-xs font-semibold text-muted-foreground">
                        {item.tag}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-extrabold text-foreground mb-1 tracking-tight">
                      {item.duration}
                    </h3>
                    <div className="text-xs sm:text-sm font-bold text-secondary mb-2.5 sm:mb-3">
                      {item.level}
                    </div>

                    <div className="border-t border-border/60 my-3" />

                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. What You Get After Completing */}
      <section className="py-10 sm:py-14 relative overflow-hidden border-t border-border bg-background">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-secondary/5 rounded-full blur-[140px] pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-secondary/10 text-secondary mb-3 text-xs font-bold tracking-wide uppercase border border-secondary/20">
              <Award className="h-3.5 w-3.5" /> Career Proof &amp; Deliverables
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
              What You Get <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary/40 via-secondary/80 to-secondary">After Completing</span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Everything you need to showcase your practical project skills, strengthen your resume, and crack job interviews.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 max-w-6xl mx-auto">
            {completionDeliverables.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ delay: i * 0.06, duration: 0.4, ease: "easeOut" }}
                  className="group relative p-3.5 sm:p-4.5 rounded-xl sm:rounded-2xl bg-card/40 hover:bg-card/70 border border-border/60 hover:border-secondary/40 shadow-sm transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2.5 mb-2 sm:mb-2.5">
                      <div className="h-8 w-8 sm:h-9 sm:w-9 rounded-lg bg-secondary/10 text-secondary flex items-center justify-center flex-shrink-0 group-hover:scale-105 group-hover:bg-secondary group-hover:text-secondary-foreground transition-all duration-300 shadow-sm">
                        <Icon className="h-4 w-4 sm:h-4.5 sm:w-4.5" />
                      </div>
                      <span className="text-[10px] sm:text-[11px] font-semibold text-secondary bg-secondary/10 px-2 py-0.5 rounded-full border border-secondary/20">
                        {item.badge}
                      </span>
                    </div>

                    <h3 className="text-sm sm:text-base font-bold mb-1 group-hover:text-secondary transition-colors leading-snug">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. Demo Certificate Section */}
      <CertificateDemo />

      {/* 7. Who Can Apply? / Eligibility */}
      <section className="py-10 sm:py-14 bg-background relative overflow-hidden border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary/10 text-secondary mb-3 text-xs sm:text-sm font-semibold tracking-wide uppercase border border-secondary/20">
              <GraduationCap className="h-3.5 w-3.5" /> Eligibility Criteria
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-3 tracking-tight">
              Who Can <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary/40 via-secondary/80 to-secondary">Apply?</span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Designed for ambitious learners at every stage — whether you need college credits or are building proof of work for job interviews.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 max-w-7xl mx-auto">
            {eligibilityAudience.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ delay: i * 0.08, duration: 0.4, ease: "easeOut" }}
                  className="p-5 sm:p-6 rounded-2xl bg-card/40 hover:bg-card/70 border border-border/60 hover:border-secondary/40 transition-all duration-300 flex flex-col justify-between group h-full hover:shadow-lg hover:shadow-secondary/5"
                >
                  <div>
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <div className="h-10 w-10 rounded-xl bg-secondary/10 text-secondary border border-secondary/25 flex items-center justify-center group-hover:scale-105 group-hover:bg-secondary group-hover:text-secondary-foreground transition-all duration-300 shadow-sm">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="text-[11px] font-semibold text-secondary bg-secondary/10 px-2.5 py-0.5 rounded-full border border-secondary/20">
                        {item.badge}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-foreground mb-2 group-hover:text-secondary transition-colors leading-snug min-h-[48px] flex items-center">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-4 min-h-[56px]">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-border/60 mt-auto">
                    <ul className="space-y-1.5">
                      {item.criteria.map((crit, cIdx) => (
                        <li key={cIdx} className="flex items-start gap-2 text-xs text-foreground/80">
                          <CheckCircle2 className="h-3.5 w-3.5 text-secondary flex-shrink-0 mt-0.5" />
                          <span className="leading-snug">{crit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8. How It Works / Internship Roadmap */}
      <section className="py-10 sm:py-14 bg-muted/20 relative overflow-hidden border-t border-border">
        {/* Subtle ambient background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-secondary/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10 max-w-7xl">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-secondary/10 text-secondary mb-3 text-xs sm:text-sm font-semibold tracking-wide uppercase border border-secondary/20 shadow-sm">
              <Sparkles className="h-3.5 w-3.5" /> Complete 4-Step Roadmap
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-3 tracking-tight">
              How It <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary/50 via-secondary to-secondary">Works</span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              A structured, transparent step-by-step pathway — from day one registration to your verified, industry-ready credential.
            </p>
          </div>

          {/* Stepper Progress Bar (Desktop / Large screen) */}
          <div className="hidden lg:block mb-7 relative">
            {/* Connecting Track Line */}
            <div className="absolute top-6 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-secondary/20 via-secondary/60 to-secondary/20 z-0" />

            <div className="grid grid-cols-4 relative z-10">
              {processSteps.map((step, idx) => (
                <div key={idx} className="flex flex-col items-center text-center">
                  <div className="h-12 w-12 rounded-full bg-card border-2 border-secondary/80 flex items-center justify-center text-secondary font-black font-mono text-sm shadow-md shadow-secondary/15 ring-4 ring-background">
                    {step.stepNumber}
                  </div>
                  <span className="mt-2.5 text-xs font-semibold text-secondary uppercase tracking-wider">
                    {step.stage}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* 4 Connected Step Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {processSteps.map((step, i) => {
              const Icon = step.icon;
              const isLast = i === processSteps.length - 1;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" }}
                  className="relative p-6 sm:p-7 rounded-2xl bg-card/70 hover:bg-card border border-border/80 hover:border-secondary/50 transition-all duration-300 hover:shadow-xl hover:shadow-secondary/10 flex flex-col justify-between group h-full"
                >
                  {/* Ghost Step Number in Background */}
                  <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
                    <span className="absolute -top-2 -right-2 text-6xl sm:text-7xl font-black font-mono leading-none text-foreground/[0.06] group-hover:text-secondary/15 select-none transition-all duration-300">
                      {step.stepNumber}
                    </span>
                  </div>

                  {/* Desktop Step-to-Step Arrow Connector */}
                  {!isLast && (
                    <div className="hidden lg:flex absolute -right-[15px] top-1/2 -translate-y-1/2 z-30 w-7 h-7 rounded-full bg-secondary text-secondary-foreground items-center justify-center shadow-lg shadow-secondary/30 border-2 border-background">
                      <ArrowRight className="h-3.5 w-3.5 stroke-[2.5]" />
                    </div>
                  )}

                  <div className="relative z-10">
                    {/* Top Meta: Step badge + Phase + Icon */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-black font-mono text-secondary bg-secondary/15 px-2.5 py-1 rounded-md border border-secondary/30 tracking-wider">
                          STEP {step.stepNumber}
                        </span>
                        <span className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wide">
                          {step.phase}
                        </span>
                      </div>
                      <div className="h-10 w-10 rounded-xl bg-secondary/10 text-secondary border border-secondary/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-secondary group-hover:text-secondary-foreground transition-all duration-300 shadow-sm flex-shrink-0">
                        <Icon className="h-5 w-5" />
                      </div>
                    </div>

                    {/* Step Title */}
                    <h3 className="text-base sm:text-lg font-bold text-foreground mb-2 group-hover:text-secondary transition-colors leading-snug min-h-[48px] flex items-center">
                      {step.title}
                    </h3>

                    {/* Step Description */}
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-5 min-h-[60px]">
                      {step.desc}
                    </p>
                  </div>

                  {/* Structured Deliverables Checklist */}
                  <div className="pt-3.5 border-t border-border/60 mt-auto relative z-10">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground/90 mb-2.5 flex items-center gap-1.5">
                      <Sparkles className="h-3 w-3 text-secondary" /> What you achieve:
                    </p>
                    <ul className="space-y-2">
                      {step.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2 text-xs text-foreground/85">
                          <CheckCircle2 className="h-3.5 w-3.5 text-secondary flex-shrink-0 mt-0.5" />
                          <span className="leading-snug">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom Timeline Assurance Pill */}
          <div className="mt-8 sm:mt-10 text-center">
            <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-3 px-6 py-3 rounded-2xl bg-card border border-border text-xs sm:text-sm text-muted-foreground shadow-sm">
              <div className="flex items-center gap-2 text-foreground font-medium">
                <Shield className="h-4 w-4 text-secondary" />
                <span>Standardized 4-Stage Pathway</span>
              </div>
              <span className="hidden sm:inline text-border">•</span>
              <span>Need custom duration or college credit hours? We adjust syllabus according to your semester schedule.</span>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Scholarship Program */}
      <section className="py-10 sm:py-14 bg-background border-t border-b border-border relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-secondary/10 via-card to-secondary/10 border border-secondary/20 rounded-3xl p-6 sm:p-8 md:p-10 shadow-lg text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/20 blur-[50px] rounded-full pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary/20 blur-[50px] rounded-full pointer-events-none" />

              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary mb-4 text-xs sm:text-sm font-bold tracking-wide uppercase border border-secondary/20">
                  <BrainCircuit className="h-4 w-4" /> Merit-Based Opportunity
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-3 text-foreground">Are you a gifted coder facing financial constraints?</h3>
                <p className="text-muted-foreground mb-6 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
                  We believe finances should never stop genuine talent. Take our rigorous coding assessment, and if you clear the benchmark, we will provide you with a <span className="text-secondary font-bold">100% Free Internship</span> including live projects, code reviews, and certification.
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

      {/* 10. Frequently Asked Questions (FAQ) */}
      <section className="py-10 sm:py-14 bg-muted/20 relative overflow-hidden border-t border-border">
        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary/10 text-secondary mb-3 text-xs sm:text-sm font-semibold tracking-wide uppercase border border-secondary/20">
              <HelpCircle className="h-3.5 w-3.5" /> Got Questions?
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-3 tracking-tight">
              Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary/40 via-secondary/80 to-secondary">Questions</span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Find instant answers to common questions about eligibility, portal onboarding, certificates, and college credit compliance.
            </p>
          </div>

          <div className="space-y-3">
            {faqList.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? "bg-card/90 border-secondary/40 shadow-md shadow-secondary/5"
                      : "bg-card/40 hover:bg-card/70 border-border/60 hover:border-secondary/20"
                  }`}
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm sm:text-base font-bold text-foreground leading-snug">
                      {faq.q}
                    </span>
                    <div
                      className={`h-7 w-7 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                        isOpen
                          ? "rotate-180 bg-secondary/15 text-secondary"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      <ChevronDown className="h-4 w-4" />
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-muted-foreground leading-relaxed border-t border-border/40">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Still have questions hint */}
          <div className="mt-8 text-center">
            <p className="text-xs sm:text-sm text-muted-foreground">
              Have a specific question not covered here?{" "}
              <Link href="/contact" className="text-secondary font-semibold hover:underline">
                Contact our student support team
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* 11. Dual CTA Section */}
      <CtaSection
        className="py-10 sm:py-14"
        title="Ready to Kickstart Your"
        highlight="Career?"
        description="Don't miss the opportunity to build real-world projects, receive senior code reviews, and earn verified certificates."
        primaryBtnText="Apply Now"
        primaryBtnLink="/internship/apply"
        primaryBtnIcon={<ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />}
        secondaryBtnText="Have Questions?"
        secondaryBtnLink="/contact"
      />
    </div>
  )
}
