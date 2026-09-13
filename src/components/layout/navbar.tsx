"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Code2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { motion, AnimatePresence } from "framer-motion"
import { scrollToTop } from "@/lib/utils"

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
  const pathname = usePathname()

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  React.useEffect(() => {
    if (isMobileMenuOpen) {
      const scrollY = window.scrollY
      document.body.style.position = "fixed"
      document.body.style.top = `-${scrollY}px`
      document.body.style.width = "100%"
      document.body.style.overflow = "hidden"
      document.documentElement.style.overflow = "hidden"

      return () => {
        document.body.style.position = ""
        document.body.style.top = ""
        document.body.style.width = ""
        document.body.style.overflow = ""
        document.documentElement.style.overflow = ""
        window.scrollTo(0, scrollY)
      }
    }
  }, [isMobileMenuOpen])

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Internship", href: "/internship" },
    { name: "Careers", href: "/careers" },
    { name: "Blog", href: "/blog" },
  ]

  return (
    <>
      <header
        className={`fixed top-0 w-full z-40 transition-all duration-300 flex flex-col ${
          isScrolled
            ? "bg-background/80 backdrop-blur-md border-b border-border shadow-sm"
            : "bg-transparent"
        }`}
      >
        {/* Announcement Marquee */}
        <div className="bg-secondary text-secondary-foreground text-xs font-medium py-2 overflow-hidden flex items-center w-full border-b border-secondary-foreground/10">
          <motion.div
            className="flex whitespace-nowrap will-change-transform"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 35, repeat: Infinity }}
          >
            {[1, 2].map((set) => (
              <div key={set} className="flex gap-12 px-6 items-center">
                <span className="flex items-center gap-2">🚀 <strong className="font-bold uppercase tracking-wider">Custom Software Development</strong> Let's build your next big idea!</span>
                <span className="flex items-center gap-2">⚡ High-performance enterprise applications built by experts.</span>
                <span className="flex items-center gap-2">🔥 Scalable architecture, premium design, and fast delivery.</span>
                <span className="flex items-center gap-2">💡 Powered by modern tech: Next.js, React, Node.js & Cloud.</span>
              </div>
            ))}
          </motion.div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center">
              <Link href="/" onClick={(e) => { if (pathname === "/") scrollToTop(); }} className="flex items-center group">
                <img src="/logo-dark.png?v=4" alt="Prokodex Logo" className="h-11 w-auto hidden dark:block" />
                <img src="/logo-light.png?v=4" alt="Prokodex Logo" className="h-11 w-auto block dark:hidden" />
              </Link>
            </div>

            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => {
                const isActive = pathname === link.href || (link.href !== "/" && pathname?.startsWith(link.href));
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={(e) => { if (pathname === link.href) scrollToTop(); }}
                    className={`text-base font-medium transition-colors ${isActive
                      ? "text-secondary"
                      : "text-foreground/80 hover:text-secondary"
                      }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <div className="flex items-center gap-3 ml-4 border-l pl-4 border-border">
                <ThemeToggle />
                <a
                  href={process.env.NEXT_PUBLIC_PORTAL_URL || "https://portal.prokodex.in"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" className="cursor-pointer border-secondary/30 hover:border-secondary/60 hover:bg-secondary/10 hover:text-secondary text-foreground">
                    Portal Login
                  </Button>
                </a>
                <Link href="/contact">
                  <Button className="cursor-pointer">Let's Talk</Button>
                </Link>
              </div>
            </nav>

            <div className="lg:hidden flex items-center gap-2">
              <ThemeToggle />
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-foreground/80 hover:text-foreground cursor-pointer"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer (Right Half) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-50 lg:hidden">
            {/* Dark Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-xs cursor-pointer touch-none"
              aria-hidden="true"
            />

            {/* Right-side Half Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 280 }}
              className="absolute top-0 right-0 h-[100dvh] w-[70vw] sm:w-[50vw] max-w-sm bg-background/95 dark:bg-card/95 backdrop-blur-2xl border-l border-border shadow-2xl flex flex-col overscroll-contain"
            >
              {/* Drawer Top Header */}
              <div className="flex items-center justify-between px-5 h-16 border-b border-border/70 flex-shrink-0">
                <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Menu</span>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-1.5 -mr-1.5 rounded-full hover:bg-muted text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Drawer Links */}
              <div className="flex-1 overflow-y-auto px-3 py-4 flex flex-col gap-1">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href || (link.href !== "/" && pathname?.startsWith(link.href));
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        if (pathname === link.href) scrollToTop();
                      }}
                      className={`block px-3.5 py-2.5 rounded-xl text-base font-medium transition-colors ${
                        isActive
                          ? "bg-secondary/15 text-secondary font-semibold"
                          : "hover:bg-accent text-foreground/80"
                      }`}
                    >
                      {link.name}
                    </Link>
                  );
                })}

                {/* Bottom CTA Actions */}
                <div className="mt-auto pt-4 flex flex-col gap-2.5 border-t border-border/70">
                  <a
                    href={process.env.NEXT_PUBLIC_PORTAL_URL || "https://portal.prokodex.in"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Button
                      variant="outline"
                      className="w-full justify-center text-sm font-semibold border-secondary/30 hover:border-secondary/60 hover:bg-secondary/10 hover:text-secondary text-foreground cursor-pointer"
                    >
                      Portal Login
                    </Button>
                  </a>
                  <Link
                    href="/contact"
                    className="w-full"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      if (pathname === "/contact") scrollToTop();
                    }}
                  >
                    <Button className="w-full justify-center text-sm font-semibold cursor-pointer">
                      Let's Talk
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}
