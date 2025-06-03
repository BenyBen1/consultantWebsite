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
				className='text-[#BFA76A]'
			>
				<circle cx='16' cy='16' r='14' strokeWidth='2' />
				<path d='M10 16h12M16 10v12' strokeWidth='2' />
			</svg>
		),
	},
	{
		title: 'Business Growth Planning',
		desc: 'Strategic roadmaps for sustainable expansion, scalability, customer acquisition, and market share growth.',
		icon: (
			<svg
				width='32'
				height='32'
				fill='none'
				stroke='currentColor'
				className='text-[#BFA76A]'
			>
				<rect x='6' y='14' width='6' height='12' rx='2' strokeWidth='2' />
				<rect x='16' y='8' width='10' height='18' rx='2' strokeWidth='2' />
			</svg>
		),
	},
	{
		title: 'Operational Efficiency Consulting',
		desc: 'Optimize business processes to reduce costs, improve productivity, and enhance performance.',
		icon: (
			<svg
				width='32'
				height='32'
				fill='none'
				stroke='currentColor'
				className='text-[#BFA76A]'
			>
				<circle cx='16' cy='16' r='14' strokeWidth='2' />
				<path d='M16 10v6l4 2' strokeWidth='2' />
			</svg>
		),
	},
	{
		title: 'Competitive Positioning Analysis',
		desc: 'Assess competitors and trends to position your business for advantage and brand differentiation.',
		icon: (
			<svg
				width='32'
				height='32'
				fill='none'
				stroke='currentColor'
				className='text-[#BFA76A]'
			>
				<rect x='8' y='8' width='16' height='16' rx='4' strokeWidth='2' />
				<path d='M16 12v8M12 16h8' strokeWidth='2' />
			</svg>
		),
	},
	{
		title: 'Strategic Partnership Development',
		desc: 'Identify and foster partnerships or alliances to drive growth and expand market reach.',
		icon: (
			<svg
				width='32'
				height='32'
				fill='none'
				stroke='currentColor'
				className='text-[#BFA76A]'
			>
				<circle cx='10' cy='16' r='4' strokeWidth='2' />
				<circle cx='22' cy='16' r='4' strokeWidth='2' />
				<path d='M14 16h4' strokeWidth='2' />
			</svg>
		),
	},
	{
		title: 'Innovation and Product Strategy',
		desc: 'Guide innovation, market fit analysis, and launch strategies for new or existing products.',
		icon: (
			<svg
				width='32'
				height='32'
				fill='none'
				stroke='currentColor'
				className='text-[#BFA76A]'
			>
				<path d='M16 4v8M16 20v8M8 16h16' strokeWidth='2' />
				<circle cx='16' cy='16' r='6' strokeWidth='2' />
			</svg>
		),
	},
	{
		title: 'Digital Transformation Strategy',
		desc: 'Integrate digital technologies to enhance operations, engagement, and competitive edge.',
		icon: (
			<svg
				width='32'
				height='32'
				fill='none'
				stroke='currentColor'
				className='text-[#BFA76A]'
			>
				<rect x='6' y='6' width='20' height='20' rx='4' strokeWidth='2' />
				<path d='M12 12h8v8h-8z' strokeWidth='2' />
			</svg>
		),
	},
	{
		title: 'Risk Management Consulting',
		desc: 'Evaluate strategic risks and recommend mitigation strategies for business resilience.',
		icon: (
			<svg
				width='32'
				height='32'
				fill='none'
				stroke='currentColor'
				className='text-[#BFA76A]'
			>
				<polygon points='16,4 28,28 4,28' strokeWidth='2' />
				<circle cx='16' cy='22' r='2' strokeWidth='2' />
				<path d='M16 14v4' strokeWidth='2' />
			</svg>
		),
	},
	{
		title: 'Customer Experience Optimization',
		desc: 'Design strategies to improve satisfaction, loyalty, and retention through better service.',
		icon: (
			<svg
				width='32'
				height='32'
				fill='none'
				stroke='currentColor'
				className='text-[#BFA76A]'
			>
				<circle cx='16' cy='16' r='14' strokeWidth='2' />
				<path d='M10 20c2 2 8 2 12 0' strokeWidth='2' />
			</svg>
		),
	},
	{
		title: 'Sustainability and ESG Strategy',
		desc: 'Align business operations with ESG goals for long-term sustainability and stakeholder trust.',
		icon: (
			<svg
				width='32'
				height='32'
				fill='none'
				stroke='currentColor'
				className='text-[#BFA76A]'
			>
				<circle cx='16' cy='16' r='14' strokeWidth='2' />
				<path d='M16 10v6l4 2' strokeWidth='2' />
			</svg>
		),
	},
];

export default function CommercialStrategy() {
	return (
		<div className='min-h-screen bg-[#181A1B] font-lato'>
			{/* Header */}
			<header className='bg-[#101113] text-[#BFA76A] py-8 shadow'>
				<div className='max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between'>
					<h1 className='text-4xl font-playfair tracking-tight uppercase'>
						D&apos;nice Investments
					</h1>
					<nav className='mt-4 md:mt-0 flex gap-8 text-lg font-bebas'>
						<Link
							href='/'
							className='hover:text-[#FFFFFF] transition'
						>
							Home
						</Link>
						<a
							href='#services'
							className='hover:text-[#FFFFFF] transition'
						>
							Strategy Services
						</a>
						<a
							href='#contact'
							className='hover:text-[#FFFFFF] transition'
						>
							Contact
						</a>
					</nav>
				</div>
			</header>

			{/* Hero */}
			<section className='max-w-6xl mx-auto px-4 py-16 flex flex-col md:flex-row items-center gap-12'>
				<div className='flex-1'>
					<h2 className='text-5xl font-playfair font-bold text-[#BFA76A] mb-6 leading-tight'>
						Commercial Strategy Services
					</h2>
					<p className='text-xl text-[#E5E5E5] mb-8 font-lato'>
						Elite strategic consulting for market leaders. We empower your
						business with insight, innovation, and operational excellence.
					</p>
					<a
						href='#services'
						className='inline-block bg-[#BFA76A] hover:bg-[#101113] text-[#181A1B] hover:text-[#BFA76A] font-bebas px-8 py-4 rounded shadow transition tracking-wide uppercase border border-[#BFA76A]'
					>
						Explore Services
					</a>
				</div>
				<div className='flex-1 flex justify-center'>
					<Image
						src='https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=500&q=80'
						alt='Strategy Consulting'
						width={320}
						height={213}
						className='rounded-xl shadow-2xl w-full max-w-xs border-4 border-[#BFA76A]'
					/>
				</div>
			</section>

			{/* Services */}
			<section
				id='services'
				className='max-w-6xl mx-auto px-4 py-16'
			>
				<h3 className='text-3xl font-anton font-bold text-[#BFA76A] mb-12 text-center uppercase tracking-wider'>
					Our Commercial Strategy Services
				</h3>
				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10'>
					{services.map((service, idx) => (
						<div
							key={service.title}
							className='bg-[#232528] rounded-xl shadow-lg p-8 flex flex-col items-start border-t-4 border-[#BFA76A] hover:shadow-2xl transition'
						>
							<span className='mb-4'>{service.icon}</span>
							<h4 className='text-xl font-bebas text-[#BFA76A] tracking-wide'>
								{service.title}
							</h4>
							<p className='mt-2 text-[#E5E5E5] font-lato'>
								{service.desc}
							</p>
						</div>
					))}
				</div>
			</section>

			{/* Contact */}
			<section
				id='contact'
				className='max-w-2xl mx-auto px-4 py-16'
			>
				<h3 className='text-2xl font-playfair font-bold text-[#BFA76A] mb-6 text-center uppercase'>
					Contact Us
				</h3>
				<div className='bg-[#232528] rounded-xl shadow p-8 text-[#E5E5E5] font-source text-lg'>
					<div className='mb-2 font-bebas text-2xl text-[#BFA76A]'>
						D&apos;nice Investments
					</div>
					<div>Box 31164 - 00600</div>
					<div>Nairobi</div>
					<div className='mt-2'>
						Email:{' '}
						<a
							href='mailto:dnicein@outlook.com'
							className='text-[#BFA76A] underline'
						>
							dnicein@outlook.com
						</a>
					</div>
					<div>
						Tel:{' '}
						<a
							href='tel:+254793951000'
							className='text-[#BFA76A] underline'
						>
							+254 793 951 000
						</a>
					</div>
				</div>
			</section>

			{/* Footer */}
			<footer className='bg-[#101113] text-[#BFA76A] py-6 text-center font-bebas tracking-widest text-lg'>
				&copy; {new Date().getFullYear()} D&apos;nice Investments. All rights
				reserved.
				<br />
				Box 31164 - 00600, Nairobi | dnicein@outlook.com | +254 793 951
				000
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