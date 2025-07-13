"use client";

export default function Portfolio() {
  return (
    <main className="max-w-3xl mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold mb-8 accent">Portfolio</h1>
      <div className="grid gap-8 sm:grid-cols-2">
        <div className="card">
          <h2 className="text-lg font-semibold mb-2">Inventory Manager</h2>
          <p className="text-gray-600 dark:text-gray-400">A custom inventory tracking app for small businesses, built with Glide.</p>
        </div>
        <div className="card">
          <h2 className="text-lg font-semibold mb-2">Event Planner</h2>
          <p className="text-gray-600 dark:text-gray-400">An event management solution for organizers, featuring RSVP and scheduling tools.</p>
        </div>
        <div className="card">
          <h2 className="text-lg font-semibold mb-2">Client Portal</h2>
          <p className="text-gray-600 dark:text-gray-400">A secure portal for client communication and file sharing, tailored for consultants.</p>
        </div>
      </div>
    </main>
  );
} 