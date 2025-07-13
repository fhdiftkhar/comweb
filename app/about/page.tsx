"use client";

import { FaRocket, FaCode, FaMobile, FaGlobe, FaArrowRight, FaCheck, FaShieldAlt, FaHeadset, FaStar } from "react-icons/fa";
import { MdTrendingUp, MdSpeed } from "react-icons/md";

const values = [
  {
    title: "Innovation First",
    description: "We leverage cutting-edge no-code platforms to deliver innovative solutions that keep your business ahead of the curve.",
    icon: <FaRocket className="text-2xl" />,
    color: "from-blue-500 to-blue-600"
  },
  {
    title: "Cost Efficiency",
    description: "No-code development reduces costs while maintaining quality, making enterprise solutions accessible to businesses of all sizes.",
    icon: <MdTrendingUp className="text-2xl" />,
    color: "from-purple-500 to-purple-600"
  },
  {
    title: "Rapid Delivery",
    description: "Our no-code expertise enables us to deliver solutions faster than traditional development methods.",
    icon: <MdSpeed className="text-2xl" />,
    color: "from-indigo-500 to-indigo-600"
  },
  {
    title: "Quality Assurance",
    description: "Every solution undergoes rigorous testing to ensure reliability, security, and optimal performance.",
    icon: <FaShieldAlt className="text-2xl" />,
    color: "from-green-500 to-green-600"
  }
];

const expertise = [
  {
    platform: "Glide Apps",
    description: "Our most popular service - powerful no-code business applications with custom logic and database integration.",
    features: ["Custom Business Logic", "Database Integration", "User Management", "Real-time Updates"],
    icon: <FaRocket className="text-2xl" />,
    color: "from-blue-500 to-blue-600"
  },
  {
    platform: "FlutterFlow",
    description: "Cross-platform mobile and web applications with Firebase integration and custom UI/UX design.",
    features: ["Mobile & Web Apps", "Firebase Integration", "Custom UI/UX", "Cross-platform"],
    icon: <FaMobile className="text-2xl" />,
    color: "from-purple-500 to-purple-600"
  },
  {
    platform: "AppSheet",
    description: "Google&apos;s no-code platform for creating powerful mobile applications with Google Workspace integration.",
    features: ["Google Workspace Integration", "Offline Capability", "Advanced Analytics", "Custom Workflows"],
    icon: <FaCode className="text-2xl" />,
    color: "from-indigo-500 to-indigo-600"
  },
  {
    platform: "Bubble",
    description: "Full-featured web applications with database design, API integrations, and custom plugins.",
    features: ["Web Applications", "Database Design", "API Integrations", "Custom Plugins"],
    icon: <FaGlobe className="text-2xl" />,
    color: "from-green-500 to-green-600"
  },
  {
    platform: "Website Development",
    description: "Professional websites built with modern technologies, from landing pages to e-commerce platforms.",
    features: ["Responsive Design", "SEO Optimization", "Performance Focus", "Modern Technologies"],
    icon: <FaGlobe className="text-2xl" />,
    color: "from-orange-500 to-orange-600"
  },
  {
    platform: "Flutter Development",
    description: "Native mobile applications with high performance for iOS and Android platforms.",
    features: ["Native Performance", "Cross-platform", "Custom UI/UX", "App Store Ready"],
    icon: <FaMobile className="text-2xl" />,
    color: "from-teal-500 to-teal-600"
  }
];

export default function About() {
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-sm font-semibold text-blue-600 mb-4">ABOUT BUIDOZA</div>
              <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
                Pioneering
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  {" "}No-Code Solutions
                </span>
        </h1>
              <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                We&apos;re a team of passionate developers and designers specializing in no-code software development. 
                Our expertise spans Glide, FlutterFlow, AppSheet, and Bubble platforms, plus traditional website 
                and Flutter development.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <span className="text-slate-700 dark:text-slate-300">500+ apps delivered across all platforms</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <span className="text-slate-700 dark:text-slate-300">Glide Apps - our most popular service</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <span className="text-slate-700 dark:text-slate-300">Fast, cost-effective development</span>
                </div>
              </div>

              <a
                href="/contact"
                className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center gap-3 inline-flex"
              >
                Start Your Project
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </a>
      </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-3xl"></div>
              <div className="relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-slate-200 dark:border-slate-700">
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-600 mb-4">Glide Apps</div>
                  <div className="text-2xl font-semibold text-slate-900 dark:text-white mb-2">Our Most Popular Service</div>
                  <div className="text-slate-600 dark:text-slate-400 mb-6">Powerful no-code business applications</div>
                  <div className="space-y-3 text-left">
                    <div className="flex items-center gap-3">
                      <FaCheck className="text-green-500" />
                      <span className="text-slate-700 dark:text-slate-300">Custom business logic</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <FaCheck className="text-green-500" />
                      <span className="text-slate-700 dark:text-slate-300">Database integration</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <FaCheck className="text-green-500" />
                      <span className="text-slate-700 dark:text-slate-300">User management</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <FaCheck className="text-green-500" />
                      <span className="text-slate-700 dark:text-slate-300">Real-time updates</span>
                    </div>
                  </div>
                </div>
              </div>
          </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Our Values
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              We believe in delivering innovative, cost-effective solutions that empower businesses to succeed in the digital age.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="group bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-slate-200 dark:border-slate-700">
                <div className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <div className="text-white">
                    {value.icon}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">{value.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Expertise */}
      <section className="py-16 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Our Expertise
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              We specialize in no-code platforms and traditional development, offering comprehensive solutions 
              for every business need.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {expertise.map((item, index) => (
              <div key={index} className="group bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-slate-200 dark:border-slate-700">
                <div className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <div className="text-white">
                    {item.icon}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">{item.platform}</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">{item.description}</p>
                
                <div className="space-y-3">
                  {item.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-slate-700 dark:text-slate-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                Why Choose Buidoza?
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                We combine the power of no-code platforms with traditional development expertise to deliver 
                the best solutions for your business needs.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FaStar className="text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Glide Apps Specialists</h3>
                    <p className="text-slate-600 dark:text-slate-400">Our most popular service with proven track record</p>
        </div>
      </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MdSpeed className="text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Fast Development</h3>
                    <p className="text-slate-600 dark:text-slate-400">No-code platforms enable rapid delivery</p>
                  </div>
      </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FaHeadset className="text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Expert Support</h3>
                    <p className="text-slate-600 dark:text-slate-400">Ongoing support for all platforms</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-3xl"></div>
              <div className="relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-slate-200 dark:border-slate-700">
                <div className="text-center">
                  <div className="text-6xl font-bold text-blue-600 mb-4">500+</div>
                  <div className="text-2xl font-semibold text-slate-900 dark:text-white mb-2">Apps Delivered</div>
                  <div className="text-slate-600 dark:text-slate-400">Across all no-code platforms</div>
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
            Ready to Build Your App?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Whether you need a no-code solution or traditional development, our team is ready to help 
            you create the perfect application for your business.
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
              href="/portfolio"
              className="group bg-transparent text-white border-2 border-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-blue-600 transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3"
            >
              View Our Work
        </a>
      </div>
        </div>
      </section>
    </div>
  );
} 