"use client";

import { useState } from "react";
import { FaArrowRight, FaRocket, FaHeadset, FaCode, FaMobile, FaGlobe, FaCalculator } from "react-icons/fa";
import { MdSecurity, MdSpeed, MdAnalytics } from "react-icons/md";



const services = [
  {
    title: "Glide Apps Development",
    description: "Our most popular service - powerful no-code business applications with custom logic and database integration.",
    icon: <FaRocket className="text-3xl" />,
    price: "From $287"
  },
  {
    title: "FlutterFlow Development",
    description: "Cross-platform mobile and web applications with Firebase integration and custom UI/UX design.",
    icon: <FaMobile className="text-3xl" />,
    price: "From $459"
  },
  {
    title: "AppSheet Development",
    description: "Google&apos;s no-code platform for creating powerful mobile applications with Google Workspace integration.",
    icon: <FaCode className="text-3xl" />,
    price: "From $402"
  },
  {
    title: "Bubble App Development",
    description: "Full-featured web applications with database design, API integrations, and custom plugins.",
    icon: <FaGlobe className="text-3xl" />,
    price: "From $574"
  }
];

export default function Pricing() {
  const [calculatorData, setCalculatorData] = useState({
    platform: "glide",
    screens: 5,
    requirements: 3,
    integrations: 2,
    users: 100,
    support: "basic"
  });

  const calculatePrice = () => {
    let basePrice = 0;
    
    // Platform base prices
    switch (calculatorData.platform) {
      case "glide":
        basePrice = 1250;
        break;
      case "flutterflow":
        basePrice = 2000;
        break;
      case "appsheet":
        basePrice = 1750;
        break;
      case "bubble":
        basePrice = 2500;
        break;
      case "website":
        basePrice = 1500;
        break;
      case "flutter":
        basePrice = 4000;
        break;
    }

    // Screen complexity multiplier
    const screenMultiplier = 1 + (calculatorData.screens - 5) * 0.1;
    
    // Requirements multiplier
    const requirementsMultiplier = 1 + (calculatorData.requirements - 3) * 0.15;
    
    // Integrations multiplier
    const integrationsMultiplier = 1 + (calculatorData.integrations - 2) * 0.2;
    
    // User scale multiplier
    const userMultiplier = 1 + (calculatorData.users - 100) / 1000;
    
    // Support multiplier
    const supportMultiplier = calculatorData.support === "premium" ? 1.3 : calculatorData.support === "basic" ? 1.1 : 1;

    const totalPrice = Math.round(basePrice * screenMultiplier * requirementsMultiplier * integrationsMultiplier * userMultiplier * supportMultiplier);
    
    return totalPrice;
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: linear-gradient(to right, #3b82f6, #8b5cf6);
          cursor: pointer;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }
        .slider::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: linear-gradient(to right, #3b82f6, #8b5cf6);
          cursor: pointer;
          border: none;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }
        .slider::-webkit-slider-track {
          background: linear-gradient(to right, #3b82f6, #8b5cf6);
          height: 8px;
          border-radius: 4px;
        }
        .slider::-moz-range-track {
          background: linear-gradient(to right, #3b82f6, #8b5cf6);
          height: 8px;
          border-radius: 4px;
          border: none;
        }
      `}</style>
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
                Transparent
              </span>
              <br />
              <span className="text-slate-700 dark:text-slate-300">Pricing</span>
      </h1>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 max-w-4xl mx-auto leading-relaxed">
              Choose the perfect plan for your business needs. All plans include our commitment to quality, 
              security, and ongoing support.
            </p>
          </div>
        </div>
      </section>



      {/* Pricing Calculator */}
      <section className="py-16 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Get Your Custom Quote
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Use our interactive calculator to get a personalized quote based on your specific requirements.
            </p>
          </div>

          <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-slate-200 dark:border-slate-700">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Calculator Form */}
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">Development Platform</label>
                  <select 
                    value={calculatorData.platform}
                    onChange={(e) => setCalculatorData({...calculatorData, platform: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-white/50 dark:bg-slate-700/50 backdrop-blur-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                  >
                    <option value="glide">Glide Apps (Most Popular)</option>
                    <option value="flutterflow">FlutterFlow</option>
                    <option value="appsheet">AppSheet</option>
                    <option value="bubble">Bubble</option>
                    <option value="website">Website Development</option>
                    <option value="flutter">Flutter Native</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">Number of Screens</label>
                  <div className="relative">
                    <div className="flex gap-4 items-center">
                      <input 
                        type="range" 
                        min="1" 
                        max="20" 
                        value={calculatorData.screens}
                        onChange={(e) => setCalculatorData({...calculatorData, screens: parseInt(e.target.value)})}
                        className="flex-1 h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer slider"
                      />
                      <input 
                        type="number" 
                        min="1" 
                        max="20" 
                        value={calculatorData.screens}
                        onChange={(e) => setCalculatorData({...calculatorData, screens: parseInt(e.target.value) || 1})}
                        className="w-20 px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-600 bg-white/50 dark:bg-slate-700/50 backdrop-blur-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none text-center"
                      />
                    </div>
                    <div className="flex justify-between text-sm text-slate-600 dark:text-slate-400 mt-2">
                      <span>1</span>
                      <span className="font-semibold">{calculatorData.screens} screens</span>
                      <span>20</span>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">Complex Requirements</label>
                  <div className="relative">
                    <div className="flex gap-4 items-center">
                      <input 
                        type="range" 
                        min="1" 
                        max="10" 
                        value={calculatorData.requirements}
                        onChange={(e) => setCalculatorData({...calculatorData, requirements: parseInt(e.target.value)})}
                        className="flex-1 h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer slider"
                      />
                      <input 
                        type="number" 
                        min="1" 
                        max="10" 
                        value={calculatorData.requirements}
                        onChange={(e) => setCalculatorData({...calculatorData, requirements: parseInt(e.target.value) || 1})}
                        className="w-20 px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-600 bg-white/50 dark:bg-slate-700/50 backdrop-blur-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none text-center"
                      />
                    </div>
                    <div className="flex justify-between text-sm text-slate-600 dark:text-slate-400 mt-2">
                      <span>Basic</span>
                      <span className="font-semibold">{calculatorData.requirements}/10</span>
                      <span>Complex</span>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">Third-party Integrations</label>
                  <div className="relative">
                    <div className="flex gap-4 items-center">
                      <input 
                        type="range" 
                        min="0" 
                        max="10" 
                        value={calculatorData.integrations}
                        onChange={(e) => setCalculatorData({...calculatorData, integrations: parseInt(e.target.value)})}
                        className="flex-1 h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer slider"
                      />
                      <input 
                        type="number" 
                        min="0" 
                        max="10" 
                        value={calculatorData.integrations}
                        onChange={(e) => setCalculatorData({...calculatorData, integrations: parseInt(e.target.value) || 0})}
                        className="w-20 px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-600 bg-white/50 dark:bg-slate-700/50 backdrop-blur-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none text-center"
                      />
                    </div>
                    <div className="flex justify-between text-sm text-slate-600 dark:text-slate-400 mt-2">
                      <span>None</span>
                      <span className="font-semibold">{calculatorData.integrations} integrations</span>
                      <span>10+</span>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">Expected Users</label>
                  <div className="relative">
                    <div className="flex gap-4 items-center">
                      <input 
                        type="range" 
                        min="10" 
                        max="10000" 
                        step="10"
                        value={calculatorData.users}
                        onChange={(e) => setCalculatorData({...calculatorData, users: parseInt(e.target.value)})}
                        className="flex-1 h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer slider"
                      />
                      <input 
                        type="number" 
                        min="10" 
                        max="10000" 
                        step="10"
                        value={calculatorData.users}
                        onChange={(e) => setCalculatorData({...calculatorData, users: parseInt(e.target.value) || 10})}
                        className="w-24 px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-600 bg-white/50 dark:bg-slate-700/50 backdrop-blur-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none text-center"
                      />
                    </div>
                    <div className="flex justify-between text-sm text-slate-600 dark:text-slate-400 mt-2">
                      <span>10</span>
                      <span className="font-semibold">{calculatorData.users.toLocaleString()} users</span>
                      <span>10K</span>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">Support Level</label>
                  <select 
                    value={calculatorData.support}
                    onChange={(e) => setCalculatorData({...calculatorData, support: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-white/50 dark:bg-slate-700/50 backdrop-blur-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                  >
                    <option value="none">No Support</option>
                    <option value="basic">Basic Support (3 months)</option>
                    <option value="premium">Premium Support (6 months)</option>
                  </select>
                </div>
              </div>

              {/* Price Display */}
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-700 dark:to-slate-800 rounded-2xl p-8 border border-slate-200 dark:border-slate-600">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <FaCalculator className="text-white text-2xl" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Your Estimated Price</h3>
                  <div className="text-5xl font-bold text-blue-600 mb-4">${calculatePrice().toLocaleString()}</div>
                  <p className="text-slate-600 dark:text-slate-400 mb-6">One-time development cost</p>
                  
                  <div className="space-y-3 text-left">
                    <div className="flex justify-between">
                      <span className="text-slate-600 dark:text-slate-400">Platform:</span>
                      <span className="font-semibold text-slate-900 dark:text-white">
                        {calculatorData.platform === "glide" ? "Glide Apps" :
                         calculatorData.platform === "flutterflow" ? "FlutterFlow" :
                         calculatorData.platform === "appsheet" ? "AppSheet" :
                         calculatorData.platform === "bubble" ? "Bubble" :
                         calculatorData.platform === "website" ? "Website" : "Flutter"}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600 dark:text-slate-400">Screens:</span>
                      <span className="font-semibold text-slate-900 dark:text-white">{calculatorData.screens}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600 dark:text-slate-400">Complexity:</span>
                      <span className="font-semibold text-slate-900 dark:text-white">{calculatorData.requirements}/10</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600 dark:text-slate-400">Integrations:</span>
                      <span className="font-semibold text-slate-900 dark:text-white">{calculatorData.integrations}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600 dark:text-slate-400">Users:</span>
                      <span className="font-semibold text-slate-900 dark:text-white">{calculatorData.users.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600 dark:text-slate-400">Support:</span>
                      <span className="font-semibold text-slate-900 dark:text-white">
                        {calculatorData.support === "basic" ? "Basic (3 months)" : 
                         calculatorData.support === "premium" ? "Premium (6 months)" : "No Support"}
                      </span>
                    </div>
                  </div>

                  <div className="mt-8">
                    <a
                      href="/contact"
                      className="w-full group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3"
                    >
                      Get Detailed Quote
                      <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Custom Services */}
      <section className="py-16 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Custom Solutions
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Need something specific? We offer custom development services tailored to your unique requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-slate-200 dark:border-slate-700">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <div className="text-white">
                      {service.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{service.title}</h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">{service.description}</p>
                    <div className="text-2xl font-bold text-blue-600">{service.price}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Why Choose Buidoza?
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                              We don&apos;t just build software - we build partnerships for success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <MdSecurity className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Enterprise Security</h3>
              <p className="text-slate-600 dark:text-slate-400">Bank-level security standards and compliance</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <FaHeadset className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">24/7 Support</h3>
              <p className="text-slate-600 dark:text-slate-400">Round-the-clock technical support</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <MdSpeed className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Fast Delivery</h3>
              <p className="text-slate-600 dark:text-slate-400">Quick turnaround times without compromising quality</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <MdAnalytics className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Performance Focus</h3>
              <p className="text-slate-600 dark:text-slate-400">Optimized for speed and scalability</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                            Let&apos;s discuss your project requirements and find the perfect solution for your business. 
            Our team is ready to help you succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="group bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3"
            >
              Get Free Quote
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