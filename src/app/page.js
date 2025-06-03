'use client';

import Image from 'next/image';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import Link from 'next/link';

// Add this to your layout.js or _app.js for fonts:
// <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;600;700&family=Lato:wght@400;700&display=swap" rel="stylesheet" />

const icons = {
  personal: (
    <span className="inline-block bg-accent-green text-dark-blue rounded-full p-2">
      <svg width="24" height="24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="10" strokeWidth="2"/><path d="M12 16v-4M12 8h.01" strokeWidth="2"/></svg>
    </span>
  ),
  business: (
    <span className="inline-block bg-accent-green text-dark-blue rounded-full p-2">
      <svg width="24" height="24" fill="none" stroke="currentColor"><rect x="3" y="7" width="18" height="13" rx="2" strokeWidth="2"/><path d="M16 3v4M8 3v4" strokeWidth="2"/></svg>
    </span>
  ),
  mortgage: (
    <span className="inline-block bg-accent-green text-dark-blue rounded-full p-2">
      <svg width="24" height="24" fill="none" stroke="currentColor"><path d="M3 11l9-7 9 7" strokeWidth="2"/><rect x="6" y="11" width="12" height="8" rx="2" strokeWidth="2"/></svg>
    </span>
  ),
  credit: (
    <span className="inline-block bg-accent-green text-dark-blue rounded-full p-2">
      <svg width="24" height="24" fill="none" stroke="currentColor"><rect x="2" y="7" width="20" height="10" rx="2" strokeWidth="2"/><path d="M6 11h.01M10 11h.01" strokeWidth="2"/></svg>
    </span>
  ),
  comparison: (
    <span className="inline-block bg-accent-green text-dark-blue rounded-full p-2">
      <svg width="24" height="24" fill="none" stroke="currentColor"><path d="M8 17v-6a4 4 0 1 1 8 0v6" strokeWidth="2"/><rect x="6" y="17" width="12" height="4" rx="2" strokeWidth="2"/></svg>
    </span>
  ),
  specialized: (
    <span className="inline-block bg-accent-green text-dark-blue rounded-full p-2">
      <svg width="24" height="24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="10" strokeWidth="2"/><path d="M8 12h8" strokeWidth="2"/></svg>
    </span>
  ),
  application: (
    <span className="inline-block bg-accent-green text-dark-blue rounded-full p-2">
      <svg width="24" height="24" fill="none" stroke="currentColor"><rect x="4" y="4" width="16" height="16" rx="2" strokeWidth="2"/><path d="M8 8h8v8H8z" strokeWidth="2"/></svg>
    </span>
  ),
  debt: (
    <span className="inline-block bg-accent-green text-dark-blue rounded-full p-2">
      <svg width="24" height="24" fill="none" stroke="currentColor"><path d="M12 8v8M8 12h8" strokeWidth="2"/><circle cx="12" cy="12" r="10" strokeWidth="2"/></svg>
    </span>
  ),
  negotiation: (
    <span className="inline-block bg-accent-green text-dark-blue rounded-full p-2">
      <svg width="24" height="24" fill="none" stroke="currentColor"><path d="M8 12h8M12 8v8" strokeWidth="2"/><circle cx="12" cy="12" r="10" strokeWidth="2"/></svg>
    </span>
  ),
  advisory: (
    <span className="inline-block bg-accent-green text-dark-blue rounded-full p-2">
      <svg width="24" height="24" fill="none" stroke="currentColor"><path d="M12 6v6l4 2" strokeWidth="2"/><circle cx="12" cy="12" r="10" strokeWidth="2"/></svg>
    </span>
  ),
};

const services = [
  {
    icon: icons.personal,
    title: "Personal Loan Sourcing",
    desc: "Find tailored personal loans for debt consolidation, home improvements, or unexpected expenses, with competitive rates and terms.",
    cta: "Get Started",
  },
  {
    icon: icons.business,
    title: "Business Loan Facilitation",
    desc: "Secure business loans for startups, expansion, equipment, or working capital, customized to your business needs.",
    cta: "Contact Us",
  },
  {
    icon: icons.mortgage,
    title: "Mortgage Loan Consulting",
    desc: "Guidance through the mortgage process, including sourcing home loans, refinancing, and buy-to-let mortgages.",
    cta: "Learn More",
  },
  {
    icon: icons.credit,
    title: "Credit Score Improvement Guidance",
    desc: "Get advice and strategies to improve your credit profile and qualify for better loan terms.",
    cta: "Improve Credit",
  },
  {
    icon: icons.comparison,
    title: "Loan Comparison and Analysis",
    desc: "Compare loan products from multiple lenders to get the best rates, terms, and conditions for your situation.",
    cta: "Compare Loans",
  },
  {
    icon: icons.specialized,
    title: "Specialized Loan Programs",
    desc: "Access niche loan products like bad credit loans, bridging loans, or government-backed schemes.",
    cta: "Explore Options",
  },
  {
    icon: icons.application,
    title: "Application Support and Documentation",
    desc: "Get help with loan applications, documentation, and compliance to streamline approval.",
    cta: "Apply Now",
  },
  {
    icon: icons.debt,
    title: "Debt Restructuring and Consolidation",
    desc: "Consolidate debts into a single loan with lower rates or manageable terms for financial stability.",
    cta: "Consolidate Debt",
  },
  {
    icon: icons.negotiation,
    title: "Lender Negotiation Services",
    desc: "We negotiate with lenders on your behalf to secure favorable terms and flexible repayment schedules.",
    cta: "Negotiate Now",
  },
  {
    icon: icons.advisory,
    title: "Financial Advisory for Loan Eligibility",
    desc: "Personalized consultations to assess eligibility, recommend products, and plan for long-term financial health.",
    cta: "Book Consultation",
  },
];

const testimonials = [
  {
    name: "Jane M.",
    text: "D'nice Investments helped me secure a personal loan of kes 2 million quickly and at a great rate. Highly recommended!",
  },
  {
    name: "SM ventures.",
    text: "Their business loan facilitation service was seamless. I got the capital of kes 900 million I needed to expand my business.",
  },
];

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, error: null });

    try {
      await emailjs.send(
        'service_73rjcis',
        'contactForm_submission#',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'D&apos;nice Investments',
          reply_to: formData.email, // This ensures replies go to the sender
        },
        'nntt3GIjCUeAiYFRO'
      );

      setStatus({
        submitting: false,
        submitted: true,
        error: null
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus({
        submitting: false,
        submitted: false,
        error: 'Failed to send message. Please try again or contact us directly.'
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 font-lato">
      {/* Header */}
      <header className="bg-black text-white py-6 shadow-lg border-b border-amber-500/20">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          <h1 className="text-3xl font-oswald tracking-tight uppercase text-amber-500">D&apos;nice Investments</h1>
          <nav className="mt-2 md:mt-0 flex gap-6 text-lg font-lato">
            <a href="#testimonials" className="hover:text-amber-500 transition">Testimonials</a>
            <a href="#contact" className="hover:text-amber-500 transition">Contact</a>
            <Link href="/commercial-strategy" className="hover:text-amber-500 transition">Commercial Strategy</Link>
            <a href="/faq" className="hover:text-amber-500 transition">FAQ</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 py-16 flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1">
          <h2 className="text-5xl font-oswald font-bold text-amber-500 mb-4 leading-tight drop-shadow">Exclusive Loan Sourcing for Discerning Clients</h2>
          <p className="text-xl text-gray-300 mb-8 font-lato">
            Bespoke financial solutions for individuals and businesses. Experience privacy, expertise, and a commitment to your financial legacy.
          </p>
          <a href="#services" className="inline-block bg-amber-500 hover:bg-amber-400 text-black font-semibold px-8 py-4 rounded shadow-lg transition font-oswald tracking-wide uppercase">Explore Our Services</a>
        </div>
        <div className="flex-1 flex justify-center">
          <Image src="https://images.unsplash.com/photo-1579621970795-87facc2f976d?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Abstract Financial Growth" width={320} height={213} className="rounded-xl shadow-2xl w-full max-w-xs border-4 border-amber-500/30" />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="max-w-6xl mx-auto px-4 py-16">
        <h3 className="text-4xl font-oswald font-bold text-amber-500 mb-12 text-center uppercase">Our Services</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, idx) => (
            <div key={service.title} className="bg-gray-800 rounded-xl shadow-lg p-8 flex flex-col items-start border-t-4 border-amber-500 hover:shadow-2xl transition border border-amber-500/30">
              <span className="inline-block bg-amber-500 text-black rounded-full p-2">{service.icon}</span>
              <h4 className="mt-6 text-2xl font-oswald font-semibold text-white">{service.title}</h4>
              <p className="mt-3 text-gray-300 font-lato">{service.desc}</p>
              <a href="#contact" className="mt-6 inline-block bg-amber-500 hover:bg-amber-400 text-black font-oswald px-5 py-2 rounded transition uppercase">
                {service.cta}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="max-w-4xl mx-auto px-4 py-16">
        <h3 className="text-3xl font-oswald font-bold text-amber-500 mb-8 text-center uppercase">Client Testimonials</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-gray-800 border-l-4 border-amber-500 p-8 rounded shadow-lg font-lato border border-amber-500/30">
              <p className="text-gray-300 italic text-lg">{t.text}</p>
              <div className="mt-6 font-semibold text-amber-500 font-oswald">- {t.name}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-2xl mx-auto px-4 py-16">
        <h3 className="text-3xl font-oswald font-bold text-amber-500 mb-6 text-center uppercase">Contact Us</h3>
        <form onSubmit={handleSubmit} className="bg-gray-800 rounded-xl shadow-lg p-8 flex flex-col gap-6 mb-8 border border-amber-500/30">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="border border-amber-500/30 bg-gray-700 rounded p-3 font-lato text-white placeholder-gray-400 focus:border-amber-500 focus:outline-none"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="border border-amber-500/30 bg-gray-700 rounded p-3 font-lato text-white placeholder-gray-400 focus:border-amber-500 focus:outline-none"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="How can we help you?"
            className="border border-amber-500/30 bg-gray-700 rounded p-3 font-lato text-white placeholder-gray-400 focus:border-amber-500 focus:outline-none"
            rows={4}
            required
          />
          <button
            type="submit"
            disabled={status.submitting}
            className={`bg-amber-500 hover:bg-amber-400 text-black font-oswald font-semibold px-6 py-3 rounded transition uppercase tracking-wider ${
              status.submitting ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            {status.submitting ? 'Sending...' : 'Send Message'}
          </button>
          
          {status.submitted && (
            <div className="text-green-400 text-center mt-2">
              Thank you for your message! We&apos;ll get back to you soon.
            </div>
          )}
          
          {status.error && (
            <div className="text-red-400 text-center mt-2">
              {status.error}
            </div>
          )}
        </form>
        <div className="bg-gray-800 rounded-xl shadow p-6 text-white font-lato text-lg border border-amber-500/30">
          <div className="mb-2 font-oswald text-2xl text-amber-500">D&apos;nice Investments</div>
          <div className="flex items-center gap-2 mb-2">
            <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>Box 31164 - 00600, Nairobi</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <a href="mailto:dnicein@outlook.com" className="hover:text-amber-500 transition">dnicein@gmail.com</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-6 text-center font-lato tracking-normal border-t border-amber-500/20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-2">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Box 31164 - 00600, Nairobi</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <a href="mailto:dnicein@outlook.com" className="hover:text-amber-500 transition">dnicein@gmail.com</a>
            </div>
          </div>
          <div className="text-sm text-gray-400">&copy; {new Date().getFullYear()} D&apos;nice Investments. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}