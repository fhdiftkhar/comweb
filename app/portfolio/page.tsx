"use client";
import { FaLaptop, FaMobile, FaDatabase, FaCloud } from "react-icons/fa";

export default function Portfolio() {
  return (
    <main className="max-w-4xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-8 accent text-center">Our Portfolio</h1>
      <p className="text-lg text-gray-600 dark:text-gray-400 text-center mb-12">
        Discover how we&apos;ve helped businesses transform their digital presence with innovative solutions.
      </p>
      
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <div className="card hover:scale-105 transition-transform duration-200">
          <div className="flex items-center gap-3 mb-4">
            <FaLaptop className="text-2xl accent" />
            <h2 className="text-xl font-semibold">E-commerce Platform</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-400 mb-4">A comprehensive online marketplace with advanced inventory management, payment processing, and analytics dashboard.</p>
          <div className="flex flex-wrap gap-2">
            <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">React</span>
            <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">Node.js</span>
            <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded">MongoDB</span>
          </div>
        </div>
        
        <div className="card hover:scale-105 transition-transform duration-200">
          <div className="flex items-center gap-3 mb-4">
            <FaMobile className="text-2xl accent" />
            <h2 className="text-xl font-semibold">Mobile Banking App</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-400 mb-4">Secure mobile banking application with biometric authentication, real-time transactions, and financial planning tools.</p>
          <div className="flex flex-wrap gap-2">
            <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">React Native</span>
            <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">Firebase</span>
            <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded">Stripe</span>
          </div>
        </div>
        
        <div className="card hover:scale-105 transition-transform duration-200">
          <div className="flex items-center gap-3 mb-4">
            <FaDatabase className="text-2xl accent" />
            <h2 className="text-xl font-semibold">Enterprise CRM</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-400 mb-4">Customer relationship management system for Fortune 500 companies with advanced reporting and automation.</p>
          <div className="flex flex-wrap gap-2">
            <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">Vue.js</span>
            <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">Laravel</span>
            <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded">PostgreSQL</span>
          </div>
        </div>
        
        <div className="card hover:scale-105 transition-transform duration-200">
          <div className="flex items-center gap-3 mb-4">
            <FaCloud className="text-2xl accent" />
            <h2 className="text-xl font-semibold">Cloud Management</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-400 mb-4">Multi-cloud infrastructure management platform with automated scaling, monitoring, and cost optimization.</p>
          <div className="flex flex-wrap gap-2">
            <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">Angular</span>
            <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">Python</span>
            <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded">AWS</span>
          </div>
        </div>
        
        <div className="card hover:scale-105 transition-transform duration-200">
          <div className="flex items-center gap-3 mb-4">
            <FaLaptop className="text-2xl accent" />
            <h2 className="text-xl font-semibold">Healthcare Portal</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-400 mb-4">HIPAA-compliant healthcare management system with patient records, appointment scheduling, and telemedicine features.</p>
          <div className="flex flex-wrap gap-2">
            <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">Next.js</span>
            <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">Express</span>
            <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded">MySQL</span>
          </div>
        </div>
        
        <div className="card hover:scale-105 transition-transform duration-200">
          <div className="flex items-center gap-3 mb-4">
            <FaMobile className="text-2xl accent" />
            <h2 className="text-xl font-semibold">Logistics App</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-400 mb-4">Real-time logistics tracking application with route optimization, delivery management, and fleet analytics.</p>
          <div className="flex flex-wrap gap-2">
            <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">Flutter</span>
            <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">Django</span>
            <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded">Redis</span>
          </div>
        </div>
      </div>
      
      <div className="mt-12 text-center">
        <a
          href="/contact"
          className="inline-block bg-gradient-to-r from-[var(--accent)] to-indigo-500 text-white rounded-full px-8 py-3 font-semibold text-lg shadow-lg hover:scale-105 transition-transform duration-200"
        >
          Start Your Project
        </a>
      </div>
    </main>
  );
} 