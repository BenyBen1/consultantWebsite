'use client';

import Link from 'next/link';
import Image from 'next/image';

const services = [
	{
		title: 'Market Entry Strategy',
		desc: 'Tailored plans for entering new markets, including research, competitive analysis, and entry tactics.',
		icon: (
			<svg
				width='32'
				height='32'
				fill='none'
				stroke='currentColor'
				className='text-amber-500'
			>
				<circle cx='16' cy='16' r='14' strokeWidth='2' />
				<path d='M10 16h12M16 10v12' strokeWidth='2' />
			</svg>
		),
	},
	{
		title: 'Business Growth Planning',
		desc: 'Strategic roadmaps for sustainable business expansion, focusing on scalability, customer acquisition, and market share growth.',
		icon: (
			<svg
				width='32'
				height='32'
				fill='none'
				stroke='currentColor'
				className='text-amber-500'
			>
				<rect x='6' y='14' width='6' height='12' rx='2' strokeWidth='2' />
				<rect x='16' y='8' width='10' height='18' rx='2' strokeWidth='2' />
			</svg>
		),
	},
	{
		title: 'Operational Efficiency Consulting',
		desc: 'Optimize business processes to reduce costs, improve productivity, and enhance operational performance.',
		icon: (
			<svg
				width='32'
				height='32'
				fill='none'
				stroke='currentColor'
				className='text-amber-500'
			>
				<circle cx='16' cy='16' r='14' strokeWidth='2' />
				<path d='M16 10v6l4 2' strokeWidth='2' />
			</svg>
		),
	},
	{
		title: 'Competitive Positioning Analysis',
		desc: 'Assess competitors and market trends to position your business for a competitive advantage and brand differentiation.',
		icon: (
			<svg
				width='32'
				height='32'
				fill='none'
				stroke='currentColor'
				className='text-amber-500'
			>
				<rect x='8' y='8' width='16' height='16' rx='4' strokeWidth='2' />
				<path d='M16 12v8M12 16h8' strokeWidth='2' />
			</svg>
		),
	},
	{
		title: 'Strategic Partnership Development',
		desc: 'Identifying and fostering partnerships or alliances to drive business growth and expand market reach.',
		icon: (
			<svg
				width='32'
				height='32'
				fill='none'
				stroke='currentColor'
				className='text-amber-500'
			>
				<circle cx='10' cy='16' r='4' strokeWidth='2' />
				<circle cx='22' cy='16' r='4' strokeWidth='2' />
				<path d='M14 16h4' strokeWidth='2' />
			</svg>
		),
	},
	{
		title: 'Innovation and Product Strategy',
		desc: 'Guiding businesses in developing innovative products or services, including ideation, market fit analysis, and launch strategies.',
		icon: (
			<svg
				width='32'
				height='32'
				fill='none'
				stroke='currentColor'
				className='text-amber-500'
			>
				<path d='M16 4v8M16 20v8M8 16h16' strokeWidth='2' />
				<circle cx='16' cy='16' r='6' strokeWidth='2' />
			</svg>
		),
	},
	{
		title: 'Digital Transformation Strategy',
		desc: 'Advising on the integration of digital technologies to enhance business operations, customer engagement, and competitive edge.',
		icon: (
			<svg
				width='32'
				height='32'
				fill='none'
				stroke='currentColor'
				className='text-amber-500'
			>
				<rect x='6' y='6' width='20' height='20' rx='4' strokeWidth='2' />
				<path d='M12 12h8v8h-8z' strokeWidth='2' />
			</svg>
		),
	},
	{
		title: 'Risk Management Consulting',
		desc: 'Evaluate strategic risks (e.g., market shifts, regulatory changes) and recommend mitigation strategies to ensure business resilience.',
		icon: (
			<svg
				width='32'
				height='32'
				fill='none'
				stroke='currentColor'
				className='text-amber-500'
			>
				<polygon points='16,4 28,28 4,28' strokeWidth='2' />
				<circle cx='16' cy='22' r='2' strokeWidth='2' />
				<path d='M16 14v4' strokeWidth='2' />
			</svg>
		),
	},
	{
		title: 'Customer Experience Optimization',
		desc: 'Designing strategies to improve customer satisfaction, loyalty, and retention through enhanced service delivery and engagement.',
		icon: (
			<svg
				width='32'
				height='32'
				fill='none'
				stroke='currentColor'
				className='text-amber-500'
			>
				<circle cx='16' cy='16' r='14' strokeWidth='2' />
				<path d='M10 20c2 2 8 2 12 0' strokeWidth='2' />
			</svg>
		),
	},
	{
		title: 'Sustainability and ESG Strategy',
		desc: 'Developing strategies to align business operations with environmental, social, and governance (ESG) goals for long-term sustainability.',
		icon: (
			<svg
				width='32'
				height='32'
				fill='none'
				stroke='currentColor'
				className='text-amber-500'
			>
				<circle cx='16' cy='16' r='14' strokeWidth='2' />
				<path d='M16 10v6l4 2' strokeWidth='2' />
			</svg>
		),
	},
];

export default function CommercialStrategy() {
	return (
		<div className='min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 font-lato text-gray-300'>
			{/* Header */}
			<header className='bg-black text-white py-6 shadow-lg border-b border-amber-500/20'>
				<div className='max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between'>
					<h1 className='text-3xl font-oswald tracking-tight uppercase text-amber-500'>
						D&apos;nice Investments
					</h1>
					<nav className='mt-2 md:mt-0 flex gap-6 text-lg font-lato'>
						<Link
							href='/'
							className='hover:text-amber-500 transition'
						>
							Home
						</Link>
						<Link
							href='/#services'
							className='hover:text-amber-500 transition'
						>
							Services
						</Link>
						<Link
							href='/#testimonials'
							className='hover:text-amber-500 transition'
						>
							Testimonials
						</Link>
						<Link
							href='/#contact'
							className='hover:text-amber-500 transition'
						>
							Contact
						</Link>
						<Link
							href='/faq'
							className='hover:text-amber-500 transition'
						>
							FAQ
						</Link>
					</nav>
				</div>
			</header>

			{/* Hero Section - Image Removed, Layout Adjusted */}
			<section className='max-w-6xl mx-auto px-4 py-16 flex flex-col items-center text-center'>
				<h2 className='text-5xl font-oswald font-bold text-amber-500 mb-4 leading-tight drop-shadow'>Unlock Your Business&apos;s Full Potential</h2>
				<p className='text-xl text-gray-300 mb-8 font-lato max-w-3xl'>
					Elite strategic consulting to drive growth, optimize operations, and achieve market leadership. We provide bespoke financial solutions and expert strategic guidance tailored to your unique needs.
				</p>
				<a href='#commercial-strategy-services' className='inline-block bg-amber-500 hover:bg-amber-400 text-black font-semibold px-8 py-4 rounded shadow-lg transition font-oswald tracking-wide uppercase'>Explore Services</a>
			</section>

			{/* Commercial Strategy Services Section */}
			<section id='commercial-strategy-services' className='max-w-6xl mx-auto px-4 py-16'>
				<h2 className='text-4xl font-oswald font-bold text-amber-500 mb-12 text-center uppercase'>Our Commercial Strategy Services</h2>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
					{services.map((service, index) => (
						<div
							key={index}
							className='bg-gray-800 rounded-xl shadow-lg p-8 flex flex-col items-start border-t-4 border-amber-500 hover:shadow-2xl transition border border-amber-500/30'
						>
							<span className='mb-4 text-amber-500'>{service.icon}</span>
							<h3 className='text-xl font-oswald font-semibold text-white mb-2'>
								{service.title}
							</h3>
							<p className='text-gray-300 font-lato'>{service.desc}</p>
						</div>
					))}
				</div>
			</section>

			{/* Footer */}
			<footer className='bg-black text-white py-6 text-center font-lato tracking-normal border-t border-amber-500/20'>
				<div className='max-w-6xl mx-auto px-4'>
					<div className='flex flex-col md:flex-row justify-center items-center gap-4 mb-2'>
						<div className='flex items-center gap-2'>
							<svg className='w-5 h-5 text-amber-500' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
								<path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z' />
								<path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M15 11a3 3 0 11-6 0 3 3 0 016 0z' />
							</svg>
							<span>Box 31164 - 00600, Nairobi</span>
						</div>
						<div className='flex items-center gap-2'>
							<svg className='w-5 h-5 text-amber-500' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
								<path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' />
							</svg>
							<a href='mailto:dnicein@outlook.com' className='hover:text-amber-500 transition'>dnicein@gmail.com</a>
						</div>
					</div>
					<div className='text-sm text-gray-400'>&copy; {new Date().getFullYear()} D&apos;nice Investments. All rights reserved.</div>
				</div>
			</footer>
			<style jsx global>{`
				.font-playfair {
					font-family: var(--font-playfair), serif;
				}
				.font-bebas {
					font-family: var(--font-bebas), cursive;
				}
				.font-oswald {
					font-family: var(--font-oswald), Arial, sans-serif;
				}
				.font-anton {
					font-family: var(--font-anton), Arial, sans-serif;
				}
				.font-lato {
					font-family: var(--font-lato), Arial, sans-serif;
				}
				.font-source {
					font-family: var(--font-source), monospace;
				}
			`}</style>
		</div>
	);
}