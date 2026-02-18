import { motion } from "framer-motion";
import { Building2, Key, Users, ArrowRight, ArrowDown, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LeadForm } from "@/components/LeadForm";
import { SectionHeader } from "@/components/SectionHeader";
import { FeatureCard } from "@/components/FeatureCard";

export default function Home() {
  const scrollToWaitlist = () => {
    document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background font-sans overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">O</span>
            </div>
            <span className="font-bold text-xl tracking-tight text-gray-900">Omnis Bay</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">Platform</a>
            <a href="#about" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">About</a>
            <a href="#careers" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">Careers</a>
          </div>
          <Button onClick={scrollToWaitlist} size="sm">Get Early Access</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary/20 opacity-20 blur-[100px]"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-primary text-sm font-medium mb-8"
            >
              <span className="flex w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></span>
              Now in Stealth Mode
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-gray-900 mb-6 leading-tight"
            >
              Reinventing Real Estate <br />
              <span className="text-gradient">TRM & PropTech with AI</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-500 mb-10 max-w-3xl mx-auto leading-relaxed"
            >
              Building the world's first AI-Native Tenant Relationship Management system to eliminate friction between landlords, property managers, city ordinances, and tenants.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button onClick={scrollToWaitlist} size="lg" className="h-14 px-8 text-lg rounded-full shadow-xl hover:shadow-2xl shadow-primary/20 transition-all">
                Join the Waitlist <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" className="h-14 px-8 text-lg rounded-full" asChild>
                <a href="#features">Learn More <ArrowDown className="ml-2 w-5 h-5" /></a>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-12 border-y border-gray-100 bg-gray-50/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-8">Trusted by Early Partners in the Bay Area</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Logos represented as text for now as per instructions */}
            <span className="text-xl font-bold text-gray-700">OHA</span>
            <span className="text-xl font-bold text-gray-700">SCCHA</span>
            <span className="text-xl font-bold text-gray-700">Omnis Property Management</span>
            <span className="text-xl font-bold text-gray-700">ABODE</span>
            <span className="text-xl font-bold text-gray-700">BACS</span>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 md:py-32 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            title="A New Era of Property Management" 
            subtitle="We provide intelligent AI agents and workflows for every stakeholder, augmenting your existing tools like Buildium, AppFolio, and Yardi."
          />

          <div className="grid md:grid-cols-3 gap-8 relative z-10">
            <FeatureCard
              icon={Building2}
              title="For Property Managers"
              description="Launch the first platform designed to manage *you*. Automate compliance, streamline communication, and reduce operational overhead with AI that understands your business logic."
              delay={0}
            />
            <FeatureCard
              icon={Key}
              title="For Landlords & Owners"
              description="Gain unprecedented visibility into your portfolio. Our TRM system modules cover Prospecting, Screening, Cash Flow, and automated Compliance with local ordinances."
              delay={0.1}
            />
            <FeatureCard
              icon={Users}
              title="For Tenants"
              description="Understand your rights and lease obligations clearly. Work seamlessly with owners, get things done faster, and access pre-screened local vendors for your needs."
              delay={0.2}
            />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="about" className="py-20 md:py-32 bg-gray-900 text-white relative overflow-hidden">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 opacity-10">
           {/* modern architecture skyscraper low angle */}
           <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80" 
            alt="Modern Architecture" 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeader 
            title="Led by Industry Experts" 
            subtitle="Our team and advisory board are composed of seasoned professionals with deep expertise in technology and real estate."
            light
          />
          
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
             <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="text-blue-400 w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Tech Giants Alumni</h3>
                    <p className="text-gray-400 mt-2">Engineers and leaders from AWS, Oracle, and Google bringing enterprise-grade reliability.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="text-blue-400 w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Real Estate Veterans</h3>
                    <p className="text-gray-400 mt-2">Licensed professionals who understand the nuances of property management and compliance.</p>
                  </div>
                </div>
             </div>

             <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold mb-2">Highoak Ventures</h3>
                <p className="text-blue-300 font-medium mb-4">Seed Investor & Advisor</p>
                <p className="text-gray-300">
                  Backed by Highoak Ventures, bringing strategic guidance and deep industry connections from the heart of Cupertino, CA.
                </p>
             </div>
          </div>
        </div>
      </section>

      {/* Careers Section */}
      <section id="careers" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
           <div className="bg-blue-50 rounded-3xl p-8 md:p-12 lg:p-16 flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="md:w-1/2">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Join Our Mission</h2>
                <p className="text-lg text-gray-600 mb-6">
                  We're looking for passionate, self-starting individuals to help us build the future of PropTech. If you thrive on solving complex, AI-first problems, we want to hear from you.
                </p>
                <div className="space-y-4">
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-blue-100">
                    <h3 className="font-bold text-lg text-gray-900">Founding Airtable Automation Engineer</h3>
                    <p className="text-sm text-gray-500 mt-1">Hybrid • Bay Area, CA</p>
                    <p className="text-gray-600 mt-3 text-sm">Own the AI/ML and data-heavy components of the system, working with LLMs and RAG.</p>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 flex justify-center">
                 {/* office collaboration tech startup */}
                 <img 
                   src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80" 
                   alt="Team Collaboration" 
                   className="rounded-2xl shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500 max-w-md w-full"
                 />
              </div>
           </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section id="waitlist" className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gray-50"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Be the First to Experience the Future.</h2>
              <p className="text-xl text-gray-500 mb-8">
                Join our exclusive waitlist to get early access and product updates. We're actively seeking innovative partners to help shape the future of property management.
              </p>
              <div className="grid grid-cols-2 gap-6">
                 <div className="border-l-4 border-primary pl-4">
                    <div className="text-3xl font-bold text-gray-900">AI</div>
                    <div className="text-sm text-gray-500">Native Core</div>
                 </div>
                 <div className="border-l-4 border-primary pl-4">
                    <div className="text-3xl font-bold text-gray-900">0%</div>
                    <div className="text-sm text-gray-500">Friction</div>
                 </div>
              </div>
            </div>
            <div className="lg:w-1/2 w-full max-w-lg">
              <LeadForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-12 border-t border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-gray-900 rounded flex items-center justify-center">
              <span className="text-white font-bold text-xs">O</span>
            </div>
            <span className="font-bold text-lg text-gray-900">Omnis Bay Inc.</span>
          </div>
          <div className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Omnis Bay Inc. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-primary transition-colors">Privacy</a>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors">Terms</a>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
