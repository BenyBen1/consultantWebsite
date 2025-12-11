'use client';

import Image from 'next/image';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import Link from 'next/link';

const services = [
  {
    icon: (
      <svg width="32" height="32" fill="none" stroke="currentColor" className="text-amber-500">
        <circle cx="16" cy="16" r="14" strokeWidth="2" />
        <path d="M10 16h12M16 10v12" strokeWidth="2" />
      </svg>
    ),
    title: "Market Entry Strategy",
    desc: "Tailored plans for entering new markets, including research, competitive analysis, and entry tactics.",
    cta: "Get Started",
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" stroke="currentColor" className="text-amber-500">
        <rect x="6" y="14" width="6" height="12" rx="2" strokeWidth="2" />
        <rect x="16" y="8" width="10" height="18" rx="2" strokeWidth="2" />
      </svg>
    ),
    title: "Business Growth Planning",
    desc: "Strategic roadmaps for sustainable business expansion, focusing on scalability, customer acquisition, and market share growth.",
    cta: "Contact Us",
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" stroke="currentColor" className="text-amber-500">
        <circle cx="16" cy="16" r="14" strokeWidth="2" />
        <path d="M16 10v6l4 2" strokeWidth="2" />
      </svg>
    ),
    title: "Operational Efficiency Consulting",
    desc: "Optimize business processes to reduce costs, improve productivity, and enhance operational performance.",
    cta: "Learn More",
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" stroke="currentColor" className="text-amber-500">
        <rect x="8" y="8" width="16" height="16" rx="4" strokeWidth="2" />
        <path d="M16 12v8M12 16h8" strokeWidth="2" />
      </svg>
    ),
    title: "Competitive Positioning Analysis",
    desc: "Assess competitors and market trends to position your business for a competitive advantage and brand differentiation.",
    cta: "Analyze Now",
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" stroke="currentColor" className="text-amber-500">
        <circle cx="10" cy="16" r="4" strokeWidth="2" />
        <circle cx="22" cy="16" r="4" strokeWidth="2" />
        <path d="M14 16h4" strokeWidth="2" />
      </svg>
    ),
    title: "Strategic Partnership Development",
    desc: "Identifying and fostering partnerships or alliances to drive business growth and expand market reach.",
    cta: "Explore Options",
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" stroke="currentColor" className="text-amber-500">
        <path d="M16 4v8M16 20v8M8 16h16" strokeWidth="2" />
        <circle cx="16" cy="16" r="6" strokeWidth="2" />
      </svg>
    ),
    title: "Innovation and Product Strategy",
    desc: "Guiding businesses in developing innovative products or services, including ideation, market fit analysis, and launch strategies.",
    cta: "Innovate Now",
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" stroke="currentColor" className="text-amber-500">
        <rect x="6" y="6" width="20" height="20" rx="4" strokeWidth="2" />
        <path d="M12 12h8v8h-8z" strokeWidth="2" />
      </svg>
    ),
    title: "Digital Transformation Strategy",
    desc: "Advising on the integration of digital technologies to enhance business operations, customer engagement, and competitive edge.",
    cta: "Transform Now",
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" stroke="currentColor" className="text-amber-500">
        <polygon points="16,4 28,28 4,28" strokeWidth="2" fill="none" />
        <circle cx="16" cy="22" r="2" strokeWidth="2" />
        <path d="M16 14v4" strokeWidth="2" />
      </svg>
    ),
    title: "Risk Management Consulting",
    desc: "Evaluate strategic risks (e.g., market shifts, regulatory changes) and recommend mitigation strategies to ensure business resilience.",
    cta: "Manage Risk",
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" stroke="currentColor" className="text-amber-500">
        <circle cx="16" cy="16" r="14" strokeWidth="2" />
        <path d="M10 20c2 2 8 2 12 0" strokeWidth="2" />
      </svg>
    ),
    title: "Customer Experience Optimization",
    desc: "Designing strategies to improve customer satisfaction, loyalty, and retention through enhanced service delivery and engagement.",
    cta: "Optimize CX",
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" stroke="currentColor" className="text-amber-500">
        <circle cx="16" cy="16" r="14" strokeWidth="2" />
        <path d="M16 10v6l4 2" strokeWidth="2" />
      </svg>
    ),
    title: "Sustainability and ESG Strategy",
    desc: "Developing strategies to align business operations with environmental, social, and governance (ESG) goals for long-term sustainability.",
    cta: "Go Sustainable",
  },
];

const testimonials = [
  {
    name: "Tech Innovations Ltd.",
    text: "D'nice Investments provided exceptional strategic guidance that helped us expand into three new markets within a year. Their expertise is unmatched!",
  },
  {
    name: "SM Ventures.",
    text: "Their business growth planning transformed our operations. We achieved 40% efficiency improvement and significant cost savings.",
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
          reply_to: formData.email,
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
            <a href="#services" className="hover:text-amber-500 transition">Services</a>
            <a href="#testimonials" className="hover:text-amber-500 transition">Testimonials</a>
            <a href="#contact" className="hover:text-amber-500 transition">Contact</a>
            <a href="/faq" className="hover:text-amber-500 transition">FAQ</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 py-16 flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1">
          <h2 className="text-5xl font-oswald font-bold text-amber-500 mb-4 leading-tight drop-shadow">Unlock Your Business&apos;s Full Potential</h2>
          <p className="text-xl text-gray-300 mb-8 font-lato">
            Elite strategic consulting to drive growth, optimize operations, and achieve market leadership. We provide bespoke solutions and expert guidance tailored to your unique needs.
          </p>
          <a href="#services" className="inline-block bg-amber-500 hover:bg-amber-400 text-black font-semibold px-8 py-4 rounded shadow-lg transition font-oswald tracking-wide uppercase">Explore Our Services</a>
        </div>
        <div className="flex-1 flex justify-center">
          <Image src="https://images.unsplash.com/photo-1579621970795-87facc2f976d?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Strategic Business Growth" width={320} height={213} className="rounded-xl shadow-2xl w-full max-w-xs border-4 border-amber-500/30" />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="max-w-6xl mx-auto px-4 py-16">
        <h3 className="text-4xl font-oswald font-bold text-amber-500 mb-12 text-center uppercase">Our Commercial Strategy Services</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, idx) => (
            <div key={service.title} className="bg-gray-800 rounded-xl shadow-lg p-8 flex flex-col items-start border-t-4 border-amber-500 hover:shadow-2xl transition">
              <span className="mb-4">{service.icon}</span>
              <h4 className="text-2xl font-oswald font-semibold text-white">{service.title}</h4>
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
            <div key={idx} className="bg-gray-800 border-l-4 border-amber-500 p-8 rounded shadow-lg font-lato">
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