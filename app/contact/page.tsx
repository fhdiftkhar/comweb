"use client";

import { useState } from "react";
import Image from "next/image";
import { FaPaperPlane, FaBuilding, FaPhone, FaEnvelope, FaMapMarkerAlt, FaArrowRight } from "react-icons/fa";
import { MdSecurity, MdSupport } from "react-icons/md";

export default function Contact() {
  const [sent, setSent] = useState(false);

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
                Get in
              </span>
              <br />
              <span className="text-slate-700 dark:text-slate-300">Touch</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 max-w-4xl mx-auto leading-relaxed">
              Ready to transform your business? Our team of experts is here to help you build 
              innovative solutions that drive growth and success.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-3xl"></div>
              <div className="relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-slate-200 dark:border-slate-700">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <FaPaperPlane className="text-white text-2xl" />
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Start Your Project</h2>
                  <p className="text-slate-600 dark:text-slate-400">Tell us about your vision and we&apos;ll get back to you within 24 hours</p>
                </div>

                {!sent ? (
                  <form 
                    action="https://api.web3forms.com/submit" 
                    method="POST"
                    className="space-y-6" 
                    onSubmit={() => { setSent(true); }}
                  >
                    <input type="hidden" name="access_key" value="706b5fe0-b01c-472c-abbf-9d112bf9f6e0" />
                    <input type="hidden" name="subject" value="New Contact Form Submission - Buidoza" />
                    <input type="hidden" name="redirect" value="https://web3forms.com/success" />
                    <input type="checkbox" name="botcheck" style={{display: 'none'}} />
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Company Name</label>
                        <input 
                          type="text" 
                          name="company"
                          required 
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-white/50 dark:bg-slate-700/50 backdrop-blur-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                          placeholder="Your Company"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Contact Person</label>
                        <input 
                          type="text" 
                          name="name"
                          required 
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-white/50 dark:bg-slate-700/50 backdrop-blur-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                          placeholder="Your Name"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Email</label>
                        <input 
                          type="email" 
                          name="email"
                          required 
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-white/50 dark:bg-slate-700/50 backdrop-blur-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                          placeholder="your@email.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Phone</label>
                        <input 
                          type="tel" 
                          name="phone"
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-white/50 dark:bg-slate-700/50 backdrop-blur-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Project Type</label>
                      <select 
                        name="project_type"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-white/50 dark:bg-slate-700/50 backdrop-blur-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                      >
                        <option>Glide Apps Development</option>
                        <option>FlutterFlow Development</option>
                        <option>AppSheet Development</option>
                        <option>Bubble App Development</option>
                        <option>Website Development</option>
                        <option>Flutter App Development</option>
                        <option>Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Project Details</label>
                      <textarea 
                        name="message"
                        required 
                        rows={4}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-white/50 dark:bg-slate-700/50 backdrop-blur-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none resize-none"
                        placeholder="Tell us about your project, goals, and requirements..."
                      />
                    </div>

                    <button 
                      type="submit" 
                      className="w-full group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3"
                    >
                      Send Message
                      <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </form>
                ) : (
                  <div className="text-center py-8">
                    <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <FaPaperPlane className="text-white text-3xl" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Thank You!</h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-6">
                      Your message has been sent successfully. Our team will get back to you within 24 hours.
                    </p>
                    <button 
                      onClick={() => setSent(false)}
                      className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                    >
                      Send Another Message
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Get in Touch</h2>
                <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                  Ready to start your digital transformation journey? Our team of experts is here to help 
                  you build innovative solutions that drive growth and success.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FaPhone className="text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">Phone</h3>
                    <p className="text-slate-600 dark:text-slate-400">+923315533545</p>
                    <p className="text-sm text-slate-500 dark:text-slate-500">Available 24/7</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FaEnvelope className="text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">Email</h3>
                    <p className="text-slate-600 dark:text-slate-400">fhdiftkhar@gmail.com</p>
                    <p className="text-sm text-slate-500 dark:text-slate-500">24/7 support available</p>
                  </div>
                </div>




              </div>

              {/* Why Choose Us */}
              <div className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-200 dark:border-slate-700">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Why Choose Buidoza?</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <MdSecurity className="text-green-500 text-xl" />
                    <span className="text-slate-600 dark:text-slate-400">Enterprise-grade security</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MdSupport className="text-blue-500 text-xl" />
                    <span className="text-slate-600 dark:text-slate-400">24/7 dedicated support</span>
                    </div>
                  <div className="flex items-center gap-3">
                    <FaBuilding className="text-purple-500 text-xl" />
                    <span className="text-slate-600 dark:text-slate-400">Proven track record</span>
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
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Join hundreds of companies that have accelerated their digital transformation with Buidoza. 
            Let&apos;s build the future together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/portfolio"
              className="group bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3"
            >
              View Our Work
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