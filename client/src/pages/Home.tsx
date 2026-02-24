import { motion } from "framer-motion";
import { 
  Building2, Key, Users, ArrowRight, ArrowDown, CheckCircle2, 
  CreditCard, FileText, Wrench, Smartphone, BarChart3, ShieldCheck, 
  Search, ClipboardList, MessageSquare, Mail
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { LeadForm } from "@/components/LeadForm";
import { SectionHeader } from "@/components/SectionHeader";
import { FeatureCard } from "@/components/FeatureCard";
import dashboardPreview from "@/assets/images/dashboard-preview.png";
import mobileAppUsage from "@/assets/images/mobile-app-usage.jpg";

export default function Home() {
  const scrollToWaitlist = () => {
    document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" });
  };

  const features = [
    {
      icon: CreditCard,
      title: "Rent Collection & Ledgers",
      description: "Online payment system for monthly rent and due dates. Auto-generate invoices and send rental ledgers as PDF directly to emails.",
      details: ["Online Rent Payments", "Auto-enter Invoices", "Email Invoices", "PDF Rental Ledgers"]
    },
    {
      icon: FileText,
      title: "Lease Management",
      description: "Simple, easy online collection for you and your tenants. Sign and store leases and other critical documents online in just a few clicks.",
      details: ["Digital Signatures", "Secure Cloud Storage", "Document Templates", "Easy Access"]
    },
    {
      icon: MessageSquare,
      title: "AI Maintenance Triage",
      description: "AI-enabled ways to triage issues, manage work orders, and handle team communication all in one centralized place.",
      details: ["AI Issue Analysis", "Work Order Tracking", "Team Messaging", "Auto-prioritization"]
    },
    {
      icon: Smartphone,
      title: "Dedicated Mobile Apps",
      description: "Native mobile experiences for both landlords and tenants to stay connected and manage properties on the go.",
      details: ["Real-time Notifications", "Mobile Payments", "Maintenance Requests", "Document Access"]
    },
    {
      icon: BarChart3,
      title: "Financial Reporting",
      description: "Comprehensive dashboards for financial and expense reporting. Understand your business better with insightful data.",
      details: ["Expense Tracking", "Income Statements", "Portfolio Overview", "Tax Readiness"]
    },
    {
      icon: ShieldCheck,
      title: "Legal & Compliance",
      description: "Access templates for Legal Letters, 3-Day Notices, and other essential documents to stay compliant with local laws.",
      details: ["Notice Templates", "Legal Letter Generator", "Compliance Tracking", "Document History"]
    },
    {
      icon: Wrench,
      title: "Maintenance Repairs",
      description: "Find quotes and book repairs quickly with dedicated, pre-screened maintenance professionals in your local area.",
      details: ["Quick Quotes", "Local Vendor Network", "Repair Booking", "Quality Guarantee"]
    }
  ];

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
            <a href="#solutions" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">Solutions</a>
            <a href="#about" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">About</a>
            <a href="#careers" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">Careers</a>
            <a href="http://trm.omnisbay.com" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">TRM Free Preview</a>
          </div>
          <Button onClick={scrollToWaitlist} size="sm">Get Early Access</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-to-b from-blue-50/50 to-white">
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
              The Future of TRM is Here
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-gray-900 mb-6 leading-tight"
            >
              The Smartest Way to <br />
              <span className="text-gradient">Manage Your Properties</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-500 mb-10 max-w-3xl mx-auto leading-relaxed"
            >
              Omnis Bay is the AI-native Tenant Relationship Management platform that streamlines rent collection, maintenance, and compliance for modern landlords.
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
                <a href="#features">See Features <ArrowDown className="ml-2 w-5 h-5" /></a>
              </Button>
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-20 relative max-w-5xl mx-auto"
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200 bg-white p-2">
              <img src={dashboardPreview} alt="Omnis Bay Dashboard" className="w-full h-auto rounded-xl" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solutions Section - Grid Layout */}
      <section id="features" className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            title="All-In-One TRM Platform" 
            subtitle="Everything you need to manage your rental business, from rent collection to legal compliance, powered by AI."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 rounded-2xl border border-gray-100 bg-white hover:border-primary/20 hover:shadow-lg transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  <feature.icon className="w-6 h-6 text-primary group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {feature.description}
                </p>
                <ul className="space-y-2">
                  {feature.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-500">
                      <CheckCircle2 className="w-4 h-4 text-green-500 mr-2" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Showcase - Alternating Layout */}
      <section id="solutions" className="py-20 md:py-32 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16 mb-32">
            <div className="lg:w-1/2">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-primary text-xs font-bold uppercase tracking-wider mb-6">
                Mobility
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Manage Your Portfolio <br /> From Anywhere
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our dedicated mobile apps for landlords and tenants ensure that you're never out of touch. Whether it's a maintenance emergency or a quick rent check, everything is just a tap away.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                  </div>
                  <span className="font-medium text-gray-700">Real-time push notifications</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                  </div>
                  <span className="font-medium text-gray-700">On-the-go rent collection</span>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl rotate-2">
                <img src={mobileAppUsage} alt="Using Omnis Bay Mobile App" className="w-full h-auto" />
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
            <div className="lg:w-1/2">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-primary text-xs font-bold uppercase tracking-wider mb-6">
                Intelligence
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
                AI-Enabled Maintenance <br /> & Repair Triage
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                No more sorting through endless emails and texts. Our AI triages maintenance issues automatically, connects you with local pre-screened pros, and manages the entire work order lifecycle.
              </p>
              <Button onClick={scrollToWaitlist} variant="link" className="p-0 text-primary text-lg font-bold">
                Learn how it works <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
            <div className="lg:w-1/2">
              <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
                <div className="space-y-6">
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100">
                    <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">AI</div>
                    <div>
                      <p className="text-sm font-bold text-gray-900">Issue Detected: Leaking Faucet</p>
                      <p className="text-xs text-gray-500">Triaging... Priority: Medium</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-primary/5 border border-primary/10 ml-8">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white"><Search className="w-5 h-5" /></div>
                    <div>
                      <p className="text-sm font-bold text-gray-900">Finding Local Pros</p>
                      <p className="text-xs text-gray-500">3 quotes found in your area</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-green-50 border border-green-100">
                    <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white"><CheckCircle2 className="w-5 h-5" /></div>
                    <div>
                      <p className="text-sm font-bold text-gray-900">Repair Booked</p>
                      <p className="text-xs text-gray-500">Scheduled for Tomorrow, 10:00 AM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="about" className="py-20 md:py-32 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
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
                <h3 className="text-2xl font-bold mb-2 text-white">Highoak Ventures</h3>
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
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-blue-100">
                    <h3 className="font-bold text-lg text-gray-900">Founding CI/CD Engineer</h3>
                    <p className="text-sm text-gray-500 mt-1">Hybrid • Bay Area, CA</p>
                    <p className="text-gray-600 mt-3 text-sm">Own the full end to end development and deploy process using Replit, Clause Code and Vercel. Knowledge of UI components of the system, efficient with use of Railway Apps and working with Product Managers and Account Managers.</p>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 flex justify-center">
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
      <section id="waitlist" className="py-20 md:py-32 relative overflow-hidden bg-white">
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
