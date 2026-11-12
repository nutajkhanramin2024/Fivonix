import { Product, Manufacturer, ProjectItem, Article, Solution, Service, PortfolioItem, Testimonial, TeamMember } from '../types';

export const SOLUTIONS: Solution[] = [
  {
    id: 'solar',
    title: 'Solar & Renewable Energy',
    tagline: 'Powering a sustainable future through intelligent energy solutions.',
    description: 'FIVONIX supports commercial, industrial and institutional renewable energy projects through solar engineering, procurement, installation and commissioning.',
    services: [
      'Commercial solar systems',
      'Industrial rooftop solar',
      'Ground-mounted solar projects',
      'Solar power system design',
      'Energy storage integration',
      'Solar street lighting',
      'Energy assessment and consultancy',
      'Installation and commissioning'
    ],
    icon: 'Sun'
  },
  {
    id: 'laboratory',
    title: 'Scientific & Laboratory Equipment',
    tagline: 'Equipping the next generation of scientific discovery.',
    description: 'We provide scientific instruments, laboratory equipment and complete laboratory solutions for universities, educational institutions, industrial laboratories and research organizations.',
    services: [
      'Educational laboratory equipment',
      'Mechanical engineering laboratories',
      'Electrical engineering laboratories',
      'Chemical engineering laboratories',
      'Physics laboratories',
      'Biomedical instrumentation',
      'Analytical instruments',
      'Laboratory furniture and infrastructure'
    ],
    icon: 'FlaskConical'
  },
  {
    id: 'nuclear',
    title: 'Nuclear Medicine & Imaging',
    tagline: 'Advanced imaging technologies for modern healthcare.',
    description: 'FIVONIX supports healthcare institutions and nuclear medicine departments with specialized imaging systems, quality assurance equipment, and radiopharmacy infrastructure.',
    services: [
      'Gamma camera systems',
      'SPECT imaging systems',
      'PET and PET/CT equipment',
      'Nuclear medicine workstations',
      'Imaging quality assurance equipment',
      'Radiopharmacy shielding',
      'Radiation protection equipment',
      'Irradiation systems'
    ],
    icon: 'Radioactive'
  },
  {
    id: 'medical',
    title: 'Medical Equipment',
    tagline: 'Technology and equipment supporting better healthcare infrastructure.',
    description: 'We support hospitals, medical colleges, diagnostic centres and healthcare institutions with medical equipment and specialized healthcare technologies.',
    services: [
      'Medical imaging equipment',
      'Digital radiography systems',
      'C-arm imaging systems',
      'Hospital furniture',
      'Operating theatre equipment',
      'Patient positioning systems',
      'Clinical laboratory equipment',
      'Medical microscopes'
    ],
    icon: 'Stethoscope'
  },
  {
    id: 'nanotechnology',
    title: 'Nanotechnology & Advanced Research',
    tagline: 'Enabling precision research and advanced materials science.',
    description: 'FIVONIX supports universities, research laboratories and advanced technology institutions with specialized instruments for nanotechnology and materials characterization.',
    services: [
      'Electron microscopy',
      'Atomic force microscopy',
      'Thin-film deposition',
      'Plasma etching',
      'Lithography systems',
      'Raman spectroscopy',
      'Thermal analysis',
      'Cleanroom infrastructure'
    ],
    icon: 'Atom'
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 'fx-sol-500kw',
    name: 'Industrial Rooftop Solar System 500kW',
    manufacturer: 'Fivonix Energy Systems',
    category: 'solar',
    categoryLabel: 'Solar & Renewable Energy',
    shortDesc: 'High-efficiency industrial rooftop solar photovoltaic installation with intelligent inverters.',
    overview: 'Designed for large industrial facilities and manufacturing plants, this 500kW rooftop solar system maximizes self-consumption and reduces grid dependency.',
    keyFeatures: [
      'Tier-1 Monocrystalline PV Modules (21.5% efficiency)',
      'Grid-tied Three-Phase Smart Inverters',
      'Real-time IoT cloud monitoring platform',
      'Robust aluminum mounting structure'
    ],
    specifications: {
      'Capacity': '500 kWp',
      'Module Efficiency': '21.5%',
      'Inverter Type': 'Grid-tied 3-Phase',
      'Warranty': '25 Years Performance'
    },
    applications: ['Manufacturing Plants', 'Textile Mills', 'Warehouses', 'Universities'],
    image: 'https://images.unsplash.com/photo-1509391365360-8695311f93f6?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'fx-lab-spectrometer',
    name: 'Advanced Fourier Transform Infrared (FTIR) Spectrometer',
    manufacturer: 'SpectraTech Labs',
    category: 'laboratory',
    categoryLabel: 'Scientific & Laboratory',
    shortDesc: 'High-resolution analytical spectrometer for chemical analysis and materials research.',
    overview: 'Precision analytical instrument designed for university chemistry departments and industrial quality control laboratories.',
    keyFeatures: [
      'High signal-to-noise ratio > 50,000:1',
      'Mid-IR and Near-IR spectral range capability',
      'Intuitive user analysis software suite',
      'Diode laser interferometer stabilization'
    ],
    specifications: {
      'Spectral Range': '7800 - 350 cm-1',
      'Resolution': 'Better than 0.4 cm-1',
      'Detector': 'DLATGS (temperature stabilized)',
      'Power Supply': '220V / 50Hz'
    },
    applications: ['Chemical Research', 'Pharmaceutical Quality Control', 'Material Science', 'Academic Teaching Labs'],
    image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'fx-med-dr',
    name: 'High-Frequency Digital Radiography System (DR)',
    manufacturer: 'MedImaging Global',
    category: 'medical',
    categoryLabel: 'Medical Equipment',
    shortDesc: 'Floor-mounted digital X-ray system with advanced image processing and low dose optimization.',
    overview: 'Provides crystal-clear diagnostic imaging with rapid acquisition times for hospitals and diagnostic imaging centers.',
    keyFeatures: [
      'High-frequency X-ray generator (50kW)',
      'Flat panel wireless cesium iodide detector',
      'Advanced DICOM 3.0 connectivity',
      'Automated positioning and stitching software'
    ],
    specifications: {
      'Generator Power': '50 kW',
      'Detector Size': '17 x 17 inches wireless',
      'Image Acquisition': '< 3 seconds',
      'Patient Table Weight Limit': '300 kg'
    },
    applications: ['Hospital Radiology Departments', 'Diagnostic Centres', 'Emergency Trauma Units'],
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'fx-nuc-spect',
    name: 'Dual-Head SPECT Imaging System',
    manufacturer: 'NuclearTech Medical',
    category: 'nuclear',
    categoryLabel: 'Nuclear Medicine',
    shortDesc: 'State-of-the-art Single Photon Emission Computed Tomography for cardiology and oncology.',
    overview: 'Delivers high-sensitivity molecular imaging for early disease detection in nuclear medicine departments.',
    keyFeatures: [
      'High-resolution collimator options',
      'Fast 3D iterative reconstruction algorithms',
      'Integrated low-dose CT attenuation correction',
      'Ergonomic open detector gantry design'
    ],
    specifications: {
      'Detector Config': 'Dual-head variable angle (90° / 180°)',
      'Energy Resolution': '< 9.5% at 140 keV',
      'Crystal Thickness': '3/8 inch NaI(Tl)',
      'Console': 'Advanced Windows workstation'
    },
    applications: ['Cardiology Diagnostic Imaging', 'Oncology Scans', 'Neurological Evaluation'],
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'fx-nano-sem',
    name: 'Field Emission Scanning Electron Microscope (FESEM)',
    manufacturer: 'NanoScope Instruments',
    category: 'nanotechnology',
    categoryLabel: 'Nanotechnology',
    shortDesc: 'Ultra-high resolution imaging and elemental analysis at the nanometer scale.',
    overview: 'Designed for advanced materials research, semiconductor failure analysis, and nanotechnology laboratories.',
    keyFeatures: [
      'Sub-nanometer resolution at low accelerating voltage',
      'In-lens secondary and backscattered electron detectors',
      'High-throughput pneumatic sample exchange airlock',
      'Integrated EDS (Energy Dispersive X-ray Spectroscopy)'
    ],
    specifications: {
      'Resolution': '1.0 nm at 15 kV, 1.5 nm at 1 kV',
      'Magnification': '10x to 1,000,000x',
      'Accelerating Voltage': '0.1 kV to 30 kV',
      'Chamber Vacuum': '< 5 x 1e-4 Pa'
    },
    applications: ['Nanotechnology Research', 'Materials Characterization', 'Semiconductor Inspection'],
    image: 'https://images.unsplash.com/photo-1507668077129-56e32842fceb?auto=format&fit=crop&w=800&q=80'
  }
];

export const MANUFACTURERS: Manufacturer[] = [
  {
    id: 'spectra-tech',
    name: 'SpectraTech Labs',
    category: 'Scientific Instruments',
    logo: 'SpectraTech',
    overview: 'Global leader in analytical instrumentation, spectroscopy, and laboratory automation equipment.',
    productCategories: ['Spectrometers', 'Chromatography', 'Lab Balances'],
    applications: ['Chemical Research', 'Pharmaceutical Quality', 'Environmental Testing']
  },
  {
    id: 'med-imaging',
    name: 'MedImaging Global',
    category: 'Medical Equipment',
    logo: 'MedImaging',
    overview: 'Pioneering advanced medical radiography, ultrasound, and clinical imaging systems for hospitals worldwide.',
    productCategories: ['Digital Radiography', 'C-Arm Systems', 'Ultrasound'],
    applications: ['Hospital Radiology', 'Emergency Trauma', 'Diagnostic Centres']
  },
  {
    id: 'nanoscope',
    name: 'NanoScope Instruments',
    category: 'Nanotechnology',
    logo: 'NanoScope',
    overview: 'Specialized manufacturer of high-resolution electron microscopes and surface analysis tools.',
    productCategories: ['FESEM', 'Atomic Force Microscopes', 'EDS Systems'],
    applications: ['Materials Science', 'Nanotechnology', 'Semiconductor R&D']
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'proj-1',
    title: '1.2MW Industrial Rooftop Solar Installation',
    industry: 'Industry & Manufacturing',
    location: 'Gazipur, Bangladesh',
    description: 'Complete turnkey EPC execution of a 1.2MW rooftop solar PV system for a leading textile manufacturing facility.',
    equipment: ['Tier-1 Solar Panels', 'Smart Grid-Tied Inverters', 'SCADA Monitoring'],
    image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=800&q=80',
    scope: 'Engineering design, supply, installation, testing, grid synchronization, and ongoing maintenance.',
    status: 'Completed & Operational'
  },
  {
    id: 'proj-2',
    title: 'Advanced Materials Research Laboratory Setup',
    industry: 'Universities & Polytechnics',
    location: 'Dhaka, Bangladesh',
    description: 'Equipped the central materials science research laboratory with advanced spectroscopy and testing instruments.',
    equipment: ['FTIR Spectrometer', 'Universal Testing Machine', 'Thermal Analyzers'],
    image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80',
    scope: 'Equipment procurement, laboratory furniture installation, calibration, and faculty technical training.',
    status: 'Commissioned'
  },
  {
    id: 'proj-3',
    title: 'Nuclear Medicine & SPECT Imaging Department',
    industry: 'Hospitals & Medical Colleges',
    location: 'Chittagong, Bangladesh',
    description: 'Supplied and installed a dual-head SPECT imaging system along with radiation protection infrastructure.',
    equipment: ['Dual-Head SPECT Camera', 'Lead Shielding Cabinets', 'Workstation'],
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80',
    scope: 'Equipment supply, radiation safety compliance, installation, and calibration support.',
    status: 'Operational'
  }
];

export const ARTICLES: Article[] = [
  {
    id: 'art-1',
    title: 'How to Choose the Right Solar System for an Industrial Facility',
    category: 'Renewable Energy',
    date: 'November 10, 2026',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1509391365360-8695311f93f6?auto=format&fit=crop&w=800&q=80',
    summary: 'A comprehensive guide for industrial plant managers evaluating commercial solar energy integration, load profiling, and payback periods.',
    content: [
      'Industrial electricity costs represent a significant operational overhead for manufacturing facilities in Bangladesh. Transitioning to industrial rooftop solar is an effective strategy to lower energy expenses and achieve sustainability targets.',
      'When evaluating a solar system, facility managers must examine daily load profiles, available roof space, structural load-bearing capacity, and grid interconnection regulations.',
      'Working with an experienced engineering partner like FIVONIX ensures accurate site assessment, premium tier-1 equipment selection, and reliable long-term generation.'
    ]
  },
  {
    id: 'art-2',
    title: 'A Complete Guide to Setting Up a Modern Engineering Laboratory',
    category: 'Laboratory Equipment',
    date: 'October 28, 2026',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80',
    summary: 'Key considerations for universities and polytechnic institutes planning modern mechanical, electrical, and civil engineering teaching laboratories.',
    content: [
      'Establishing a world-class engineering laboratory requires careful alignment between academic curricula and practical experimental equipment.',
      'Key planning stages include safety infrastructure, power distribution, ventilation, equipment calibration standards, and student workstation ergonomics.',
      'FIVONIX partners with educational institutions across Bangladesh to deliver turnkey laboratory solutions from design to commissioning.'
    ]
  },
  {
    id: 'art-3',
    title: 'Understanding Gamma Cameras and SPECT Imaging Systems',
    category: 'Nuclear Medicine',
    date: 'October 15, 2026',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80',
    summary: 'An exploration of molecular imaging technologies, detector configurations, and clinical applications in nuclear medicine departments.',
    content: [
      'Nuclear medicine plays a vital role in oncology, cardiology, and neurological diagnosis by providing functional metabolic insights rather than mere anatomical structures.',
      'Modern dual-head SPECT systems offer improved spatial resolution, faster scan times, and integrated CT attenuation correction.',
      'Healthcare institutions planning nuclear medicine departments must coordinate shielding, radiopharmacy design, and stringent quality assurance protocols.'
    ]
  }
];

export const SERVICES: Service[] = [
  {
    id: 'web-dev',
    title: 'Application Engineering',
    shortDesc: 'Technical assessment and equipment selection based on real application requirements.',
    fullDesc: 'We provide technical assessment and equipment selection based on real application requirements to ensure seamless system integration.',
    iconName: 'Globe',
    features: ['Technical Assessment', 'Equipment Selection', 'Integration Planning'],
    startingPrice: 'Consultation',
    deliveryTime: '2 Weeks'
  }
];

export const PORTFOLIO: PortfolioItem[] = [];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Dr. Rahman Khan',
    role: 'Dean of Engineering',
    company: 'University of Engineering & Technology',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    content: 'FIVONIX delivered our laboratory instrumentation with exceptional technical precision and professional commissioning support.',
    rating: 5
  }
];

export const TEAM: TeamMember[] = [
  {
    id: '1',
    name: 'Engr. Tanvir Ahmed',
    role: 'Managing Director & CEO',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
    bio: '15+ years leading large-scale engineering, renewable energy, and scientific equipment projects in Bangladesh.',
    linkedin: 'https://linkedin.com'
  },
  {
    id: '2',
    name: 'Dr. Nazmul Hasan',
    role: 'Head of Scientific Solutions',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80',
    bio: 'Specialized in analytical instrumentation, spectroscopy, and advanced research laboratory setups.',
    linkedin: 'https://linkedin.com'
  },
  {
    id: '3',
    name: 'Anika Tabassum',
    role: 'Director of Renewable Energy',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80',
    bio: 'Expert in commercial and industrial solar EPC execution, grid integration, and energy audits.',
    linkedin: 'https://linkedin.com'
  },
  {
    id: '4',
    name: 'Mehedi Hasan',
    role: 'Head of Medical Systems',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80',
    bio: 'Oversees medical imaging, digital radiography, and nuclear medicine equipment installations.',
    linkedin: 'https://linkedin.com'
  }
];

export const FAQ_ITEMS = [
  {
    question: 'What does FIVONIX do?',
    answer: 'FIVONIX focuses on engineering, specialized equipment and technology solutions across renewable energy, scientific and laboratory equipment, nuclear medicine, medical equipment and advanced research technologies.'
  },
  {
    question: 'Who can work with FIVONIX?',
    answer: 'We aim to support universities, hospitals, research organizations, industrial companies, government institutions and other organizations with specialized technical requirements.'
  },
  {
    question: 'Can FIVONIX help select equipment?',
    answer: 'Yes. Share your application, technical requirements, expected usage and budget considerations. Our team can help identify suitable equipment categories and configurations.'
  },
  {
    question: 'How can I request a quotation?',
    answer: 'Browse our catalogue, select the required products and submit an enquiry with your organization and project details. You can also contact our team directly.'
  },
  {
    question: 'Does FIVONIX provide installation and commissioning?',
    answer: 'Installation and commissioning support can be discussed according to the equipment, project requirements and agreed scope of work.'
  },
  {
    question: 'Can I request multiple products in one enquiry?',
    answer: 'Yes. Add multiple products to your enquiry list and submit them together.'
  },
  {
    question: 'Does FIVONIX support projects outside Dhaka?',
    answer: 'Project support outside Dhaka can be discussed based on the site location, technical requirements and agreed scope.'
  }
];
