"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
} from "lucide-react"
import Link from "next/link"
import { OurProcess } from "@/components/sections/our-process"
import { CtaSection } from "@/components/sections/cta-section"

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } }
}

import { servicesData } from "./data"

export default function ServicesPage() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-16 pb-16 bg-background flex items-center justify-center overflow-hidden border-b border-border">
        {/* Background Glows */}
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
              Our Expertise
            </motion.div>
            <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8">
              Architecting Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary/40 via-secondary/80 to-secondary">Excellence</span>
            </motion.h1>
            <motion.p variants={fadeIn} className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              End-to-end software engineering and design services tailored for visionary companies. We don't just build apps; we build scalable digital businesses.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-muted/30 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">What We <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary/40 via-secondary/80 to-secondary">Do</span></h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to build, launch, and grow your digital business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            <div className="flex flex-col gap-4">
              {servicesData.slice(0, 4).map((service, i) => {
                const isOpen = expandedIndex === i;
                return (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className={`border ${isOpen ? 'border-secondary/50' : 'border-border/60'} rounded-3xl overflow-hidden bg-card/40 backdrop-blur-sm transition-all duration-300 hover:border-secondary/50`}
                  >
                    <button
                      onClick={() => setExpandedIndex(isOpen ? null : i)}
                      className="w-full flex items-center justify-between p-4 px-5 text-left"
                    >
                      <div className="flex items-center gap-4">
                        <div className={`h-12 w-12 rounded-xl flex items-center justify-center transition-colors duration-300 ${isOpen ? 'bg-secondary text-secondary-foreground shadow-[0_0_20px_rgba(6,182,212,0.4)]' : 'bg-secondary/10 text-secondary'}`}>
                          <service.icon className="h-6 w-6" />
                        </div>
                        <h3 className="text-lg md:text-xl font-bold tracking-tight">{service.title}</h3>
                      </div>
                      <div className={`h-8 w-8 shrink-0 rounded-full border border-border/60 flex items-center justify-center text-muted-foreground transition-all duration-300 ${isOpen ? 'rotate-180 bg-secondary/10 text-secondary border-secondary' : ''}`}>
                        <ChevronDown className="h-4 w-4" />
                      </div>
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6 pt-0 border-t border-border/20 mt-2">
                            <p className="text-base text-muted-foreground leading-relaxed mb-6 pt-5">
                              {service.description}
                            </p>
                            <div className="flex flex-wrap gap-2 mb-8">
                              {service.features.map((feature: string, j: number) => (
                                <span key={j} className="px-3 py-1.5 text-xs font-semibold rounded-full bg-background border border-border/60 text-muted-foreground">
                                  {feature}
                                </span>
                              ))}
                            </div>
                            <Link href={`/services/${service.slug}`} className="inline-flex items-center text-sm font-bold text-secondary uppercase tracking-wider hover:text-secondary/80 transition-colors">
                              View Full Details
                              <ArrowRight className="w-4 h-4 ml-2" />
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                )
              })}
            </div>

            <div className="flex flex-col gap-4">
              {servicesData.slice(4, 8).map((service, i) => {
                const index = i + 4;
                const isOpen = expandedIndex === index;
                return (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className={`border ${isOpen ? 'border-secondary/50' : 'border-border/60'} rounded-3xl overflow-hidden bg-card/40 backdrop-blur-sm transition-all duration-300 hover:border-secondary/50`}
                  >
                    <button
                      onClick={() => setExpandedIndex(isOpen ? null : index)}
                      className="w-full flex items-center justify-between p-4 px-5 text-left"
                    >
                      <div className="flex items-center gap-4">
                        <div className={`h-12 w-12 rounded-xl flex items-center justify-center transition-colors duration-300 ${isOpen ? 'bg-secondary text-secondary-foreground shadow-[0_0_20px_rgba(6,182,212,0.4)]' : 'bg-secondary/10 text-secondary'}`}>
                          <service.icon className="h-6 w-6" />
                        </div>
                        <h3 className="text-lg md:text-xl font-bold tracking-tight">{service.title}</h3>
                      </div>
                      <div className={`h-8 w-8 shrink-0 rounded-full border border-border/60 flex items-center justify-center text-muted-foreground transition-all duration-300 ${isOpen ? 'rotate-180 bg-secondary/10 text-secondary border-secondary' : ''}`}>
                        <ChevronDown className="h-4 w-4" />
                      </div>
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6 pt-0 border-t border-border/20 mt-2">
                            <p className="text-base text-muted-foreground leading-relaxed mb-6 pt-5">
                              {service.description}
                            </p>
                            <div className="flex flex-wrap gap-2 mb-8">
                              {service.features.map((feature: string, j: number) => (
                                <span key={j} className="px-3 py-1.5 text-xs font-semibold rounded-full bg-background border border-border/60 text-muted-foreground">
                                  {feature}
                                </span>
                              ))}
                            </div>
                            <Link href={`/services/${service.slug}`} className="inline-flex items-center text-sm font-bold text-secondary uppercase tracking-wider hover:text-secondary/80 transition-colors">
                              View Full Details
                              <ArrowRight className="w-4 h-4 ml-2" />
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Our Methodology */}
      <OurProcess />


      {/* Dual CTA Section */}
      <CtaSection
        title="Ready to Build the"
        highlight="Future?"
        description="Let's transform your vision into an industry-leading digital product."
        primaryBtnText="Start a Project"
        primaryBtnLink="/contact"
        primaryBtnIcon={<ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />}
        secondaryBtnText="View Demos"
        secondaryBtnLink="/demos"
      />

    </div>
  )
}
