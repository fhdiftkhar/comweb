"use client";

import Image from "next/image";
import { FaMobile, FaShieldAlt, FaRocket, FaArrowRight, FaCode, FaGlobe } from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "6FCR Profit Pro",
    description: "Enterprise-level car rental management system that revolutionizes how rental businesses operate. Features comprehensive fleet management, customer booking systems, maintenance tracking, and advanced analytics for optimal business performance.",
    category: "Glide Apps",
    technologies: ["Glide", "Google Sheets", "Complex Logic", "API Integration"],
    image: "/portfolio/6FCR Profit Pro.png",
    stats: { users: "500+", revenue: "$2M+", uptime: "99.9%" },
    icon: <FaRocket className="text-2xl" />
  },
  {
    id: 2,
    title: "Academy LMS",
    description: "Comprehensive Learning Management System template designed for educational institutions. Enables academies to manage courses, track student progress, handle assignments, and provide interactive learning experiences.",
    category: "Glide Apps",
    technologies: ["Glide", "Google Sheets", "Custom UI", "Student Portal"],
    image: "/portfolio/Academy.png",
    stats: { users: "1K+", revenue: "$500K+", uptime: "99.8%" },
    icon: <FaMobile className="text-2xl" />
  },
  {
    id: 3,
    title: "Capifunds",
    description: "Corporate client management platform for financial services. Streamlines client information management, business operations, and provides comprehensive reporting tools for enterprise-level financial institutions.",
    category: "Glide Apps",
    technologies: ["Glide", "Google Sheets", "Complex Logic", "Data Security"],
    image: "/portfolio/capifunds.png",
    stats: { users: "200+", revenue: "$1M+", uptime: "99.95%" },
    icon: <FaCode className="text-2xl" />
  },
  {
    id: 4,
    title: "Cheaters Never Prosper",
    description: "Popular trivia app for CNP trivia events across America. Features location-based trivia night finder, daily trivia challenges, and community engagement tools for trivia enthusiasts.",
    category: "Glide Apps",
    technologies: ["Glide", "Google Sheets", "Location Services", "Real-time Updates"],
    image: "/portfolio/cheaters never prosper.png",
    stats: { users: "5K+", revenue: "$300K+", uptime: "99.9%" },
    icon: <FaGlobe className="text-2xl" />
  },
  {
    id: 5,
    title: "Hotelcatz",
    description: "Innovative cat cafe concept for hotels, connecting guests with feline companions during their stay. Features booking system, cat profiles, and hotel integration for unique hospitality experiences.",
    category: "Glide Apps",
    technologies: ["Glide", "Google Sheets", "Booking System", "Hotel Integration"],
    image: "/portfolio/hotelcatz.png",
    stats: { users: "2K+", revenue: "$400K+", uptime: "99.99%" },
    icon: <FaGlobe className="text-2xl" />
  },
  {
    id: 6,
    title: "Profit from Clutter",
    description: "Marketplace platform enabling users to monetize their unused items through selling or renting. Features item management, transaction processing, and community marketplace functionality.",
    category: "Glide Apps",
    technologies: ["Glide", "Google Sheets", "Payment Integration", "User Marketplace"],
    image: "/portfolio/profit from clutter.png",
    stats: { users: "3K+", revenue: "$600K+", uptime: "99.7%" },
    icon: <FaMobile className="text-2xl" />
  },
  {
    id: 7,
    title: "Rocketlist",
    description: "Etsy optimization tool that generates compelling product descriptions and strategic tags. Helps sellers improve their listings and increase visibility on the Etsy marketplace.",
    category: "Glide Apps",
    technologies: ["Glide", "Google Sheets", "AI Integration", "Etsy API"],
    image: "/portfolio/Rocketlist Etsy Listing Generator.png",
    stats: { users: "1K+", revenue: "$200K+", uptime: "99.8%" },
    icon: <FaRocket className="text-2xl" />
  },
  {
    id: 8,
    title: "Trayls",
    description: "Restaurant discovery and review platform where users create personalized food trails, share recommendations, and explore culinary experiences through community-driven reviews.",
    category: "Glide Apps",
    technologies: ["Glide", "Google Sheets", "Location Services", "Review System"],
    image: "/portfolio/Trayls.png",
    stats: { users: "4K+", revenue: "$350K+", uptime: "99.9%" },
    icon: <FaGlobe className="text-2xl" />
  },
  {
    id: 9,
    title: "Vi5itor",
    description: "Security management system for university visitor check-in and check-out processes. Streamlines campus security operations with digital visitor tracking and access control.",
    category: "Glide Apps",
    technologies: ["Glide", "Google Sheets", "Security Protocols", "Access Control"],
    image: "/portfolio/vi5itor.png",
    stats: { users: "500+", revenue: "$150K+", uptime: "99.95%" },
    icon: <FaShieldAlt className="text-2xl" />
  },
  {
    id: 10,
    title: "Wedding Reservation App",
    description: "Comprehensive wedding venue booking and management system. Streamlines the entire wedding planning process from venue selection to final arrangements.",
    category: "Glide Apps",
    technologies: ["Glide", "Google Sheets", "Booking System", "Event Management"],
    image: "/portfolio/Wedding Reservation App.png",
    stats: { users: "2K+", revenue: "$800K+", uptime: "99.9%" },
    icon: <FaGlobe className="text-2xl" />
  }
];

export default function Portfolio() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-12">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Our
              </span>
              <br />
              <span className="text-slate-700 dark:text-slate-300">Portfolio</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 max-w-4xl mx-auto leading-relaxed">
              Discover how we&apos;ve helped businesses transform their digital presence with innovative solutions. 
              Each project represents our commitment to excellence and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Stats */}
      <section className="py-12 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">300+</div>
              <div className="text-slate-600 dark:text-slate-400">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">20+</div>
              <div className="text-slate-600 dark:text-slate-400">Enterprise Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-600 mb-2">99.9%</div>
              <div className="text-slate-600 dark:text-slate-400">Average Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">5+</div>
              <div className="text-slate-600 dark:text-slate-400">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="group bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-slate-200 dark:border-slate-700">
                {/* Project Image */}
                <div className="mb-6">
                  <Image 
                    src={project.image} 
                    alt={project.title}
                    width={400}
                    height={192}
                    className="w-full h-48 object-cover rounded-xl shadow-lg group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Project Info */}
                <div className="mb-6">
                  <div className="text-sm font-semibold text-blue-600 mb-2">{project.category}</div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">{project.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                    {project.description}
                  </p>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-sm rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>




              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Project */}
      <section className="py-16 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-sm font-semibold text-blue-600 mb-4">FEATURED PROJECT</div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                6FCR Profit Pro
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                Enterprise-level car rental management system that revolutionizes how rental businesses operate. 
                Features comprehensive fleet management, customer booking systems, and advanced analytics.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <span className="text-slate-700 dark:text-slate-300">Complete fleet management system</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <span className="text-slate-700 dark:text-slate-300">Advanced booking and payment processing</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <span className="text-slate-700 dark:text-slate-300">Real-time analytics and reporting</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center gap-3">
                  View Case Study
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="group bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm text-slate-700 dark:text-white border border-slate-200 dark:border-slate-700 px-8 py-4 rounded-xl font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center gap-3">
                  <FaRocket className="text-blue-600" />
                  Start Similar Project
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-3xl"></div>
              <div className="relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-slate-200 dark:border-slate-700">
                <div className="text-center">
                  <div className="text-6xl font-bold text-blue-600 mb-4">500+</div>
                  <div className="text-2xl font-semibold text-slate-900 dark:text-white mb-2">Active Users</div>
                  <div className="text-slate-600 dark:text-slate-400">Enterprise car rental businesses</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Let&apos;s create something amazing together. Our team is ready to bring your vision to life 
            with the same level of excellence showcased in our portfolio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="group bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3"
            >
              Start Your Project
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/pricing"
              className="group bg-transparent text-white border-2 border-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-blue-600 transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3"
            >
              View Pricing
            </a>
          </div>
        </div>
      </section>
      </div>
  );
} 