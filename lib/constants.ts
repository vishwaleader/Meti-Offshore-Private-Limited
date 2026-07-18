import {
  Anchor,
  Ship,
  Container,
  Globe2,
  ShieldCheck,
  Users,
  Compass,
  Wrench,
  FileCheck2,
  Clock3,
  Award,
  Waves,
} from 'lucide-react'

export const COMPANY = {
  name: 'Meti Offshore',
  legalName: 'Meti Offshore Private Limited',
  tagline: 'Commanding the Seas Since 2010',
  founded: 2010,
  email: 'contact@metioffshore.com',
  phone: '+91 22 4000 0000',
  address: 'Nariman Point, Mumbai 400021, Maharashtra, India',
}

export const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
]

export const SERVICES = [
  {
    icon: Ship,
    title: 'Vessel Chartering',
    description:
      'End-to-end chartering of offshore support vessels, tankers, and bulk carriers tailored to your operational timelines and cargo profiles.',
  },
  {
    icon: Container,
    title: 'Cargo & Freight Logistics',
    description:
      'Seamless international freight forwarding with real-time tracking, customs clearance, and multimodal delivery across 40+ countries.',
  },
  {
    icon: Anchor,
    title: 'Offshore Support Operations',
    description:
      'Specialized crew, supply, and anchor-handling operations supporting offshore energy platforms and subsea projects.',
  },
  {
    icon: Wrench,
    title: 'Ship Management',
    description:
      'Full technical and commercial management — maintenance, dry-docking, procurement, and performance optimization for your fleet.',
  },
  {
    icon: Users,
    title: 'Marine Crewing',
    description:
      'STCW-certified officers and ratings, vetted and deployed worldwide with complete documentation and compliance handling.',
  },
  {
    icon: FileCheck2,
    title: 'Maritime Compliance & Consulting',
    description:
      'Flag-state, port-state, and ISM/ISPS advisory ensuring your operations exceed every international regulatory standard.',
  },
]

export const WHY_US = [
  {
    icon: Award,
    title: 'Proven Legacy',
    description:
      'Incorporated in 2010, we have delivered flawless operations across three continents for over a decade.',
  },
  {
    icon: ShieldCheck,
    title: 'Uncompromising Safety',
    description:
      'Zero-incident culture backed by ISM-certified systems and rigorous third-party audits.',
  },
  {
    icon: Globe2,
    title: 'Global Network',
    description:
      'Agents and partners in 40+ ports worldwide keep your cargo and vessels moving without friction.',
  },
  {
    icon: Clock3,
    title: '24/7 Operations Desk',
    description:
      'Round-the-clock operations center providing live vessel monitoring and instant response.',
  },
]

export const STATS = [
  { value: 15, suffix: '+', label: 'Years of Excellence' },
  { value: 120, suffix: '+', label: 'Vessels Managed' },
  { value: 40, suffix: '+', label: 'Ports Worldwide' },
  { value: 98, suffix: '%', label: 'On-Time Delivery' },
]

export const TESTIMONIALS = [
  {
    quote:
      'Meti Offshore has managed our supply vessel fleet for six years. Their operational discipline and transparency are unmatched in the industry.',
    name: 'Rajesh Menon',
    role: 'Director of Marine Operations, Energy Sector',
  },
  {
    quote:
      'From chartering to customs, they handle everything with precision. Our cargo has never moved faster or with fewer surprises.',
    name: 'Sarah Whitfield',
    role: 'Head of Global Logistics, Commodities Trading',
  },
  {
    quote:
      'A true partner — their 24/7 operations desk resolved a port congestion crisis overnight and saved us weeks of delay.',
    name: 'Ahmed Al-Farsi',
    role: 'Fleet Manager, Gulf Shipping Group',
  },
]

export const FOOTER_ICONS = { Compass, Waves }
