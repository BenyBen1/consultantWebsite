'use client';

import { useState } from 'react';
import Link from 'next/link';
import emailjs from '@emailjs/browser';

export default function FAQ() {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedCategories, setExpandedCategories] = useState({});
  const [expandedQuestions, setExpandedQuestions] = useState({});

  const faqSections = [
    {
      title: "General Services (Loan Sourcing Consultancy)",
      faqs: [
        {
          category: "Personal Loan Sourcing",
          questions: [
            {
              q: "What types of personal loans can D'nice Investments help me find?",
              a: "We source personal loans for various needs, including debt consolidation, home improvements, medical expenses, or unexpected emergencies, with competitive rates tailored to your financial situation."
            },
            {
              q: "How long does it take to secure a personal loan through your service?",
              a: "The timeline varies, but we typically connect you with lenders within 1-3 business days, with loan approval depending on the lender's process and your application."
            }
          ]
        },
        {
          category: "Business Loan Facilitation",
          questions: [
            {
              q: "Can you help startups with no credit history get business loans?",
              a: "Yes, we work with lenders offering startup-friendly loans and can guide you on building a strong application to improve approval chances."
            },
            {
              q: "What types of businesses do you assist with loan facilitation?",
              a: "We support small and medium-sized enterprises (SMEs) across industries, including retail, tech, manufacturing, and more, for needs like expansion or equipment financing."
            }
          ]
        },
        {
          category: "Mortgage Loan Consulting",
          questions: [
            {
              q: "Do you help with both residential and buy-to-let mortgages?",
              a: "Yes, we source competitive mortgage options for home purchases, refinancing, and buy-to-let investments, tailored to your financial goals."
            },
            {
              q: "What documents are needed for mortgage loan consulting?",
              a: "Typically, you'll need proof of income, credit history, ID, and property details. We'll guide you through the exact requirements based on the lender."
            }
          ]
        },
        {
          category: "Credit Score Improvement Guidance",
          questions: [
            {
              q: "How can you help improve my credit score?",
              a: "We provide personalized strategies, such as managing debt, correcting credit report errors, and optimizing payment habits, to boost your score over time."
            },
            {
              q: "How long does it take to see credit score improvements?",
              a: "Improvements vary, but with consistent effort, you may see results within 3-6 months, depending on your starting point and financial habits."
            }
          ]
        },
        {
          category: "Loan Comparison and Analysis",
          questions: [
            {
              q: "How do you ensure I get the best loan terms?",
              a: "We compare loan products from multiple lenders, analyzing interest rates, repayment terms, and fees to find the best fit for your needs."
            },
            {
              q: "Are there any fees for your loan comparison service?",
              a: "Our consultation is free, though some lenders may charge application or processing fees, which we'll disclose upfront."
            }
          ]
        },
        {
          category: "Specialized Loan Programs",
          questions: [
            {
              q: "What are specialized loan programs, and who qualifies?",
              a: "These include bad credit loans, bridging loans, or government-backed schemes for clients with unique needs, such as low credit scores or short-term financing requirements."
            },
            {
              q: "Can you help with government-backed loan programs?",
              a: "Yes, we identify and guide you through eligible government schemes, ensuring you meet criteria and complete applications correctly."
            }
          ]
        },
        {
          category: "Application Support and Documentation",
          questions: [
            {
              q: "What kind of support do you provide for loan applications?",
              a: "We assist with preparing documents, filling out applications, and ensuring compliance with lender requirements to streamline the process."
            },
            {
              q: "Can you help if I've been rejected for a loan before?",
              a: "Yes, we review past rejections, address issues (e.g., credit or documentation), and match you with lenders more likely to approve."
            }
          ]
        },
        {
          category: "Debt Restructuring and Consolidation",
          questions: [
            {
              q: "How does debt consolidation work with your service?",
              a: "We help combine multiple debts into a single loan with lower rates or better terms, simplifying payments and reducing financial strain."
            },
            {
              q: "Will debt consolidation affect my credit score?",
              a: "Consolidation can improve your score over time by reducing missed payments, but applying for a new loan may cause a temporary dip."
            }
          ]
        },
        {
          category: "Lender Negotiation Services",
          questions: [
            {
              q: "What terms can you negotiate with lenders on my behalf?",
              a: "We negotiate interest rates, repayment schedules, and fees to secure more favorable loan conditions tailored to your needs."
            },
            {
              q: "Do I need to meet lenders directly for negotiations?",
              a: "No, we handle lender communications on your behalf, keeping you informed throughout the process."
            }
          ]
        },
        {
          category: "Financial Advisory for Loan Eligibility",
          questions: [
            {
              q: "How do you assess my loan eligibility?",
              a: "We evaluate your financial profile, including income, credit history, and debt-to-income ratio, to recommend suitable loan products."
            },
            {
              q: "Can you help if I have a low income or poor credit?",
              a: "Yes, we offer tailored advice to improve eligibility and connect you with lenders who specialize in flexible criteria."
            }
          ]
        }
      ]
    },
    {
      title: "Commercial Strategy Services",
      faqs: [
        {
          category: "Market Entry Strategy",
          questions: [
            {
              q: "What does your market entry strategy service include?",
              a: "We conduct market research, competitor analysis, and develop entry tactics to ensure a successful launch in new markets."
            },
            {
              q: "How long does it take to develop a market entry strategy?",
              a: "Typically, 2-4 weeks, depending on the market complexity and your business's readiness."
            }
          ]
        },
        {
          category: "Business Growth Planning",
          questions: [
            {
              q: "What types of businesses benefit from your growth planning?",
              a: "Startups, SMEs, and established firms across industries looking to scale, enter new markets, or increase market share."
            },
            {
              q: "How do you measure the success of a growth plan?",
              a: "We track KPIs like revenue growth, customer acquisition, and market penetration, tailored to your goals."
            }
          ]
        },
        {
          category: "Operational Efficiency Consulting",
          questions: [
            {
              q: "How do you identify inefficiencies in my business?",
              a: "We analyze workflows, resource allocation, and costs to pinpoint bottlenecks and recommend optimization strategies."
            },
            {
              q: "Can you help with technology-driven efficiency improvements?",
              a: "Yes, we suggest tools and systems to automate processes and enhance productivity."
            }
          ]
        },
        {
          category: "Competitive Positioning Analysis",
          questions: [
            {
              q: "What is included in your competitive positioning analysis?",
              a: "We assess competitors, market trends, and your brand's strengths to create a strategy for differentiation and market leadership."
            },
            {
              q: "How often should I update my competitive positioning?",
              a: "We recommend reviewing every 6-12 months to stay ahead of market changes."
            }
          ]
        },
        {
          category: "Strategic Partnership Development",
          questions: [
            {
              q: "What kind of partnerships can you help my business form?",
              a: "We identify opportunities for collaborations, such as supplier agreements, joint ventures, or distribution partnerships, to drive growth."
            },
            {
              q: "How do you ensure partnerships align with my goals?",
              a: "We match partners based on shared objectives, values, and complementary strengths."
            }
          ]
        },
        {
          category: "Innovation and Product Strategy",
          questions: [
            {
              q: "Can you help with launching a new product?",
              a: "Yes, we guide you through ideation, market fit analysis, and launch planning to ensure a successful rollout."
            },
            {
              q: "Do you assist with product innovation for existing products?",
              a: "Absolutely, we help refine existing products to meet evolving customer needs and market trends."
            }
          ]
        },
        {
          category: "Digital Transformation Strategy",
          questions: [
            {
              q: "What does digital transformation involve for my business?",
              a: "It includes adopting technologies like CRM systems, e-commerce platforms, or data analytics to improve operations and customer engagement."
            },
            {
              q: "How long does a digital transformation strategy take to implement?",
              a: "Timelines vary, but initial strategies are typically developed in 4-8 weeks, with implementation ongoing based on scope."
            }
          ]
        },
        {
          category: "Risk Management Consulting",
          questions: [
            {
              q: "What types of risks do you address in your consulting?",
              a: "We cover market, regulatory, operational, and strategic risks, providing tailored mitigation plans."
            },
            {
              q: "Can you help with crisis management planning?",
              a: "Yes, we develop contingency plans to prepare your business for unexpected disruptions."
            }
          ]
        },
        {
          category: "Customer Experience Optimization",
          questions: [
            {
              q: "How do you improve customer experience for my business?",
              a: "We analyze customer touchpoints and design strategies to enhance service delivery, satisfaction, and loyalty."
            },
            {
              q: "Can you help with online and offline customer experiences?",
              a: "Yes, we optimize both digital (e.g., website, app) and physical (e.g., in-store) interactions."
            }
          ]
        },
        {
          category: "Sustainability and ESG Strategy",
          questions: [
            {
              q: "What is an ESG strategy, and why is it important?",
              a: "An ESG strategy aligns your business with environmental, social, and governance goals, enhancing sustainability and stakeholder trust."
            },
            {
              q: "How do you help implement ESG initiatives?",
              a: "We assess your operations, set ESG goals, and create actionable plans to achieve sustainability targets."
            }
          ]
        }
      ]
    }
  ];

  const toggleCategory = (categoryIndex) => {
    setExpandedCategories(prev => ({
      ...prev,
      [categoryIndex]: !prev[categoryIndex]
    }));
  };

  const toggleQuestion = (questionIndex) => {
    setExpandedQuestions(prev => ({
      ...prev,
      [questionIndex]: !prev[questionIndex]
    }));
  };

  const filteredSections = faqSections.map(section => ({
    ...section,
    faqs: section.faqs.map(category => ({
      ...category,
      questions: category.questions.filter(q => 
        q.q.toLowerCase().includes(searchTerm.toLowerCase()) ||
        q.a.toLowerCase().includes(searchTerm.toLowerCase())
      )
    })).filter(category => category.questions.length > 0)
  })).filter(section => section.faqs.length > 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 font-lato">
      {/* Header */}
      <header className="bg-black text-white py-6 shadow-lg border-b border-amber-500/20">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          <h1 className="text-3xl font-oswald tracking-tight uppercase text-amber-500">D&apos;nice Investments</h1>
          <nav className="mt-2 md:mt-0 flex gap-6 text-lg font-lato">
            <Link href="/" className="hover:text-amber-500 transition">Home</Link>
            <Link href="/#services" className="hover:text-amber-500 transition">Services</Link>
            <Link href="/#testimonials" className="hover:text-amber-500 transition">Testimonials</Link>
            <Link href="/#contact" className="hover:text-amber-500 transition">Contact</Link>
          </nav>
        </div>
      </header>

      {/* FAQ Content */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-oswald font-bold text-amber-500 mb-8 text-center uppercase">Frequently Asked Questions</h2>
        
        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <input
              type="text"
              placeholder="Search questions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-6 py-4 rounded-xl bg-gray-800 border-2 border-amber-500/30 focus:border-amber-500 focus:outline-none text-white text-lg shadow-lg placeholder-gray-400"
            />
            <svg
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-amber-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {faqSections.map((section, sectionIndex) => (
            <button
              key={sectionIndex}
              onClick={() => {
                const element = document.getElementById(`section-${sectionIndex}`);
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-6 py-2 bg-gray-800 hover:bg-amber-500 text-white hover:text-black rounded-full transition-colors duration-200 font-oswald shadow-lg border border-amber-500/30"
            >
              {section.title.split('(')[0].trim()}
            </button>
          ))}
        </div>
        
        {filteredSections.map((section, sectionIndex) => (
          <div key={sectionIndex} id={`section-${sectionIndex}`} className="mb-16 scroll-mt-20">
            <h3 className="text-3xl font-oswald font-bold text-amber-500 mb-8 flex items-center gap-3">
              <span className="bg-amber-500 text-black p-2 rounded-lg">
                {sectionIndex + 1}
              </span>
              {section.title}
            </h3>
            
            {section.faqs.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-8">
                <button
                  onClick={() => toggleCategory(`${sectionIndex}-${categoryIndex}`)}
                  className="w-full flex items-center justify-between bg-gray-800 text-white p-4 rounded-xl hover:bg-amber-500 hover:text-black transition-colors duration-200 shadow-lg border border-amber-500/30"
                >
                  <h4 className="text-2xl font-oswald font-semibold">{category.category}</h4>
                  <svg
                    className={`w-6 h-6 transform transition-transform duration-200 ${
                      expandedCategories[`${sectionIndex}-${categoryIndex}`] ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {expandedCategories[`${sectionIndex}-${categoryIndex}`] && (
                  <div className="mt-4 space-y-4 pl-4">
                    {category.questions.map((faq, faqIndex) => (
                      <div
                        key={faqIndex}
                        className="bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-amber-500/30"
                      >
                        <button
                          onClick={() => toggleQuestion(`${sectionIndex}-${categoryIndex}-${faqIndex}`)}
                          className="w-full flex items-center justify-between p-4 hover:bg-gray-700 transition-colors duration-200"
                        >
                          <h5 className="text-xl font-oswald font-semibold text-amber-500 text-left">
                            {faq.q}
                          </h5>
                          <svg
                            className={`w-5 h-5 text-amber-500 transform transition-transform duration-200 ${
                              expandedQuestions[`${sectionIndex}-${categoryIndex}-${faqIndex}`] ? 'rotate-180' : ''
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                        
                        {expandedQuestions[`${sectionIndex}-${categoryIndex}-${faqIndex}`] && (
                          <div className="p-4 border-t border-amber-500/20">
                            <p className="text-gray-300">{faq.a}</p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        ))}

        {/* No Results Message */}
        {filteredSections.length === 0 && (
          <div className="text-center py-12">
            <p className="text-2xl text-amber-500 font-oswald">No questions found matching your search.</p>
            <button
              onClick={() => setSearchTerm('')}
              className="mt-4 px-6 py-2 bg-amber-500 text-black rounded-full hover:bg-amber-400 transition-colors duration-200 font-oswald"
            >
              Clear Search
            </button>
          </div>
        )}
      </div>

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
              <a href="mailto:dnicein@outlook.com" className="hover:text-amber-500 transition">dnicein@outlook.com</a>
            </div>
          </div>
          <div className="text-sm text-gray-400">&copy; {new Date().getFullYear()} D&apos;nice Investments. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
} 