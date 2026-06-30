"use client"

import { motion } from "framer-motion"
import { Code2, Users, Target, Globe2, Cpu, Zap, Heart, Award, ArrowRight, Compass, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CtaSection } from "@/components/sections/cta-section"

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } }
}

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-16 pb-16 bg-background flex items-center justify-center overflow-hidden">
        {/* Background Glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/20 rounded-full blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-4xl mx-auto"
          >
            <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary mb-6 text-sm font-semibold tracking-wide uppercase">
              Our Story
            </motion.div>
            <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8">
              Building the Future of <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary/40 via-secondary/80 to-secondary">Digital Products</span>
            </motion.h1>
            <motion.p variants={fadeIn} className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              We are a passionate team of developers and designers helping startups and small businesses build fast, reliable, and affordable software solutions.
            </motion.p>
          </motion.div>
        </div>
      </section>


      {/* Simplified Mission & Vision */}
      <section className="py-24 bg-background border-y border-border/40">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
              Built by Developers, for Real Businesses
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Prokodex was started by a small team of developers who were tired of seeing businesses get overcharged for clunky, slow software. We wanted to create an agency that actually cares about how an app feels and how fast it runs. We write clean, modern code so our clients can focus on growing their business instead of fixing tech issues.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Mission */}
            <div className="bg-card border border-border rounded-2xl p-8 lg:p-10 hover:border-secondary/50 transition-colors">
              <div className="h-14 w-14 bg-secondary/10 rounded-xl flex items-center justify-center mb-6">
                <Target className="h-7 w-7 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To empower businesses by building smart, fast, and reliable software that solves real problems. We focus on creating digital products that are easy to use and drive measurable growth.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-card border border-border rounded-2xl p-8 lg:p-10 hover:border-secondary/50 transition-colors">
              <div className="h-14 w-14 bg-secondary/10 rounded-xl flex items-center justify-center mb-6">
                <Compass className="h-7 w-7 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be the most trusted technology partner for growing businesses worldwide, recognized for our commitment to quality, transparency, and delivering software that truly makes an impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-card/40 border-y border-border relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary/40 via-secondary/80 to-secondary">Values</span></h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The fundamental principles that guide our code, our culture, and our relationship with clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Cpu, title: "Uncompromising Quality", desc: "We adhere strictly to clean code architecture, automated testing, and rigorous code reviews. Good enough is never enough." },
              { icon: Heart, title: "Empathy-Driven Design", desc: "Every pixel we place and every flow we build is centered around the human who will ultimately use the product." },
              { icon: Zap, title: "Velocity & Agility", desc: "We deploy fast and iterate faster. Our CI/CD pipelines and agile methodologies ensure rapid time-to-market." },
              { icon: Globe2, title: "Global Perspective", desc: "We build for a diverse, worldwide audience, ensuring accessibility, localization, and inclusive design from day one." },
              { icon: Award, title: "Radical Transparency", desc: "Honesty in timelines, budgets, and technical challenges. We operate as an extension of your own internal team." },
              { icon: Users, title: "Continuous Mentorship", desc: "We constantly uplift each other. Through our academy and intern programs, we are actively shaping the future of tech." },
            ].map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -8, transition: { duration: 0.2, ease: "easeOut" } }}
                className="group p-8 rounded-3xl bg-background border border-border/60 hover:border-secondary/50 hover:shadow-2xl transition-[border-color,box-shadow] duration-500 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="h-14 w-14 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary mb-6 group-hover:scale-110 group-hover:bg-secondary group-hover:text-secondary-foreground transition-all duration-300">
                  <value.icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold mb-3 relative z-10">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed relative z-10">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* Dual CTA Section */}
      <CtaSection
        title="Take the"
        highlight="Next Step"
        description="Whether you want to build a groundbreaking digital product or start an incredible career in tech, we're ready for you."
        primaryBtnText="Start a Project"
        primaryBtnLink="/contact"
        secondaryBtnText="Apply for Internship"
        secondaryBtnLink="/internship"
      />

    </div>
  )
}
