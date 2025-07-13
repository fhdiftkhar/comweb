import { Metadata } from "next";
import { FaRocket, FaCode, FaMobile, FaGlobe, FaArrowRight, FaCheck, FaUsers, FaShieldAlt, FaHeadset, FaClock } from "react-icons/fa";
import { MdTrendingUp, MdSecurity, MdSpeed } from "react-icons/md";

export const metadata: Metadata = {
  title: "Buidoza - No-Code Software Development Experts | Glide Apps, FlutterFlow, AppSheet",
  description: "Leading no-code software development company specializing in Glide Apps, FlutterFlow, AppSheet, and Bubble. 300+ projects completed. Get custom business applications built fast and cost-effectively.",
  keywords: [
    "no-code development",
    "Glide Apps development", 
    "FlutterFlow development",
    "AppSheet development",
    "Bubble development",
    "custom business applications",
    "enterprise software",
    "business automation",
    "mobile app development",
    "web application development"
  ],
  openGraph: {
    title: "Buidoza - No-Code Software Development Experts",
    description: "Leading no-code software development company specializing in Glide Apps, FlutterFlow, AppSheet, and Bubble. 300+ projects completed.",
    url: "https://buildoza.online",
    siteName: "Buidoza",
    images: [
      {
        url: "/og-home.jpg",
        width: 1200,
        height: 630,
        alt: "Buidoza - No-Code Software Development",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Buidoza - No-Code Software Development Experts",
    description: "Leading no-code software development company specializing in Glide Apps, FlutterFlow, AppSheet, and Bubble.",
    images: ["/og-home.jpg"],
  },
  alternates: {
    canonical: "/",
  },
};

const services = [
  {
    title: "Glide Apps Development",
    description: "Our most popular service - powerful no-code applications built with Glide's intuitive platform. Perfect for businesses needing custom solutions without traditional coding.",
    icon: <FaRocket className="text-3xl" />,
    features: ["Custom Business Apps", "Database Integration", "User Management", "Real-time Updates"],
    color: "from-blue-500 to-blue-600"
  },
  {
    title: "FlutterFlow Development",
    description: "Cross-platform mobile and web applications built with FlutterFlow's visual development platform. Fast, scalable, and cost-effective solutions.",
    icon: <FaMobile className="text-3xl" />,
    features: ["Mobile & Web Apps", "Firebase Integration", "Custom UI/UX", "Cross-platform"],
    color: "from-purple-500 to-purple-600"
  },
  {
    title: "AppSheet Development",
    description: "Google's no-code platform for creating powerful mobile applications. Perfect for businesses looking to digitize their operations quickly.",
    icon: <FaCode className="text-3xl" />,
    features: ["Google Workspace Integration", "Offline Capability", "Advanced Analytics", "Custom Workflows"],
    color: "from-indigo-500 to-indigo-600"
  },
  {
    title: "Bubble App Development",
    description: "Full-featured web applications built with Bubble's powerful no-code platform. From simple websites to complex business systems.",
    icon: <FaGlobe className="text-3xl" />,
    features: ["Web Applications", "Database Design", "API Integrations", "Custom Plugins"],
    color: "from-green-500 to-green-600"
  },
  {
    title: "Website Development",
    description: "Professional websites built with modern technologies. From simple landing pages to complex e-commerce platforms.",
    icon: <FaGlobe className="text-3xl" />,
    features: ["Responsive Design", "SEO Optimization", "Performance Focus", "Modern Technologies"],
    color: "from-orange-500 to-orange-600"
  },
  {
    title: "Flutter App Development",
    description: "Native mobile applications built with Flutter framework. High-performance apps for iOS and Android platforms.",
    icon: <FaMobile className="text-3xl" />,
    features: ["Native Performance", "Cross-platform", "Custom UI/UX", "App Store Ready"],
    color: "from-teal-500 to-teal-600"
  }
];

const stats = [
  { number: "500+", label: "Apps Delivered", icon: <FaRocket /> },
  { number: "50+", label: "Happy Clients", icon: <FaUsers /> },
  { number: "99.9%", label: "Uptime", icon: <FaShieldAlt /> },
  { number: "24/7", label: "Support", icon: <FaHeadset /> }
];

export default function Home() {
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
              <div className="text-sm font-semibold text-blue-600 mb-4">NO-CODE SOFTWARE DEVELOPMENT</div>
              <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
                Transform Your Business with
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  {" "}No-Code Solutions
                </span>
            </h1>
              <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                We specialize in no-code software development using Glide, FlutterFlow, AppSheet, and Bubble. 
                Plus traditional website and Flutter app development. Fast, cost-effective, and powerful solutions for your business.
            </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="/contact"
                  className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center gap-3"
                >
                  Start Your Project
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="/portfolio"
                  className="group bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm text-slate-700 dark:text-white border border-slate-200 dark:border-slate-700 px-8 py-4 rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center gap-3"
                >
                  View Our Work
            </a>
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

      {/* Stats Section */}
      <section className="py-12 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-slate-600 dark:text-slate-400">{stat.label}</div>
              </div>
            ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Our Services
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              From no-code solutions to traditional development, we offer comprehensive software development services 
              to help your business grow and succeed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-slate-200 dark:border-slate-700">
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <div className="text-white">
                    {service.icon}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">{service.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">{service.description}</p>
                
                <div className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
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
      <section className="py-16 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
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
                    <MdSpeed className="text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Fast Development</h3>
                    <p className="text-slate-600 dark:text-slate-400">No-code platforms enable rapid development and deployment</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MdSecurity className="text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Cost Effective</h3>
                    <p className="text-slate-600 dark:text-slate-400">Reduce development costs while maintaining quality</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FaHeadset className="text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Expert Support</h3>
                    <p className="text-slate-600 dark:text-slate-400">Ongoing support and maintenance for all platforms</p>
                  </div>
                </div>
              </div>
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
