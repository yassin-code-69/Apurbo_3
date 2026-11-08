export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  category: "moisture" | "thermal" | "renewables" | "exterior";
  badge: string;
  summary: string;
  description: string;
  image: string;
  featured?: boolean;
  keyMetric: string;
  keyMetricLabel: string;
  symptomsSolved: string[];
  specifications: string[];
  warrantyText: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: "Roof & ProPERLA" | "Loft & SuperFOIL" | "Solar PV" | "Damp & PIV" | "Spray Foam Removal";
  location: string;
  image: string;
  caption: string;
  highlightMetric: string;
}

export interface ReviewItem {
  id: string;
  title: string;
  body: string;
  name: string;
  date: string;
  rating: number;
  serviceTag: string;
  source: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

export const COMPANY_INFO = {
  name: "Imprint Home Improvements",
  tagline: "Making British Homes Warmer, Drier & More Sustainable",
  phoneDisplay: "0800 001 6233",
  phoneHref: "tel:08000016233",
  email: "admin@imprinthomeimprovements.co.uk",
  emailHref: "mailto:admin@imprinthomeimprovements.co.uk",
  addressLine1: "638 Christchurch Road",
  addressLine2: "Bournemouth, BH1 4BP",
  country: "United Kingdom",
  fullAddress: "638 Christchurch Road, Bournemouth, BH1 4BP, United Kingdom",
  coordinates: { lat: 50.72725, lng: -1.83762 },
  googleMapsUrl:
    "https://www.google.com/maps/search/?api=1&query=638+Christchurch+Road+Bournemouth+BH1+4BP",
  social: {
    facebook: "https://www.facebook.com/495493706991678",
    instagram: "https://www.instagram.com/imprinthomeimprovements_",
  },
  hours: [
    { day: "Monday – Friday", time: "09:00 – 17:00", isOpen: true },
    { day: "Saturday", time: "By Survey Appointment", isOpen: false },
    { day: "Sunday", time: "Closed", isOpen: false },
  ],
};

export const ACCREDITED_PARTNERS = [
  {
    name: "ProPERLA",
    role: "Breathable Wall & Roof Coatings",
    detail: "Superhydrophobic 20+ yr masonry protection",
  },
  {
    name: "SuperFOIL",
    role: "Approved Multifoil Installer",
    detail: "High-performance radiant thermal barrier",
  },
  {
    name: "Knauf Insulation",
    role: "Certified Loft Systems",
    detail: "270mm+ mineral wool thermal top-ups",
  },
  {
    name: "Sunsynk",
    role: "Hybrid Solar & Battery Storage",
    detail: "Smart solar PV generation & night storage",
  },
  {
    name: "myenergi zappi",
    role: "Eco-Smart EV Charging",
    detail: "Solar-compatible British EV chargers",
  },
  {
    name: "Google 5.0 ★",
    role: "Verified Customer Rating",
    detail: "100% 5-star homeowner satisfaction",
  },
];

export const HERO_HOTSPOTS = [
  {
    id: "solar",
    x: "56%",
    y: "23%",
    label: "Solar Panelling / PV",
    detail: "Flush black PV array + Sunsynk hybrid battery storage",
    metric: "Up to 70% lower grid bills",
    serviceId: "solar-pv",
  },
  {
    id: "roof",
    x: "31%",
    y: "35%",
    label: "New Roofs & ProPERLA Slate",
    detail: "Self-cleaning breathable waterproof roof protection",
    metric: "Watertight & moss-free",
    serviceId: "roofing",
  },
  {
    id: "wall",
    x: "65%",
    y: "43%",
    label: "Breathable Exterior Wall Coating",
    detail: "Stops penetrating damp while allowing walls to breathe",
    metric: "Dry walls = warmer rooms",
    serviceId: "exterior-wall-coating",
  },
  {
    id: "ev",
    x: "37.3%",
    y: "63%",
    label: "Smart EV Charger",
    detail: "myenergi zappi charging powered directly from your roof",
    metric: "7.4kW – 22kW fast home charge",
    serviceId: "ev-climate",
  },
  {
    id: "driveway",
    x: "23%",
    y: "81%",
    label: "Permeable Resin Driveway",
    detail: "SUDS-compliant, weed-resistant kerb appeal upgrade",
    metric: "Durable low-maintenance finish",
    serviceId: "driveways",
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: "damp-proofing-piv",
    slug: "/condensation-control-piv",
    title: "Damp Proofing & Condensation Control (PIV)",
    shortTitle: "Damp Proofing & PIV",
    category: "moisture",
    badge: "Most Requested",
    summary:
      "Eliminate rising damp, black mould, streaming window condensation, and musty indoor air permanently with targeted damp treatments and whisper-quiet Positive Input Ventilation (PIV).",
    description:
      "Damp walls lose heat up to 35% faster than dry masonry and trigger unhealthy mould spores. Our surveyors diagnose the root moisture source—whether rising damp, penetrating rain, or trapped indoor humidity—and install hospital-grade PIV loft units and breathable chemical damp-proof courses.",
    image: "/images/project-piv-unit.jpg",
    featured: true,
    keyMetric: "24–48 hrs",
    keyMetricLabel: "Visible condensation drop",
    symptomsSolved: [
      "Streaming wet windows & black mould around frames",
      "Rising damp tide marks, peeling skirting & salt staining",
      "Musty indoor odours and high indoor relative humidity",
    ],
    specifications: [
      "Loft-mounted Positive Input Ventilation (PIV) with G4/F7 filtration",
      "BBA-approved rising damp injection & replastering systems",
      "Full hygrometer & thermal moisture mapping before work begins",
    ],
    warrantyText: "Backed by long-term workmanship & manufacturer guarantees",
  },
  {
    id: "exterior-wall-coating",
    slug: "/exterior-wall-coating",
    title: "Breathable Exterior Wall Coatings",
    shortTitle: "Exterior Wall Coating",
    category: "moisture",
    badge: "Energy & Damp Shield",
    summary:
      "Superhydrophobic ProPERLA masonry & render coatings make exterior walls 100% rain-repellent yet fully vapour-breathable—keeping insulation dry and slashing annual heating loss.",
    description:
      "Wet brickwork acts like a cold sponge, drawing warmth straight out of your living rooms. Our microporous exterior wall coatings create a lotus-leaf beading barrier: driving rain rolls right off while internal water vapour escapes freely, preventing frost cracking and saving thousands over its lifespan.",
    image: "/images/wall-coating-hydrophobic.jpg",
    featured: true,
    keyMetric: "95%+",
    keyMetricLabel: "Water absorption reduction",
    symptomsSolved: [
      "Cold exterior walls & penetrating rain patches indoors",
      "Cracked, chalky, discoloured render or porous brickwork",
      "Green algae, lichen & frost spalling on exposed elevations",
    ],
    specifications: [
      "Deep biocide wash & masonry crack repair preparation",
      "ProPERLA breathable coloured or clear facade technology",
      "Self-cleaning lotus effect keeps render crisp for decades",
    ],
    warrantyText: "Up to 20-year manufacturer performance lifespan",
  },
  {
    id: "loft-insulation",
    slug: "/insulation",
    title: "Loft Insulation & SuperFOIL Systems",
    shortTitle: "Loft & SuperFOIL Insulation",
    category: "thermal",
    badge: "Knauf & SuperFOIL Approved",
    summary:
      "Stop losing up to 25% of your home's paid heating through the roof with accredited 270mm+ Knauf mineral wool top-ups and space-saving SuperFOIL radiant barriers.",
    description:
      "Whether your loft has thin, settled legacy insulation or cold rafters, our approved installers fit precision Knauf mineral wool top-ups and multi-layer SuperFOIL systems—keeping your home cosy in winter and noticeably cooler during summer heatwaves.",
    image: "/images/project-superfoil.jpg",
    featured: true,
    keyMetric: "Up to 25%",
    keyMetricLabel: "Heat loss prevented",
    symptomsSolved: [
      "Rooms cooling down immediately once the heating switches off",
      "Old compressed loft insulation under 100mm–150mm depth",
      "Stiflingly hot upstairs bedrooms during UK summer months",
    ],
    specifications: [
      "Approved SuperFOIL breathable & radiant multifoil rafters",
      "200mm–270mm+ Knauf mineral wool cross-layered loft top-ups",
      "Maintains safe eaves airflow & condensation-free roof timbers",
    ],
    warrantyText: "Installed to current UK Building Regulations thermal standards",
  },
  {
    id: "spray-foam-removal",
    slug: "/spray-foam-removal",
    title: "Mortgage-Safe Spray Foam Removal",
    shortTitle: "Spray Foam Removal",
    category: "thermal",
    badge: "Mortgage & Sale Ready",
    summary:
      "Having trouble remortgaging, releasing equity, or selling your property due to loft spray foam? We carefully strip open- and closed-cell foam and restore breathable compliant insulation.",
    description:
      "Major UK mortgage lenders routinely decline properties where spray foam conceals roof timbers or traps moisture against rafters. Jamie and our specialist removal crew mechanically strip every trace of foam by hand without damaging your felt or tiles, inspect timbers, and reinstate lender-approved insulation.",
    image: "/images/project-sprayfoam-removal.jpg",
    featured: true,
    keyMetric: "100%",
    keyMetricLabel: "Lender-ready timber visibility",
    symptomsSolved: [
      "Mortgage, remortgage or equity release blocked by surveyor report",
      "Property sale delayed due to open- or closed-cell loft foam",
      "Sweating roof timbers or hidden rafter decay risk",
    ],
    specifications: [
      "Careful non-destructive hand removal from rafters & membrane",
      "Full licensed waste bagging, extraction & site clearance",
      "Timber moisture check + optional Knauf/SuperFOIL re-insulation",
    ],
    warrantyText: "Complete photographic completion pack for surveyors & buyers",
  },
  {
    id: "solar-pv",
    slug: "/solar-panelling-pv",
    title: "Solar Panelling / PV & Hybrid Battery Storage",
    shortTitle: "Solar PV & Batteries",
    category: "renewables",
    badge: "Sunsynk Showcase Partner",
    summary:
      "Generate clean electricity from British daylight and store surplus power in Sunsynk & Amass hybrid batteries for evening use—inconspicuous all-black panels tailored to your roofline.",
    description:
      "Solar panels don't have to take over your roof to transform your bills. We design sleek, low-profile all-black PV arrays paired with industry-leading Sunsynk hybrid inverters and LiFePO4 home batteries—Displayed live in our Bournemouth showroom so you can see how the app and hardware work first-hand.",
    image: "/images/project-solar-pv.jpg",
    featured: true,
    keyMetric: "Sunsynk",
    keyMetricLabel: "Hybrid inverter + battery",
    symptomsSolved: [
      "Rising UK electricity unit rates and standing charges",
      "Wasted daytime solar energy without home battery storage",
      "Wanting sleek all-black panels that complement kerb appeal",
    ],
    specifications: [
      "Sleek all-black monocrystalline high-efficiency PV modules",
      "Sunsynk 3.6kW–8kW hybrid inverters + 5.32kWh modular batteries",
      "Real-time smartphone energy flow monitoring & off-peak tariff sync",
    ],
    warrantyText: "25-year linear panel performance warranty",
  },
  {
    id: "roofing",
    slug: "/roofing",
    title: "Roofing, Restoration & ProPERLA Roof Coatings",
    shortTitle: "Roofing & Coatings",
    category: "exterior",
    badge: "Before/After Proven",
    summary:
      "From full pitched & flat re-roofing to specialist moss removal and breathable ProPERLA roof coatings that restore tired concrete or slate tiles at a fraction of replacement cost.",
    description:
      "Porous, moss-laden roof tiles hold heavy rainwater, stressing roof timbers and spoiling your home's appearance. Our roofing craftsmen handle everything from ridge repointing and full new roofs to low-pressure steam cleaning and superhydrophobic ProPERLA tile coatings.",
    image: "/images/project-roof-properla.jpg",
    featured: true,
    keyMetric: "10+ Yrs",
    keyMetricLabel: "Clean, watertight protection",
    symptomsSolved: [
      "Heavy moss growth blocking gutters & saturating porous tiles",
      "Slipped slates, perished ridge mortar, or ageing flat roofs",
      "Faded, weathered roof making the whole house look tired",
    ],
    specifications: [
      "New slate, clay & concrete tiled roofs + modern flat roof systems",
      "Gentle deep roof clean, biocide treatment & mortar repairs",
      "ProPERLA breathable waterproof roof coating in authentic shades",
    ],
    warrantyText: "Full written workmanship & coating durability guarantee",
  },
  {
    id: "ev-climate",
    slug: "/air-conditioning-units",
    title: "Smart EV Chargers & Home Air Conditioning",
    shortTitle: "EV Chargers & Air Con",
    category: "renewables",
    badge: "zappi & Climate 3000",
    summary:
      "Charge your electric vehicle on cheap overnight tariffs or surplus solar with myenergi zappi, and enjoy whisper-quiet year-round heating & cooling with A++ inverter air conditioning.",
    description:
      "Future-proof your home comfort and transport. We install smart British-built myenergi zappi EV chargers alongside ultra-quiet split-system air conditioning units (such as Bosch Climate 3000) that cool bedrooms effortlessly in summer and deliver efficient heat-pump warmth in winter.",
    image: "/images/showroom-sunsynk-zappi.jpg",
    keyMetric: "A++ / 7.4kW",
    keyMetricLabel: "Climate & smart EV ready",
    symptomsSolved: [
      "Slow 3-pin plug charging or costly public EV rapid chargers",
      "Overheating loft conversions, conservatories & bedrooms",
      "Integrating EV charging seamlessly with rooftop solar PV",
    ],
    specifications: [
      "myenergi zappi 7.4kW/22kW tethered or untethered smart EV chargers",
      "Whisper-quiet A++ inverter wall-split heating & cooling units",
      "Neat, concealed cable routing and full electrical certification",
    ],
    warrantyText: "Manufacturer-backed hardware & certified electrical installation",
  },
  {
    id: "cladding",
    slug: "/cladding-weather-boarding",
    title: "Cladding & Weather-Boarding",
    shortTitle: "Cladding & Boarding",
    category: "exterior",
    badge: "Zero-Rot Kerb Appeal",
    summary:
      "Transform tired timber gables, dormers, and facades with low-maintenance composite, fibre-cement, or uPVC weather-boarding that never needs sanding or repainting.",
    description:
      "Coastal Dorset winds and rain punish traditional painted timber cladding. Our craftsmen install crisp, thermally backed weather-boarding, soffits, and fascias in timeless contemporary and heritage finishes—instantly modernising your exterior while adding an extra weather shield.",
    image: "/images/project-semi-roof-compare.jpg",
    keyMetric: "Zero",
    keyMetricLabel: "Repainting required",
    symptomsSolved: [
      "Rotting, flaking painted timber shiplap or dormer cheeks",
      "Draughty, uninsulated exterior gable walls",
      "Dated pebblesdash or tired upper-storey elevations",
    ],
    specifications: [
      "Weatherproof fibre-cement, composite & textured uPVC profiles",
      "Optional breathable membrane & insulated batten sub-frame",
      "Matching trims, soffits, fascias & rainwater goods",
    ],
    warrantyText: "Colourfast UV-stable profiles built for coastal UK weather",
  },
  {
    id: "driveways",
    slug: "/driveways",
    title: "Resin-Bound & Block Paved Driveways",
    shortTitle: "Driveways",
    category: "exterior",
    badge: "SUDS Permeable",
    summary:
      "Create an unforgettable first impression with smooth, puddle-free SUDS-permeable resin-bound surfacing or precision-laid block paving engineered with full sub-base groundwork.",
    description:
      "A cracked, weed-choked driveway drags down property value. We excavate, compact, and lay heavy-duty permeable resin-bound aggregate and classic block driveways with crisp granite or brick edging—draining rainwater naturally without planning permission headaches.",
    image: "/images/hero-uk-home.jpg",
    keyMetric: "SUDS",
    keyMetricLabel: "Permeable zero-puddle finish",
    symptomsSolved: [
      "Standing puddles, sunken ruts, loose gravel or cracked tarmac",
      "Constant weed growth through old paving joints",
      "Needing extra off-road parking for family cars & EV charging",
    ],
    specifications: [
      "UV-stable polyurethane resin-bound natural aggregate blends",
      "Full MOT Type 1 sub-base engineering & decorative edging",
      "Fully SUDS-compliant natural drainage",
    ],
    warrantyText: "Engineered for daily multi-vehicle loads & UV colour stability",
  },
  {
    id: "fire-retardant",
    slug: "/fire-retardant-treatments",
    title: "Specialist Fire Retardant Treatments",
    shortTitle: "Fire Retardant",
    category: "exterior",
    badge: "Safety & Compliance",
    summary:
      "Protect exposed structural roof timbers, loft spaces, cladding, and residential Boarding with certified clear fire-retardant impregnations that preserve natural timber breathability.",
    description:
      "Peace of mind starts in the structure of your home. We apply clear, non-toxic, deep-penetrating fire-retardant treatments to structural timbers, loft rafters, and timber cladding—slowing flame spread and smoke generation without altering wood appearance or trapping moisture.",
    image: "/images/project-loft-topup.jpg",
    keyMetric: "BS / EN",
    keyMetricLabel: "Tested flame-spread protection",
    symptomsSolved: [
      "Untreated dry structural loft timbers & boarding",
      "Upgrading fire safety after spray foam removal or loft works",
      "Timber cladding & outbuildings requiring flame-retardant protection",
    ],
    specifications: [
      "Clear, odourless, non-corrosive timber treatment formulas",
      "Maintains full timber vapour permeability (no sealing/rotting)",
      "Clean spray/brush application with minimal household disruption",
    ],
    warrantyText: "Documented treatment specification for homeowner records",
  },
];

export const GALLERY_PROJECTS: ProjectItem[] = [
  {
    id: "proj-semi-roof",
    title: "Side-by-Side Roof Cleaning & ProPERLA Transformation",
    category: "Roof & ProPERLA",
    location: "Dorset Semi-Detached Property",
    image: "/images/project-semi-roof-compare.jpg",
    caption:
      "Direct comparison on a British semi-detached home: left roof professionally deep-cleaned and protected by Imprint vs untreated neighbouring roof on the right.",
    highlightMetric: "Instant Kerb Appeal",
  },
  {
    id: "proj-slate-properla",
    title: "Full Slate Roof Restoration & Breathable Coating",
    category: "Roof & ProPERLA",
    location: "Bournemouth Detached Home",
    image: "/images/project-roof-properla.jpg",
    caption:
      "Before & after: heavy moss and lichen safely removed before applying ProPERLA superhydrophobic coating for a rich, self-cleaning watertight slate finish.",
    highlightMetric: "Before & After",
  },
  {
    id: "proj-superfoil",
    title: "Approved SuperFOIL Multifoil Rafter Insulation",
    category: "Loft & SuperFOIL",
    location: "Poole & Bournemouth Area",
    image: "/images/project-superfoil.jpg",
    caption:
      "Precision SuperFOIL radiant barrier installation across loft rafters—reflecting winter heat back indoors while preventing summer roof overheating.",
    highlightMetric: "SuperFOIL Certified",
  },
  {
    id: "proj-solar-bungalow",
    title: "Low-Profile Rooftop Solar PV Installation",
    category: "Solar PV",
    location: "South Coast Bungalow",
    image: "/images/project-solar-pv.jpg",
    caption:
      "Sleek, inconspicuous solar PV array neatly integrated onto a tiled bungalow roof—cutting daytime electricity bills while blending cleanly with the roofline.",
    highlightMetric: "Clean Renewable Power",
  },
  {
    id: "proj-piv-loft",
    title: "Positive Input Ventilation (PIV) Condensation Cure",
    category: "Damp & PIV",
    location: "Bournemouth Family Home",
    image: "/images/project-piv-unit.jpg",
    caption:
      "Suspended whisper-quiet PIV loft unit supplying fresh, filtered, gently tempered air to banish streaming window condensation and black mould.",
    highlightMetric: "Condensation Solved",
  },
  {
    id: "proj-sprayfoam-clean",
    title: "Mortgage-Ready Loft Spray Foam Removal",
    category: "Spray Foam Removal",
    location: "Dorset Residential Loft",
    image: "/images/project-sprayfoam-removal.jpg",
    caption:
      "Rafters and breathable membrane left clean and fully inspectable after meticulous hand removal of problematic loft spray foam for property sale/mortgage.",
    highlightMetric: "Surveyor Approved",
  },
  {
    id: "proj-loft-200mm",
    title: "200mm+ Knauf Thermal Loft Insulation Top-Up",
    category: "Loft & SuperFOIL",
    location: "Christchurch / Bournemouth",
    image: "/images/project-loft-insulation.jpg",
    caption:
      "High-density mineral wool insulation top-up paired with lined rafters to lock in winter warmth and lower annual gas & heating bills.",
    highlightMetric: "200mm+ Top-Up",
  },
  {
    id: "proj-loft-full",
    title: "Full-Span Breathable Loft Thermal Upgrade",
    category: "Loft & SuperFOIL",
    location: "Bournemouth Residential",
    image: "/images/project-loft-topup.jpg",
    caption:
      "Seamless cross-layered loft blanket regulating indoor temperature year-round while maintaining healthy eaves airflow.",
    highlightMetric: "EPC Boost Ready",
  },
];

export const CUSTOMER_REVIEWS: ReviewItem[] = [
  {
    id: "rev-steevens",
    title: "Experience was fantastic",
    body: "The experience I had with Jamie and the team was fantastic. They were incredibly professional, polite and punctual throughout the entire process. Their attention to detail and commitment to quality really stood out, making everything smooth and stress-free. I couldn't recommend them enough.",
    name: "Isabella Steevens",
    date: "April 2025",
    rating: 5,
    serviceTag: "Full Home Efficiency Upgrade",
    source: "Google Review",
  },
  {
    id: "rev-mountford",
    title: "Really trustworthy — Mortgage issue solved",
    body: "Really trustworthy company, we were having problems getting a buyer and mortgage for our property with spray foam in the loft, they gave us a fair quote and removed the nasty stuff and left the roof looking better than ever.",
    name: "Mr & Mrs Mountford",
    date: "March 2025",
    rating: 5,
    serviceTag: "Spray Foam Removal",
    source: "Google Review",
  },
  {
    id: "rev-whalley",
    title: "Great company and even better people",
    body: "Great company and even better people. Had rising damp in our property and after talking to the director, he set a date to carry out the work and the team set to work. Lovely and very professional throughout.",
    name: "Mr Whalley",
    date: "February 2025",
    rating: 5,
    serviceTag: "Rising Damp Proofing",
    source: "Google Review",
  },
  {
    id: "rev-stevenson",
    title: "Installed solar panels — wish we did it sooner",
    body: "Installed solar panels and just wish we done it sooner. Jamie and the team were brilliant from start to finish.",
    name: "Miss Stevenson",
    date: "April 2025",
    rating: 5,
    serviceTag: "Solar Panelling / PV",
    source: "Google Review",
  },
  {
    id: "rev-sixstars",
    title: "I would give 6 stars if I could",
    body: "I would give 6 stars if I could — this company from start to finish is fantastic. We had bad experiences with another company, but our faith is restored after Jamie and the team fixed our insulation and damp issues. Thanks again!",
    name: "Verified Bournemouth Homeowner",
    date: "March 2025",
    rating: 5,
    serviceTag: "Insulation & Damp Resolution",
    source: "Google Review",
  },
  {
    id: "rev-meal",
    title: "Delighted — listened & gave a sensible solution",
    body: "Delighted to have asked this young company to deal with our problem. The rep came to our house, listened and came up with a sensible solution. It was dealt with efficiently. Just what we wanted.",
    name: "Gilbert Meal",
    date: "March 2025",
    rating: 5,
    serviceTag: "Tailored Home Survey & Fix",
    source: "Google Review",
  },
  {
    id: "rev-barnes",
    title: "Effortless from start to finish",
    body: "Highly recommend quick and speedy service. The process from start to finish was effortless! Thanks Jamie and the team.",
    name: "Mr Barnes",
    date: "March 2025",
    rating: 5,
    serviceTag: "Property Maintenance",
    source: "Google Review",
  },
  {
    id: "rev-llewellyn",
    title: "Friendly and reasonably priced",
    body: "Great job, very friendly and reasonably priced, would recommend to anyone looking for honest workmanship.",
    name: "Mr Llewellyn",
    date: "April 2025",
    rating: 5,
    serviceTag: "Home Insulation & Coating",
    source: "Google Review",
  },
];

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Free Technical Home Survey",
    description:
      "We visit your property (or welcome you to our 638 Christchurch Rd Bournemouth showroom) to inspect moisture levels, loft depth, roof condition, or solar suitability—zero pressure, ever.",
    detail: "Thermal & moisture diagnostic check",
  },
  {
    step: "02",
    title: "Honest Fixed Specification",
    description:
      "You receive a clear, itemised written quote tailored strictly to what your home actually needs—never pushy sales scripts or inflated day-only discounts.",
    detail: "Transparent fixed UK pricing",
  },
  {
    step: "03",
    title: "Accredited In-House Craftsmanship",
    description:
      "Jamie and our experienced, polite installation crew carry out the work cleanly, punctually, and using BBA/approved systems (ProPERLA, SuperFOIL, Knauf, Sunsynk, zappi).",
    detail: "Clean, tidy & respectful on site",
  },
  {
    step: "04",
    title: "Guaranteed Warmer, Drier Living",
    description:
      "We walk you through every completed detail, provide full photographic & warranty documentation, and remain right here in Bournemouth whenever you need us.",
    detail: "Local aftercare & long-term warranties",
  },
];

export const FAQS: FaqItem[] = [
  {
    category: "Damp & Wall Coatings",
    question: "How does exterior wall coating stop damp without trapping moisture inside?",
    answer:
      "Unlike cheap exterior paints that seal walls like a plastic bag and cause blistering, our ProPERLA superhydrophobic coatings are microporous. Liquid raindrops are too large to penetrate from outside (creating a visible beading effect), while microscopic water vapour molecules inside your home escape freely—keeping masonry dry, breathable, and up to 35% more thermally efficient.",
  },
  {
    category: "Spray Foam Removal",
    question: "Why is loft spray foam blocking UK mortgages, and will removal damage my roof?",
    answer:
      "Many UK mortgage lenders and equity-release providers refuse properties with spray foam because it hides structural rafters from inspection and can trap moisture against timbers. Our specialist crew removes spray foam meticulously by hand without damaging your breathable membrane, felt, or tiles—leaving clean, inspectable rafters ready for surveyor sign-off.",
  },
  {
    category: "Condensation & Mould",
    question: "How quickly does a PIV (Positive Input Ventilation) system stop window condensation?",
    answer:
      "Most homeowners notice dry windows within 24 to 48 hours of installation. Mounted discreetly in your loft, a PIV unit draws in fresh filtered air and gently displaces stale, humid air throughout the house—stopping black mould at its source while costing pennies a day to run.",
  },
  {
    category: "Solar & EV",
    question: "Do solar panels work well on cloudy British days, and can I see the kit first?",
    answer:
      "Yes! Modern monocrystalline solar PV panels generate power from daylight, not just direct sunshine. Paired with a Sunsynk hybrid inverter and home battery, you store surplus daytime energy to run your home at night. Better yet, you can visit our showroom at 638 Christchurch Road, Bournemouth (BH1 4BP) to see Sunsynk batteries and myenergi zappi EV chargers in person.",
  },
  {
    category: "Quotes & Pricing",
    question: "Is your home survey genuinely free and no-obligation?",
    answer:
      "100% free and completely no-obligation. As a proud local Bournemouth team with a 5.0-star Google reputation, we rely on honest advice and word-of-mouth—never high-pressure sales tactics. Call us free on 0800 001 6233 or request a survey online.",
  },
];

