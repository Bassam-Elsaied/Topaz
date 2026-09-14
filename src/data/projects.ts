export type ProjectVideo = {
  youtubeId: string;
  /** The title as published on YouTube, so the two records agree. */
  title: string;
  description: string;
  /** ISO 8601 date and `PT#M#S` runtime, both required for video rich results. */
  uploadDate: string;
  duration: string;
};

/** A supporting photograph on a project's own page. */
export type ProjectShot = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

/** A published fact about the job — client, category, venue and the like. */
export type ProjectFact = {
  label: string;
  value: string;
};

export type Project = {
  slug: string;
  title: string;
  year: number;
  /** Emirate, for the line of meta under each card. */
  city: string;
  eventType?: string;
  /** One sentence for cards, search results and social previews. */
  summary: string;
  /** Poster still. Also the only picture bytes a card costs until it is played. */
  image: string;
  imageAlt: string;
  width: number;
  height: number;
  facts: ProjectFact[];
  overview: string[];
  requirements?: string[];
  /** The line that introduces the solutions list, where the write-up has one. */
  solutionsLead?: string;
  solutions?: string[];
  conclusion?: string[];
  gallery: ProjectShot[];
  /** Streamed from YouTube on demand, where footage exists. */
  video?: ProjectVideo;
};

/**
 * Every event Topaz has published, newest first. Written from the live
 * portfolio rather than by hand, so the copy, the facts and the photography
 * all agree with what the client has already approved.
 */
export const PROJECTS: Project[] = [
  {
    slug: "li-auto-launch",
    title: "Li Auto L9 Car Launch Event 2026",
    year: 2026,
    city: "Dubai",
    eventType: "Car Launch Event",
    summary:
      "Topaz Events delivered the full Li Auto L9 car launch experience in the Dubai UAE, from event setup and AV to staging, branding, guest flow and live execution.",
    image: "/projects/li-auto-launch.webp",
    imageAlt:
      "Branded LED screens, professional AV and lighting transformed the venue into a premium automotive launch environment.",
    width: 900,
    height: 600,
    facts: [
      { label: "Client", value: "Li Auto Chinese Car Manufacturer" },
      { label: "Category", value: "Private organisation" },
      { label: "Event type", value: "Car Launch Event" },
      { label: "Attendees", value: "300+ Pax." },
      { label: "Date", value: "04 September, 2026" },
      { label: "Location", value: "Atlantis The Royal, Dubai, UAE" },
    ],
    overview: [
      "Li Auto officially unveiled the all-new Li L9 on September 4, 2026, at Atlantis The Royal, Dubai, marking its UAE and Gulf region debut. The premium automotive launch brought together an immersive brand experience, live event production and a high-impact vehicle reveal for 300+ guests.",
      "Topaz Events Management delivered the complete event experience in collaboration with Newness Events, managing event setup, staging, AV, lighting, branding, luxury furniture, guest flow and live execution.",
    ],
    requirements: [
      "Deliver a premium launch experience for the UAE debut of the Li L9.",
      "Create a visually impactful environment aligned with Li Auto’s premium positioning.",
      "Manage staging, AV, LED screens, lighting, branding and event infrastructure.",
      "Ensure smooth guest movement and coordination throughout the event.",
      "Deliver precise live execution for the main vehicle reveal and event programme.",
    ],
    solutionsLead: "To fulfill the vision of Li Auto, we delivered:",
    solutions: [
      "Complete Event Management: Coordinated planning, setup and live event operations from start to finish.",
      "Event Production & Staging: Custom stage setup, LED screens, professional sound and dynamic lighting",
      "Premium Event Design: Integrated branding, luxury furniture and visual elements designed around the Li Auto experience.",
      "Guest Experience Management: Structured guest flow and on-ground coordination for a seamless event journey.",
      "Live Event Execution: Technical and production coordination to ensure the Li L9 reveal happened smoothly and with maximum impact.",
    ],
    conclusion: [
      "The Li L9 UAE launch combined premium automotive branding with seamless event production and live execution. In collaboration with Newness Events, Topaz Events brought every element together to create a polished launch experience worthy of a major vehicle debut in Dubai",
    ],
    gallery: [
      {
        src: "/projects/li-auto-launch/01.webp",
        alt: "Li Auto L9 UAE car reveal event hall in Dubai managed by Topaz Events",
        width: 1000,
        height: 667,
      },
      {
        src: "/projects/li-auto-launch/02.webp",
        alt: "Li Auto L9 car launch stage with large LED screens at Atlantis The Royal Dubai by Topaz Events",
        width: 1000,
        height: 667,
      },
      {
        src: "/projects/li-auto-launch/03.webp",
        alt: "Li Auto logo displayed on large LED screens at the L9 car launch event in Dubai by Topaz Events",
        width: 1000,
        height: 667,
      },
      {
        src: "/projects/li-auto-launch/04.webp",
        alt: "Large LED screens featuring Li L9 branding at the car launch event in Dubai by Topaz Events",
        width: 1000,
        height: 667,
      },
      {
        src: "/projects/li-auto-launch/05.webp",
        alt: "Li Auto logo displayed on the LED screen backdrop at the L9 car launch event in Dubai by Topaz Events",
        width: 1000,
        height: 667,
      },
      {
        src: "/projects/li-auto-launch/06.webp",
        alt: "A large custom stage, LED screens and dynamic lighting created the visual focus for the Li Auto L9 launch.",
        width: 1000,
        height: 667,
      },
    ],
    video: {
      youtubeId: "6BCfXJn61Vs",
      title:
        "Li Auto L9 Car Reveal Event | Event Management & Production | Topaz Events",
      description:
        "The Li Auto L9 reveal, produced by Topaz Events with Newness Events Management — stage, lighting and reveal mechanics.",
      uploadDate: "2026-09-09",
      duration: "PT2M34S",
    },
  },
  {
    slug: "sharjah-census-2025-reveal-event",
    title: "Sharjah Census 2025 Reveal Ceremony",
    year: 2026,
    city: "Sharjah",
    eventType: "Reveal Ceremony",
    summary:
      "Topaz Events delivered a seamless setup for the 2025 Sharjah Census Reveal, ensuring professional execution for a high-impact government event in Sharjah UAE.",
    image: "/projects/sharjah-census-2025-reveal-event.webp",
    imageAlt:
      "Group photo of government officials, VIP guests, and event leaders on stage at the 2025 Sharjah Census Reveal by Topaz Events, held at Al Jawaher Reception and",
    width: 1400,
    height: 788,
    facts: [
      {
        label: "Client",
        value: "Department of Statistics and Community Development",
      },
      { label: "Category", value: "Government organisation" },
      { label: "Event type", value: "Reveal Ceremony" },
      { label: "Attendees", value: "400+ Pax." },
      { label: "Date", value: "24 June, 2026" },
      {
        label: "Location",
        value: "Al Jawaher Reception and Convention Centre, Sharjah, UAE",
      },
    ],
    overview: [
      "Topaz Events successfully managed the complete event setup for the 2025 Sharjah Census Reveal, a ceremony held by the Department of Statistics and Community Development at Al Jawaher Reception and Convention Centre, in the presence of Sheikh Mohammed bin Saud Al Qasimi, Chairman of the Sharjah Finance Department.",
      "This high-profile government event required a professional and well-structured environment to present key census findings shaping Sharjah’s future.",
      "From venue transformation to on-ground coordination, Topaz Events team ensured seamless execution with precision, delivering a polished and impactful experience.",
    ],
    requirements: [
      "Professional setup for a high-level government ceremony.",
      "Seamless execution in the presence of VIP dignitaries.",
      "Venue transformation aligned with official branding.",
      "High-quality staging, AV solutions, interactive technologies and presentation setup.",
      "Flawless coordination and guest management.",
    ],
    solutionsLead:
      "To fulfill the vision of Department of Statistics and Community Development, we delivered:",
    solutions: [
      "Delivered end-to-end event planning and execution.",
      "Designed a formal setup suitable for government officials and VIP presence.",
      "Implemented advanced audio-visual systems for clear presentations.",
      "Managed logistics, guest flow, and real-time coordination.",
      "Ensured strict adherence to timelines and protocol standards.",
    ],
    conclusion: [
      "The Sharjah Census Reveal 2025 highlights Topaz Events’ capability to execute high-profile government ceremonies with precision and professionalism. From managing VIP expectations to delivering a seamless event environment, every detail was carefully handled to reflect the importance of the occasion.",
      "Our approach ensures that complex events are transformed into impactful experiences that support strategic communication and leave a lasting impression on stakeholders and attendees alike.",
    ],
    gallery: [
      {
        src: "/projects/sharjah-census-2025-reveal-event/01.webp",
        alt: "Large event stage with high-resolution LED screens, professional lighting, and branded backdrop designed and executed by Topaz Events for a government ceremony at Al",
        width: 1000,
        height: 668,
      },
      {
        src: "/projects/sharjah-census-2025-reveal-event/02.webp",
        alt: "Premium event furniture setup by Topaz Events for the 2025 Sharjah Census Reveal, featuring elegant seating, lounge arrangements, and coordinated décor at Al Jawaher",
        width: 1000,
        height: 668,
      },
      {
        src: "/projects/sharjah-census-2025-reveal-event/03.webp",
        alt: "LED screens, stage setup, AV system, and premium event furniture by Topaz Events for the 2025 Sharjah Census Reveal at Al Jawaher Convention Centre, Sharjah",
        width: 1000,
        height: 668,
      },
      {
        src: "/projects/sharjah-census-2025-reveal-event/04.webp",
        alt: "Media wall designed and installed by Topaz Events for the 2025 Sharjah Census Reveal, featuring branded backdrop for official photos and press coverage at Al Jawaher",
        width: 1000,
        height: 668,
      },
      {
        src: "/projects/sharjah-census-2025-reveal-event/05.webp",
        alt: "Audience seating area with LED screen backdrop by Topaz Events for the 2025 Sharjah Census Reveal, featuring structured seating layout and high-resolution display for",
        width: 1000,
        height: 668,
      },
      {
        src: "/projects/sharjah-census-2025-reveal-event/06.webp",
        alt: "Reception area setup by Topaz Events for the 2025 Sharjah Census Reveal, showcasing organized guest check-in counters, elegant décor, and seamless attendee flow at Al",
        width: 1000,
        height: 668,
      },
    ],
  },
  {
    slug: "shjseen-2026",
    title: "Shjseen Sharjah Excellence Awards 2026",
    year: 2026,
    city: "Sharjah",
    eventType: "Awards Ceremony",
    summary:
      "Topaz Events delivered full-scale setup for Shjseen Sharjah Excellence Awards 2026 at Expo Centre Sharjah, ensuring a seamless and impactful awards ceremony.",
    image: "/projects/shjseen-2026.webp",
    imageAlt:
      "LED screen and AV setup by Topaz Events at Sharjah Excellence Awards venue",
    width: 900,
    height: 600,
    facts: [
      { label: "Client", value: "Sharjah Chamber of Commerce (SCCI)" },
      { label: "Category", value: "Government organisation" },
      { label: "Event type", value: "Awards Ceremony" },
      { label: "Attendees", value: "500+ Pax." },
      { label: "Date", value: "24 June, 2026" },
      { label: "Location", value: "Sharjah Expo Centre, UAE" },
    ],
    overview: [
      "Topaz Events proudly executed the Shjseen Sharjah Excellence Awards 2026 ceremony, organized by the Sharjah Chamber of Commerce and Industry (SCCI) at Expo Centre Sharjah. This prestigious event honored top-performing businesses across the emirate, requiring a high level of precision, creativity, and coordination. Topaz Events managed the complete event setup, from stage design to technical production and on-ground execution. The result was a refined and engaging award ceremony that reflected the significance of the Sharjah Excellence Award and delivered a seamless experience for attendees, dignitaries, and stakeholders.",
    ],
    requirements: [
      "Premium stage design aligned with the prestige of the awards.",
      "Advanced audio-visual and lighting setup.",
      "Smooth flow for award presentations and transitions.",
      "Professional event branding and visual consistency.",
      "Full on-ground management and coordination.",
    ],
    solutionsLead:
      "To fulfill the vision of Sharjah Chamber of Commerce and Industry, we delivered:",
    solutions: [
      "Designed and built a visually striking, brand-aligned stage setup.",
      "Delivered high-quality AV, LED screens, and lighting systems.",
      "Managed show flow, cues, and live technical execution.",
      "Ensured cohesive branding across all event touchpoints.",
      "Deployed an experienced team for seamless on-site operations.",
    ],
    conclusion: [
      "The Shjseen 2026 event highlighted Topaz Events’ capability to deliver high-impact corporate ceremonies with precision and creativity. By combining technical expertise with strategic planning, we created an environment that elevated the award experience and reflected the excellence being celebrated. Our end-to-end approach ensured every detail was executed flawlessly, reinforcing our reputation as a trusted event partner in the UAE for large-scale, prestigious events.",
    ],
    gallery: [
      {
        src: "/projects/shjseen-2026/01.webp",
        alt: "Shjseen 2026 main stage design by Topaz Events in Sharjah",
        width: 1000,
        height: 667,
      },
      {
        src: "/projects/shjseen-2026/02.webp",
        alt: "Topaz Events technical production setup at Shjseen awards Expo Centre Sharjah",
        width: 1000,
        height: 667,
      },
      {
        src: "/projects/shjseen-2026/03.webp",
        alt: "Sharjah Excellence Awards trophy presentation stage by Topaz Events UAE",
        width: 1000,
        height: 667,
      },
      {
        src: "/projects/shjseen-2026/04.webp",
        alt: "High-profile corporate event setup by Topaz Events Sharjah UAE",
        width: 1000,
        height: 668,
      },
      {
        src: "/projects/shjseen-2026/05.webp",
        alt: "Topaz Events full event setup at Expo Centre Sharjah awards ceremony",
        width: 1000,
        height: 667,
      },
      {
        src: "/projects/shjseen-2026/06.webp",
        alt: "Shjseen 2026 audience seating and stage view by Topaz Events Expo Centre Sharjah",
        width: 1000,
        height: 666,
      },
    ],
    video: {
      youtubeId: "OOz3TaUsV8A",
      title: "Shjseen | Sharjah Excellence Award | Topaz Events",
      description:
        "The Shjseen ceremony for the Sharjah Chamber of Commerce & Industry, celebrating the Sharjah Excellence Award.",
      uploadDate: "2026-07-01",
      duration: "PT1M11S",
    },
  },
  {
    slug: "beaconhouse-school-graduation-ceremony",
    title: "Beaconhouse School Graduation 2026",
    year: 2026,
    city: "Dubai",
    eventType: "Graduation Ceremony",
    summary:
      "Explore Beaconhouse Al Khaleej School Senior's Graduation Ceremony 2026 in Dubai, expertly managed with full event setup, AV solutions, and seamless execution.",
    image: "/projects/beaconhouse-school-graduation-ceremony.webp",
    imageAlt:
      'Wide shot of graduates seated on tiered stage steps beneath the "Class of 2026 Graduation Ceremony" screen display and professional beam lighting setup executed by Topaz',
    width: 1400,
    height: 933,
    facts: [
      { label: "Client", value: "Beaconhouse Al Khaleej School" },
      { label: "Category", value: "Private organisation" },
      { label: "Event type", value: "Graduation Ceremony" },
      { label: "Attendees", value: "700+ Pax." },
      { label: "Date", value: "04 June 2026" },
      { label: "Location", value: "Dubai, UAE" },
    ],
    overview: [
      "The Beaconhouse Al Khaleej International School Senior’s Graduation Ceremony 2026 was a prestigious milestone event held in Dubai, celebrating the achievements of the Class of 2026. Managed by Topaz Event Management, the ceremony brought together graduates, families, and faculty for a memorable and seamless experience.",
      "From conceptualization to execution, the event reflected excellence, pride, and celebration. Every element from staging to audiovisual production was carefully curated to honor the students’ journey and create a meaningful atmosphere that marked the beginning of their next chapter.",
    ],
    requirements: [
      "A professionally managed graduation ceremony reflecting the school’s reputation and standards.",
      "Complete event setup including stage, seating, and branding elements.",
      "High-quality audiovisual solutions for clear visibility and engagement.",
      "Seamless coordination to ensure smooth program flow.",
      "An impactful and memorable experience for students, families, and guests.",
    ],
    solutionsLead:
      "To fulfill the vision of Beaconhouse Al Khaleej School’s, we delivered:",
    solutions: [
      "Delivered complete AV production including LED screens, lighting, and sound systems..",
      "Designed and executed a visually appealing stage setup aligned with the school’s branding.",
      "Installed grandstand seating for enhanced audience comfort and viewing experience.",
      "Managed end-to-end event execution ensuring flawless coordination.",
      "Created a cohesive and engaging environment that elevated the graduation experience.",
    ],
    conclusion: [
      "The Beaconhouse Al Khaleej School Graduation 2026 was successfully transformed into a memorable celebration of achievement and new beginnings. Through meticulous planning and execution, Topaz Events ensured a seamless and impactful event experience. The ceremony not only honored the graduates but also left a lasting impression on attendees, reinforcing the importance of celebrating academic milestones with excellence and precision.",
    ],
    gallery: [
      {
        src: "/projects/beaconhouse-school-graduation-ceremony/01.webp",
        alt: "Graduates on stage at the Beaconhouse Al Khaleej International School Graduation Ceremony 2026, seamlessly organized and managed by Topaz Event Management.",
        width: 1000,
        height: 667,
      },
      {
        src: "/projects/beaconhouse-school-graduation-ceremony/02.webp",
        alt: "Full auditorium view of the premium stage setup, custom LED screens, and AV production executed by Topaz Event Management for the Beaconhouse School Graduation 2026 in",
        width: 1000,
        height: 667,
      },
      {
        src: "/projects/beaconhouse-school-graduation-ceremony/03.webp",
        alt: "Side view of the grandstand seating and professional stage branding elements designed and executed by Topaz Event Management for the Class of 2026.",
        width: 1000,
        height: 667,
      },
      {
        src: "/projects/beaconhouse-school-graduation-ceremony/04.webp",
        alt: "Close-up of custom BAKIS Seniors 2026 graduation awards on a table, part of the complete event setup managed by Topaz Event Management.",
        width: 1000,
        height: 667,
      },
      {
        src: "/projects/beaconhouse-school-graduation-ceremony/05.webp",
        alt: "Full group of graduates standing on a tiered stage with a massive UAE flag displayed on the central LED screen, seamlessly organized by Topaz Event Management.",
        width: 1000,
        height: 667,
      },
      {
        src: "/projects/beaconhouse-school-graduation-ceremony/06.webp",
        alt: "Event attendees and family members standing in the auditorium during the formal proceedings of the graduation ceremony, coordinated by Topaz Event Management.",
        width: 1000,
        height: 667,
      },
    ],
  },
  {
    slug: "iv-autism-conference-abu-dhabi-2026",
    title: "IV Autism Conference Abu Dhabi 2026",
    year: 2026,
    city: "Abu Dhabi",
    eventType: "International Conference",
    summary:
      "Topaz Events delivered full-scale event setup and execution for the IV International Autism Conference Abu Dhabi 2026 at Energy Centre Abu Dhabi, UAE.",
    image: "/projects/iv-autism-conference-abu-dhabi-2026.webp",
    imageAlt:
      "Topaz Events delivering large-scale conference management in UAE",
    width: 1400,
    height: 787,
    facts: [
      { label: "Client", value: "Lotus Holistic Medical Center" },
      { label: "Category", value: "Private organisation" },
      { label: "Event type", value: "International Conference" },
      { label: "Date", value: "25–28 April 2026" },
      { label: "Location", value: "Abu Dhabi Energy Centre, UAE" },
    ],
    overview: [
      "Expected Guests: 6000 (in-person & virtual)",
      "Topaz Events proudly supported the IV International Autism Conference Abu Dhabi 2026, held from 25 – 28 April 2026 at the Abu Dhabi Energy Centre. Organized under the patronage of H.H. Sheikh Khalid bin Zayed Al Nahyan and the Zayed Authority for People of Determination, the conference united over 6,000 attendees, 152 speakers, and 86 international experts under the theme “Autism: Innovation and Artificial Intelligence.”",
      "In collaboration with Lotus Holistic, Topaz Events managed end-to-end event execution, delivering a seamless, professional, and impactful experience that matched the scale and significance of this landmark global event.",
    ],
    requirements: [
      "Comprehensive Event Setup – Full on-ground coordination and venue dressing across all four conference days at the Abu Dhabi Energy Centre.",
      "Exhibition Stand Execution – Design-aligned installation and management of exhibition stands for participating organizations and partners.",
      "Multi-Format Audience Experience – Support for both in-person and virtual attendee engagement across a 6,000+ participant event.",
      "Collaboration with Co-Organizer – Seamless coordination with Lotus Holistic to align operational delivery with the overall event vision.",
      "Brand & Thematic Consistency – Ensuring all physical setups, signage, and environments reflected the conference’s identity and the Zayed Authority’s standards.",
    ],
    solutionsLead:
      "To fulfill the vision of Lotus Holistic Center, we delivered:",
    solutions: [
      "End-to-End Event Management – Topaz Events handled complete logistics, setup, and on-site coordination across the four-day conference, ensuring zero disruption to the program.",
      "Conference Management & Coordination – Our team planned and executed every operational aspect of the four-day conference, enabling speakers, partners, and organizations to engage effectively with a global audience.",
      "Precision Planning & Timelines – Detailed pre-event planning ensured every stage, from load-in to teardown, was executed on schedule and to the highest standard.",
      "On-Site Team Deployment – Dedicated on-ground staff managed real-time coordination, troubleshooting, and attendee flow throughout the event.",
      "Collaborative Execution Model – Working closely with Lotus Holistic, we aligned our delivery approach to support a unified, impactful, and professionally consistent conference experience.",
    ],
    conclusion: [
      "The IV International Autism Conference 2026 was a milestone event and Topaz Event Management was proud to play a key role in making it happen. From setup to execution, we delivered with precision, purpose, and professionalism, reinforcing our commitment to world-class event management in the UAE.",
    ],
    gallery: [
      {
        src: "/projects/iv-autism-conference-abu-dhabi-2026/01.webp",
        alt: "IV International Autism Conference 2026 official opening ceremony Abu Dhabi",
        width: 1000,
        height: 562,
      },
      {
        src: "/projects/iv-autism-conference-abu-dhabi-2026/02.webp",
        alt: "Event setup interior view at Abu Dhabi Energy Centre during Autism Conference",
        width: 1000,
        height: 562,
      },
      {
        src: "/projects/iv-autism-conference-abu-dhabi-2026/03.webp",
        alt: "Main entrance of Abu Dhabi Energy Centre dressed for IV International Autism Conference April 2026",
        width: 1000,
        height: 562,
      },
      {
        src: "/projects/iv-autism-conference-abu-dhabi-2026/04.webp",
        alt: "Exhibition hall setup for IV International Autism Conference organized by Zayed Authority",
        width: 1000,
        height: 562,
      },
      {
        src: "/projects/iv-autism-conference-abu-dhabi-2026/05.webp",
        alt: "H.H. Sheikh Khalid bin Zayed Al Nahyan attending IV International Autism Conference Abu Dhabi 2026",
        width: 1000,
        height: 562,
      },
      {
        src: "/projects/iv-autism-conference-abu-dhabi-2026/06.webp",
        alt: "Speaker session in progress at IV International Autism Conference Abu Dhabi",
        width: 1000,
        height: 562,
      },
    ],
  },
  {
    slug: "sharjah-judicial-forum",
    title: "Sharjah Judicial Department Forum",
    year: 2026,
    city: "Sharjah",
    eventType: "Partners Forum 2026",
    summary:
      "Topaz Events executed the Partners of Excellence Forum 2026 for Sharjah Judicial Department from full indoor venue preparation to final event execution.",
    image: "/projects/sharjah-judicial-forum.webp",
    imageAlt:
      "Topaz Events government event execution for Sharjah Judicial Department UAE",
    width: 900,
    height: 600,
    facts: [
      { label: "Client", value: "Sharjah Judicial Department" },
      { label: "Category", value: "Government organisation" },
      { label: "Event type", value: "Partners Forum 2026" },
      { label: "Date", value: "15 April 2026" },
      {
        label: "Location",
        value: "Sharjah Research Technology and Innovation Park, UAE",
      },
    ],
    overview: [
      "Expected Guests: 200+",
      "The Sharjah Judicial Department entrusted Topaz Events with the full-scale execution of its prestigious Partners of Excellence Forum 2026, held on 15 April 2026 at the Sharjah Research, Technology and Innovation Park. This distinguished indoor forum was honoured by the presence of His Highness Sheikh Sultan bin Ahmed bin Sultan Al Qasimi, Deputy Ruler of Sharjah and Chairman of Sharjah Judicial Council.",
      "From complete venue setup and professional AV solutions to high-quality audio systems, LED screens, premium lighting, and top-class furniture – every element was carefully managed to deliver a seamless, structured, and truly exceptional government event experience.",
    ],
    requirements: [
      "Complete indoor event setup and on-ground execution within the Sharjah Research, Technology and Innovation Park.",
      "Professional AV solutions including stage LED screens and high-quality audio sound systems suited to a formal government forum environment.",
      "Sophisticated lighting design that enhances the venue ambiance while reflecting the prestige of the occasion.",
      "Top-class furniture selection and arrangement befitting the VIP and official dignitary attendance.",
      "Strict adherence to government event protocol standards, with flawless coordination expected throughout every phase of the forum.",
    ],
    solutionsLead:
      "To fulfill the vision of Sharjah Judicial Department Forum, we delivered:",
    solutions: [
      "Delivered a complete indoor venue setup from start to finish, managing every logistical detail to transform the space into a polished, dignified forum environment worthy of its distinguished audience.",
      "Installed and operated professional AV solutions including high-impact stage LED screens and premium audio sound systems, ensuring crystal-clear visuals and sound delivery throughout the event.",
      "Designed and executed a professional lighting scheme that elevated the indoor atmosphere, complementing the formality and prestige of the Partners of Excellence Forum.",
      "Sourced and arranged top-class furniture across all areas of the venue, ensuring both aesthetic refinement and guest comfort aligned with VIP protocol expectations.",
      "Deployed a dedicated on-ground coordination team to oversee real-time execution, maintaining seamless event flow from venue preparation through to the final close of proceedings.",
    ],
    conclusion: [
      "The Partners of Excellence Forum 2026 stands as a defining milestone in Topaz Events’ portfolio of government event execution. By delivering a complete indoor setup, encompassing AV technology, LED staging, premium audio, professional lighting, and top-class furniture – our team ensured every detail reflected the occasion’s distinction. This project reaffirms Topaz Events as a trusted partner for high-profile government and corporate events across the UAE.",
    ],
    gallery: [
      {
        src: "/projects/sharjah-judicial-forum/01.webp",
        alt: "Topaz Events full-scale event management for Sharjah Judicial Council forum",
        width: 1000,
        height: 667,
      },
      {
        src: "/projects/sharjah-judicial-forum/02.webp",
        alt: "Topaz Events high-quality AV and sound system for indoor corporate forum UAE",
        width: 1000,
        height: 667,
      },
      {
        src: "/projects/sharjah-judicial-forum/03.webp",
        alt: "Topaz Events professional stage setup with podium and large LED screen at Sharjah Judicial Department Partners of Excellence Forum 2026 Sharjah",
        width: 1000,
        height: 667,
      },
      {
        src: "/projects/sharjah-judicial-forum/04.webp",
        alt: "Topaz Events top-class furniture arrangement at Sharjah Judicial Department Partners Forum",
        width: 1000,
        height: 667,
      },
      {
        src: "/projects/sharjah-judicial-forum/05.webp",
        alt: "Topaz Events VIP seating setup for Partners of Excellence Forum 2026 Sharjah",
        width: 1000,
        height: 667,
      },
      {
        src: "/projects/sharjah-judicial-forum/06.webp",
        alt: "Topaz Events stage setup with podium and large LED screen at Sharjah Judicial Department Forum 2026",
        width: 1000,
        height: 667,
      },
    ],
    video: {
      youtubeId: "AHGc5j-RMnc",
      title: "Sharjah Judicial Department Forum | Topaz Events",
      description:
        "The Partners of Excellence Forum for the Sharjah Judicial Department, held in the presence of His Highness Sheikh Sultan bin Ahmed bin Sultan Al Qasimi.",
      uploadDate: "2026-05-06",
      duration: "PT1M21S",
    },
  },
  {
    slug: "snoc-exhibition-stand-2026-at-hse-expo-setup-sharjah",
    title: "SNOC HSE Expo 2026 Exhibition Stand",
    year: 2026,
    city: "Sharjah",
    eventType: "Exhibition Stand",
    summary:
      "Topaz Events delivered SNOC HSE Expo 2026 Exhibition Stand Sharjah featuring LED screens, AI photo booth, pledge wall & interactive activations.",
    image:
      "/projects/snoc-exhibition-stand-2026-at-hse-expo-setup-sharjah.webp",
    imageAlt:
      "A large-scale LED screen wall and circular overhead branded screen displaying the HSE Expo identity at the SNOC exhibition stand, Al Jawaher, Sharjah — installed by",
    width: 1400,
    height: 934,
    facts: [
      { label: "Client", value: "Sharjah National Oil Corporation (SNOC)" },
      { label: "Category", value: "Government organisation" },
      { label: "Event type", value: "Exhibition Stand" },
      { label: "Date", value: "April 2026" },
      { label: "Location", value: "Al Jawaher – Sharjah" },
    ],
    overview: [
      "Estimated Visitors: 500+",
      "Sharjah National Oil Corporation (SNOC), one of the UAE’s leading government energy entities, required a commanding exhibition presence at the 3rd HSE Expo – a flagship industry event held on April 1–2, 2026, at Al Jawaher Reception & Convention Centre, Sharjah. Hosted under the patronage of His Highness Sheikh Sultan bin Ahmad Al Qasimi, Deputy Ruler of Sharjah and Chairman of SNOC, the expo united regulators, decision-makers, and HSE specialists under the theme of Resilience, Sustainability & Operational Excellence.",
      "Topaz Events was entrusted with the full design and execution of SNOC’s exhibition stand — a space that needed to reflect the corporation’s authority and vision while fostering meaningful engagement with visitors. The stand had to go beyond aesthetics, functioning as an active platform for interaction, brand storytelling, and audience participation throughout the two-day event.",
    ],
    requirements: [
      "Design and build a complete, fully branded exhibition stand that reflects SNOC’s identity as a leading government energy corporation and the host of the HSE Expo.",
      "Create an engaging, visitor-friendly environment that encourages interaction and supports meaningful dialogue around HSE themes of safety, sustainability, and operational excellence.",
      "Incorporate large-format digital display solutions to communicate SNOC’s messaging, achievements, and brand narrative across the stand at scale.",
      "Integrate interactive and gamified elements that attract foot traffic, sustain visitor engagement, and make the stand experience memorable beyond a passive visit.",
      "Deliver end-to-end stand execution from concept and fabrication to on-site setup and event-day management with zero margin for error at a high-profile, government-patronised event.",
    ],
    solutionsLead: "To fulfill the vision of SNOC, we delivered:",
    solutions: [
      "Designed and delivered a complete exhibition stand featuring a bold curved reception desk, elevated platform flooring, soft-tone architectural finishes, and integrated LED perimeter lighting – creating a clean, professional, and visually distinctive brand environment.",
      "Installed a large-scale LED screens wall and a circular overhead screen branded with the HSE Expo identity, ensuring maximum visual impact and visibility from across the exhibition hall.",
      "Set up an AI Photo Booth experience, offering visitors a memorable, shareable activation that extended the SNOC brand presence beyond the physical stand.",
      "Deployed an interactive Quiz Game station, drawing in visitors with a fun, HSE-themed engagement mechanic that reinforced event messaging in an accessible and impactful way.",
      "Incorporated a Pledge Wall, inviting attendees to make a visible personal commitment to HSE values turning a passive visit into a moment of meaningful participation aligned with the event’s core mission.",
    ],
    conclusion: [
      "The SNOC HSE Expo exhibition stand was more than a physical structure – it was a fully realised brand experience. By combining architectural design, large-format digital displays, and interactive activations, Topaz Events delivered a stand that commanded attention, encouraged engagement, and left a lasting impression on every visitor. For an event of this significance, under royal patronage and at the heart of the UAE’s HSE landscape, the result was nothing short of impactful.",
    ],
    gallery: [
      {
        src: "/projects/snoc-exhibition-stand-2026-at-hse-expo-setup-sharjah/01.webp",
        alt: "A branded video wall at the SNOC exhibition stand during HSE Expo 2026, Al Jawaher, Sharjah — showcasing high-impact visual content aligned with SNOC's identity and the",
        width: 1000,
        height: 667,
      },
      {
        src: "/projects/snoc-exhibition-stand-2026-at-hse-expo-setup-sharjah/02.webp",
        alt: "The main registration desk at the SNOC HSE Expo 2026 exhibition stand, Al Jawaher, Sharjah — featuring a sleek, branded curved counter design that served as the central",
        width: 1000,
        height: 667,
      },
      {
        src: "/projects/snoc-exhibition-stand-2026-at-hse-expo-setup-sharjah/03.webp",
        alt: "A large-scale LED screen displaying SNOC brand visuals and HSE Expo content at the exhibition stand, Al Jawaher, Sharjah — installed by Topaz Events to deliver",
        width: 1000,
        height: 667,
      },
      {
        src: "/projects/snoc-exhibition-stand-2026-at-hse-expo-setup-sharjah/04.webp",
        alt: "A complete exhibition stand for Sharjah National Oil Corporation featuring a bold curved reception desk, elevated platform flooring, soft-tone architectural finishes",
        width: 1000,
        height: 667,
      },
      {
        src: "/projects/snoc-exhibition-stand-2026-at-hse-expo-setup-sharjah/05.webp",
        alt: "A branded AI Photo Booth station at the SNOC exhibition stand during the HSE Expo 2026, Al Jawaher, Sharjah, offering visitors an interactive and shareable digital",
        width: 1000,
        height: 667,
      },
      {
        src: "/projects/snoc-exhibition-stand-2026-at-hse-expo-setup-sharjah/06.webp",
        alt: "A complete exhibition stand setup for Sharjah National Oil Corporation (SNOC) at the 3rd HSE Expo 2026, Al Jawaher, Sharjah — featuring a curved reception desk, large",
        width: 1000,
        height: 667,
      },
    ],
  },
  {
    slug: "hafza-fun-run-event-2026",
    title: "HAFZA Fun Run Event 2026",
    year: 2026,
    city: "Sharjah",
    eventType: "Sports Event",
    summary:
      "Topaz Events delivered the HFZA Fun Run 2026 for Hamriyah Free Zone in Sharjah with full event management, AV production, and engaging team-building activities.",
    image: "/projects/hafza-fun-run-event-2026.webp",
    imageAlt:
      "Over 1700 runners participating in HFZA Fun Run community race in Sharjah",
    width: 1400,
    height: 933,
    facts: [
      { label: "Client", value: "Hamriyah Free Zone" },
      { label: "Category", value: "Government organisation" },
      { label: "Event type", value: "Sports Event" },
      { label: "Date", value: "February 2026" },
      { label: "Location", value: "Hamriyah Free Zone Authority Sharjah" },
    ],
    overview: [
      "Estimated Visitors: 1700+",
      "Topaz Event Management successfully planned and executed the Hafza Fun Run Event 2026 at Hamriyah Free Zone Authority (HFZA), Sharjah – delivering a high-impact government-led community engagement initiative. Hosted on February 15, 2026, the 5 km run welcomed over 1,700 participants, including employees and investors, promoting wellness and corporate unity..",
      "In addition to race management, Topaz delivered complete event production including stage setup, media walls, and advanced AV solutions. The event was further elevated with engaging fun activities, health-focused experiences, and team-building zones, creating a vibrant atmosphere from start to finish. The presence of H.E. Saud Salim Al Mazrouei highlighted the event’s significance within the UAE’s business ecosystem.",
    ],
    requirements: [
      "End-to-end event planning and execution for a government initiative.",
      "Seamless management of a 5 km run for 1,700+ participants.",
      "Strong branding through stage setup, media walls, and venue design.",
      "Inclusion of fun activities, wellness experiences, and team engagement.",
      "Professional AV production and technical event support.",
    ],
    solutionsLead: "To fulfill the vision of HAFZA Sharjah, we delivered:",
    solutions: [
      "Delivered complete event management from concept to execution.",
      "Designed and installed premium stage setup and branded media walls.",
      "Provided full AV production including LED screens, sound, and lighting systems.",
      "Organized fun activities, wellness, and team-building experiences.",
      "Managed race logistics including route setup, registration, and crowd control.",
    ],
    conclusion: [
      "The Hafza Fun Run Event 2026 stands as a benchmark for successful government-led community events in Sharjah. By integrating expert event management with high-quality stage production, media walls, advanced AV solutions, and engaging fun and wellness activities, Topaz Event Management delivered a dynamic and memorable experience. The event successfully promoted health, team spirit, and community engagement, reinforcing Topaz’s reputation as a leading event management and production company in the UAE.",
    ],
    gallery: [
      {
        src: "/projects/hafza-fun-run-event-2026/01.webp",
        alt: "LED screen with stage installed by Topaz Events for HFZA Fun Run Sharjah",
        width: 1000,
        height: 667,
      },
      {
        src: "/projects/hafza-fun-run-event-2026/02.webp",
        alt: "Participants enjoying fun and wellness activities during HFZA Fun Run 2026",
        width: 1000,
        height: 667,
      },
      {
        src: "/projects/hafza-fun-run-event-2026/03.webp",
        alt: "Topaz Events stage setup and branding at HFZA Fun Run 2026",
        width: 1000,
        height: 667,
      },
      {
        src: "/projects/hafza-fun-run-event-2026/04.webp",
        alt: "media wall installed by Topaz Events for HFZA Fun Run Sharjah",
        width: 1000,
        height: 667,
      },
      {
        src: "/projects/hafza-fun-run-event-2026/05.webp",
        alt: "Finish line celebration with runners completing HFZA Fun Run 2026 in Sharjah",
        width: 1000,
        height: 667,
      },
      {
        src: "/projects/hafza-fun-run-event-2026/06.webp",
        alt: "Team building and engagement activities organized during HFZA community event",
        width: 1000,
        height: 667,
      },
    ],
  },
  {
    slug: "sharjah-media-ramadan-football-tournament",
    title: "Sharjah Media Ramadan Football Tournament",
    year: 2026,
    city: "Sharjah",
    eventType: "Sports Event",
    summary:
      "Topaz Event Management delivered full AV production, branding, and award stage design for the Sharjah Media Ramadan Football Tournament in Sharjah, UAE.",
    image: "/projects/sharjah-media-ramadan-football-tournament.webp",
    imageAlt:
      "LED screens, professional AV setup, stadium lighting, and championship trophy showcased together at Sharjah Media Ramadan Football Championship",
    width: 1400,
    height: 788,
    facts: [
      { label: "Client", value: "Sharjah Media Council" },
      { label: "Category", value: "Government organisation" },
      { label: "Event type", value: "Sports Event" },
      { label: "Date", value: "March 2026" },
      { label: "Location", value: "Sharjah Police Club Stadium" },
    ],
    overview: [
      "Estimated Visitors: 300+",
      "Topaz Events proudly supported the Sharjah Media Ramadan Football Championship, organized by the Sharjah Media Council at Sharjah Police Club Stadium on 12th March 2026. H.H. Sheikh Sultan bin Ahmed bin Sultan Al Qasimi crowned the Sharjah Broadcasting Authority (SBA) team as winners of the first edition.",
      "Our team delivered full-scale AV production, event branding, and stage design, ensuring a visually striking and seamless experience. From branded flags to medals and the awarding stage, every element reflected professionalism and prestige, enhancing the tournament’s impact and spectator engagement across the venue.",
    ],
    requirements: [
      "High-quality AV production for live sports coverage.",
      "Professional branding across venue and tournament materials.",
      "Eye-catching award stage and ceremony setup.",
      "Medals and trophies presentation for winners.",
      "Ensure smooth visual and technical experience during event.",
    ],
    solutionsLead:
      "To fulfill the vision of Sharjah Media Council’s, we delivered:",
    solutions: [
      "Complete AV production including LED screens, sound, and lighting.",
      "Branded flags, banners, and tournament signage throughout venue.",
      "Customized awarding stage design and ceremony setup.",
      "Medals, trophies, and on-stage presentation coordination.",
      "On-site technical team ensuring flawless execution of all visual elements.",
    ],
    conclusion: [
      "Topaz Events delivered a visually impactful and technically seamless experience at the Sharjah Media Council Ramadan Football Championship. Our expertise in AV production, branding, and award setups ensured the event was executed to perfection, leaving a lasting impression on participants and spectators alike.",
    ],
    gallery: [
      {
        src: "/projects/sharjah-media-ramadan-football-tournament/01.webp",
        alt: "Alt: “Championship trophy displayed on a table before the award ceremony at Sharjah Media Ramadan Football Championship",
        width: 1000,
        height: 646,
      },
      {
        src: "/projects/sharjah-media-ramadan-football-tournament/02.webp",
        alt: "Large LED screen displaying live football action at Sharjah Media Ramadan Football Tournament",
        width: 1000,
        height: 562,
      },
      {
        src: "/projects/sharjah-media-ramadan-football-tournament/03.webp",
        alt: "Championship trophy displayed in front of a large LED screen at Sharjah Media Ramadan Football Championship",
        width: 1000,
        height: 1497,
      },
      {
        src: "/projects/sharjah-media-ramadan-football-tournament/04.webp",
        alt: "Professional stadium lighting setup illuminating the football field during Sharjah Media Ramadan Championship",
        width: 1000,
        height: 1442,
      },
      {
        src: "/projects/sharjah-media-ramadan-football-tournament/05.webp",
        alt: "Championship trophy for winners displayed at Sharjah Media Ramadan Football event in Sharjah Police Club Stadium",
        width: 1000,
        height: 1884,
      },
      {
        src: "/projects/sharjah-media-ramadan-football-tournament/06.webp",
        alt: "Football teams competing on the field during the Sharjah Media Ramadan Football Tournament",
        width: 1000,
        height: 520,
      },
    ],
  },
  {
    slug: "aqaar-developments-property-launch-event",
    title: "Aqaar Property Launch Event 2026",
    year: 2026,
    city: "Dubai",
    eventType: "Property Launch Event",
    summary:
      "Topaz Events managed the Aqaar Developments Property Launch Event 2026 for Dusit Thani Residences at Dusit Thani Hotel Dubai with full AV production & solutions",
    image: "/projects/aqaar-developments-property-launch-event.webp",
    imageAlt:
      "High-resolution LED screen on the main stage presenting Dusit Thani Residences during Aqaar Property Developments launch event.",
    width: 1400,
    height: 933,
    facts: [
      { label: "Client", value: "Aqaar Developments" },
      { label: "Category", value: "Government organisation" },
      { label: "Event type", value: "Property Launch Event" },
      { label: "Date", value: "February 14, 2026" },
      { label: "Location", value: "Dusit Thani Hotel, Dubai" },
    ],
    overview: [
      "Estimated Visitors: 200+",
      "Topaz Event Management proudly managed the Aqaar Property Developments Property Launch Event 2026 for Aqaar Property Developments – a government-owned real estate developer in the Emirate of Ajman – at the prestigious Dusit Thani Hotel Dubai on February 14, 2026. The event marked the official unveiling of Dusit Thani Residences, introducing Ajman’s first branded beachfront residences on the iconic Ajman Corniche. Hosted by renowned media personality Kris Fade, the launch welcomed VIP investors, stakeholders, and real estate professionals.",
      "Topaz Events delivered full event management and AV production, including LED screens, immersive lighting, premium staging, circular displays, and luxury VIP seating to create an exclusive and memorable launch experience.",
    ],
    requirements: [
      "Organize a prestigious Aqaar Property Developments Property Launch Event 2026 for VIP investors and government stakeholders.",
      "Highlight the luxury and branded hospitality of Dusit Thani Residences.",
      "Create a high-impact presentation environment for unveiling the project.",
      "Provide professional AV production to showcase residential features effectively.",
      "Ensure a seamless luxury experience for distinguished guests and media.",
    ],
    solutionsLead: "To fulfill the vision of AQAAR Developments, we delivered:",
    solutions: [
      "Managed full event planning and execution for the Aqaar Developments Property Launch Event 2026.",
      "Installed large LED screens and circular display elements for immersive presentations of Dusit Thani Residences.",
      "Delivered professional sound systems and dynamic lighting design to enhance the venue and stage.",
      "Built a custom stage setup for keynote presentations and the official project unveiling.",
      "Arranged luxury VIP seating and high-end furniture to match the premium branding of Aqaar Property Developments.",
    ],
    conclusion: [
      "The Aqaar Developments Property Launch Event 2026 successfully positioned Dusit Thani Residences as a landmark branded beachfront development. With innovative AV solutions and flawless execution, Topaz Event Management delivered a memorable luxury launch experience for Aqaar Property Developments and its VIP guests.",
    ],
    gallery: [
      {
        src: "/projects/aqaar-developments-property-launch-event/01.webp",
        alt: "Luxury VIP seating and premium furniture setup for guests at Aqaar Developments Property Launch Event 2026 at Dusit Thani Hotel Dubai.",
        width: 1000,
        height: 667,
      },
      {
        src: "/projects/aqaar-developments-property-launch-event/02.webp",
        alt: "Grand stage with large LED screen and podium setup for Dusit Thani Residences launch event by Aqaar Property Developments.",
        width: 1000,
        height: 668,
      },
      {
        src: "/projects/aqaar-developments-property-launch-event/03.webp",
        alt: "Guests networking and interacting during Aqaar Developments Property Launch Event 2026 for Dusit Thani Residences in Dubai.",
        width: 1000,
        height: 667,
      },
      {
        src: "/projects/aqaar-developments-property-launch-event/04.webp",
        alt: "Interior view of the event hall during Aqaar Developments Property Launch Event 2026 at Dusit Thani Hotel Dubai.",
        width: 1000,
        height: 667,
      },
      {
        src: "/projects/aqaar-developments-property-launch-event/05.webp",
        alt: "Interactive photobooth experience for guests at Dusit Thani Residences launch event organized by Topaz Events.",
        width: 1000,
        height: 667,
      },
      {
        src: "/projects/aqaar-developments-property-launch-event/06.webp",
        alt: "Branded podium with Aqaar Property Developments logo on stage at Dusit Thani Residences Property Launch Event 2026.",
        width: 1000,
        height: 1499,
      },
    ],
  },
  {
    slug: "fikra-hub-exhibition-stand-for-snoc-2026",
    title: "Fikra Hub Exhibition Stand For SNOC 2026",
    year: 2026,
    city: "Sharjah",
    eventType: "Exhibition Stand",
    summary:
      "Topaz Events built the futuristic Fikra Hub exhibition stand for SNOC 2026 at Al Jawaher Sharjah, creating an engaging space for innovation and collaboration.",
    image: "/projects/fikra-hub-exhibition-stand-for-snoc-2026.webp",
    imageAlt:
      "Elegant and futuristic SNOC Fikra Hub stand design executed by Topaz Event Management Agency at Al Jawaher Reception and Convention Centre",
    width: 1400,
    height: 933,
    facts: [
      { label: "Client", value: "Sharjah National Oil Corporation (SNOC)" },
      { label: "Category", value: "Government organisation" },
      { label: "Event type", value: "Exhibition Stand" },
      { label: "Date", value: "February 2026" },
      { label: "Location", value: "Al Jawaher – Sharjah" },
    ],
    overview: [
      "Estimated Visitors: 400+",
      "At the Sharjah National Oil Corporation (SNOC) Town Hall event held at Al Jawaher Reception and Convention Centre in Sharjah, Topaz Event Management was appointed to design and build the Fikra Hub exhibition stand – a space dedicated to innovation, collaboration, and idea sharing.",
      "Our objective was to create a visually striking and futuristic stand that reflects SNOC’s forward-thinking culture while encouraging engagement among attendees. The design combined clean architectural lines, premium finishes, and strategically placed branding to create a strong visual identity.",
      "The layout was carefully planned to allow smooth visitor flow and comfortable discussions, making the stand both functional and inviting. From concept development to fabrication and installation, Topaz Events ensured every detail aligned with the innovation-driven theme of the Fikra Hub.",
    ],
    requirements: [
      "Design a distinctive Fikra Hub stand that reflects innovation and creativity.",
      "Create an engaging environment for discussions and idea sharing.",
      "Ensure strong and visible SNOC branding across the stand.",
      "Develop a modern and professional stand suitable for a high-profile Town Hall event.",
      "Provide seamless design, fabrication, and installation within the event timeline.",
    ],
    solutionsLead: "To fulfill the vision of SNOC, we delivered:",
    solutions: [
      "Designed a futuristic exhibition stand concept aligned with the Fikra Hub theme.",
      "Produced and installed a premium stand structure with modern architectural elements.",
      "Integrated strong SNOC brand visibility through creative branding placements.",
      "Developed a welcoming layout encouraging interaction and collaboration.",
      "Managed complete stand production, logistics, and on-site installation.",
    ],
    conclusion: [
      "The Fikra Hub stand for the SNOC Town Hall event successfully transformed a simple booth into an engaging innovation space. Through modern design, strong branding, and a welcoming layout, Topaz Events created a hub that encouraged conversations, collaboration, and idea sharing. The stand became a focal point during the event, attracting attention from high-profile attendees and stakeholders while effectively representing SNOC’s commitment to creativity, innovation, and future-driven thinking.",
    ],
    gallery: [
      {
        src: "/projects/fikra-hub-exhibition-stand-for-snoc-2026/01.webp",
        alt: "Interior space and visitor interaction area inside Fikra Hub stand designed by Topaz Events for SNOC Town Hall",
        width: 1000,
        height: 667,
      },
      {
        src: "/projects/fikra-hub-exhibition-stand-for-snoc-2026/02.webp",
        alt: "Front view of futuristic Fikra Hub stand built by Topaz Events for SNOC Town Hall at Al Jawaher Convention Centre",
        width: 1000,
        height: 667,
      },
      {
        src: "/projects/fikra-hub-exhibition-stand-for-snoc-2026/03.webp",
        alt: "3 Fikra Hub Exhibition Stand For Snoc",
        width: 1000,
        height: 667,
      },
      {
        src: "/projects/fikra-hub-exhibition-stand-for-snoc-2026/04.webp",
        alt: "Professional exhibition stand setup for SNOC Fikra Hub by Topaz Event Management Agency in Sharjah UAE",
        width: 1000,
        height: 667,
      },
      {
        src: "/projects/fikra-hub-exhibition-stand-for-snoc-2026/05.webp",
        alt: "High-profile guests and officials gathering at the SNOC Fikra Hub exhibition stand designed by Topaz Events during the Town Hall event at Al Jawaher Sharjah",
        width: 1000,
        height: 667,
      },
      {
        src: "/projects/fikra-hub-exhibition-stand-for-snoc-2026/06.webp",
        alt: "Wide angle view of Fikra Hub exhibition stand for SNOC created by Topaz Event Management at Al Jawaher Sharjah",
        width: 1000,
        height: 667,
      },
    ],
  },
  {
    slug: "yuka-car-drifting-motorsport-2026",
    title: "YUKA Car Drifting Motorsport 2026",
    year: 2026,
    city: "Abu Dhabi",
    eventType: "Car Sports Event",
    summary:
      "Topaz Events delivered YUKA Car Drifting in Al Ain, Abu Dhabi with full AV production - LED screens, lighting, sound, and an adrenaline-charged experience.",
    image: "/projects/yuka-car-drifting-motorsport-2026.webp",
    imageAlt:
      "Full AV production by Topaz Events at YUKA drifting motorsport event in Abu Dhabi",
    width: 1400,
    height: 787,
    facts: [
      { label: "Client", value: "Yuka ADV Pro Racing" },
      { label: "Category", value: "Private organisation" },
      { label: "Event type", value: "Car Sports Event" },
      { label: "Date", value: "February 2026" },
      { label: "Location", value: "Al Ain, Abu Dhabi" },
    ],
    overview: [
      "Number of Guests: 300+",
      "For the second consecutive year, Topaz Events proudly executed YUKA Car Drifting Motorsport event 2026 in Al Ain, Abu Dhabi, delivering an adrenaline-charged motorsport spectacle. Roaring engines, electrifying lights, and heart-pumping music created an immersive environment where car enthusiasts were on the edge of their seats from start to finish.",
      "Topaz Events managed the full AV production, including massive LED screens, dynamic lighting, and powerful sound systems, ensuring the energy of the drifting performances was felt throughout the venue. Every detail from stage setup to real-time coordination was meticulously executed, making the event a true celebration of car culture, speed, and excitement. The result was a high-impact experience that left a lasting impression on both spectators and participants.",
    ],
    requirements: [
      "Deliver a high-energy drifting and gymkhana experience.",
      "Full-scale audiovisual production: LED screens, lighting, and sound.",
      "Maintain seamless event coordination and real-time execution.",
      "Create a visually striking, immersive environment for spectators.",
      "Ensure safety and smooth crowd management throughout the event.",
    ],
    solutionsLead:
      "To fulfill the vision of Yuka ADV Pro Racing, we delivered:",
    solutions: [
      "Installed massive LED screens to broadcast live action and highlights.",
      "Designed dynamic lighting to amplify drifting stunts and stage moments.",
      "Deployed high-quality sound systems to create an adrenaline-fueled audio experience.",
      "Coordinated real-time production workflow to guarantee flawless execution.",
      "Managed on-site logistics, safety protocols, and audience engagement for a smooth event.",
    ],
    conclusion: [
      "Topaz Events transformed YUKA Drifting into a full-throttle, high-energy motorsport experience that thrilled attendees and exceeded client expectations. Through precise planning, seamless production, and immersive audiovisual design, the event captured the excitement of drifting and car culture. This project underscores Topaz Events’ expertise in delivering memorable, high-impact events across the UAE with professionalism, creativity, and technical excellence.",
    ],
    gallery: [
      {
        src: "/projects/yuka-car-drifting-motorsport-2026/01.webp",
        alt: "Topaz Events sound, lighting, and LED setup for YUKA Car Drifting Abu Dhabi",
        width: 1000,
        height: 562,
      },
      {
        src: "/projects/yuka-car-drifting-motorsport-2026/02.webp",
        alt: "YUKA drifting motorsport event in Al Ain with AV production by Topaz Events",
        width: 1000,
        height: 562,
      },
      {
        src: "/projects/yuka-car-drifting-motorsport-2026/03.webp",
        alt: "Topaz Events delivering LED screens and lighting for YUKA Car Drifting in Al Ain",
        width: 1000,
        height: 562,
      },
      {
        src: "/projects/yuka-car-drifting-motorsport-2026/04.webp",
        alt: "YUKA Car Drifting event by Topaz Events with LED screens, lighting, and sound in Al Ain",
        width: 1000,
        height: 562,
      },
      {
        src: "/projects/yuka-car-drifting-motorsport-2026/05.webp",
        alt: "Topaz Events managing AV production for YUKA Car Drifting Motorsport event in Al Ain, Abu Dhabi",
        width: 1000,
        height: 562,
      },
      {
        src: "/projects/yuka-car-drifting-motorsport-2026/06.webp",
        alt: "Topaz Events delivering immersive AV production for YUKA Car Drifting in Al Ain",
        width: 843,
        height: 1500,
      },
    ],
  },
  {
    slug: "shukran-award-ceremony-2026",
    title: "Shukran Award Ceremony 2026",
    year: 2026,
    city: "Sharjah",
    eventType: "Award Ceremony Event",
    summary:
      "Topaz Event Management delivered the Shukran Award Ceremony 2026 for Sharjah Broadcasting Authority with full event and AV production with immersive technology.",
    image: "/projects/shukran-award-ceremony-2026.webp",
    imageAlt:
      "Shukran Award Ceremony branding display with elegant event identity and government-standard visual presentation at Al Jawaher Sharjah",
    width: 1400,
    height: 787,
    facts: [
      { label: "Client", value: "Sharjah Broadcasting Authority" },
      { label: "Category", value: "Government organisation" },
      { label: "Event type", value: "Award Ceremony Event" },
      { label: "Date", value: "February 2026" },
      { label: "Location", value: "Al Jawahar, Sharjah, UAE" },
    ],
    overview: [
      "Number of Guests: 200+",
      "Topaz Event Management proudly executed the 10th edition of the “Shukran” Award Ceremony 2026 for Sharjah Broadcasting Authority at Al Jawaher Reception and Convention Centre. Marking our third consecutive year managing this prestigious government event, we delivered a fully integrated production from concept to completion. The ceremony celebrated creativity, recognized influential voices, and honored excellence within the broadcasting community.",
      "His Highness Sheikh Sultan bin Ahmed Al Qasimi, Deputy Ruler of Sharjah and Chairman of Sharjah Media Council, honored outstanding employees for their contributions to performance and innovation. With complete stage design, advanced AV production, and immersive interactive technologies, we transformed the venue into a dynamic and memorable awards experience that reflected prestige, innovation, and gratitude.",
    ],
    requirements: [
      "Deliver a prestigious and seamless award ceremony reflecting government standards.",
      "Manage complete event planning and execution from A to Z.",
      "Design and build a high-impact stage setup with premium aesthetics.",
      "Provide advanced AV production using the latest event technologies and solutions.",
      "Create immersive and interactive audience engagement experiences.",
    ],
    solutionsLead:
      "To fulfill the vision of Sharjah Broadcasting Authority, we delivered:",
    solutions: [
      "Full event management including planning, coordination, and on-site execution.",
      "Custom stage design and build aligned with the ceremony’s brand identity.",
      "Complete AV production with cutting-edge sound, lighting, LED screens, and show control systems.",
      "Installed cube LED screens at the main entrance, delivering crystal-clear visuals in every direction.",
      "Interactive Sensor Screens for live performances, enabling gesture-based visual effects for dynamic dance shows.",
    ],
    conclusion: [
      "Executing “Shukran” for the third consecutive year reflects the trust and strong partnership between Topaz Events and Sharjah Broadcasting Authority. Through precision planning, immersive technology, and flawless production, we once again delivered a distinguished award ceremony that celebrated excellence and elevated the event experience to new heights.",
    ],
    gallery: [
      {
        src: "/projects/shukran-award-ceremony-2026/01.webp",
        alt: "Elegant entrance arch design welcoming guests at Shukran 2026 event",
        width: 1000,
        height: 562,
      },
      {
        src: "/projects/shukran-award-ceremony-2026/02.webp",
        alt: "Premium Shukran Award Ceremony branding elements integrated across stage, LED screens, and venue décor at Al Jawaher Sharjah",
        width: 1000,
        height: 562,
      },
      {
        src: "/projects/shukran-award-ceremony-2026/03.webp",
        alt: "Innovative interactive display solutions enhancing audience engagement through real-time visual effects and sensor-based activation",
        width: 1000,
        height: 562,
      },
      {
        src: "/projects/shukran-award-ceremony-2026/04.webp",
        alt: "Shukran Award Ceremony branding showcase installation inside Al Jawaher Reception and Convention Centre, Sharjah",
        width: 1000,
        height: 562,
      },
      {
        src: "/projects/shukran-award-ceremony-2026/05.webp",
        alt: "Shukran Award Ceremony 2026 overall event setup at Al Jawaher Sharjah by Topaz Events",
        width: 1000,
        height: 562,
      },
      {
        src: "/projects/shukran-award-ceremony-2026/06.webp",
        alt: "Large LED screen display during Shukran Award Ceremony for Sharjah Broadcasting Authority",
        width: 1000,
        height: 562,
      },
    ],
  },
  {
    slug: "aisha-oasis-for-innovation-2026",
    title: "Aisha Oasis For Innovation 2026",
    year: 2026,
    city: "Sharjah",
    eventType: "Festival Event",
    summary:
      "Topaz Events delivered Aisha Oasis for Innovation 2026 for the UAE Ministry of Economy, promoting innovation, IP awareness, and youth engagement.",
    image: "/projects/aisha-oasis-for-innovation-2026.webp",
    imageAlt:
      "An outdoor evening stage setup for the Aisha Oasis for Innovation 2026 festival by the UAE Ministry of Economy.",
    width: 1400,
    height: 787,
    facts: [
      { label: "Client", value: "Ministry Of Economy" },
      { label: "Category", value: "Government organisation" },
      { label: "Event type", value: "Festival Event" },
      { label: "Date", value: "February 2026" },
      { label: "Location", value: "Sharjah, UAE" },
    ],
    overview: [
      "Number of Guests: 300+",
      "Aisha Oasis for Innovation 2026 was a large-scale outdoor innovation festival delivered end-to-end by Topaz Events Management for the Ministry of Economy. The event was conceived as a high-impact platform to promote innovation, intellectual property awareness, and youth engagement within an immersive, future-driven environment.",
      "From concept development to final execution, Topaz Events managed every aspect of the project, including custom outdoor stage design and complete AV production. In collaboration with Sharjah Police, the Emirates Intellectual Property Association, and the Trademark Owners Council, the festival successfully transformed ideas into live experiences setting a benchmark for government-led innovation events in the UAE.",
    ],
    requirements: [
      "Deliver an end-to-end managed innovation festival.",
      "Design a high-impact outdoor event environment.",
      "Provide complete professional AV production and technical support.",
      "Ensure seamless coordination with multiple government stakeholders.",
      "Create a visually powerful, engaging, and future-focused experience.",
    ],
    solutionsLead:
      "To fulfill the vision of Ministry Of Economy, we delivered:",
    solutions: [
      "Full event management delivered from concept planning to flawless execution.",
      "Custom outdoor stage designed and built to reflect the innovation theme.",
      "Complete AV production solutions including LED screens, sound systems, and dynamic lighting.",
      "Technical production, on-ground operations, and logistics managed end-to-end.",
      "Interactive exhibition booths and thematic installations crafted for engaging attendee experiences.",
      "Iconic visual elements, including the illuminated star-shaped archway and robot mascot, enhancing the event atmosphere.",
      "Seamless A-to-Z festival experience delivered with precision, professionalism, and innovative flair for the Ministry of Economy.",
    ],
    conclusion: [
      "Aisha Oasis for Innovation 2026 demonstrated how strategic planning, creative design, and advanced AV production can elevate a government event into a powerful innovation platform. Through end-to-end execution and technical excellence, Topaz Events delivered an immersive experience that inspired engagement, amplified impact, and reflected the UAE’s forward-thinking vision.",
    ],
    gallery: [
      {
        src: "/projects/aisha-oasis-for-innovation-2026/01.webp",
        alt: "A vibrant outdoor setup for the Aisha Oasis for Innovation 2026 festival in the UAE desert, featuring colorful exhibition booths, a large digital stage, and a friendly",
        width: 1000,
        height: 562,
      },
      {
        src: "/projects/aisha-oasis-for-innovation-2026/02.webp",
        alt: "A vibrant outdoor event layout for the Aisha Oasis for Innovation 2026 by the UAE Ministry of Economy, featuring a desert-themed venue with colorful innovation booths, a",
        width: 1000,
        height: 562,
      },
      {
        src: "/projects/aisha-oasis-for-innovation-2026/03.webp",
        alt: "A comprehensive visual gallery of the Aisha Oasis for Innovation 2026 festival in the UAE desert, showcasing colorful interactive innovation booths, heritage displays",
        width: 1000,
        height: 562,
      },
      {
        src: "/projects/aisha-oasis-for-innovation-2026/04.webp",
        alt: "An evening aerial view of the Aisha Oasis for Innovation 2026 festival layout in the UAE desert, showcasing colorful interactive booths, a presentation stage, and",
        width: 1000,
        height: 562,
      },
      {
        src: "/projects/aisha-oasis-for-innovation-2026/05.webp",
        alt: "Outdoor exhibition booths in red, green, and brown at the Aisha Oasis for Innovation 2026 festival in the UAE desert.",
        width: 1000,
        height: 562,
      },
      {
        src: "/projects/aisha-oasis-for-innovation-2026/06.webp",
        alt: "Three house-shaped exhibition booths in red, green, and brown at the Aisha Oasis for Innovation 2026 festival.",
        width: 1000,
        height: 562,
      },
    ],
  },
  {
    slug: "arabic-language-conference-2026",
    title: "Arabic Language Conference UOS 2026",
    year: 2026,
    city: "Sharjah",
    eventType: "Conference",
    summary:
      "Topaz Events delivered complete indoor AV and stage production for the AI & Arabic Language Conference 2026 at University of Sharjah (UOS).",
    image: "/projects/arabic-language-conference-2026.webp",
    imageAlt:
      "Indoor stage setup at University of Sharjah for AI and Arabic Language Conference 2026",
    width: 1400,
    height: 933,
    facts: [
      { label: "Client", value: "University of Sharjah (UOS)" },
      { label: "Category", value: "Government organisation" },
      { label: "Event type", value: "Conference" },
      { label: "Date", value: "February 2026" },
      { label: "Location", value: "Sharjah, UAE" },
    ],
    overview: [
      "Number of Guests: 300+",
      "Topaz Events successfully managed the indoor stage setup and end-to-end AV production for the Second Sharjah International Conference on the Arabic Language, held on February 4, 2026, at Al Razi Hall, University of Sharjah. The conference, under the patronage of Sheikh Dr Sultan bin Mohammed Al Qasimi, explored the evolving relationship between artificial intelligence and the Arabic language, focusing on innovation, education, research, and creative applications of AI in Arabic language learning and scholarship.",
      "Topaz Events delivered complete end-to-end AV production for this high-profile international university Arabic Language conference 2026, covering stage design, lighting, sound, LED screens, branding, and live technical management ensuring a seamless, professional, and immersive experience from start to finish.",
    ],
    requirements: [
      "Indoor stage setup suitable for high-profile international academic conference.",
      "Clear, immersive sound system for speeches and panel discussions in a large hall.",
      "High-resolution LED screens for live presentations and visuals.",
      "Professional indoor lighting for stage, audience, and media coverage.",
      "Branded backdrops, media walls, and conference identity elements.",
    ],
    solutionsLead:
      "To fulfill the vision of University of Sharjah (Conference on the Arabic Language 2026), we delivered:",
    solutions: [
      "Full indoor stage design, fabrication, and installation.",
      "Advanced auditorium-grade sound systems with full coverage.",
      "High-resolution LED screens with live content control.",
      "Precision indoor lighting for speakers, stage, and audience areas.",
      "Complete AV operation, branding execution, and live event management.",
    ],
    conclusion: [
      "This project showcases Topaz Events’ expertise in delivering flawless, end-to-end indoor AV production for large-scale academic and government events, solidifying our reputation as a trusted partner for high-profile international conferences in the UAE",
    ],
    gallery: [
      {
        src: "/projects/arabic-language-conference-2026/01.webp",
        alt: "High-resolution LED screens integrated into the stage setup at the AI & Arabic Language Conference, University of Sharjah",
        width: 1000,
        height: 667,
      },
      {
        src: "/projects/arabic-language-conference-2026/02.webp",
        alt: "opaz Events team managing advanced LED screens and AV production during conference",
        width: 1000,
        height: 667,
      },
      {
        src: "/projects/arabic-language-conference-2026/03.webp",
        alt: "Conference branding displayed on stage backdrop, media walls, and signage at University of Sharjah",
        width: 666,
        height: 1000,
      },
      {
        src: "/projects/arabic-language-conference-2026/04.webp",
        alt: "Archway entrance decorated for AI & Arabic Language Conference at University of Sharjah",
        width: 666,
        height: 1000,
      },
      {
        src: "/projects/arabic-language-conference-2026/05.webp",
        alt: "Conference standee showcasing event branding at the University of Sharjah by Topaz Events",
        width: 667,
        height: 1000,
      },
      {
        src: "/projects/arabic-language-conference-2026/06.webp",
        alt: "High-resolution LED screens displaying presentations and live visuals at the Arabic Language Conference, University of Sharjah",
        width: 1000,
        height: 667,
      },
    ],
  },
  {
    slug: "aus-alumni-reunion",
    title: "AUS Alumni Reunion Event 2026",
    year: 2026,
    city: "Sharjah",
    eventType: "Alumni Reunion / Gala Dinner",
    summary:
      "Topaz Events organized the AUS Alumni Reunion Event 2026 with full event setup, stage, AV & guest management for a prestigious alumni gathering in Sharjah, UAE",
    image: "/projects/aus-alumni-reunion.webp",
    imageAlt:
      "Premium stage production with lighting and LED visuals at American University of Sharjah alumni event.",
    width: 900,
    height: 506,
    facts: [
      { label: "Client", value: "American University of Sharjah" },
      { label: "Category", value: "Private (Owned by Sharjah Gov.)" },
      { label: "Event type", value: "Alumni Reunion / Gala Dinner" },
      { label: "Date", value: "January 2026" },
      { label: "Location", value: "Sharjah, UAE" },
    ],
    overview: [
      "Number of Guests: 900+",
      "The AUS Alumni Reunion Event 2026 was a prestigious institutional reunion event held in the presence of Her Highness Sheikha Bodour bint Sultan bin Mohammed Al Qasimi, reflecting the university’s values of leadership, community, and shared purpose. The gathering was further elevated by the attendance of renowned artist Diana Haddad and Dr. Khaled Ghattass, making it a truly distinguished occasion.",
      "Topaz Events was entrusted with the complete planning and execution of the event, delivering a seamless experience through meticulous coordination, customized production, and professional on-ground management. Every element was thoughtfully designed to reflect the significance, stature, and lasting impact of the occasion.",
    ],
    requirements: [
      "A high-profile alumni reunion event aligned with AUS’s institutional prestige.",
      "End-to-end event planning and execution under a strict protocol.",
      "Seamless coordination for distinguished guests and VIP attendance.",
      "Customized stage, AV solutions, lighting, and sound to match the event’s importance.",
      "A smooth, well-managed live experience with attention to every detail.",
    ],
    solutionsLead:
      "To fulfill the vision of American University of Sharjah (AUS Alumni Reunoin 2026), we delivered:",
    solutions: [
      "Delivered full event management, from planning to on-ground execution.",
      "Designed and executed a custom stage, lighting, sound, and visual setup.",
      "Managed VIP protocol, guest flow, and coordination with precision.",
      "Ensured flawless live operations through an experienced on-site team.",
      "Maintained consistent quality control to reflect the event’s prestige.",
    ],
    conclusion: [
      "This project highlights Topaz Events’ expertise in delivering high-profile alumni and institutional events, where precision, purpose, and professionalism come together to create lasting impact.",
    ],
    gallery: [
      {
        src: "/projects/aus-alumni-reunion/01.webp",
        alt: "Custom stage and LED screen setup at AUS Alumni Reunion event organized by Topaz Events.",
        width: 1000,
        height: 562,
      },
      {
        src: "/projects/aus-alumni-reunion/02.webp",
        alt: "High-resolution LED screens and professional stage design for reunion AUS Alumni Event 2026.",
        width: 1000,
        height: 562,
      },
      {
        src: "/projects/aus-alumni-reunion/03.webp",
        alt: "AUS Alumni Reunion 2026 Event hosted in the presence of Her Highness Sheikha Bodour bint Sultan bin Mohammed Al Qasimi by Topaz Events.",
        width: 1000,
        height: 667,
      },
      {
        src: "/projects/aus-alumni-reunion/04.webp",
        alt: "Topaz Events team managing planning, coordination, and on-ground execution at the AUS Alumni Reunion event 2026.",
        width: 1000,
        height: 667,
      },
      {
        src: "/projects/aus-alumni-reunion/05.webp",
        alt: "Elegant event setup and venue transformation for the AUS Alumni Reunion Event 2026 at American University of Sharjah",
        width: 1000,
        height: 667,
      },
    ],
    video: {
      youtubeId: "WFwyl90xO-I",
      title:
        "AUS Alumni Event 2026 | Full Event Setup with Distinguished Guests | Topaz Events",
      description:
        "The American University of Sharjah alumni reunion, held in the presence of Her Highness Sheikha Bodour bint Sultan bin Mohammed Al Qasimi.",
      uploadDate: "2026-02-06",
      duration: "PT1M38S",
    },
  },
  {
    slug: "sheikh-sultan-awards",
    title: "Sheikh Sultan Award Ceremony",
    year: 2025,
    city: "UAE",
    summary:
      "Full event management and stage build for the Sheikh Sultan Award for Celebrating the Spirit of Youth.",
    image: "/projects/sheikh-sultan-awards.webp",
    imageAlt:
      "Full event production overview by Topaz Events for the Sheikh Sultan Award, showcasing the complete outdoor stage layout.",
    width: 900,
    height: 600,
    facts: [],
    overview: [
      "Full event management and stage build for the Sheikh Sultan Award for Celebrating the Spirit of Youth.",
    ],
    gallery: [],
    video: {
      youtubeId: "fAX2cs6isPU",
      title:
        "Sheikh Sultan Awards | Celebrating The Spirit of Youth | Topaz Events",
      description:
        "Full event management and stage build for the Sheikh Sultan Award for Celebrating the Spirit of Youth.",
      uploadDate: "2026-01-26",
      duration: "PT56S",
    },
  },
  {
    slug: "al-rabwa-real-estate-property-launch",
    title: "Al Rabwa Real Estate Property Launch",
    year: 2025,
    city: "Sharjah",
    eventType: "Property Launch",
    summary:
      "Topaz Event Management organized Al Rabwa Real Estate Property Launch Event with Full Event Production and Management in Sharjah UAE.",
    image: "/projects/al-rabwa-real-estate-property-launch.webp",
    imageAlt:
      "Al Rabwa Real Estate Property Launch Event organized by Topaz Events",
    width: 1400,
    height: 787,
    facts: [
      { label: "Client", value: "Al Rabwa Real Estate" },
      { label: "Category", value: "Private organisation" },
      { label: "Event type", value: "Property Launch" },
      { label: "Date", value: "December 2025" },
      { label: "Location", value: "Al Jawaher – Sharjah – UAE" },
    ],
    overview: [
      "Number of Guests: 200+",
      "To mark the official entry of Al Rabwa Real Estate into the UAE market, Topaz Events was appointed by our partner, Create Nation, to deliver complete event management and production services. As the newly established sister company of Ellington Properties, Al Rabwa required a debut that highlighted their commitment to high-quality industrial communities, specifically unveiling their flagship project, “Al Qasimia Future 6” in Sharjah.",
      "We worked closely with Create Nation to translate the brand’s vision of resilient, future-ready infrastructure into a polished live event. The objective was to create a professional, high-stakes environment that engaged investors and demonstrated the strategic value of this master-planned industrial development.",
    ],
    requirements: [
      "Al Rabwa Real Estate required a launch event that would:",
      "Establish immediate brand authority by visually connecting the new entity to the prestige of Ellington Properties.",
      "Showcase the “Al Qasimia Future 6” master plan with high-impact visuals highlighting infrastructure and connectivity",
      "Create a professional atmosphere tailored to build confidence among serious investors and business operators.",
      "Ensure seamless protocol and hospitality management for high-profile attendees and industry leaders.",
      "Deliver a flawless technical execution for the official reveal moments and keynote speeches.",
    ],
    solutionsLead:
      "To fulfill the vision of Al Rabwa, we provided overall event management and production services, including:",
    solutions: [
      "Immersive Entrance Experience: Construction of a dynamic LED screen tunnel, a branded media wall, and a welcoming reception area to set the tone upon arrival.",
      "Advanced Visual Technology: Installation of the latest technology LED screens throughout the venue, including an “Immersive Room Experience” to engage potential investors.",
      "Grand Stage Production: Fabrication of a main indoor stage featuring massive LED screens for high-impact presentations, supported by top-quality sound and lighting technology.",
      "VIP Hospitality: Creation of a dedicated VIP Majlis area designed for private high-level meetings and networking.",
      "Interactive Entertainment: Management of engaging performances, including an interactive dance show and a unique live sand drawing show projected in real-time from a tangible table to the main screen.",
      "Premium Event Setup: Provision of VIP luxury furniture, including high-end sofas, armchairs, and coffee tables, ensuring a comfortable and sophisticated setting for distinguished guests.",
    ],
    gallery: [
      {
        src: "/projects/al-rabwa-real-estate-property-launch/01.webp",
        alt: "Elegant reception registration desk and welcome area managed by Topaz Events for seamless guest arrival.",
        width: 1000,
        height: 667,
      },
      {
        src: "/projects/al-rabwa-real-estate-property-launch/02.webp",
        alt: "Dynamic LED screen tunnel entrance created by Topaz Events for Al Rabwa Real Estate launch.",
        width: 1000,
        height: 667,
      },
      {
        src: "/projects/al-rabwa-real-estate-property-launch/03.webp",
        alt: "Luxury event seating setup featuring premium white sofas and coffee tables for VIP guests.",
        width: 1000,
        height: 667,
      },
      {
        src: "/projects/al-rabwa-real-estate-property-launch/04.webp",
        alt: "Main indoor stage design featuring massive high-definition LED backdrops and custom lighting.",
        width: 1000,
        height: 667,
      },
      {
        src: "/projects/al-rabwa-real-estate-property-launch/05.webp",
        alt: "Exclusive VIP Majlis area designed by Topaz Events for private business meetings.",
        width: 1000,
        height: 667,
      },
      {
        src: "/projects/al-rabwa-real-estate-property-launch/06.webp",
        alt: "Branded media wall and elegant reception desk setup for corporate VIP guest arrival.",
        width: 1000,
        height: 667,
      },
    ],
  },
  {
    slug: "lahab-team-event",
    title: "LAHAB Annual Team Event",
    year: 2025,
    city: "Abu Dhabi",
    eventType: "Team Experience",
    summary:
      "Topaz Events hosted the LAHAB team event (annual team-building) at Conrad Etihad Abu Dhabi — fun, challenges, and lasting team memories. Contact for more!",
    image: "/projects/lahab-team-event.webp",
    imageAlt:
      "LAHAB Team Event entrance at Conrad Etihad Abu Dhabi, welcoming guests with Topaz Events’ signature setup.",
    width: 1200,
    height: 799,
    facts: [
      { label: "Category", value: "Government organisation" },
      { label: "Event type", value: "Team Experience" },
      { label: "Location", value: "Conrad Etihad – Abu Dhabi" },
    ],
    overview: [
      "Topaz Events delivered an exceptional team-building experience for the LAHAB team at Conrad Etihad Abu Dhabi, blending fun, challenges, and interactive activities that sparked collaboration, laughter, and meaningful connections. Every detail was designed to energize the team and create lasting memories.",
    ],
    gallery: [
      {
        src: "/projects/lahab-team-event/01.webp",
        alt: "LAHAB corporate branding displayed prominently across the event venue by Topaz Events.",
        width: 1000,
        height: 667,
      },
      {
        src: "/projects/lahab-team-event/02.webp",
        alt: "High-impact LED screens and visual production showcasing interactive content for LAHAB team activities.",
        width: 1000,
        height: 667,
      },
      {
        src: "/projects/lahab-team-event/03.webp",
        alt: "Event stage setup with dynamic lighting and presentation area by Topaz Events at LAHAB corporate event.",
        width: 1000,
        height: 667,
      },
      {
        src: "/projects/lahab-team-event/04.webp",
        alt: "Elegant seating and furniture arrangement creating a comfortable, collaborative environment for the LAHAB team.",
        width: 1000,
        height: 666,
      },
      {
        src: "/projects/lahab-team-event/05.webp",
        alt: "LAHAB employees engaging in fun team-building challenges, laughter, and collaboration at the event.",
        width: 1000,
        height: 667,
      },
    ],
  },
  {
    slug: "f1h2o-gala-dinner-sharjah-tourism",
    title: "F1H2O Gala Dinner 2025",
    year: 2025,
    city: "Sharjah",
    eventType: "Gala Dinner",
    summary:
      "Topaz Events delivered an exclusive F1H2O Gala Dinner 2025 for Sharjah Tourism Development, blending motorsport prestige with elegant event production.",
    image: "/projects/f1h2o-gala-dinner-sharjah-tourism.webp",
    imageAlt: "F1H2O Gala Dinner 2025 event setup by Topaz Events in Sharjah",
    width: 1400,
    height: 787,
    facts: [
      { label: "Category", value: "Government organisation" },
      { label: "Event type", value: "Gala Dinner" },
      { label: "Location", value: "Sharjah, UAE" },
    ],
    overview: [
      "Topaz Events proudly delivered the F1H2O Gala Dinner 2025 in Sharjah, an exclusive evening celebrating world-class motorsport in an atmosphere of elegance and refinement. Sponsored by Sharjah Tourism, the event showcased refined décor, seamless event flow, and premium hospitality, reflecting both the prestige of F1H2O and Sharjah’s status as a global destination for international sporting events.",
    ],
    gallery: [
      {
        src: "/projects/f1h2o-gala-dinner-sharjah-tourism/01.webp",
        alt: "Seamless event management by Topaz Events for F1H2O Gala",
        width: 1000,
        height: 562,
      },
      {
        src: "/projects/f1h2o-gala-dinner-sharjah-tourism/02.webp",
        alt: "Corporate gala dinner production by Topaz Events in UAE",
        width: 1000,
        height: 562,
      },
      {
        src: "/projects/f1h2o-gala-dinner-sharjah-tourism/03.webp",
        alt: "Luxury table setup at F1H2O Gala Dinner Sharjah",
        width: 1000,
        height: 562,
      },
      {
        src: "/projects/f1h2o-gala-dinner-sharjah-tourism/04.webp",
        alt: "High-profile guests attending F1H2O Gala Dinner 2025",
        width: 1000,
        height: 562,
      },
      {
        src: "/projects/f1h2o-gala-dinner-sharjah-tourism/05.webp",
        alt: "F1H2O Gala Dinner sponsored by Sharjah Tourism",
        width: 1000,
        height: 562,
      },
      {
        src: "/projects/f1h2o-gala-dinner-sharjah-tourism/06.webp",
        alt: "F1H2O Gala Dinner 2025 sponsored by Sharjah Tourism",
        width: 1000,
        height: 562,
      },
    ],
  },
  {
    slug: "classic-car-event-2025",
    title: "TAHKEEM Gala Dinner 2025",
    year: 2025,
    city: "Sharjah",
    eventType: "Gala Dinner Event",
    summary:
      "Topaz Events delivers end-to-end production at Sharjah Classic Cars Museum. See our bespoke stage design, LED screens, and premium AV setup in Sharjah, UAE.",
    image: "/projects/classic-car-event-2025.webp",
    imageAlt:
      "A custom-built event stage featuring integrated LED screens and sleek branding for a classic car exhibition.",
    width: 1200,
    height: 674,
    facts: [
      { label: "Category", value: "Government organisation" },
      { label: "Event type", value: "Gala Dinner Event" },
      { label: "Location", value: "Sharjah, UAE" },
    ],
    overview: [
      "Topaz Events is proud to showcase our latest production at the iconic Sharjah Classic Cars Museum for Tahkeem gala dinner. We transformed this heritage space into a state-of-the-art experience, delivering a complete end-to-end solution with surgical precision. Our team managed every detail from the bespoke stage setup and immersive LED screens to crystal-clear sound & dynamic lighting. At Topaz Events, we build experiences that speak, connect, and inspire.",
    ],
    gallery: [
      {
        src: "/projects/classic-car-event-2025/01.webp",
        alt: "Grand entrance arch at Sharjah Classic Cars Museum featuring bespoke event branding and architectural lighting by Topaz Events.",
        width: 1000,
        height: 562,
      },
      {
        src: "/projects/classic-car-event-2025/02.webp",
        alt: "The Sharjah Classic Cars Museum venue transformed by Topaz Events with professional stage lighting and premium event seating.",
        width: 1000,
        height: 562,
      },
      {
        src: "/projects/classic-car-event-2025/03.webp",
        alt: "High-resolution LED stage backdrop and immersive screen setup by Topaz Events, displaying crisp event visuals at the Sharjah Classic Cars Museum.",
        width: 1000,
        height: 562,
      },
      {
        src: "/projects/classic-car-event-2025/04.webp",
        alt: "High-definition immersive LED screens displaying classic car visuals during a corporate event at the Sharjah Museum.",
        width: 1000,
        height: 562,
      },
      {
        src: "/projects/classic-car-event-2025/05.webp",
        alt: "Custom event branding and directional signage integrated into the classic car museum's historic architecture.",
        width: 1000,
        height: 562,
      },
      {
        src: "/projects/classic-car-event-2025/06.webp",
        alt: "Senior guests and VIP attendees admiring vintage automobiles during a guided tour at the Sharjah Classic Cars Museum event production.",
        width: 1000,
        height: 562,
      },
    ],
  },
  {
    slug: "shams-media-exhibition-stand",
    title: "Shams Media Exhibition Stand 2025",
    year: 2025,
    city: "Sharjah",
    eventType: "Exhibition Stand",
    summary:
      "Explore the Shams Media exhibition stand designed by Topaz Events for the Sharjah International Book Fair. Creative, innovative stand design at Sharjah Expo.",
    image: "/projects/shams-media-exhibition-stand.webp",
    imageAlt:
      "ith Sharjah Expo Centre included: Shams Media exhibition stand at Sharjah Expo Centre",
    width: 1400,
    height: 788,
    facts: [
      { label: "Category", value: "Government organisation" },
      { label: "Event type", value: "Exhibition Stand" },
      { label: "Location", value: "Sharjah, UAE" },
    ],
    overview: [
      "Topaz Events delivered a bespoke exhibition stand for Shams Media at the Sharjah International Book Fair, creating an immersive space where media, creativity, and innovation seamlessly converged. From concept development to on-site execution, the stand was thoughtfully designed to reflect Shams Media’s vision of empowering the next generation of storytellers and content creators, while reinforcing its leadership within the UAE’s creative and media landscape.",
    ],
    gallery: [
      {
        src: "/projects/shams-media-exhibition-stand/01.webp",
        alt: "Custom exhibition stand design by Topaz Events at Sharjah Expo Centre",
        width: 1000,
        height: 562,
      },
      {
        src: "/projects/shams-media-exhibition-stand/02.webp",
        alt: "Creative media-themed exhibition booth at Sharjah Expo Centre",
        width: 1000,
        height: 562,
      },
      {
        src: "/projects/shams-media-exhibition-stand/03.webp",
        alt: "Innovative stand design for book fair at Sharjah Expo Centre",
        width: 1000,
        height: 1778,
      },
      {
        src: "/projects/shams-media-exhibition-stand/04.webp",
        alt: "Shams Media booth showcasing content and creativity in Sharjah",
        width: 1000,
        height: 1778,
      },
      {
        src: "/projects/shams-media-exhibition-stand/05.webp",
        alt: "Exhibition stand execution by Topaz Events UAE at Sharjah Expo Centre",
        width: 1000,
        height: 1778,
      },
      {
        src: "/projects/shams-media-exhibition-stand/06.webp",
        alt: "Modern exhibition stand for media brand at Sharjah Expo Centre",
        width: 1000,
        height: 562,
      },
    ],
  },
  {
    slug: "54th-uae-national-day-event",
    title: "54th UAE National Day Event",
    year: 2025,
    city: "Sharjah",
    eventType: "National Day Event",
    summary:
      "Topaz Events proudly organized the 54th UAE National Day celebration for Sharjah Asset Management, delivering full event production, décor, staging & management",
    image: "/projects/54th-uae-national-day-event.webp",
    imageAlt:
      "Topaz Events organizing the 54th UAE National Day celebration for Sharjah Asset Management, featuring patriotic décor, stage setup, LED screens, and cultural",
    width: 1400,
    height: 932,
    facts: [
      { label: "Category", value: "Government organisation" },
      { label: "Event type", value: "National Day Event" },
      { label: "Location", value: "Sharjah, UAE" },
    ],
    overview: [
      "One flag. One spirit. One nation that never stops shining. As we mark the 54th UAE National Day, we celebrate a legacy of unity, pride, and limitless ambition. From the desert’s earliest dreams to the nation’s remarkable global achievements, this day honors the visionaries who built the UAE and the people who continue to carry its spirit forward.",
    ],
    gallery: [
      {
        src: "/projects/54th-uae-national-day-event/01.webp",
        alt: "Topaz Events organizing the 54th UAE National Day celebration for Sharjah Asset Management, featuring patriotic décor, stage setup, LED screens, and cultural",
        width: 1000,
        height: 666,
      },
      {
        src: "/projects/54th-uae-national-day-event/02.webp",
        alt: "Topaz Events organizing the 54th UAE National Day celebration for Sharjah Asset Management, featuring patriotic décor, stage setup, LED screens, and cultural",
        width: 1000,
        height: 666,
      },
      {
        src: "/projects/54th-uae-national-day-event/03.webp",
        alt: "Topaz Events organizing the 54th UAE National Day celebration for Sharjah Asset Management, featuring patriotic décor, stage setup, LED screens, and cultural",
        width: 1000,
        height: 666,
      },
      {
        src: "/projects/54th-uae-national-day-event/04.webp",
        alt: "Topaz Events organizing the 54th UAE National Day celebration for Sharjah Asset Management, featuring patriotic décor, stage setup, LED screens, and cultural",
        width: 1000,
        height: 666,
      },
      {
        src: "/projects/54th-uae-national-day-event/05.webp",
        alt: "Topaz Events organizing the 54th UAE National Day celebration for Sharjah Asset Management, featuring patriotic décor, stage setup, LED screens, and cultural",
        width: 1000,
        height: 667,
      },
      {
        src: "/projects/54th-uae-national-day-event/06.webp",
        alt: "Topaz Events organizing the 54th UAE National Day celebration for Sharjah Asset Management, featuring patriotic décor, stage setup, LED screens, and cultural",
        width: 1000,
        height: 666,
      },
    ],
  },
  {
    slug: "sharjah-private-education-authority",
    title: "SPEA Exhibition Stand 2025",
    year: 2025,
    city: "Sharjah",
    eventType: "Exhibition Stand",
    summary:
      "Discover the SPEA exhibition stand designed by Topaz Events in Sharjah. Premium setup, creative design, and complete event production Expo Centre Sharjah.",
    image: "/projects/sharjah-private-education-authority.webp",
    imageAlt:
      "Exhibition stand designed by Topaz Events for the Sharjah Private Education Authority at Expo Centre Sharjah, featuring modern, creative, and interactive elements",
    width: 1400,
    height: 788,
    facts: [
      { label: "Category", value: "Government organisation" },
      { label: "Event type", value: "Exhibition Stand" },
      { label: "Location", value: "Sharjah, UAE" },
    ],
    overview: [
      "Topaz Events proudly delivered a dynamic exhibition stand for the Sharjah Private Education Authority at Sharjah Expo Centre, merging creativity, modern design, and interactive elements into one impactful space. The setup reflected SPEA’s vision for innovative education and showcased Sharjah’s leadership in educational development an inspiring experience from concept to execution.",
    ],
    gallery: [
      {
        src: "/projects/sharjah-private-education-authority/01.webp",
        alt: "Exhibition stand designed by Topaz Events for the Sharjah Private Education Authority at Expo Centre Sharjah, featuring modern, creative, and interactive elements",
        width: 1000,
        height: 562,
      },
      {
        src: "/projects/sharjah-private-education-authority/02.webp",
        alt: "Exhibition stand designed by Topaz Events for the Sharjah Private Education Authority at Expo Centre Sharjah, featuring modern, creative, and interactive elements",
        width: 1000,
        height: 562,
      },
      {
        src: "/projects/sharjah-private-education-authority/03.webp",
        alt: "Exhibition stand designed by Topaz Events for the Sharjah Private Education Authority at Expo Centre Sharjah, featuring modern, creative, and interactive elements",
        width: 1000,
        height: 562,
      },
      {
        src: "/projects/sharjah-private-education-authority/04.webp",
        alt: "Exhibition stand designed by Topaz Events for the Sharjah Private Education Authority at Expo Centre Sharjah, featuring modern, creative, and interactive elements",
        width: 1000,
        height: 562,
      },
      {
        src: "/projects/sharjah-private-education-authority/05.webp",
        alt: "Exhibition stand designed by Topaz Events for the Sharjah Private Education Authority at Expo Centre Sharjah, featuring modern, creative, and interactive elements",
        width: 1000,
        height: 562,
      },
      {
        src: "/projects/sharjah-private-education-authority/06.webp",
        alt: "Exhibition stand designed by Topaz Events for the Sharjah Private Education Authority at Expo Centre Sharjah, featuring modern, creative, and interactive elements",
        width: 1000,
        height: 562,
      },
    ],
  },
  {
    slug: "district-11-launch",
    title: "District 11 Property Launch 2025",
    year: 2025,
    city: "Dubai",
    eventType: "Property Launch Event",
    summary:
      "Topaz Events organized the District 11 Property Launch 2025 event for Al Marwan Developments, showcasing luxury properties and modern design. Contact us today!",
    image: "/projects/district-11-launch.webp",
    imageAlt:
      "District 11 Property Launch Event by Al Marwan Developments | Topaz Events",
    width: 1000,
    height: 628,
    facts: [
      { label: "Client", value: "Al Marwan Developments" },
      { label: "Category", value: "Private organisation" },
      { label: "Event type", value: "Property Launch Event" },
      { label: "Date", value: "October 31, 2025" },
      { label: "Location", value: "The Meydan Hotel, Dubai" },
    ],
    overview: [
      "Estimated Visitors: 2000+",
      "Topaz Event Management was appointed as the lead event management agency for the District 11 property launch 2025 by Al Marwan Developments – one of the most anticipated real estate events in the UAE. Held on October 31, 2025, at The Meydan Hotel, Dubai, the event welcomed 2,000+ VIP guests for the grand reveal of the UAE’s first AI-designed business complex.",
      "From creative concept to full-scale execution, Topaz events delivered an end-to-end event experience that blended cutting-edge technology, immersive design, and world-class production – setting a new benchmark for luxury property launch events across the region.",
    ],
    requirements: [
      "Al Marwan Developments wanted a high-impact property launch event that would:",
      "Create a powerful first impression worthy of the UAE’s first AI-designed business complex.",
      "Deliver a premium VIP experience for 1,000+ guests at one of Dubai’s most prestigious venues.",
      "Showcase the District 11 brand identity through immersive, technology-driven environments.",
      "Generate strong media and marketing visibility to position D11 as a landmark development in the UAE.",
      "Ensure seamless end-to-end event execution – from venue setup to guest experience – with zero compromise on quality.",
    ],
    solutionsLead:
      "Topaz handled end-to-end District 11 property launch event, including:",
    solutions: [
      "Full event concept, creative direction, and branding aligned with the AI-driven identity of District 11.",
      "Complete venue design and transformation of The Meydan Hotel with large-scale stage setup, LED installations, and architectural styling.",
      "Deployment of advanced interactive and AV technology including Immersive Rooms, Hologram Booths, AI Booths, Curved LED Screens, Cylindrical Screens, Transparent Screens, Cubicle LED Screens, and Interactive Photobooths.",
      "End-to-end AV production and logistics management covering vendor coordination, technical crew, guest flow, and on-ground operations.",
      "Full media production and post-event deliverables to capture and extend the impact of the launch beyond the event day.",
    ],
    conclusion: [
      "District 11 wasn’t just a property launch – it was a statement. Topaz Event Management transformed The Meydan Hotel into an immersive world that brought Al Marwan Developments vision to life with precision, creativity, and technical excellence. From the first structural install to the final VIP moment, every detail was crafted to leave a lasting impression and it did. This is what world-class event management looks like.",
    ],
    gallery: [
      {
        src: "/projects/district-11-launch/01.webp",
        alt: "District 11 Property Launch 2025 EVENT By Al Marwan Development organized by Topaz Events",
        width: 1000,
        height: 628,
      },
      {
        src: "/projects/district-11-launch/02.webp",
        alt: "District 11 Property Launch 2025 By Al Marwan Developments organized by Topaz Events in Dubai",
        width: 1000,
        height: 667,
      },
      {
        src: "/projects/district-11-launch/03.webp",
        alt: "District 11 D11 Property Launch Event 2025 By Al Marwan Developments organized by Topaz Events in Meydan Hotel Dubai UAE",
        width: 1000,
        height: 665,
      },
      {
        src: "/projects/district-11-launch/04.webp",
        alt: "Al Marwan Developments District 11 Property Launch Event managed and organized by Topaz Event Management Company in Dubai UAE",
        width: 1000,
        height: 665,
      },
      {
        src: "/projects/district-11-launch/05.webp",
        alt: "District 11 Property Launch Event by Al Marwan Developments managed and organized by Topaz Events Agency in Dubai UAE.",
        width: 1000,
        height: 667,
      },
      {
        src: "/projects/district-11-launch/06.webp",
        alt: "D11 Property Launch 2025 By Al Marwan Developments organized by Topaz Events",
        width: 1000,
        height: 667,
      },
    ],
    video: {
      youtubeId: "0OdGlI-bVI4",
      title: "District 11 Grand Launch by Al Marwan Development | Topaz Events",
      description:
        "The District 11 property reveal for Al Marwan Development, delivered end to end by Topaz Events.",
      uploadDate: "2025-11-12",
      duration: "PT1M6S",
    },
  },
  {
    slug: "pink-polo-event-2025",
    title: "Pink Polo Event Abu Dhabi 2025",
    year: 2025,
    city: "Abu Dhabi",
    eventType: "Sports Event",
    summary:
      "Explore Topaz Events' production of Pink Polo Event 2025 at Ghantoot Racing & Polo Club. See our pink-themed styling and sports event management in Abu Dhabi.",
    image: "/projects/pink-polo-event-2025.webp",
    imageAlt:
      "Grand entrance of Ghantoot Racing & Polo Club decorated with pink floral arrangements and Topaz Events branding.",
    width: 1200,
    height: 675,
    facts: [
      { label: "Category", value: "Government organisation" },
      { label: "Event type", value: "Sports Event" },
      { label: "Location", value: "Abu Dhabi, UAE" },
    ],
    overview: [
      "Topaz Events is proud to showcase our production for Pink Polo 2025 at Ghantoot Racing & Polo Club, Abu Dhabi. Blending the sophistication of polo with a mission for breast cancer awareness, our team transformed the venue into a vibrant, pink-themed experience. From bespoke activations to seamless sports management, every detail reflected a commitment to strength and unity, creating an inspiring impact far beyond the field.",
    ],
    gallery: [
      {
        src: "/projects/pink-polo-event-2025/01.webp",
        alt: "Decorative pink floral archway welcoming guests to the Pink Polo 2025 breast cancer awareness event in Abu Dhabi",
        width: 1000,
        height: 562,
      },
      {
        src: "/projects/pink-polo-event-2025/02.webp",
        alt: "Official Pink Polo 2025 event logo signage at Ghantoot Racing & Polo Club, representing breast cancer awareness and sporting excellence.",
        width: 1000,
        height: 562,
      },
      {
        src: "/projects/pink-polo-event-2025/03.webp",
        alt: "Pink Polo 2025 grand entrance arch featuring Topaz Events branding and pink floral decor at Ghantoot Racing & Polo Club.",
        width: 1000,
        height: 562,
      },
      {
        src: "/projects/pink-polo-event-2025/04.webp",
        alt: "Luxury outdoor seating area featuring pink velvet furniture and elegant floral centerpieces by Topaz Events.",
        width: 1000,
        height: 562,
      },
      {
        src: "/projects/pink-polo-event-2025/05.webp",
        alt: "Diverse crowd of guests gathering at the Pink Polo 2025 event during the day, enjoying the outdoor hospitality and vibrant atmosphere at Ghantoot Racing & Polo Club.",
        width: 1000,
        height: 562,
      },
      {
        src: "/projects/pink-polo-event-2025/06.webp",
        alt: "Professional polo players competing at the Pink Polo 2025 event for breast cancer awareness.",
        width: 1000,
        height: 562,
      },
    ],
  },
  {
    slug: "al-rasikhoon-real-estate-launch-2025",
    title: "Al Rasikhoon Real Estate Launch 2025",
    year: 2025,
    city: "Ajman",
    eventType: "Real Estate Launch",
    summary:
      "Topaz Events powered the Al Rasikhoon Real Estate launch with advanced AV, LED screens, and expert execution for a seamless, high-impact experience.",
    image: "/projects/al-rasikhoon-real-estate-launch-2025.webp",
    imageAlt: "Al Rasikhoon Real Estate event organized by Topaz Events",
    width: 1200,
    height: 675,
    facts: [
      { label: "Category", value: "Private organisation" },
      { label: "Event type", value: "Real Estate Launch" },
      { label: "Location", value: "Ajman, UAE" },
    ],
    overview: [
      "When precision meets professionalism, Topaz Event Management delivered excellence at the Al Rasikhoon Real Estate Launch Event. With our state-of-the-art AV equipment, LED screens, and technical expertise, we brought every detail to life ensuring seamless visuals, crystal-clear sound, and a flawless experience from start to finish.",
    ],
    gallery: [
      {
        src: "/projects/al-rasikhoon-real-estate-launch-2025/01.webp",
        alt: "Al Rasikhoon Real Estate event organized by Topaz Events",
        width: 1000,
        height: 562,
      },
      {
        src: "/projects/al-rasikhoon-real-estate-launch-2025/02.webp",
        alt: "Al Rasikhoon Real Estate event organized by Topaz Events",
        width: 1000,
        height: 562,
      },
      {
        src: "/projects/al-rasikhoon-real-estate-launch-2025/03.webp",
        alt: "Al Rasikhoon Real Estate event organized by Topaz Events",
        width: 1000,
        height: 562,
      },
      {
        src: "/projects/al-rasikhoon-real-estate-launch-2025/04.webp",
        alt: "Al Rasikhoon Real Estate event organized by Topaz Events",
        width: 1000,
        height: 562,
      },
      {
        src: "/projects/al-rasikhoon-real-estate-launch-2025/05.webp",
        alt: "Al Rasikhoon Real Estate event organized by Topaz Events",
        width: 1000,
        height: 562,
      },
      {
        src: "/projects/al-rasikhoon-real-estate-launch-2025/06.webp",
        alt: "Al Rasikhoon Real Estate event organized by Topaz Events",
        width: 1000,
        height: 562,
      },
    ],
  },
  {
    slug: "shams-exhibition-stand-at-igcf-2025",
    title: "Shams Exhibition Stand At IGCF 2025",
    year: 2025,
    city: "Sharjah",
    eventType: "Exhibition Stand",
    summary:
      "A grand celebration of excellence and achievement the Sharjah Excellence Award 2024, organized and managed by Topaz Events Management in Sharjah UAE.",
    image: "/projects/shams-exhibition-stand-at-igcf-2025.webp",
    imageAlt: "Shams Exhibition Stand at IGCF 2025 - Topaz Events",
    width: 1200,
    height: 800,
    facts: [
      { label: "Category", value: "Government organisation" },
      { label: "Event type", value: "Exhibition Stand" },
      { label: "Location", value: "Sharjah Expo Centre" },
    ],
    overview: [
      "Step inside the innovative exhibition stand we designed for Shams Media at the 14th International Government Communication Forum (IGCF 2025), held at Expo Centre Sharjah. The custom-built stand seamlessly blended culture and creativity, featuring a dynamic Kinetic LED Wall, an interactive Shams Talk zone, a Majlis-style discussion area that captured the essence of collaboration & communication.",
    ],
    gallery: [
      {
        src: "/projects/shams-exhibition-stand-at-igcf-2025/01.webp",
        alt: "Shams Exhibition Stand at IGCF 2025 - Topaz Events",
        width: 1000,
        height: 667,
      },
      {
        src: "/projects/shams-exhibition-stand-at-igcf-2025/02.webp",
        alt: "Shams Exhibition Stand at IGCF 2025 - Topaz Events",
        width: 1000,
        height: 667,
      },
      {
        src: "/projects/shams-exhibition-stand-at-igcf-2025/03.webp",
        alt: "Shams Exhibition Stand at IGCF 2025 - Topaz Events",
        width: 1000,
        height: 667,
      },
      {
        src: "/projects/shams-exhibition-stand-at-igcf-2025/04.webp",
        alt: "Shams Exhibition Stand at IGCF 2025 - Topaz Events",
        width: 1000,
        height: 667,
      },
      {
        src: "/projects/shams-exhibition-stand-at-igcf-2025/05.webp",
        alt: "Shams Exhibition Stand at IGCF 2025 - Topaz Events",
        width: 1000,
        height: 667,
      },
      {
        src: "/projects/shams-exhibition-stand-at-igcf-2025/06.webp",
        alt: "Shams Exhibition Stand at IGCF 2025 - Topaz Events",
        width: 1000,
        height: 667,
      },
    ],
  },
  {
    slug: "shukran-award-ceremony-event-2025",
    title: "Shukran Award Ceremony 2025",
    year: 2025,
    city: "Sharjah",
    eventType: "Award Ceremony Event",
    summary:
      "Topaz Events delivered the Shukran award ceremony for Sharjah Broadcasting Authority, honoring creativity, influential voices, and excellence in broadcasting.",
    image: "/projects/shukran-award-ceremony-event-2025.webp",
    imageAlt:
      "Shukran event setup by Topaz Events for Sharjah Broadcasting Authority",
    width: 1400,
    height: 934,
    facts: [
      { label: "Category", value: "Government organisation" },
      { label: "Event type", value: "Award Ceremony Event" },
      { label: "Location", value: "Al Jawahar Sharjah" },
    ],
    overview: [
      "Topaz Events successfully delivered the “Shukran” award ceremony for Sharjah Broadcasting Authority for the second time, reinforcing a strong partnership built on trust and shared vision. The event celebrated creativity, recognized influential voices, and honored outstanding contributions within the broadcasting community. From concept development to flawless execution, every element was carefully curated to transform gratitude into a prestigious and memorable experience.",
    ],
    gallery: [
      {
        src: "/projects/shukran-award-ceremony-event-2025/01.webp",
        alt: "Sharjah Broadcasting Authority Shukran appreciation event",
        width: 1000,
        height: 667,
      },
      {
        src: "/projects/shukran-award-ceremony-event-2025/02.webp",
        alt: "Stage and AV production at Shukran event Sharjah",
        width: 1000,
        height: 667,
      },
      {
        src: "/projects/shukran-award-ceremony-event-2025/03.webp",
        alt: "Topaz Events corporate event management in Sharjah",
        width: 1000,
        height: 1499,
      },
      {
        src: "/projects/shukran-award-ceremony-event-2025/04.webp",
        alt: "Shukran event celebrating content creators in Sharjah",
        width: 1000,
        height: 1499,
      },
      {
        src: "/projects/shukran-award-ceremony-event-2025/05.webp",
        alt: "Professional lighting and sound setup at Shukran event",
        width: 1000,
        height: 1499,
      },
      {
        src: "/projects/shukran-award-ceremony-event-2025/06.webp",
        alt: "Creative event production by Topaz Events in Sharjah",
        width: 1000,
        height: 667,
      },
    ],
  },
  {
    slug: "sharjah-excellence-award-2024",
    title: "Sharjah Excellence Award",
    year: 2025,
    city: "Sharjah",
    eventType: "Award Ceremony",
    summary:
      "A grand celebration of excellence and achievement the Sharjah Excellence Award 2024, organized and managed by Topaz Events Management in Sharjah UAE.",
    image: "/projects/sharjah-excellence-award-2024.webp",
    imageAlt:
      "Sharjah Excellence Award 2024, organized and managed by Topaz Events Management in Sharjah UAE.",
    width: 1066,
    height: 600,
    facts: [
      { label: "Category", value: "Government organisation" },
      { label: "Event type", value: "Award Ceremony" },
      { label: "Location", value: "Sharjah – UAE" },
    ],
    overview: [
      "A grand celebration of excellence and achievement the Sharjah Excellence Award 2024, organized and managed by Topaz Events under the patronage of HH Sheikh Sultan bin Mohammed bin Sultan Al-Qasimi, and attended by HH Sheikh Abdullah bin Salem Al-Qasimi and H.E. Abdullah Sultan Al-Awais, Chairman of SCCI. Watch how we brought this prestigious event to life.",
    ],
    gallery: [
      {
        src: "/projects/sharjah-excellence-award-2024/01.webp",
        alt: "A grand celebration of excellence and achievement the Sharjah Excellence Award 2024, organized and managed by Topaz Events.",
        width: 1000,
        height: 563,
      },
      {
        src: "/projects/sharjah-excellence-award-2024/02.webp",
        alt: "A grand celebration of excellence and achievement the Sharjah Excellence Award 2024, organized and managed by Topaz Events Management",
        width: 1000,
        height: 563,
      },
      {
        src: "/projects/sharjah-excellence-award-2024/03.webp",
        alt: "A grand celebration of excellence and achievement the Sharjah Excellence Award 2024, organized and managed by Topaz Event Management",
        width: 1000,
        height: 563,
      },
      {
        src: "/projects/sharjah-excellence-award-2024/04.webp",
        alt: "A grand celebration of excellence and achievement the Sharjah Excellence Award 2024, organized and managed by Topaz Events in Sharjah",
        width: 1000,
        height: 563,
      },
      {
        src: "/projects/sharjah-excellence-award-2024/05.webp",
        alt: "A grand celebration of excellence and achievement the Sharjah Excellence Award 2024, organized and managed by Topaz Events in Sharjah UAE",
        width: 1000,
        height: 563,
      },
      {
        src: "/projects/sharjah-excellence-award-2024/06.webp",
        alt: "A grand celebration of excellence and achievement the Sharjah Excellence Award 2024, organized and managed by Topaz Events Management in Sharjah",
        width: 1000,
        height: 563,
      },
    ],
  },
  {
    slug: "snoc-solar-panel-inauguration-2025",
    title: "SNOC Solar Panel Inauguration",
    year: 2025,
    city: "Sharjah",
    eventType: "Solar Panel Inauguration",
    summary:
      "Topaz Events proudly delivered the full event management for SNOC solar panel inauguration 2025 celebrating innovation, sustainability & execution excellence.",
    image: "/projects/snoc-solar-panel-inauguration-2025.webp",
    imageAlt:
      "SNOC Solar Panel Inauguration 2025 organized by Topaz Events in Sharjah UAE",
    width: 1066,
    height: 600,
    facts: [
      { label: "Category", value: "Government organisation" },
      { label: "Event type", value: "Solar Panel Inauguration" },
      { label: "Location", value: "Sharjah – UAE" },
    ],
    overview: [
      "A Bright New Chapter in Clean Energy Begins! We’re proud to have brought SNOC’s Solar Panel Project Inauguration to life from concept to spotlight.",
      "Topaz Events successfully managed every detail of this milestone event, celebrating innovation, sustainability, and flawless execution.",
    ],
    gallery: [
      {
        src: "/projects/snoc-solar-panel-inauguration-2025/01.webp",
        alt: "SNOC Solar Panel Inauguration 2025 organized by Topaz Events in Sharjah UAE",
        width: 1000,
        height: 563,
      },
      {
        src: "/projects/snoc-solar-panel-inauguration-2025/02.webp",
        alt: "SNOC Solar Panel Inauguration 2025 organized by Topaz Events in Sharjah UAE",
        width: 1000,
        height: 563,
      },
      {
        src: "/projects/snoc-solar-panel-inauguration-2025/03.webp",
        alt: "SNOC Solar Panel Inauguration 2025 organized by Topaz Events in Sharjah UAE",
        width: 1000,
        height: 563,
      },
      {
        src: "/projects/snoc-solar-panel-inauguration-2025/04.webp",
        alt: "SNOC Solar Panel Inauguration 2025 organized by Topaz Events in Sharjah UAE",
        width: 1000,
        height: 563,
      },
      {
        src: "/projects/snoc-solar-panel-inauguration-2025/05.webp",
        alt: "SNOC Solar Panel Inauguration 2025 organized by Topaz Events in Sharjah UAE",
        width: 1000,
        height: 563,
      },
      {
        src: "/projects/snoc-solar-panel-inauguration-2025/06.webp",
        alt: "SNOC Solar Panel Inauguration 2025 organized by Topaz Events in Sharjah UAE",
        width: 1000,
        height: 563,
      },
    ],
  },
  {
    slug: "ifbb-asia",
    title: "IFBB Asian Bodybuilding Championships",
    year: 2025,
    city: "Ajman",
    eventType: "Asian Bodybuilding Championships",
    summary:
      "Experience the high-energy moments from the IFBB Asian Bodybuilding Championships 2025, proudly organized by Topaz Events in Ajman, UAE. Stay Connected!",
    image: "/projects/ifbb-asia.webp",
    imageAlt:
      "IFBB Asian Bodybuilding Championships 2025 organized by Topaz Events in Ajman UAE",
    width: 900,
    height: 506,
    facts: [
      { label: "Category", value: "Government organisation" },
      { label: "Event type", value: "Asian Bodybuilding Championships" },
      { label: "Location", value: "Ajman – UAE" },
    ],
    overview: [
      "Experience the high-energy moments from the IFBB Asian Bodybuilding Championships 2025, proudly organized by Topaz Events in Ajman. From stage setup to flawless execution, we brought the vision to life.",
    ],
    gallery: [
      {
        src: "/projects/ifbb-asia/01.webp",
        alt: "IFBB Asian Bodybuilding Championships 2025 organized by Topaz Events in Ajman UAE",
        width: 1000,
        height: 562,
      },
      {
        src: "/projects/ifbb-asia/02.webp",
        alt: "IFBB Asian Bodybuilding Championships 2025 organized by Topaz Events in Ajman UAE",
        width: 1000,
        height: 562,
      },
      {
        src: "/projects/ifbb-asia/03.webp",
        alt: "IFBB Asian Bodybuilding Championships 2025 organized by Topaz Events in Ajman UAE",
        width: 1000,
        height: 562,
      },
      {
        src: "/projects/ifbb-asia/04.webp",
        alt: "IFBB Asian Bodybuilding Championships 2025 organized by Topaz Events in Ajman UAE",
        width: 1000,
        height: 562,
      },
      {
        src: "/projects/ifbb-asia/05.webp",
        alt: "IFBB Asian Bodybuilding Championships 2025 organized by Topaz Events in Ajman UAE",
        width: 1000,
        height: 562,
      },
      {
        src: "/projects/ifbb-asia/06.webp",
        alt: "IFBB Asian Bodybuilding Championships 2025 organized by Topaz Events in Ajman UAE",
        width: 1000,
        height: 562,
      },
    ],
    video: {
      youtubeId: "__QNWHkjL94",
      title: "IFBB Asia 2025 Highlights | Powered by Topaz Events",
      description:
        "Highlights from the IFBB Asian Bodybuilding Championships 2025 in Ajman, from stage build to show calling.",
      uploadDate: "2025-07-01",
      duration: "PT1M40S",
    },
  },
  {
    slug: "liwa-date-honey-festival",
    title: "LIWA Dates & Honey Festival 2025",
    year: 2025,
    city: "Ajman",
    eventType: "Festival Event",
    summary:
      "Topaz Events delivered full-scale event production for LIWA Ajman Date & Honey Festival 2025, celebrating heritage, flavor, and community spirit.",
    image: "/projects/liwa-date-honey-festival.webp",
    imageAlt: "Traditional date and honey stalls at LIWA Ajman Festival 2025",
    width: 1276,
    height: 720,
    facts: [
      { label: "Category", value: "Government organisation" },
      { label: "Event type", value: "Festival Event" },
      { label: "Location", value: "Ajman, UAE" },
    ],
    overview: [
      "Topaz Events proudly delivered the LIWA Ajman Date & Honey Festival 2025, producing a vibrant cultural experience with staging, AV, lighting, décor, and seamless coordination, celebrating Ajman’s rich heritage, flavors, and community traditions. From immersive festival zones to engaging cultural performances, every detail was thoughtfully executed to enhance visitor experience.",
    ],
    gallery: [
      {
        src: "/projects/liwa-date-honey-festival/01.webp",
        alt: "Traditional décor and performance at LIWA Ajman Date and Honey Festival",
        width: 1000,
        height: 666,
      },
      {
        src: "/projects/liwa-date-honey-festival/02.webp",
        alt: "Event staging and lighting by Topaz Events at Ajman Festival",
        width: 1000,
        height: 563,
      },
      {
        src: "/projects/liwa-date-honey-festival/03.webp",
        alt: "LIWA Ajman Date & Honey Festival 2025",
        width: 1000,
        height: 666,
      },
      {
        src: "/projects/liwa-date-honey-festival/04.webp",
        alt: "LIWA Ajman Date and Honey Festival 2025 event setup by Topaz Events",
        width: 1000,
        height: 564,
      },
      {
        src: "/projects/liwa-date-honey-festival/05.webp",
        alt: "Cultural performances at LIWA Ajman Date and Honey Festival",
        width: 1000,
        height: 666,
      },
      {
        src: "/projects/liwa-date-honey-festival/06.webp",
        alt: "Family-friendly activities at LIWA Ajman heritage festival",
        width: 1000,
        height: 666,
      },
    ],
  },
  {
    slug: "sharjah-self-defense-sports-club",
    title: "Sharjah Self-Defense Sports Club",
    year: 2025,
    city: "Sharjah",
    eventType: "Anniversary Event",
    summary:
      "Topaz Events is proud to present the highlight reel from the Sharjah Self-Defense Sports Club’s 10th Anniversary Celebration!",
    image: "/projects/sharjah-self-defense-sports-club.webp",
    imageAlt:
      "Sharjah Self-Defense Sports Club's 10th Anniversary Celebration organized by Topaz Event Management",
    width: 1066,
    height: 600,
    facts: [
      { label: "Category", value: "Government organisation" },
      { label: "Event type", value: "Anniversary Event" },
      { label: "Location", value: "Sharjah – UAE" },
    ],
    overview: [
      "Topaz Events is proud to present the highlight reel from Sharjah Self-Defense Sports Club’s 10th Anniversary Celebration a decade of commitment and excellence in self-defense sports. Through meticulous planning and flawless execution, we brought their vision to life for an unforgettable experience.",
    ],
    gallery: [
      {
        src: "/projects/sharjah-self-defense-sports-club/01.webp",
        alt: "Sharjah Self-Defense Sports Club's 10th Anniversary Celebration organized by Topaz Event Management",
        width: 1000,
        height: 563,
      },
      {
        src: "/projects/sharjah-self-defense-sports-club/02.webp",
        alt: "Sharjah Self-Defense Sports Club's 10th Anniversary Celebration organized by Topaz Event Management",
        width: 1000,
        height: 563,
      },
      {
        src: "/projects/sharjah-self-defense-sports-club/03.webp",
        alt: "Sharjah Self-Defense Sports Club's 10th Anniversary Celebration organized by Topaz Event Management",
        width: 1000,
        height: 563,
      },
      {
        src: "/projects/sharjah-self-defense-sports-club/04.webp",
        alt: "Sharjah Self-Defense Sports Club's 10th Anniversary Celebration organized by Topaz Event Management",
        width: 1000,
        height: 563,
      },
      {
        src: "/projects/sharjah-self-defense-sports-club/05.webp",
        alt: "Sharjah Self-Defense Sports Club's 10th Anniversary Celebration organized by Topaz Event Management",
        width: 1000,
        height: 563,
      },
      {
        src: "/projects/sharjah-self-defense-sports-club/06.webp",
        alt: "Sharjah Self-Defense Sports Club's 10th Anniversary Celebration organized by Topaz Event Management",
        width: 1000,
        height: 563,
      },
    ],
  },
  {
    slug: "exhibition-stand-abu-dhabi-forum-for-peace",
    title: "Exhibition Stand Abu Dhabi Forum",
    year: 2025,
    city: "Abu Dhabi",
    eventType: "Exhibition Booth",
    summary:
      "Topaz Events had the privilege of creating a standout exhibition stand for the Abu Dhabi Forum for Peace at the Abu Dhabi International Book Fair.",
    image: "/projects/exhibition-stand-abu-dhabi-forum-for-peace.webp",
    imageAlt:
      "Topaz Events had the privilege of creating a standout exhibition stand for the Abu Dhabi Forum for Peace at the Abu Dhabi International Book Fair in Abu Dhabi UAE",
    width: 1066,
    height: 600,
    facts: [
      { label: "Category", value: "Government organisation" },
      { label: "Event type", value: "Exhibition Booth" },
      { label: "Location", value: "Abu Dhabi – UAE" },
    ],
    overview: [
      "Topaz Events had the privilege of creating a standout exhibition stand for the Abu Dhabi Forum for Peace at the Abu Dhabi International Book Fair. We designed a visually captivating space that beautifully conveyed the Forum’s powerful message of peace and unity. From the conceptual design to flawless execution, our team brought this vision to life!",
    ],
    gallery: [
      {
        src: "/projects/exhibition-stand-abu-dhabi-forum-for-peace/01.webp",
        alt: "Topaz Events had the privilege of creating a standout exhibition stand for the Abu Dhabi Forum for Peace at the Abu Dhabi International Book Fair in Abu Dhabi UAE",
        width: 1000,
        height: 563,
      },
      {
        src: "/projects/exhibition-stand-abu-dhabi-forum-for-peace/02.webp",
        alt: "Topaz Event Management had the privilege of creating a standout exhibition stand for the Abu Dhabi Forum for Peace at the Abu Dhabi International Book Fair in Abu Dhabi.",
        width: 1000,
        height: 563,
      },
      {
        src: "/projects/exhibition-stand-abu-dhabi-forum-for-peace/03.webp",
        alt: "Topaz Events had the privilege of creating a standout exhibition stand for the Abu Dhabi Forum for Peace at the Abu Dhabi International Book Fair in Abu Dhabi UAE.",
        width: 1000,
        height: 563,
      },
      {
        src: "/projects/exhibition-stand-abu-dhabi-forum-for-peace/04.webp",
        alt: "Topaz Events Management had the privilege of creating a standout exhibition stand for the Abu Dhabi Forum for Peace at the Abu Dhabi International Book Fair in Abu Dhabi.",
        width: 1000,
        height: 563,
      },
      {
        src: "/projects/exhibition-stand-abu-dhabi-forum-for-peace/05.webp",
        alt: "Topaz Events had the privilege of creating a standout exhibition stand for the Abu Dhabi Forum for Peace at the Abu Dhabi International Book Fair in Abu Dhabi.",
        width: 1000,
        height: 563,
      },
      {
        src: "/projects/exhibition-stand-abu-dhabi-forum-for-peace/06.webp",
        alt: "Topaz Event Management had the privilege of creating a standout exhibition stand for the Abu Dhabi Forum for Peace at the Abu Dhabi International Book Fair in Abu Dhabi",
        width: 1000,
        height: 563,
      },
    ],
  },
  {
    slug: "uae-swat-challenge-2025",
    title: "UAE SWAT Challenge 2025",
    year: 2025,
    city: "Dubai",
    eventType: "Sports Event",
    summary:
      "Experience the thrill of Yuka Drive Fest Gymkhana! Topaz set the stage with dynamic lighting, massive LED screens & powerful sound for an adrenaline-fueled show",
    image: "/projects/uae-swat-challenge-2025.webp",
    imageAlt: "UAE SWAT Challenge 2025: AV Solutions by Topaz Events",
    width: 1066,
    height: 600,
    facts: [
      { label: "Category", value: "Government organisation" },
      { label: "Event type", value: "Sports Event" },
      { label: "Location", value: "Dubai – UAE" },
    ],
    overview: [
      "Topaz Events proud to have executed the UAE SWAT Challenge 2025 with our advanced AV equipment, ensuring flawless sound, visuals, and lighting that elevated the experience to new heights! From seamless technical integration to dynamic presentations, Topaz Events delivered a truly immersive experience for all attendees.",
    ],
    gallery: [
      {
        src: "/projects/uae-swat-challenge-2025/01.webp",
        alt: "UAE SWAT Challenge 2025: AV Solutions by Topaz Events",
        width: 1000,
        height: 563,
      },
      {
        src: "/projects/uae-swat-challenge-2025/02.webp",
        alt: "UAE SWAT Challenge 2025: AV Solutions by Topaz Events",
        width: 1000,
        height: 563,
      },
      {
        src: "/projects/uae-swat-challenge-2025/03.webp",
        alt: "UAE SWAT Challenge 2025: AV Solutions by Topaz Events | A Government Event Preparation in Dubai.",
        width: 1000,
        height: 563,
      },
      {
        src: "/projects/uae-swat-challenge-2025/04.webp",
        alt: "UAE SWAT Challenge 2025: AV Solutions by Topaz Events",
        width: 1000,
        height: 563,
      },
      {
        src: "/projects/uae-swat-challenge-2025/05.webp",
        alt: "UAE SWAT Challenge 2025: AV Solutions by Topaz Events",
        width: 1000,
        height: 563,
      },
      {
        src: "/projects/uae-swat-challenge-2025/06.webp",
        alt: "UAE SWAT Challenge 2025: AV Solutions by Topaz Events",
        width: 1000,
        height: 563,
      },
    ],
  },
  {
    slug: "shams-creative-festival-2025",
    title: "Shams Creative Festival 2025",
    year: 2025,
    city: "Sharjah",
    eventType: "Festival Event",
    summary:
      "Under the esteemed patronage of H.H. Sheikh Sultan bin Ahmed Al Qasimi, Deputy Ruler of Sharjah and Chairman of the Sharjah Media Council.",
    image: "/projects/shams-creative-festival-2025.webp",
    imageAlt:
      "Topaz Event Management | Shams Creative Festival 2025 | Sharjah UAE",
    width: 900,
    height: 600,
    facts: [
      { label: "Category", value: "Government organisation" },
      { label: "Event type", value: "Festival Event" },
      { label: "Location", value: "Sharjah – UAE" },
    ],
    overview: [
      "Under the esteemed patronage of H.H. Sheikh Sultan bin Ahmed Al Qasimi, Deputy Ruler of Sharjah and Chairman of the Sharjah Media Council, we proudly executed the third edition of the Shams Creative Festival a 4-day celebration of creativity, innovation, and entrepreneurship, powered by Sharjah Media City – Shams.",
    ],
    gallery: [
      {
        src: "/projects/shams-creative-festival-2025/01.webp",
        alt: "Topaz Event Management | Shams Creative Festival 2025 | Sharjah UAE",
        width: 900,
        height: 600,
      },
      {
        src: "/projects/shams-creative-festival-2025/02.webp",
        alt: "Topaz Event Management | Shams Creative Festival 2025 | Sharjah UAE",
        width: 900,
        height: 600,
      },
      {
        src: "/projects/shams-creative-festival-2025/03.webp",
        alt: "Topaz Event Management | Shams Creative Festival 2025 | Sharjah UAE",
        width: 900,
        height: 600,
      },
      {
        src: "/projects/shams-creative-festival-2025/04.webp",
        alt: "Topaz Event Management | Shams Creative Festival 2025 | Sharjah UAE",
        width: 900,
        height: 600,
      },
      {
        src: "/projects/shams-creative-festival-2025/05.webp",
        alt: "Topaz Event Management | Shams Creative Festival 2025 | Sharjah UAE",
        width: 900,
        height: 600,
      },
      {
        src: "/projects/shams-creative-festival-2025/06.webp",
        alt: "Topaz Event Management | Shams Creative Festival 2025 | Sharjah UAE",
        width: 900,
        height: 600,
      },
    ],
  },
  {
    slug: "aus-ramadan-suhoor-2025",
    title: "AUS Ramadan Suhoor Event 2025",
    year: 2025,
    city: "Sharjah",
    eventType: "Suhoor Event",
    summary:
      "Experience the thrill of Yuka Drive Fest Gymkhana! Topaz set the stage with dynamic lighting, massive LED screens & powerful sound for an adrenaline-fueled show",
    image: "/projects/aus-ramadan-suhoor-2025.webp",
    imageAlt: "Topaz Events | AUS Ramadan Suhoor Event 2025 | in Sharjah UAE",
    width: 1066,
    height: 600,
    facts: [
      { label: "Category", value: "Private (Owned by Sharjah Gov.)" },
      { label: "Event type", value: "Suhoor Event" },
      { label: "Location", value: "Sharjah – UAE" },
    ],
    overview: [
      "Get ready to be blown away by the ultimate Ramadan Suhoor Benefit 2025 at American University Sharjah! Topaz Events delivered a breathtaking experience with flawless event management and state-of-the-art AV setups including LED screens, powerful sound, and dynamic lighting. This isn’t just an event it’s a celebration of Ramadan vibes reimagined!",
    ],
    gallery: [
      {
        src: "/projects/aus-ramadan-suhoor-2025/01.webp",
        alt: "Topaz Events | AUS Ramadan Suhoor Event 2025 | in Sharjah UAE",
        width: 1000,
        height: 563,
      },
      {
        src: "/projects/aus-ramadan-suhoor-2025/02.webp",
        alt: "Topaz Events | AUS Ramadan Suhoor Event 2025 | in Sharjah UAE",
        width: 1000,
        height: 563,
      },
      {
        src: "/projects/aus-ramadan-suhoor-2025/03.webp",
        alt: "Topaz Events | AUS Ramadan Suhoor Event 2025 | in Sharjah UAE",
        width: 1000,
        height: 563,
      },
      {
        src: "/projects/aus-ramadan-suhoor-2025/04.webp",
        alt: "Topaz Events | AUS Ramadan Suhoor Event 2025 | in Sharjah UAE",
        width: 1000,
        height: 563,
      },
      {
        src: "/projects/aus-ramadan-suhoor-2025/05.webp",
        alt: "Topaz Events | AUS Ramadan Suhoor Event 2025 | in Sharjah UAE",
        width: 1000,
        height: 563,
      },
      {
        src: "/projects/aus-ramadan-suhoor-2025/06.webp",
        alt: "Topaz Events | AUS Ramadan Suhoor Event 2025 | in Sharjah UAE",
        width: 1000,
        height: 563,
      },
    ],
  },
  {
    slug: "yuka-drive-fest-gymkhana-2025",
    title: "Yuka Drive Fest Gymkhana",
    year: 2025,
    city: "UAE",
    eventType: "Drive Fest Event",
    summary:
      "Experience the thrill of Yuka Drive Fest Gymkhana! Topaz set the stage with dynamic lighting, massive LED screens & powerful sound for an adrenaline-fueled show",
    image: "/projects/yuka-drive-fest-gymkhana-2025.webp",
    imageAlt:
      "Topaz Events organized Yuka Drive Fest Gymkhana 2025 Event in Al-Ain UAE",
    width: 900,
    height: 600,
    facts: [
      { label: "Category", value: "Private organisation" },
      { label: "Event type", value: "Drive Fest Event" },
      { label: "Location", value: "Al Ain – UAE" },
    ],
    overview: [
      "Topaz Events proudly set the stage for Yuka Drive Fest Gymkhana, an adrenaline-fueled motorsport spectacle. With dynamic lighting, massive LED screens, and a powerful soundscape, we created an electrifying atmosphere. Our standout scaffolding tower, custom-built race arena, and challenging obstacles pushed the limits of excitement.",
    ],
    gallery: [
      {
        src: "/projects/yuka-drive-fest-gymkhana-2025/01.webp",
        alt: "Topaz Events organized Yuka Drive Fest Gymkhana 2025 Event in Al-Ain UAE",
        width: 900,
        height: 600,
      },
      {
        src: "/projects/yuka-drive-fest-gymkhana-2025/02.webp",
        alt: "Topaz Events organized Yuka Drive Fest Gymkhana 2025 Event in Al-Ain UAE",
        width: 900,
        height: 600,
      },
      {
        src: "/projects/yuka-drive-fest-gymkhana-2025/03.webp",
        alt: "Topaz Events organized Yuka Drive Fest Gymkhana 2025 Event in Al-Ain UAE",
        width: 900,
        height: 600,
      },
      {
        src: "/projects/yuka-drive-fest-gymkhana-2025/04.webp",
        alt: "Topaz Events organized Yuka Drive Fest Gymkhana 2025 Event in Al-Ain UAE",
        width: 900,
        height: 600,
      },
      {
        src: "/projects/yuka-drive-fest-gymkhana-2025/05.webp",
        alt: "Topaz Events organized Yuka Drive Fest Gymkhana 2025 Event in Al-Ain UAE",
        width: 900,
        height: 600,
      },
      {
        src: "/projects/yuka-drive-fest-gymkhana-2025/06.webp",
        alt: "Topaz Events organized Yuka Drive Fest Gymkhana 2025 Event in Al-Ain UAE",
        width: 900,
        height: 600,
      },
    ],
  },
  {
    slug: "university-of-sharjah-uos-alumni-2025",
    title: "University Of Sharjah (UOS) Alumni",
    year: 2025,
    city: "Sharjah",
    eventType: "Gala Dinner Alumni",
    summary:
      "Experience the University of Sharjah Alumni Gathering with Topaz Events cutting-edge screens & AV, delivering innovation, excellence & unforgettable moments.",
    image: "/projects/university-of-sharjah-uos-alumni-2025.webp",
    imageAlt: "Topaz Events organized Event for University of Sharjah (UOS)",
    width: 900,
    height: 600,
    facts: [
      { label: "Category", value: "Government organisation" },
      { label: "Event type", value: "Gala Dinner Alumni" },
      { label: "Location", value: "Sharjah – UAE" },
    ],
    overview: [
      "Experience the University of Sharjah Alumni Gathering 2025, where Topaz Event Management elevated the event with cutting-edge screens and AV solutions, delivering innovation, excellence, and an unforgettable experience.",
    ],
    gallery: [
      {
        src: "/projects/university-of-sharjah-uos-alumni-2025/01.webp",
        alt: "Topaz Events organized Event for University of Sharjah (UOS)",
        width: 900,
        height: 600,
      },
      {
        src: "/projects/university-of-sharjah-uos-alumni-2025/02.webp",
        alt: "Topaz Events organized Event for University of Sharjah (UOS)",
        width: 900,
        height: 600,
      },
      {
        src: "/projects/university-of-sharjah-uos-alumni-2025/03.webp",
        alt: "Topaz Events organized Event for University of Sharjah (UOS)",
        width: 899,
        height: 600,
      },
      {
        src: "/projects/university-of-sharjah-uos-alumni-2025/04.webp",
        alt: "Topaz Events organized Event for University of Sharjah (UOS)",
        width: 900,
        height: 600,
      },
      {
        src: "/projects/university-of-sharjah-uos-alumni-2025/05.webp",
        alt: "Topaz Events organized Event for University of Sharjah (UOS)",
        width: 899,
        height: 600,
      },
      {
        src: "/projects/university-of-sharjah-uos-alumni-2025/06.webp",
        alt: "Topaz Events organized Event for University of Sharjah (UOS)",
        width: 899,
        height: 600,
      },
    ],
  },
  {
    slug: "sharjah-chamber-of-commerce-al-kalba-2025",
    title: "Sharjah Chamber of Commerce (Al Kalba)",
    year: 2025,
    city: "Sharjah",
    eventType: "Festival Event",
    summary:
      "Experience the Kalba Festival with stunning stage design, laser mapping, and fireworks by Topaz Events for Sharjah Chamber of Commerce & Industry! Contact us.",
    image: "/projects/sharjah-chamber-of-commerce-al-kalba-2025.webp",
    imageAlt:
      "Topaz Events organized Event Sharjah Chamber of Commerce Event in Al Kalba Sharjah",
    width: 899,
    height: 600,
    facts: [
      { label: "Category", value: "Government organisation" },
      { label: "Event type", value: "Festival Event" },
      { label: "Location", value: "Sharjah – UAE" },
    ],
    overview: [
      "Step into the Kalba Festival as Topaz Events brought a spectacular production to life for Sharjah Chamber of Commerce & Industry! From grand stage design and immersive sound to laser mapping on mountains and a breathtaking fireworks display, every moment was crafted to perfection.",
    ],
    gallery: [
      {
        src: "/projects/sharjah-chamber-of-commerce-al-kalba-2025/01.webp",
        alt: "Topaz Events organized Event Sharjah Chamber of Commerce Event in Al Kalba Sharjah",
        width: 899,
        height: 600,
      },
      {
        src: "/projects/sharjah-chamber-of-commerce-al-kalba-2025/02.webp",
        alt: "Topaz Events organized Event Sharjah Chamber of Commerce Event in Al Kalba Sharjah",
        width: 899,
        height: 600,
      },
      {
        src: "/projects/sharjah-chamber-of-commerce-al-kalba-2025/03.webp",
        alt: "Topaz Events organized Event Sharjah Chamber of Commerce Event in Al Kalba Sharjah",
        width: 899,
        height: 600,
      },
      {
        src: "/projects/sharjah-chamber-of-commerce-al-kalba-2025/04.webp",
        alt: "Topaz Events organized Event Sharjah Chamber of Commerce Event in Al Kalba Sharjah",
        width: 899,
        height: 600,
      },
      {
        src: "/projects/sharjah-chamber-of-commerce-al-kalba-2025/05.webp",
        alt: "Topaz Events organized Event Sharjah Chamber of Commerce Event in Al Kalba Sharjah",
        width: 899,
        height: 600,
      },
      {
        src: "/projects/sharjah-chamber-of-commerce-al-kalba-2025/06.webp",
        alt: "Topaz Events organized Event Sharjah Chamber of Commerce Event in Al Kalba Sharjah",
        width: 899,
        height: 600,
      },
    ],
  },
  {
    slug: "american-university-of-sharjah-aus",
    title: "American University of Sharjah (AUS) Alumni",
    year: 2025,
    city: "Sharjah",
    eventType: "Gala Dinner Alumni",
    summary:
      "Topaz Events organized the American University of Sharjah UAE gala dinner from ultra-HD LED screen, lights and sound system to make the even successful.",
    image: "/projects/american-university-of-sharjah-aus.webp",
    imageAlt:
      "Topaz Events organized the American University of Sharjah Gala Dinner in the UAE",
    width: 849,
    height: 567,
    facts: [
      { label: "Category", value: "Private (Owned by Sharjah Gov.)" },
      { label: "Event type", value: "Gala Dinner Alumni" },
      { label: "Location", value: "Sharjah – UAE" },
    ],
    overview: [
      "Topaz Events successfully organized the AUS Gala Dinner Alumni 2025 in Sharjah, UAE. From ultra-HD LED screens to professional lighting and sound systems, we ensured a seamless and memorable evening, creating the perfect ambiance for alumni to reconnect and celebrate.",
    ],
    gallery: [
      {
        src: "/projects/american-university-of-sharjah-aus/01.webp",
        alt: "American University of Sharjah Alumni event",
        width: 900,
        height: 600,
      },
      {
        src: "/projects/american-university-of-sharjah-aus/02.webp",
        alt: "American University of Sharjah Alumni event",
        width: 900,
        height: 600,
      },
      {
        src: "/projects/american-university-of-sharjah-aus/03.webp",
        alt: "American University of Sharjah Alumni event",
        width: 900,
        height: 600,
      },
      {
        src: "/projects/american-university-of-sharjah-aus/04.webp",
        alt: "American University of Sharjah Alumni event",
        width: 900,
        height: 600,
      },
      {
        src: "/projects/american-university-of-sharjah-aus/05.webp",
        alt: "American University of Sharjah Alumni event",
        width: 900,
        height: 600,
      },
      {
        src: "/projects/american-university-of-sharjah-aus/06.webp",
        alt: "American University of Sharjah Alumni event",
        width: 900,
        height: 600,
      },
    ],
  },
  {
    slug: "35m-dome-tent-for-altay-hills-project-2025",
    title: "35m Dome Tent For AlTay Hills Project",
    year: 2025,
    city: "UAE",
    eventType: "Dome Tent Installed",
    summary:
      "Topaz Event Management installed a stunning 35m dome tent for IFA Hotels & Resorts at AlTay Hills Project 2025, creating a perfect event space. Contact Us!",
    image: "/projects/35m-dome-tent-for-altay-hills-project-2025.webp",
    imageAlt:
      "Topaz Events installed 35m Dome Tent for AlTay Hills Project 2024",
    width: 1066,
    height: 600,
    facts: [
      { label: "Category", value: "Private Hospitality" },
      { label: "Event type", value: "Dome Tent Installed" },
      { label: "Location", value: "United Arab Emirates – UAE" },
    ],
    overview: [
      "Take a look at Topaz Event Management latest project for IFA Hotels & Resorts—an impressive 35m diameter dome tent installed for the AlTay Hills development. Watch as we create a beautiful and functional event space, ideal for unforgettable gatherings!",
    ],
    gallery: [
      {
        src: "/projects/35m-dome-tent-for-altay-hills-project-2025/01.webp",
        alt: "Topaz Events installed 35m Dome Tent for AlTay Hills Project 2024",
        width: 1000,
        height: 563,
      },
      {
        src: "/projects/35m-dome-tent-for-altay-hills-project-2025/02.webp",
        alt: "Topaz Events installed 35m Dome Tent for AlTay Hills Project 2024",
        width: 1000,
        height: 563,
      },
      {
        src: "/projects/35m-dome-tent-for-altay-hills-project-2025/03.webp",
        alt: "Topaz Events installed 35m Dome Tent for AlTay Hills Project 2024",
        width: 1000,
        height: 563,
      },
      {
        src: "/projects/35m-dome-tent-for-altay-hills-project-2025/04.webp",
        alt: "Topaz Events installed 35m Dome Tent for AlTay Hills Project 2024",
        width: 1000,
        height: 563,
      },
      {
        src: "/projects/35m-dome-tent-for-altay-hills-project-2025/05.webp",
        alt: "Topaz Events installed 35m Dome Tent for AlTay Hills Project 2024",
        width: 1000,
        height: 563,
      },
      {
        src: "/projects/35m-dome-tent-for-altay-hills-project-2025/06.webp",
        alt: "Topaz Events installed 35m Dome Tent for AlTay Hills Project 2024",
        width: 1000,
        height: 563,
      },
    ],
  },
  {
    slug: "f1h2o-gala-dinner-event-2024",
    title: "F1H2O Gala Dinner Event 2024",
    year: 2024,
    city: "Sharjah",
    eventType: "Gala Dinner Celebration",
    summary:
      "Topaz Events flawlessly managed F1H2O Gala Dinner Event 2024 UAE, creating an unforgettable evening with meticulous planning and execution. Contact Us",
    image: "/projects/f1h2o-gala-dinner-event-2024.webp",
    imageAlt:
      "Topaz Events organized F1H2O Gala Dinner 2024 Event in Sharjah UAE",
    width: 900,
    height: 600,
    facts: [
      { label: "Event type", value: "Gala Dinner Celebration" },
      { label: "Location", value: "Sharjah – UAE" },
    ],
    overview: [
      "Topaz Events proudly orchestrated an exceptional Gala Dinner in Sharjah, UAE, in 2024, commemorating the prestigious F1H2O powerboat racing event. This remarkable evening was a fusion of elegance and excitement, offering guests an immersive experience marked by exquisite dining, inspiring speeches, and a tribute to the extraordinary skill of F1H2O racers.",
    ],
    gallery: [
      {
        src: "/projects/f1h2o-gala-dinner-event-2024/01.webp",
        alt: "Topaz Events organized F1H2O Gala Dinner 2024 Event in Sharjah UAE",
        width: 899,
        height: 600,
      },
      {
        src: "/projects/f1h2o-gala-dinner-event-2024/02.webp",
        alt: "Topaz Events organized F1H2O Gala Dinner 2024 Event in Sharjah UAE",
        width: 899,
        height: 600,
      },
      {
        src: "/projects/f1h2o-gala-dinner-event-2024/03.webp",
        alt: "Topaz Events organized F1H2O Gala Dinner 2024 Event in Sharjah UAE",
        width: 899,
        height: 600,
      },
      {
        src: "/projects/f1h2o-gala-dinner-event-2024/04.webp",
        alt: "Topaz Events organized F1H2O Gala Dinner 2024 Event in Sharjah UAE",
        width: 900,
        height: 600,
      },
      {
        src: "/projects/f1h2o-gala-dinner-event-2024/05.webp",
        alt: "Topaz Events organized F1H2O Championship Sports Event 2024 in Sharjah UAE",
        width: 900,
        height: 600,
      },
      {
        src: "/projects/f1h2o-gala-dinner-event-2024/06.webp",
        alt: "Topaz Events organized F1H2O Gala Dinner 2024 Event in Sharjah UAE",
        width: 900,
        height: 600,
      },
    ],
  },
  {
    slug: "f1h2o-championship-sports-event-2024",
    title: "F1H2O Championship Sports Event 2024",
    year: 2024,
    city: "Sharjah",
    eventType: "Sports Event",
    summary:
      "Topaz Events flawlessly managed F1H2O Championship sports Event 2024 UAE, creating an unforgettable evening with meticulous planning and execution. Contact Us",
    image: "/projects/f1h2o-championship-sports-event-2024.webp",
    imageAlt:
      "Topaz Events organized Sports Event for F1H20 Championship 2024 in Sharjah",
    width: 1089,
    height: 600,
    facts: [
      { label: "Event type", value: "Sports Event" },
      { label: "Location", value: "Sharjah – UAE" },
    ],
    overview: [
      "We’re beyond thrilled to have brought the adrenaline-pumping action of F1H2O World Championship to life with seamless event execution, dynamic setups, and an electrifying atmosphere! At Topaz Event Management, we transform prestigious events into unforgettable experiences! From concept to reality, we make every detail count.",
    ],
    gallery: [
      {
        src: "/projects/f1h2o-championship-sports-event-2024/01.webp",
        alt: "F1H2O Championship Sports Event 2024",
        width: 1000,
        height: 551,
      },
    ],
  },
  {
    slug: "ad-national-theater",
    title: "Abu Dhabi Forum For Promoting Peace",
    year: 2024,
    city: "Abu Dhabi",
    eventType: "National Day Celebrations",
    summary:
      "Topaz Event Management organized Abu Dhabi Forum For Promoting Peace (AD National Theater) at 54th UAE National Day and Erth Zayed at the Abu Dhabi UAE",
    image: "/projects/ad-national-theater.webp",
    imageAlt:
      "54th UAE National Day Celebration & Erth Zayed at Abu Dhabi Forum National Theater | Topaz Events",
    width: 899,
    height: 600,
    facts: [
      { label: "Client", value: "Abu Dhabi Forum for Peace" },
      { label: "Category", value: "Government organisation" },
      { label: "Event type", value: "National Day Celebrations" },
      { label: "Date", value: "December 2024" },
      {
        label: "Location",
        value: "Abu Dhabi National Theater, Abu Dhabi – UAE",
      },
    ],
    overview: [
      "Number of Guests: 500+",
      "To mark the 54th UAE National Day and Erth Zayed, Topaz Event Management was appointed to plan and deliver a prestigious celebration at the Abu Dhabi National Theater for the Abu Dhabi Forum for Peace. This was not just a National Day event, it was a tribute to the values that shaped the UAE: peace, unity, leadership, and innovation.",
      "The event was attended by respected dignitaries, including:",
      "His Highness Sheikh Nahyan bin Mubarak Al Nahyan",
      "Shaykh Abdallah bin Mahfudh ibn Bayyah",
      "As a trusted National Day event management company in the UAE, our goal was to create an experience that felt meaningful, respectful, and memorable—while meeting the highest standards expected at a national-level celebration.",
    ],
    requirements: [
      "The Abu Dhabi Forum for Peace wanted an event that would:",
      "Honor Sheikh Zayed’s legacy in a powerful and respectful way.",
      "Celebrate the 54th UAE National Day with pride and elegance.",
      "Welcome VVIPs and high-level guests with smooth protocol handling.",
      "Engage an audience of 500+ attendees.",
      "Combine UAE heritage with modern event technology.",
      "Deliver a seamless, well-managed experience from start to finish.",
      "The expectation was clear: a flawless National Day celebration executed by a professional corporate event company in Abu Dhabi.",
    ],
    solutionsLead:
      "To fulfill the vision of the Abu Dhabi Forum for Peace, we delivered:",
    solutions: [
      "End-to-end event planning, production, and on-site execution for a high-profile national celebration.",
      "Creative concept development aligned with the UAE National Day and Erth Zayed theme.",
      "Deployment of life-size hologram using advanced Holo Box technology.",
      "Design and installation of interactive digital screens with sensor-based engagement.",
      "Complete technical coordination to ensure a seamless, immersive guest experience.",
      "Topaz Event Management successfully brought the vision of the UAE National Day and Erth Zayed celebration to life, blending heritage with cutting-edge technology. The result was a seamless, memorable experience that honored the nation’s legacy and delighted every guest.",
    ],
    gallery: [
      {
        src: "/projects/ad-national-theater/01.webp",
        alt: "54th UAE National Day Celebration & Erth Zayed at Abu Dhabi National Theater | Topaz Events",
        width: 899,
        height: 600,
      },
      {
        src: "/projects/ad-national-theater/02.webp",
        alt: "54th UAE National Day Celebration & Erth Zayed at Abu Dhabi National Theater | Topaz Events",
        width: 899,
        height: 600,
      },
      {
        src: "/projects/ad-national-theater/03.webp",
        alt: "54th UAE National Day Celebration & Erth Zayed at Abu Dhabi National Theater | Topaz Events",
        width: 899,
        height: 600,
      },
      {
        src: "/projects/ad-national-theater/04.webp",
        alt: "54th UAE National Day Celebration & Erth Zayed at Abu Dhabi National Theater | Topaz Events",
        width: 899,
        height: 600,
      },
      {
        src: "/projects/ad-national-theater/05.webp",
        alt: "54th UAE National Day Celebration & Erth Zayed at Abu Dhabi National Theater | Topaz Events",
        width: 899,
        height: 600,
      },
      {
        src: "/projects/ad-national-theater/06.webp",
        alt: "54th UAE National Day Celebration & Erth Zayed at Abu Dhabi Forum National Theater | Topaz Events",
        width: 899,
        height: 600,
      },
    ],
  },
  {
    slug: "eid-al-etihad-sharjah-national-park-2024",
    title: "53rd Eid Al Etihad Sharjah National Park 2024",
    year: 2024,
    city: "Sharjah",
    eventType: "Festival Event",
    summary:
      "Experience the 53rd Eid Al Etihad at Sharjah National Park with Topaz Events—vibrant LED displays, stunning arches & dynamic effects celebrating unity!",
    image: "/projects/eid-al-etihad-sharjah-national-park-2024.webp",
    imageAlt:
      "Topaz Events organized 53th Eid Al Etihad Sharjah National Park Event in Sharjah UAE",
    width: 960,
    height: 540,
    facts: [
      { label: "Category", value: "Government organisation" },
      { label: "Event type", value: "Festival Event" },
      { label: "Location", value: "Sharjah – UAE" },
    ],
    overview: [
      "Experience the magic of the 53rd Eid Al Etihad celebrations at Sharjah National Park! Topaz Events Management proudly partnered with Sharjah Commerce & Tourism Development Authority to curate this unforgettable event, featuring vibrant LED displays, stunning arches, dynamic lighting, and sound effects that brought the spirit of unity and pride to life.",
    ],
    gallery: [
      {
        src: "/projects/eid-al-etihad-sharjah-national-park-2024/01.webp",
        alt: "Topaz Events organized 53th Eid Al Etihad Sharjah National Park Event in Sharjah UAE",
        width: 960,
        height: 540,
      },
      {
        src: "/projects/eid-al-etihad-sharjah-national-park-2024/02.webp",
        alt: "Topaz Events organized 53th Eid Al Etihad Sharjah National Park Event in Sharjah UAE",
        width: 960,
        height: 540,
      },
      {
        src: "/projects/eid-al-etihad-sharjah-national-park-2024/03.webp",
        alt: "Topaz Events organized 53th Eid Al Etihad Sharjah National Park Event in Sharjah UAE",
        width: 960,
        height: 540,
      },
      {
        src: "/projects/eid-al-etihad-sharjah-national-park-2024/04.webp",
        alt: "Topaz Events organized 53th Eid Al Etihad Sharjah National Park Event in Sharjah UAE",
        width: 960,
        height: 540,
      },
      {
        src: "/projects/eid-al-etihad-sharjah-national-park-2024/05.webp",
        alt: "Topaz Events organized 53th Eid Al Etihad Sharjah National Park Event in Sharjah UAE",
        width: 960,
        height: 540,
      },
      {
        src: "/projects/eid-al-etihad-sharjah-national-park-2024/06.webp",
        alt: "Topaz Events organized 53th Eid Al Etihad Sharjah National Park Event in Sharjah UAE",
        width: 960,
        height: 540,
      },
    ],
  },
  {
    slug: "adx-abu-dhabi-securities-exchange",
    title: "ADX - Abu Dhabi Securities Exchange 2024",
    year: 2024,
    city: "Abu Dhabi",
    eventType: "Conference",
    summary:
      "Topaz Event Management had the honor of organizing the prestigious ADX - Abu Dhabi Securities Exchange conference 2024 Event in Abu Dhabi, UAE.",
    image: "/projects/adx-abu-dhabi-securities-exchange.webp",
    imageAlt: "Topaz Events organized ADX Corporate Event in Abu Dhabi UAE",
    width: 1200,
    height: 800,
    facts: [
      { label: "Event type", value: "Conference" },
      { label: "Date", value: "OCT – 2024" },
      { label: "Location", value: "Abu Dhabi – UAE" },
    ],
    overview: [
      "Topaz Event Management had the pleasure of organizing the ADX Conference! Every detail was carefully planned to ensure a seamless and memorable experience. Thank you, ADX, for trusting us to make this event a success.",
    ],
    gallery: [
      {
        src: "/projects/adx-abu-dhabi-securities-exchange/01.webp",
        alt: "ADX Event organized by Topaz Event Management in Abu Dhabi UAE",
        width: 1000,
        height: 667,
      },
      {
        src: "/projects/adx-abu-dhabi-securities-exchange/02.webp",
        alt: "ADX Event organized by Topaz Event Management in Abu Dhabi UAE",
        width: 1000,
        height: 667,
      },
      {
        src: "/projects/adx-abu-dhabi-securities-exchange/03.webp",
        alt: "ADX Event By Topaz 7",
        width: 1000,
        height: 667,
      },
      {
        src: "/projects/adx-abu-dhabi-securities-exchange/04.webp",
        alt: "ADX Event organized by Topaz Event Management in Abu Dhabi UAE",
        width: 1000,
        height: 667,
      },
      {
        src: "/projects/adx-abu-dhabi-securities-exchange/05.webp",
        alt: "ADX Event organized by Topaz Event Management in Abu Dhabi UAE",
        width: 1000,
        height: 667,
      },
      {
        src: "/projects/adx-abu-dhabi-securities-exchange/06.webp",
        alt: "Topaz Events organized ADX Event in Abu Dhabi UAE",
        width: 900,
        height: 600,
      },
    ],
  },
  {
    slug: "abu-dhabi-media-red-carpet-event",
    title: "Abu Dhabi Media - Red Carpet Event",
    year: 2024,
    city: "Abu Dhabi",
    eventType: "Gala Celebration",
    summary:
      "Topaz Events flawlessly managed the Abu Dhabi Media Red Carpet event, creating an unforgettable evening with meticulous planning and execution. Contact Us",
    image: "/projects/abu-dhabi-media-red-carpet-event.webp",
    imageAlt: "Topaz Event Management Services in Abu Dhabi UAE",
    width: 900,
    height: 600,
    facts: [
      { label: "Category", value: "Government organisation" },
      { label: "Event type", value: "Gala Celebration" },
      { label: "Location", value: "Abu Dhabi – UAE" },
    ],
    overview: [
      "Topaz Events organized Abu Dhabi Media’s Red Carpet event, where stars align and stories come alive. This exclusive video takes you through the heart of our gala, a celebration of the rich tapestry of tales set to grace your screens this Ramadan. Marvel at the elegance, feel the buzz, and get a glimpse of the excitement behind Abu Dhabi Media’s upcoming series.",
    ],
    gallery: [
      {
        src: "/projects/abu-dhabi-media-red-carpet-event/01.webp",
        alt: "Topaz | Event Management Company in Abu Dhabi, Sharjah & Dubai - UAE",
        width: 900,
        height: 600,
      },
      {
        src: "/projects/abu-dhabi-media-red-carpet-event/02.webp",
        alt: "a group of people standing together",
        width: 900,
        height: 600,
      },
      {
        src: "/projects/abu-dhabi-media-red-carpet-event/03.webp",
        alt: "Topaz Events organized Abu Dhabi Red Carpet Event in Abu Dhabi UAE",
        width: 900,
        height: 600,
      },
      {
        src: "/projects/abu-dhabi-media-red-carpet-event/04.webp",
        alt: "Topaz Events organized Abu Dhabi Red Carpet Event in Abu Dhabi UAE",
        width: 900,
        height: 600,
      },
      {
        src: "/projects/abu-dhabi-media-red-carpet-event/05.webp",
        alt: "Topaz Events organized Abu Dhabi Red Carpet Event in Abu Dhabi UAE",
        width: 900,
        height: 600,
      },
      {
        src: "/projects/abu-dhabi-media-red-carpet-event/06.webp",
        alt: "Topaz Events organized Abu Dhabi Red Carpet Event in Abu Dhabi UAE",
        width: 900,
        height: 600,
      },
    ],
  },
  {
    slug: "ajman-university-reunion-gala-dinner-2024",
    title: "Ajman University Alumni Gala Dinner 2024",
    year: 2024,
    city: "Ajman",
    eventType: "Gala Dinner Alumni",
    summary:
      "Topaz Events flawlessly organized Ajman University Alumni Reunion Gala Dinner 2024, creating an unforgettable evening with meticulous planning and execution.",
    image: "/projects/ajman-university-reunion-gala-dinner-2024.webp",
    imageAlt:
      "Topaz events organized Ajman University Alumni Reunion Gala Dinner 2024 in Ajman UAE",
    width: 900,
    height: 600,
    facts: [
      { label: "Category", value: "Government organisation" },
      { label: "Event type", value: "Gala Dinner Alumni" },
      { label: "Location", value: "Ajman – UAE" },
    ],
    overview: [
      "Topaz Events organized Ajman University Alumni Gala Dinner 2024. This enchanting evening brought together alumni from various years for a night filled with laughter, memories, and reconnecting with old friends. This event was not just a dinner; it was a celebration of the enduring connections and the achievements of Ajman University’s alumni.",
    ],
    gallery: [
      {
        src: "/projects/ajman-university-reunion-gala-dinner-2024/01.webp",
        alt: "Topaz events organized Ajman University Alumni Reunion Gala Dinner 2024 in Ajman UAE",
        width: 900,
        height: 600,
      },
      {
        src: "/projects/ajman-university-reunion-gala-dinner-2024/02.webp",
        alt: "Topaz events organized Ajman University Alumni Reunion Gala Dinner 2024 in Ajman UAE",
        width: 900,
        height: 600,
      },
      {
        src: "/projects/ajman-university-reunion-gala-dinner-2024/03.webp",
        alt: "Topaz events organized Ajman University Alumni Reunion Gala Dinner 2024 in Ajman UAE",
        width: 900,
        height: 600,
      },
      {
        src: "/projects/ajman-university-reunion-gala-dinner-2024/04.webp",
        alt: "Topaz events organized Ajman University Alumni Reunion Gala Dinner 2024 in Ajman UAE",
        width: 900,
        height: 600,
      },
      {
        src: "/projects/ajman-university-reunion-gala-dinner-2024/05.webp",
        alt: "Topaz events organized Ajman University Alumni Reunion Gala Dinner 2024 in Ajman UAE",
        width: 900,
        height: 600,
      },
      {
        src: "/projects/ajman-university-reunion-gala-dinner-2024/06.webp",
        alt: "Topaz events organized Ajman University Alumni Reunion Gala Dinner 2024 in Ajman UAE",
        width: 900,
        height: 600,
      },
    ],
  },
  {
    slug: "emirates-auction-2024",
    title: "Emirate Auction 2024",
    year: 2024,
    city: "Sharjah",
    eventType: "Auction Event",
    summary:
      "Welcome to the Emirates Auction 2024, an exclusive event by Topaz! Step into a world where luxury meets prestige and style. Contact us for unforgettable events.",
    image: "/projects/emirates-auction-2024.webp",
    imageAlt: "Emirate Auction 2024",
    width: 899,
    height: 600,
    facts: [
      { label: "Event type", value: "Auction Event" },
      { label: "Date", value: "Mar – 2024" },
      { label: "Location", value: "Sharjah – UAE" },
    ],
    overview: [
      "Welcome to the Emirates Auction, an exclusive event by Topaz Events! Step into a world where luxury meets prestige and style. Discover a remarkable selection of rare car number plates and phone numbers. Designed for enthusiasts and collectors, this event redefines exclusivity.",
    ],
    gallery: [
      {
        src: "/projects/emirates-auction-2024/01.webp",
        alt: "Topaz Events Organized Emirates Auction 2024 Event in Sharjah UAE",
        width: 899,
        height: 600,
      },
      {
        src: "/projects/emirates-auction-2024/02.webp",
        alt: "Topaz Events Organized Emirates Auction 2024 Event in Sharjah UAE",
        width: 899,
        height: 600,
      },
      {
        src: "/projects/emirates-auction-2024/03.webp",
        alt: "Topaz Events Organized Emirates Auction 2024 Event in Sharjah UAE",
        width: 899,
        height: 600,
      },
      {
        src: "/projects/emirates-auction-2024/04.webp",
        alt: "Topaz Events Organized Emirates Auction 2024 Event in Sharjah UAE",
        width: 899,
        height: 600,
      },
      {
        src: "/projects/emirates-auction-2024/05.webp",
        alt: "Topaz Events Organized Emirates Auction 2024 Event in Sharjah UAE",
        width: 899,
        height: 600,
      },
      {
        src: "/projects/emirates-auction-2024/06.webp",
        alt: "Topaz Events Organized Emirates Auction 2024 Event in Sharjah UAE",
        width: 899,
        height: 600,
      },
    ],
  },
  {
    slug: "university-of-sharjah-alumni-2024-event",
    title: "University of Sharjah Alumni 2024",
    year: 2024,
    city: "Sharjah",
    eventType: "Alumni Event Gala Dinner",
    summary:
      "Topaz Events successfully organized the University of Sharjah Alumni 2024 Event creating a memorable and seamless experience with expert planning and execution.",
    image: "/projects/university-of-sharjah-alumni-2024-event.webp",
    imageAlt: "Topaz Events organized University Of Sharjah Alumni 2024",
    width: 898,
    height: 600,
    facts: [
      { label: "Category", value: "Government organisation" },
      { label: "Event type", value: "Alumni Event Gala Dinner" },
      { label: "Location", value: "Sharjah – UAE" },
    ],
    overview: [
      "Topaz Events organized University of Sharjah Alumni Event 2024! Join us in reliving the unforgettable moments from this year’s grand alumni gathering. The University of Sharjah proudly welcomed its esteemed alumni back to campus for an eventful day full of memories, achievements, and future aspirations.",
    ],
    gallery: [
      {
        src: "/projects/university-of-sharjah-alumni-2024-event/01.webp",
        alt: "Topaz Events organized University Of Sharjah Alumni 2024",
        width: 898,
        height: 600,
      },
      {
        src: "/projects/university-of-sharjah-alumni-2024-event/02.webp",
        alt: "Topaz Events organized University Of Sharjah Alumni 2024",
        width: 898,
        height: 600,
      },
      {
        src: "/projects/university-of-sharjah-alumni-2024-event/03.webp",
        alt: "Topaz Events organized University Of Sharjah Alumni 2024",
        width: 400,
        height: 600,
      },
      {
        src: "/projects/university-of-sharjah-alumni-2024-event/04.webp",
        alt: "Topaz Events organized University Of Sharjah Alumni 2024",
        width: 400,
        height: 600,
      },
      {
        src: "/projects/university-of-sharjah-alumni-2024-event/05.webp",
        alt: "Topaz Events organized University Of Sharjah Alumni 2024",
        width: 898,
        height: 600,
      },
      {
        src: "/projects/university-of-sharjah-alumni-2024-event/06.webp",
        alt: "Topaz Events organized University Of Sharjah Alumni 2024",
        width: 898,
        height: 600,
      },
    ],
  },
  {
    slug: "dubai-officers-club-asian-cup-2024-event",
    title: "Dubai Officer's Club Asian Cup 2024 Event",
    year: 2024,
    city: "Dubai",
    eventType: "Sports Event",
    summary:
      "Topaz Events expertly managed the Dubai Officers Club Asian Cup 2024 Event, ensuring a seamless and memorable experience with top-tier planning and execution.",
    image: "/projects/dubai-officers-club-asian-cup-2024-event.webp",
    imageAlt:
      "Topaz Events organizedDubai Officers Club - Asian U20 Athletics Championships 2024 Event in Dubai UAE",
    width: 899,
    height: 600,
    facts: [
      { label: "Category", value: "Government organisation" },
      { label: "Event type", value: "Sports Event" },
      { label: "Date", value: "Jun – 2024" },
      { label: "Location", value: "Dubai – UAE" },
    ],
    overview: [
      "Topaz Events is honored to host the incredible Opening Ceremony of Dubai Officers Club – Asian U20 Athletics Championships 2024.",
      "We extend our heartfelt thanks to the UAE Athletics Federation and the Dubai Police Officers Club for making this event a resounding success.",
    ],
    gallery: [
      {
        src: "/projects/dubai-officers-club-asian-cup-2024-event/01.webp",
        alt: "Topaz Events organizedDubai Officers Club - Asian U20 Athletics Championships 2024 Event in Dubai UAE",
        width: 899,
        height: 600,
      },
      {
        src: "/projects/dubai-officers-club-asian-cup-2024-event/02.webp",
        alt: "Topaz Events organizedDubai Officers Club - Asian U20 Athletics Championships 2024 Event in Dubai UAE",
        width: 899,
        height: 600,
      },
      {
        src: "/projects/dubai-officers-club-asian-cup-2024-event/03.webp",
        alt: "Topaz Events organizedDubai Officers Club - Asian U20 Athletics Championships 2024 Event in Dubai UAE",
        width: 1000,
        height: 667,
      },
      {
        src: "/projects/dubai-officers-club-asian-cup-2024-event/04.webp",
        alt: "Topaz Events organizedDubai Officers Club - Asian U20 Athletics Championships 2024 Event in Dubai UAE",
        width: 900,
        height: 600,
      },
      {
        src: "/projects/dubai-officers-club-asian-cup-2024-event/05.webp",
        alt: "Topaz Events organizedDubai Officers Club - Asian U20 Athletics Championships 2024 Event in Dubai UAE",
        width: 900,
        height: 600,
      },
      {
        src: "/projects/dubai-officers-club-asian-cup-2024-event/06.webp",
        alt: "Topaz Events organizedDubai Officers Club - Asian U20 Athletics Championships 2024 Event in Dubai UAE",
        width: 899,
        height: 600,
      },
    ],
  },
  {
    slug: "binghatti-mercedes",
    title: "Binghatti X Mercedes - Drone Show Event",
    year: 2024,
    city: "UAE",
    eventType: "Drone Show Event",
    summary:
      "Topaz Events organized the Binghatti X Mercedes Drone Show Event, delivering a spectacular event with cutting-edge drone displays and seamless execution.",
    image: "/projects/binghatti-mercedes.webp",
    imageAlt:
      "Topaz Events organized Binghatti X Mercedes Drone Show Event 2024 in UAE",
    width: 900,
    height: 600,
    facts: [
      { label: "Category", value: "Private organisation" },
      { label: "Event type", value: "Drone Show Event" },
      { label: "Location", value: "United Arab Emirates – UAE" },
    ],
    overview: [
      "Prepare to be amazed! Our stunning drone display for Binghatti X Mercedes redefined the night sky with a breathtaking fusion of luxury and innovation. A symphony of lights and cutting-edge technology came together to create a mesmerizing visual experience, celebrating progress and elegance. This was more than a show from Topaz Events, it was a testament to the power of imagination and the future of entertainment.",
    ],
    gallery: [
      {
        src: "/projects/binghatti-mercedes/01.webp",
        alt: "Topaz Events organized Binghatti X Mercedes Drone Show Event 2024 in UAE",
        width: 1000,
        height: 541,
      },
      {
        src: "/projects/binghatti-mercedes/02.webp",
        alt: "Topaz Events organized Binghatti X Mercedes Drone Show Event 2024 in UAE",
        width: 1000,
        height: 536,
      },
      {
        src: "/projects/binghatti-mercedes/03.webp",
        alt: "Topaz Events organized Binghatti X Mercedes Drone Show Event 2024 in UAE",
        width: 1000,
        height: 554,
      },
      {
        src: "/projects/binghatti-mercedes/04.webp",
        alt: "Topaz Events organized Binghatti X Mercedes Drone Show Event 2024 in UAE",
        width: 1000,
        height: 554,
      },
      {
        src: "/projects/binghatti-mercedes/05.webp",
        alt: "Topaz Events organized Binghatti X Mercedes Drone Show Event 2024 in UAE",
        width: 1000,
        height: 527,
      },
      {
        src: "/projects/binghatti-mercedes/06.webp",
        alt: "Topaz Events organized Binghatti X Mercedes Drone Show Event 2024 in UAE",
        width: 1000,
        height: 556,
      },
    ],
    video: {
      youtubeId: "wCdgguL3n4k",
      title: "Binghatti X Mercedes with TOPAZ",
      description:
        "A drone display staged over Dubai for the Binghatti and Mercedes-Benz partnership reveal.",
      uploadDate: "2024-02-22",
      duration: "PT39S",
    },
  },
  {
    slug: "abu-dhabi-media-stand-2024",
    title: "Abu Dhabi Media Exhibition Booth 2024",
    year: 2024,
    city: "Abu Dhabi",
    eventType: "Exhibition Booth",
    summary:
      "Topaz Event Management designed a creative, modern, and functional exhibition booth for Abu Dhabi Media Network, delivering a memorable visitor experience.",
    image: "/projects/abu-dhabi-media-stand-2024.webp",
    imageAlt:
      "Topaz Events designed and delivered the Abu Dhabi Media Exhibition Booth 2024 in Abu Dhabi, UAE.",
    width: 1213,
    height: 600,
    facts: [
      { label: "Category", value: "Government organisation" },
      { label: "Event type", value: "Exhibition Booth" },
      { label: "Location", value: "Abu Dhabi – UAE" },
    ],
    overview: [
      "Topaz Event Management had the honor of designing and delivering an innovative exhibition booth that blended creativity, modernity, and functionality to create a truly memorable experience for visitors. From the initial concept to the final details, our team ensured every element aligned with Abu Dhabi Media Network’s mission and vision.",
    ],
    gallery: [
      {
        src: "/projects/abu-dhabi-media-stand-2024/01.webp",
        alt: "Topaz Events designed and delivered the Abu Dhabi Media Exhibition Booth 2024 in Abu Dhabi, UAE.",
        width: 1000,
        height: 505,
      },
      {
        src: "/projects/abu-dhabi-media-stand-2024/02.webp",
        alt: "Topaz Events designed and delivered the Abu Dhabi Media Exhibition Booth 2024 in Abu Dhabi, UAE.",
        width: 1000,
        height: 501,
      },
      {
        src: "/projects/abu-dhabi-media-stand-2024/03.webp",
        alt: "Topaz Events designed and delivered the Abu Dhabi Media Exhibition Booth 2024 in Abu Dhabi, UAE.",
        width: 1000,
        height: 508,
      },
      {
        src: "/projects/abu-dhabi-media-stand-2024/04.webp",
        alt: "Topaz Events designed and delivered the Abu Dhabi Media Exhibition Booth 2024 in Abu Dhabi, UAE.",
        width: 1000,
        height: 503,
      },
      {
        src: "/projects/abu-dhabi-media-stand-2024/05.webp",
        alt: "Topaz Events designed and delivered the Abu Dhabi Media Exhibition Booth 2024 in Abu Dhabi, UAE.",
        width: 1000,
        height: 507,
      },
      {
        src: "/projects/abu-dhabi-media-stand-2024/06.webp",
        alt: "Topaz Events designed and delivered the Abu Dhabi Media Exhibition Booth 2024 in Abu Dhabi, UAE.",
        width: 1000,
        height: 506,
      },
    ],
  },
  {
    slug: "dubai-police-swat-challenge-2024",
    title: "Dubai Police SWAT Challenge 2024",
    year: 2024,
    city: "UAE",
    eventType: "Sports Event",
    summary:
      "Topaz Event managed the Dubai Police SWAT Challenge 2024 event, supporting their participation in the SWAT Challenge with seamless planning and execution.",
    image: "/projects/dubai-police-swat-challenge-2024.webp",
    imageAlt:
      "Topaz Events organized Dubai Police SWAT Challenge 2024 Sports Event in Dubai, UAE.",
    width: 1066,
    height: 600,
    facts: [
      { label: "Category", value: "Government organisation" },
      { label: "Event type", value: "Sports Event" },
      { label: "Location", value: "United Arab Emirate – UAE" },
    ],
    overview: [
      "We were honored to organize the Dubai Police SWAT Challenge Sports 2024 event, delivering a seamless and impactful experience. As the official event organizers, Topaz Events ensured flawless execution, bringing together top tactical teams for this prestigious competition in Dubai, UAE. We take pride in our expertise in managing high-profile events with precision and excellence.",
    ],
    gallery: [
      {
        src: "/projects/dubai-police-swat-challenge-2024/01.webp",
        alt: "Topaz Events organized Dubai Police SWAT Challenge 2024 Sports Event in Dubai, UAE.",
        width: 1000,
        height: 563,
      },
      {
        src: "/projects/dubai-police-swat-challenge-2024/02.webp",
        alt: "Topaz Events organized Dubai Police SWAT Challenge 2024 Sports Event in Dubai, UAE.",
        width: 1000,
        height: 563,
      },
      {
        src: "/projects/dubai-police-swat-challenge-2024/03.webp",
        alt: "Topaz Events organized Dubai Police SWAT Challenge 2024 Sports Event in Dubai, UAE.",
        width: 1000,
        height: 563,
      },
      {
        src: "/projects/dubai-police-swat-challenge-2024/04.webp",
        alt: "Topaz Events organized Dubai Police SWAT Challenge 2024 Sports Event in Dubai, UAE.",
        width: 1000,
        height: 563,
      },
      {
        src: "/projects/dubai-police-swat-challenge-2024/05.webp",
        alt: "Topaz Events organized Dubai Police SWAT Challenge 2024 Sports Event in Dubai, UAE.",
        width: 1000,
        height: 563,
      },
      {
        src: "/projects/dubai-police-swat-challenge-2024/06.webp",
        alt: "Topaz Events organized Dubai Police SWAT Challenge 2024 Sports Event in Dubai, UAE.",
        width: 1000,
        height: 563,
      },
    ],
  },
  {
    slug: "sam-souq-al-haraj-event-2024",
    title: "Sharjah Asset Management - Souq Al Haraj Event 2024",
    year: 2024,
    city: "Sharjah",
    eventType: "15th Anniversary event",
    summary:
      "Topaz Event Management showcased Sharjah Asset Management's 15th Anniversary at Souq Al Haraj 2024, delivering a seamlessly organized and memorable celebration.",
    image: "/projects/sam-souq-al-haraj-event-2024.webp",
    imageAlt:
      "Topaz Events organized Sharjah Asset Management - Souq Al Haraj Event 2024 in Sharjah UAE",
    width: 899,
    height: 600,
    facts: [
      { label: "Category", value: "Government organisation" },
      { label: "Event type", value: "15th Anniversary event" },
      { label: "Location", value: "Sharjah – UAE" },
    ],
    overview: [
      "Topaz Event Management proudly presents highlights from Sharjah Asset Management’s 15th Anniversary event at Souq Al Haraj! We were honored to organize this landmark celebration, ensuring every moment was crafted with care. A big thank you to Sharjah Asset Management for trusting us with this important occasion.",
    ],
    gallery: [
      {
        src: "/projects/sam-souq-al-haraj-event-2024/01.webp",
        alt: "Topaz Events organized Sharjah Asset Management - Souq Al Haraj Event 2024 in Sharjah UAE",
        width: 900,
        height: 600,
      },
      {
        src: "/projects/sam-souq-al-haraj-event-2024/02.webp",
        alt: "Topaz Events organized Sharjah Asset Management - Souq Al Haraj Event 2024 in Sharjah UAE",
        width: 600,
        height: 1009,
      },
      {
        src: "/projects/sam-souq-al-haraj-event-2024/03.webp",
        alt: "Topaz Events organized Sharjah Asset Management - Souq Al Haraj Event 2024 in Sharjah UAE",
        width: 900,
        height: 600,
      },
      {
        src: "/projects/sam-souq-al-haraj-event-2024/04.webp",
        alt: "Topaz Events organized Sharjah Asset Management - Souq Al Haraj Event 2024 in Sharjah UAE",
        width: 900,
        height: 600,
      },
      {
        src: "/projects/sam-souq-al-haraj-event-2024/05.webp",
        alt: "Topaz Events organized Sharjah Asset Management - Souq Al Haraj Event 2024 in Sharjah UAE",
        width: 900,
        height: 600,
      },
      {
        src: "/projects/sam-souq-al-haraj-event-2024/06.webp",
        alt: "Topaz Events organized Sharjah Asset Management - Souq Al Haraj Event 2024 in Sharjah UAE",
        width: 900,
        height: 600,
      },
    ],
  },
  {
    slug: "sam-souq-al-jubail-event-2024",
    title: "Sharjah Asset Management - Souq Al Jubail Event 2024",
    year: 2024,
    city: "Sharjah",
    eventType: "15th Anniversary event",
    summary:
      "Topaz Event Management showcased Sharjah Asset Management's 15th Anniversary at Souq Al Jubail 2024, delivering a seamlessly organized and memorable celebration.",
    image: "/projects/sam-souq-al-jubail-event-2024.webp",
    imageAlt:
      "Topaz Events organized Sharjah Asset Management - Souq Al Jubail Event 2024 in Sharjah UAE",
    width: 900,
    height: 600,
    facts: [
      { label: "Category", value: "Government organisation" },
      { label: "Event type", value: "15th Anniversary event" },
      { label: "Location", value: "Sharjah – UAE" },
    ],
    overview: [
      "Topaz Event Management had the privilege of organizing Sharjah Asset Management’s 15th Anniversary at Souq Al Jubail, featuring a stunning laser mapping show projected onto the building. It was an incredible night filled with celebration and visual splendor. Thank you, Sharjah Asset Management, for the opportunity to craft such a unique experience!",
    ],
    gallery: [
      {
        src: "/projects/sam-souq-al-jubail-event-2024/01.webp",
        alt: "Topaz Events organized Sharjah Asset Management - Souq Al Jubail Event 2024 in Sharjah UAE",
        width: 900,
        height: 600,
      },
      {
        src: "/projects/sam-souq-al-jubail-event-2024/02.webp",
        alt: "Topaz Events organized Sharjah Asset Management - Souq Al Jubail Event 2024 in Sharjah UAE",
        width: 900,
        height: 599,
      },
      {
        src: "/projects/sam-souq-al-jubail-event-2024/03.webp",
        alt: "Topaz Events organized Sharjah Asset Management - Souq Al Jubail Event 2024 in Sharjah UAE",
        width: 900,
        height: 600,
      },
      {
        src: "/projects/sam-souq-al-jubail-event-2024/04.webp",
        alt: "Topaz Events organized Sharjah Asset Management - Souq Al Jubail Event 2024 in Sharjah UAE",
        width: 900,
        height: 600,
      },
      {
        src: "/projects/sam-souq-al-jubail-event-2024/05.webp",
        alt: "Topaz Events organized Sharjah Asset Management - Souq Al Jubail Event 2024 in Sharjah UAE",
        width: 900,
        height: 600,
      },
      {
        src: "/projects/sam-souq-al-jubail-event-2024/06.webp",
        alt: "Topaz Events organized Sharjah Asset Management - Souq Al Jubail Event 2024 in Sharjah UAE",
        width: 900,
        height: 600,
      },
    ],
  },
  {
    slug: "shams-ramadan-festival-2024",
    title: "Shams Ramadan Festival 2024",
    year: 2024,
    city: "Sharjah",
    eventType: "Festival Event",
    summary:
      "Topaz Event organized Shams Ramadan Festival 2024 Sharjah. Experience our souq-themed event, celebrating culture, tradition, and community in a vibrant setting.",
    image: "/projects/shams-ramadan-festival-2024.webp",
    imageAlt:
      "Topaz Events organized Shams Ramadan Festival 2024 in Sharjah UAE",
    width: 900,
    height: 600,
    facts: [
      { label: "Category", value: "Government organisation" },
      { label: "Event type", value: "Festival Event" },
      { label: "Location", value: "Sharjah – UAE" },
    ],
    overview: [
      "Topaz Events organized the Shams Ramadan Festival 2024 in Sharjah UAE. Immerse yourself in our souq-themed event, where cultural tradition and community come to life. Explore vibrant market stalls, enjoy mesmerizing performances, and discover the magic behind the festival’s preparations.",
    ],
    gallery: [
      {
        src: "/projects/shams-ramadan-festival-2024/01.webp",
        alt: "Topaz Events organized Shams Ramadan Festival 2024 in Sharjah UAE",
        width: 900,
        height: 600,
      },
      {
        src: "/projects/shams-ramadan-festival-2024/02.webp",
        alt: "Topaz Events organized Shams Ramadan Festival 2024 in Sharjah UAE",
        width: 900,
        height: 600,
      },
      {
        src: "/projects/shams-ramadan-festival-2024/03.webp",
        alt: "Topaz Events organized Shams Ramadan Festival 2024 in Sharjah UAE",
        width: 899,
        height: 600,
      },
      {
        src: "/projects/shams-ramadan-festival-2024/04.webp",
        alt: "Topaz Events organized Shams Ramadan Festival 2024 in Sharjah UAE",
        width: 899,
        height: 600,
      },
      {
        src: "/projects/shams-ramadan-festival-2024/05.webp",
        alt: "Topaz Events organized Shams Ramadan Festival 2024 in Sharjah UAE",
        width: 900,
        height: 600,
      },
      {
        src: "/projects/shams-ramadan-festival-2024/06.webp",
        alt: "Topaz Events organized Shams Ramadan Festival 2024 in Sharjah UAE",
        width: 900,
        height: 600,
      },
    ],
  },
  {
    slug: "shukran-annual-ceremony-2024",
    title: "Shukran Annual Ceremony Event 2024",
    year: 2024,
    city: "Sharjah",
    eventType: "Annual Ceremony",
    summary:
      "Topaz Events organized annual Shukran Annual Ceremony event 2024 a night of gratitude, elegance & unforgettable moments. Join Us at Topaz Events in Sharjah UAE.",
    image: "/projects/shukran-annual-ceremony-2024.webp",
    imageAlt:
      "Topaz Events organized Shukran Annual Ceremony Event 2024 in Sharjah UAE",
    width: 1199,
    height: 600,
    facts: [
      { label: "Event type", value: "Annual Ceremony" },
      { label: "Location", value: "Sharjah – UAE" },
    ],
    overview: [
      "Welcome to the visual journey of the annual Shukran ceremony – a night where gratitude and elegance intertwine to create an unforgettable experience. Topaz Events bring you the highlights from this spectacular event, showcasing the meticulous planning, stunning décor, and the vibrant atmosphere that made the evening truly magical.",
    ],
    gallery: [
      {
        src: "/projects/shukran-annual-ceremony-2024/01.webp",
        alt: "Topaz Events organized Shukran Annual Ceremony Event 2024 in Sharjah UAE",
        width: 900,
        height: 600,
      },
      {
        src: "/projects/shukran-annual-ceremony-2024/02.webp",
        alt: "Topaz Events organized Shukran Annual Ceremony Event 2024 in Sharjah UAE",
        width: 900,
        height: 600,
      },
      {
        src: "/projects/shukran-annual-ceremony-2024/03.webp",
        alt: "Topaz Events organized Shukran Annual Ceremony Event 2024 in Sharjah UAE",
        width: 900,
        height: 600,
      },
      {
        src: "/projects/shukran-annual-ceremony-2024/04.webp",
        alt: "Topaz Events organized Shukran Annual Ceremony Event 2024 in Sharjah UAE",
        width: 900,
        height: 600,
      },
      {
        src: "/projects/shukran-annual-ceremony-2024/05.webp",
        alt: "Topaz Events organized Shukran Annual Ceremony Event 2024 in Sharjah UAE",
        width: 1000,
        height: 488,
      },
      {
        src: "/projects/shukran-annual-ceremony-2024/06.webp",
        alt: "Topaz Events organized Shukran Annual Ceremony Event 2024 in Sharjah UAE",
        width: 1000,
        height: 486,
      },
    ],
  },
  {
    slug: "shams-alfayy-restaurant-ambiance-2024",
    title: "Shams Media AlFayy Restaurant & Cafe Ambiance 2024",
    year: 2024,
    city: "Sharjah",
    eventType: "Restaurant Ambiance",
    summary:
      "Topaz Events organized Shams AlFayy Restaurant & Cafe Ambiance – Elevating dining into an unforgettable experience with stunning designs & immersive atmospheres",
    image: "/projects/shams-alfayy-restaurant-ambiance-2024.webp",
    imageAlt:
      "AlFayy Restaurant & Café Ambiance by Topaz Events for Shams Media in Sharjah UAE",
    width: 900,
    height: 601,
    facts: [
      { label: "Event type", value: "Restaurant Ambiance" },
      { label: "Location", value: "Sharjah – UAE" },
    ],
    overview: [
      "Shams AlFayy Restaurant Ambiance by Topaz Events – Crafted for Shams Media. Elevating dining into an artful experience! Step into our latest creations, where every detail tells a story of culinary delight and immersive ambiance. More than just eateries, these spaces blend taste and aesthetics, sparking unforgettable moments. From concept to execution, we transform ordinary locations into extraordinary destinations where food, ambiance, and conversation come together in perfect harmony.",
    ],
    gallery: [
      {
        src: "/projects/shams-alfayy-restaurant-ambiance-2024/01.webp",
        alt: "AlFayy Restaurant & Café Ambiance by Topaz Events for Shams Media in Sharjah UAE",
        width: 900,
        height: 601,
      },
      {
        src: "/projects/shams-alfayy-restaurant-ambiance-2024/02.webp",
        alt: "AlFayy Restaurant & Café Ambiance by Topaz Events for Shams Media in Sharjah UAE",
        width: 900,
        height: 601,
      },
      {
        src: "/projects/shams-alfayy-restaurant-ambiance-2024/03.webp",
        alt: "AlFayy Restaurant & Café Ambiance by Topaz Events for Shams Media in Sharjah UAE",
        width: 900,
        height: 601,
      },
      {
        src: "/projects/shams-alfayy-restaurant-ambiance-2024/04.webp",
        alt: "AlFayy Restaurant & Café Ambiance by Topaz Events for Shams Media in Sharjah UAE",
        width: 900,
        height: 601,
      },
      {
        src: "/projects/shams-alfayy-restaurant-ambiance-2024/05.webp",
        alt: "AlFayy Restaurant & Café Ambiance by Topaz Events for Shams Media in Sharjah UAE",
        width: 900,
        height: 601,
      },
      {
        src: "/projects/shams-alfayy-restaurant-ambiance-2024/06.webp",
        alt: "AlFayy Restaurant & Café Ambiance by Topaz Events for Shams Media in Sharjah UAE",
        width: 900,
        height: 601,
      },
    ],
  },
  {
    slug: "sicai-2024",
    title: "Sharjah International Conference (AI & Linguistics) 2024",
    year: 2024,
    city: "Sharjah",
    eventType: "Conference Event",
    summary:
      "Topaz Event Management proudly organized the Sharjah Intl. Conference on AI & Linguistics at AUS, uniting experts to explore AI & language. Stay tuned for more!",
    image: "/projects/sicai-2024.webp",
    imageAlt:
      "Topaz Event Management proudly organized the Sharjah Intl. Conference on AI & Linguistics at AUS in Sharjah UAE",
    width: 1225,
    height: 600,
    facts: [
      { label: "Category", value: "Government organisation" },
      { label: "Event type", value: "Conference Event" },
      { label: "Location", value: "Sharjah – UAE" },
    ],
    overview: [
      "Topaz Event Management is excited to share highlights from the Sharjah International Conference Day on AI & Linguistics at the American University of Sharjah! We were honored to organize this prestigious event, which brought together experts and thought leaders to explore the intersections of AI and language. Stay tuned for more event highlights!",
    ],
    gallery: [
      {
        src: "/projects/sicai-2024/01.webp",
        alt: "Topaz Event Management proudly organized the Sharjah Intl. Conference on AI & Linguistics at AUS in Sharjah UAE",
        width: 1000,
        height: 510,
      },
      {
        src: "/projects/sicai-2024/02.webp",
        alt: "Topaz Event Management proudly organized the Sharjah Intl. Conference on AI & Linguistics at AUS in Sharjah UAE",
        width: 1000,
        height: 505,
      },
      {
        src: "/projects/sicai-2024/03.webp",
        alt: "Topaz Event Management proudly organized the Sharjah Intl. Conference on AI & Linguistics at AUS in Sharjah UAE",
        width: 1000,
        height: 508,
      },
      {
        src: "/projects/sicai-2024/04.webp",
        alt: "Topaz Event Management proudly organized the Sharjah Intl. Conference on AI & Linguistics at AUS in Sharjah UAE",
        width: 1000,
        height: 477,
      },
      {
        src: "/projects/sicai-2024/05.webp",
        alt: "Topaz Event Management proudly organized the Sharjah Intl. Conference on AI & Linguistics at AUS in Sharjah UAE",
        width: 1000,
        height: 510,
      },
      {
        src: "/projects/sicai-2024/06.webp",
        alt: "Topaz Event Management proudly organized the Sharjah Intl. Conference on AI & Linguistics at AUS in Sharjah UAE",
        width: 1000,
        height: 511,
      },
    ],
  },
  {
    slug: "sharjah-chamber-of-commerce-industry-annual-ceremony-2024",
    title: "Sharjah Chamber of Commerce & Industry Annual Ceremony 2024",
    year: 2024,
    city: "Sharjah",
    eventType: "Annual Ceremony",
    summary:
      "Experience the Sharjah Chamber of Commerce & Industry Annual Ceremony, flawlessly executed by Topaz Event Management in Sharjah, UAE.",
    image:
      "/projects/sharjah-chamber-of-commerce-industry-annual-ceremony-2024.webp",
    imageAlt:
      "Topaz Events organized Sharjah Chamber of Commerce & Industry Annual Ceremony Event in Sharjah, UAE.",
    width: 1047,
    height: 600,
    facts: [
      { label: "Category", value: "Government organisation" },
      { label: "Event type", value: "Annual Ceremony" },
      { label: "Location", value: "Sharjah – UAE" },
    ],
    overview: [
      "Experience the Sharjah Chamber of Commerce & Industry Annual Ceremony, flawlessly executed by Topaz Events in Sharjah, UAE. This highlight reel showcases a prestigious evening of business excellence, networking, and celebration, uniting industry leaders to honor achievements and shape the future.",
    ],
    gallery: [
      {
        src: "/projects/sharjah-chamber-of-commerce-industry-annual-ceremony-2024/01.webp",
        alt: "Topaz Events organized Sharjah Chamber of Commerce & Industry Annual Ceremony Event in Sharjah, UAE.",
        width: 1000,
        height: 544,
      },
      {
        src: "/projects/sharjah-chamber-of-commerce-industry-annual-ceremony-2024/02.webp",
        alt: "Topaz Events organized Sharjah Chamber of Commerce & Industry Annual Ceremony Event in Sharjah, UAE.",
        width: 1000,
        height: 543,
      },
      {
        src: "/projects/sharjah-chamber-of-commerce-industry-annual-ceremony-2024/03.webp",
        alt: "Topaz Events organized Sharjah Chamber of Commerce & Industry Annual Ceremony Event in Sharjah, UAE.",
        width: 1000,
        height: 566,
      },
      {
        src: "/projects/sharjah-chamber-of-commerce-industry-annual-ceremony-2024/04.webp",
        alt: "Topaz Events organized Sharjah Chamber of Commerce & Industry Annual Ceremony Event in Sharjah, UAE.",
        width: 1000,
        height: 564,
      },
      {
        src: "/projects/sharjah-chamber-of-commerce-industry-annual-ceremony-2024/05.webp",
        alt: "Topaz Events organized Sharjah Chamber of Commerce & Industry Annual Ceremony Event in Sharjah, UAE.",
        width: 1000,
        height: 564,
      },
      {
        src: "/projects/sharjah-chamber-of-commerce-industry-annual-ceremony-2024/06.webp",
        alt: "Topaz Events organized Sharjah Chamber of Commerce & Industry Annual Ceremony Event in Sharjah, UAE.",
        width: 1000,
        height: 564,
      },
    ],
  },
  {
    slug: "emirates-auction",
    title: "Emirates Auction Dubai 2023",
    year: 2023,
    city: "Dubai",
    eventType: "Auction Event",
    summary:
      "Topaz Events partnered with Emirates Auction Dubai to deliver seamless, high-profile auction events with expert planning, AV rentals, and flawless execution.",
    image: "/projects/emirates-auction.webp",
    imageAlt: "Topaz Event Management | Audio-Visual Companies Dubai - UAE",
    width: 1400,
    height: 933,
    facts: [
      { label: "Category", value: "Government organisation" },
      { label: "Event type", value: "Auction Event" },
      { label: "Location", value: "Dubai – UAE" },
    ],
    overview: [
      "Topaz Event Management collaborated with Emirates Auction to organize seamless and high-profile auction events. With our expertise in event planning, AV rentals, and logistics, we ensured a well-structured and engaging experience for bidders and attendees. Our commitment to excellence and attention to detail contributed to the success of these prestigious events.",
    ],
    gallery: [
      {
        src: "/projects/emirates-auction/01.webp",
        alt: "Topaz Event Management Organized Emirates Auction Dubai Event in UAE",
        width: 900,
        height: 600,
      },
      {
        src: "/projects/emirates-auction/02.webp",
        alt: "2. Topaz Events Emirates Auction",
        width: 784,
        height: 600,
      },
      {
        src: "/projects/emirates-auction/03.webp",
        alt: "Topaz Event Management Organized Emirates Auction Dubai Event in UAE",
        width: 900,
        height: 600,
      },
      {
        src: "/projects/emirates-auction/04.webp",
        alt: "Topaz Event Management Organized Emirates Auction Dubai Event in UAE",
        width: 900,
        height: 600,
      },
      {
        src: "/projects/emirates-auction/05.webp",
        alt: "Topaz Event Management Organized Emirates Auction Dubai Event in UAE",
        width: 900,
        height: 600,
      },
      {
        src: "/projects/emirates-auction/06.webp",
        alt: "Topaz Event Management Organized Emirates Auction Dubai Event in UAE",
        width: 885,
        height: 600,
      },
    ],
  },
  {
    slug: "sharjah-taxi",
    title: "Sharjah Taxi New Logo Launch",
    year: 2023,
    city: "Sharjah",
    eventType: "Corporate Event",
    summary:
      "Topaz Events proudly organized the Sharjah Taxi New Logo Launch Event, showcasing a symbol of trust, reliability, and quality service in Sharjah, UAE.",
    image: "/projects/sharjah-taxi.webp",
    imageAlt:
      "Topaz Events organized Sharjah Taxi - New Logo Launch in Sharjah UAE",
    width: 1064,
    height: 600,
    facts: [
      { label: "Category", value: "Government organisation" },
      { label: "Event type", value: "Corporate Event" },
      { label: "Location", value: "Sharjah – UAE" },
    ],
    overview: [
      "Topaz Events successfully organized the Sharjah Taxi New Logo Launch in Sharjah, UAE, marking a new era of trust, reliability, and quality service. With expert event planning, seamless execution, and engaging presentations, we ensured a memorable launch that highlighted Sharjah Taxi’s commitment to excellence.",
    ],
    gallery: [
      {
        src: "/projects/sharjah-taxi/01.webp",
        alt: "Topaz Events organized Sharjah Taxi - New Logo Launch in Sharjah UAE",
        width: 738,
        height: 600,
      },
      {
        src: "/projects/sharjah-taxi/02.webp",
        alt: "Topaz Events organized Sharjah Taxi - New Logo Launch in Sharjah UAE",
        width: 1000,
        height: 570,
      },
      {
        src: "/projects/sharjah-taxi/03.webp",
        alt: "Topaz Events organized Sharjah Taxi - New Logo Launch in Sharjah UAE",
        width: 962,
        height: 600,
      },
      {
        src: "/projects/sharjah-taxi/04.webp",
        alt: "Topaz Events organized Sharjah Taxi - New Logo Launch in Sharjah UAE",
        width: 941,
        height: 600,
      },
      {
        src: "/projects/sharjah-taxi/05.webp",
        alt: "Topaz Events organized Sharjah Taxi - New Logo Launch in Sharjah UAE",
        width: 1000,
        height: 593,
      },
      {
        src: "/projects/sharjah-taxi/06.webp",
        alt: "Topaz Events organized Sharjah Taxi - New Logo Launch in Sharjah UAE",
        width: 1000,
        height: 506,
      },
    ],
  },
  {
    slug: "sharjah-excellence",
    title: "Sharjah Excellence Award 2023",
    year: 2023,
    city: "Sharjah",
    eventType: "Awards Event",
    summary:
      "Topaz Event Management proudly organized the Sharjah Excellence Award 2023, delivering a seamless and prestigious event in Sharjah. Contact for event Services",
    image: "/projects/sharjah-excellence.webp",
    imageAlt:
      "Topaz Events organized Sharjah Excellence Award Event 2023 in Sharjah UAE",
    width: 1077,
    height: 600,
    facts: [
      { label: "Category", value: "Government organisation" },
      { label: "Event type", value: "Awards Event" },
      { label: "Location", value: "Sharjah – UAE" },
    ],
    overview: [
      "Topaz Event Management proudly organized the Sharjah Excellence Award 2023, delivering a seamless and prestigious event in Sharjah. From elegant stage design to flawless execution, we ensured a memorable experience that celebrated excellence and innovation.",
    ],
    gallery: [
      {
        src: "/projects/sharjah-excellence/01.webp",
        alt: "Topaz Events organized Sharjah Excellence Award Event 2023 in Sharjah UAE",
        width: 1000,
        height: 552,
      },
      {
        src: "/projects/sharjah-excellence/02.webp",
        alt: "Topaz Events organized Sharjah Excellence Award Event 2023 in Sharjah UAE",
        width: 1000,
        height: 553,
      },
      {
        src: "/projects/sharjah-excellence/03.webp",
        alt: "Topaz Events organized Sharjah Excellence Award Event 2023 in Sharjah UAE",
        width: 1000,
        height: 562,
      },
      {
        src: "/projects/sharjah-excellence/04.webp",
        alt: "Topaz Events organized Sharjah Excellence Award Event 2023 in Sharjah UAE",
        width: 1000,
        height: 540,
      },
      {
        src: "/projects/sharjah-excellence/05.webp",
        alt: "Topaz Events organized Sharjah Excellence Award Event 2023 in Sharjah UAE",
        width: 1000,
        height: 557,
      },
      {
        src: "/projects/sharjah-excellence/06.webp",
        alt: "Topaz Events organized Sharjah Excellence Award Event 2023 in Sharjah UAE",
        width: 1000,
        height: 532,
      },
    ],
  },
  {
    slug: "al-etihad-forum-2023",
    title: "Al Etihad Forum 2023",
    year: 2023,
    city: "Dubai",
    eventType: "Forum Event",
    summary:
      "Experience Al Etihad Forum highlights: a front-row view of our latest forum event, where industry leaders, dynamic panels, and creative design spark innovation.",
    image: "/projects/al-etihad-forum-2023.webp",
    imageAlt: "Topaz Event Management Organized Al Etihad Auction Event in UAE",
    width: 900,
    height: 600,
    facts: [
      { label: "Category", value: "Government organisation" },
      { label: "Event type", value: "Forum Event" },
      { label: "Location", value: "Dubai – UAE" },
    ],
    overview: [
      "Experience the Al Etihad Forum highlights with Topaz Events. Watch our latest forum event where ideas flourished, industry leaders engaged, and dynamic sessions sparked meaningful connections—all crafted with creativity and precision.",
    ],
    gallery: [
      {
        src: "/projects/al-etihad-forum-2023/01.webp",
        alt: "Topaz Event Management Organized Al Etihad Auction Event in UAE",
        width: 900,
        height: 600,
      },
      {
        src: "/projects/al-etihad-forum-2023/02.webp",
        alt: "Topaz Event Management Organized Al Etihad Auction Event in UAE",
        width: 900,
        height: 600,
      },
      {
        src: "/projects/al-etihad-forum-2023/03.webp",
        alt: "Topaz Event Management Organized Al Etihad Auction Event in UAE",
        width: 900,
        height: 600,
      },
      {
        src: "/projects/al-etihad-forum-2023/04.webp",
        alt: "Topaz Event Management Organized Al Etihad Auction Event in UAE",
        width: 900,
        height: 600,
      },
      {
        src: "/projects/al-etihad-forum-2023/05.webp",
        alt: "Topaz Event Management Organized Al Etihad Auction Event in UAE",
        width: 900,
        height: 600,
      },
      {
        src: "/projects/al-etihad-forum-2023/06.webp",
        alt: "Topaz Event Management Organized Al Etihad Auction Event in UAE",
        width: 900,
        height: 600,
      },
    ],
  },
  {
    slug: "nakheel-properties-dubai-2023",
    title: "Nakheel Properties Dubai 2023",
    year: 2023,
    city: "Dubai",
    eventType: "Property Event",
    summary:
      "Topaz Events crafted a remarkable experience for Nakheel Properties Dubai 2023, blending innovation, branding, and seamless event production. Contact for more!",
    image: "/projects/nakheel-properties-dubai-2023.webp",
    imageAlt:
      "Topaz Event Management Organized Nakheel Properties Dubai 2023 Event in UAE",
    width: 900,
    height: 600,
    facts: [
      { label: "Category", value: "Private organisation" },
      { label: "Event type", value: "Property Event" },
      { label: "Location", value: "Dubai – UAE" },
    ],
    overview: [
      "Topaz Events proudly curated a remarkable experience for Nakheel Properties Dubai 2023, showcasing our expertise in event concept creation, branding, and production. With a seamless blend of creativity and precision, we brought Nakheel’s vision to life, delivering a meticulously crafted event that reflected innovation, excellence, and an unparalleled guest experience.",
    ],
    gallery: [
      {
        src: "/projects/nakheel-properties-dubai-2023/01.webp",
        alt: "Topaz Event Management Organized Nakheel Properties Dubai 2023 Event in UAE",
        width: 901,
        height: 600,
      },
      {
        src: "/projects/nakheel-properties-dubai-2023/02.webp",
        alt: "Topaz Event Management Organized Nakheel Properties Dubai 2023 Event in UAE",
        width: 900,
        height: 600,
      },
      {
        src: "/projects/nakheel-properties-dubai-2023/03.webp",
        alt: "Topaz Event Management Organized Nakheel Properties Dubai 2023 Event in UAE",
        width: 900,
        height: 600,
      },
      {
        src: "/projects/nakheel-properties-dubai-2023/04.webp",
        alt: "Topaz Event Management Organized Nakheel Properties Dubai 2023 Event in UAE",
        width: 900,
        height: 600,
      },
      {
        src: "/projects/nakheel-properties-dubai-2023/05.webp",
        alt: "Topaz Event Management Organized Nakheel Properties Dubai 2023 Event in UAE",
        width: 901,
        height: 600,
      },
      {
        src: "/projects/nakheel-properties-dubai-2023/06.webp",
        alt: "Topaz Event Management Organized Nakheel Properties Dubai 2023 Event in UAE",
        width: 900,
        height: 600,
      },
    ],
  },
  {
    slug: "hamdan-bin-rashid-al-maktoum-foundation-2023",
    title: "Hamdan Bin Rashid Al Maktoum Foundation",
    year: 2023,
    city: "Dubai",
    eventType: "Foundation Event",
    summary:
      "Topaz Events delivered a seamless, visually stunning experience for the Hamdan Bin Rashid Al Maktoum Foundation, using advanced production & projection mapping.",
    image: "/projects/hamdan-bin-rashid-al-maktoum-foundation-2023.webp",
    imageAlt:
      "Topaz Event Management Organized Hamdan Bin Rashid Al Maktoum Foundation 2023 Event in UAE",
    width: 900,
    height: 600,
    facts: [
      { label: "Category", value: "Government organisation" },
      { label: "Event type", value: "Foundation Event" },
      { label: "Location", value: "Dubai – UAE" },
    ],
    overview: [
      "Topaz Events had the honor of managing the Hamdan Bin Rashid Al Maktoum Foundation for Distinguished Performance Projection, delivering a seamless and visually captivating experience. From advanced projection mapping to immersive visuals, we ensured that every detail reflected the foundation’s commitment to excellence in education. Our expertise in event production and AV solutions brought the event to life, leaving a lasting impact on attendees.",
    ],
    gallery: [
      {
        src: "/projects/hamdan-bin-rashid-al-maktoum-foundation-2023/01.webp",
        alt: "7. Topaz Events HBRAM 2023",
        width: 900,
        height: 600,
      },
      {
        src: "/projects/hamdan-bin-rashid-al-maktoum-foundation-2023/02.webp",
        alt: "8. Topaz Events HBRAM 2023",
        width: 1000,
        height: 504,
      },
      {
        src: "/projects/hamdan-bin-rashid-al-maktoum-foundation-2023/03.webp",
        alt: "4. Topaz Events HBRAM 2023",
        width: 1000,
        height: 472,
      },
      {
        src: "/projects/hamdan-bin-rashid-al-maktoum-foundation-2023/04.webp",
        alt: "Topaz Event Management Organized Hamdan Bin Rashid Al Maktoum Foundation 2023 Event in UAE",
        width: 900,
        height: 600,
      },
      {
        src: "/projects/hamdan-bin-rashid-al-maktoum-foundation-2023/05.webp",
        alt: "Topaz Event Management Organized Hamdan Bin Rashid Al Maktoum Foundation 2023 Event in UAE",
        width: 900,
        height: 600,
      },
      {
        src: "/projects/hamdan-bin-rashid-al-maktoum-foundation-2023/06.webp",
        alt: "5. Topaz Events HBRAM 2023",
        width: 900,
        height: 600,
      },
    ],
  },
  {
    slug: "silver-jubilee-ceremony-aus-2023",
    title: "Silver Jubilee Ceremony AUS 2023",
    year: 2023,
    city: "Sharjah",
    eventType: "Alumni Ceremony",
    summary:
      "Topaz Events proudly organized the Silver Jubilee Ceremony AUS 2023, held under the patronage of His Highness Sheikh Dr. Sultan bin Mohammed Al-Qassimi.",
    image: "/projects/silver-jubilee-ceremony-aus-2023.webp",
    imageAlt:
      "Topaz Event Management Organized Silver Jubilee Ceremony - American University of Sharjah Event in UAE",
    width: 900,
    height: 600,
    facts: [
      { label: "Category", value: "Private organisation" },
      { label: "Event type", value: "Alumni Ceremony" },
      { label: "Location", value: "Sharjah – UAE" },
    ],
    overview: [
      "Topaz Events was honored to organize the Silver Jubilee Ceremony celebrating the founding of the American University of Sharjah, held under the esteemed patronage of His Highness Sheikh Dr. Sultan bin Mohammed Al-Qassimi, Member of the Supreme Council. We provided complete AV solutions, including LED screens, sound, lighting, and laser effects, ensuring a spectacular and seamless experience befitting this prestigious occasion.",
    ],
    gallery: [
      {
        src: "/projects/silver-jubilee-ceremony-aus-2023/01.webp",
        alt: "Topaz Event Management Organized Silver Jubilee Ceremony - American University of Sharjah Event in UAE",
        width: 894,
        height: 600,
      },
      {
        src: "/projects/silver-jubilee-ceremony-aus-2023/02.webp",
        alt: "Topaz Event Management Organized Silver Jubilee Ceremony - American University of Sharjah Event in UAE",
        width: 911,
        height: 600,
      },
      {
        src: "/projects/silver-jubilee-ceremony-aus-2023/03.webp",
        alt: "Topaz Event Management Organized Silver Jubilee Ceremony - American University of Sharjah Event in UAE",
        width: 900,
        height: 600,
      },
      {
        src: "/projects/silver-jubilee-ceremony-aus-2023/04.webp",
        alt: "Topaz Event Management Organized Silver Jubilee Ceremony - American University of Sharjah Event in UAE",
        width: 900,
        height: 600,
      },
      {
        src: "/projects/silver-jubilee-ceremony-aus-2023/05.webp",
        alt: "Topaz Event Management Organized Silver Jubilee Ceremony - American University of Sharjah Event in UAE",
        width: 900,
        height: 600,
      },
      {
        src: "/projects/silver-jubilee-ceremony-aus-2023/06.webp",
        alt: "Topaz Event Management Organized Silver Jubilee Ceremony - American University of Sharjah Event in UAE",
        width: 863,
        height: 600,
      },
    ],
  },
  {
    slug: "alrubatiya-international-arabian-horse-championship",
    title: "Arabian Horse Championship 2023",
    year: 2023,
    city: "Oman",
    eventType: "Sports Event",
    summary:
      "Topaz Events proudly debuted in Oman with the Alrubatiya International Arabian Horse Championship, delivering a prestigious and flawlessly executed event.",
    image: "/projects/alrubatiya-international-arabian-horse-championship.webp",
    imageAlt:
      "Topaz Event Management Organized Alrubatiya International Arabian Horse Championship in Oman!",
    width: 1070,
    height: 600,
    facts: [
      { label: "Event type", value: "Sports Event" },
      { label: "Location", value: "Oman Middle East" },
    ],
    overview: [
      "Topaz Events proudly organized the Alrubatiya International Arabian Horse Championship in Oman, marking our first event in the country! Expanding our horizons, our passionate and creative team delivered an exceptional experience, showcasing the elegance and prestige of Arabian horse championships with flawless execution.",
    ],
    gallery: [
      {
        src: "/projects/alrubatiya-international-arabian-horse-championship/01.webp",
        alt: "Topaz Event Management Organized Alrubatiya International Arabian Horse Championship in Oman!",
        width: 1000,
        height: 562,
      },
      {
        src: "/projects/alrubatiya-international-arabian-horse-championship/02.webp",
        alt: "Topaz Event Management Organized Alrubatiya International Arabian Horse Championship in Oman!",
        width: 1000,
        height: 594,
      },
      {
        src: "/projects/alrubatiya-international-arabian-horse-championship/03.webp",
        alt: "Topaz Event Management Organized Alrubatiya International Arabian Horse Championship in Oman!",
        width: 1000,
        height: 560,
      },
      {
        src: "/projects/alrubatiya-international-arabian-horse-championship/04.webp",
        alt: "Topaz Event Management Organized Alrubatiya International Arabian Horse Championship in Oman!",
        width: 1000,
        height: 554,
      },
      {
        src: "/projects/alrubatiya-international-arabian-horse-championship/05.webp",
        alt: "Topaz Event Management Organized Alrubatiya International Arabian Horse Championship in Oman!",
        width: 1000,
        height: 555,
      },
      {
        src: "/projects/alrubatiya-international-arabian-horse-championship/06.webp",
        alt: "Topaz Event Management Organized Alrubatiya International Arabian Horse Championship in Oman!",
        width: 1000,
        height: 554,
      },
    ],
  },
  {
    slug: "honeybee-conference-fujairah-2023",
    title: "HoneyBee Conference Fujairah 2023",
    year: 2023,
    city: "Fujairah",
    eventType: "Conference Event",
    summary:
      "Relive the International Honeybee Conference Fujairah 2023, where experts discussed bee conservation, beekeeping, and innovative harvesting for a better future",
    image: "/projects/honeybee-conference-fujairah-2023.webp",
    imageAlt:
      "Topaz Event Management Organized Honeybee Conference Fujairah 2023 Event",
    width: 900,
    height: 600,
    facts: [
      { label: "Category", value: "Government organisation" },
      { label: "Event type", value: "Conference Event" },
      { label: "Location", value: "Fujairah – UAE" },
    ],
    overview: [
      "Experience the highlights of the 2023 International Honeybee Conference Fujairah, where global experts gathered to champion sustainable beekeeping and bee conservation. From honeybee health to innovative harvesting methods, this recap showcases vital discussions shaping a better future for bees and our environment.",
    ],
    gallery: [
      {
        src: "/projects/honeybee-conference-fujairah-2023/01.webp",
        alt: "Topaz Event Management Organized Honeybee Conference Fujairah 2023 Event",
        width: 900,
        height: 600,
      },
      {
        src: "/projects/honeybee-conference-fujairah-2023/03.webp",
        alt: "Topaz Event Management Organized Honeybee Conference Fujairah 2023 Event",
        width: 900,
        height: 600,
      },
      {
        src: "/projects/honeybee-conference-fujairah-2023/04.webp",
        alt: "Topaz Event Management Organized Honeybee Conference Fujairah 2023 Event",
        width: 900,
        height: 600,
      },
      {
        src: "/projects/honeybee-conference-fujairah-2023/05.webp",
        alt: "Topaz Event Management Organized Honeybee Conference Fujairah 2023 Event",
        width: 900,
        height: 600,
      },
      {
        src: "/projects/honeybee-conference-fujairah-2023/06.webp",
        alt: "Topaz Event Management Organized Honeybee Conference Fujairah 2023 Event",
        width: 900,
        height: 600,
      },
    ],
  },
  {
    slug: "dubai-tourism-2023",
    title: "Dubai Tourism 2023 (DWTC 52 National Day)",
    year: 2023,
    city: "Dubai",
    eventType: "National Day Event",
    summary:
      "Celebrating 52 years of unity, progress & heritage at Dubai Tourism 2023, embracing the UAE’s rich culture and visionary achievements. Event by Topaz Events UAE",
    image: "/projects/dubai-tourism-2023.webp",
    imageAlt:
      "Topaz Event Management Organized Dubai Tourism 2023 (Dubai Economy & Tourism UAE) National Day 2023 at DWTC Dubai UAE",
    width: 900,
    height: 601,
    facts: [
      { label: "Category", value: "Government organisation" },
      { label: "Event type", value: "National Day Event" },
      { label: "Location", value: "Dubai – UAE" },
    ],
    overview: [
      "Topaz Events proudly organized a spectacular celebration marking 52 years of UAE’s unity, progress, and heritage 🇦🇪! From breathtaking LED screens to immersive audiovisual experiences, we crafted an event that truly reflected the nation’s spirit and achievements. As we honored this remarkable journey, we brought people together to celebrate the UAE’s rich culture, visionary leadership, and bright future.",
    ],
    gallery: [
      {
        src: "/projects/dubai-tourism-2023/01.webp",
        alt: "Topaz Event Management Organized Dubai Tourism 2023 (Dubai Economy & Tourism UAE) National Day 2023 at DWTC Dubai UAE",
        width: 900,
        height: 601,
      },
      {
        src: "/projects/dubai-tourism-2023/02.webp",
        alt: "Topaz Event Management Organized Dubai Tourism 2023 (Dubai Economy & Tourism UAE) National Day 2023 at DWTC Dubai UAE",
        width: 900,
        height: 601,
      },
      {
        src: "/projects/dubai-tourism-2023/03.webp",
        alt: "Topaz Event Management Organized Dubai Tourism 2023 (Dubai Economy & Tourism UAE) National Day 2023 at DWTC Dubai UAE",
        width: 900,
        height: 601,
      },
      {
        src: "/projects/dubai-tourism-2023/04.webp",
        alt: "Topaz Event Management Organized Dubai Tourism 2023 (Dubai Economy & Tourism UAE) National Day 2023 at DWTC Dubai UAE",
        width: 900,
        height: 601,
      },
      {
        src: "/projects/dubai-tourism-2023/05.webp",
        alt: "Topaz Event Management Organized Dubai Tourism 2023 (Dubai Economy & Tourism UAE) National Day 2023 at DWTC Dubai UAE",
        width: 667,
        height: 1000,
      },
      {
        src: "/projects/dubai-tourism-2023/06.webp",
        alt: "Topaz Event Management Organized Dubai Tourism 2023 (Dubai Economy & Tourism UAE) National Day 2023 at DWTC Dubai UAE",
        width: 667,
        height: 1000,
      },
    ],
  },
  {
    slug: "fujairah-chess-club",
    title: "Fujairah Chess Competition 2022",
    year: 2022,
    city: "Fujairah",
    eventType: "Sports Event",
    summary:
      "Topaz Event Management proudly organized the Fujairah Chess Competition 2022 with Fujairah Chess & Culture Club, delivering a world-class event.",
    image: "/projects/fujairah-chess-club.webp",
    imageAlt: "Fujairah Chees Club Image",
    width: 712,
    height: 315,
    facts: [
      { label: "Event type", value: "Sports Event" },
      { label: "Location", value: "Fujairah – UAE" },
    ],
    overview: [
      "Topaz Event Management successfully organized the 64th World Congress of Chess Composition 2022 in collaboration with Fujairah Chess & Culture Club. From seamless logistics to an engaging setup, we ensured a well-executed and prestigious event that brought together chess enthusiasts and experts from around the world.",
    ],
    gallery: [
      {
        src: "/projects/fujairah-chess-club/01.webp",
        alt: "Topaz Event Management Organized Fujairah Chess Competition 2022 Sports Event in UAE!",
        width: 900,
        height: 600,
      },
      {
        src: "/projects/fujairah-chess-club/02.webp",
        alt: "Topaz Event Management Organized Fujairah Chess Competition 2022 Sports Event in UAE!",
        width: 900,
        height: 600,
      },
      {
        src: "/projects/fujairah-chess-club/03.webp",
        alt: "Topaz Event Management Organized Fujairah Chess Competition 2022 Sports Event in UAE!",
        width: 900,
        height: 600,
      },
      {
        src: "/projects/fujairah-chess-club/04.webp",
        alt: "Topaz Event Management Organized Fujairah Chess Competition 2022 Sports Event in UAE!",
        width: 900,
        height: 600,
      },
      {
        src: "/projects/fujairah-chess-club/05.webp",
        alt: "Topaz Event Management Organized Fujairah Chess Competition 2022 Sports Event in UAE!",
        width: 900,
        height: 600,
      },
      {
        src: "/projects/fujairah-chess-club/06.webp",
        alt: "Topaz Event Management Organized Fujairah Chess Competition 2022 Sports Event in UAE!",
        width: 900,
        height: 600,
      },
    ],
  },
  {
    slug: "fujairah-international-philosophy-house-2022",
    title: "Fujairah international Conference 2022",
    year: 2022,
    city: "Fujairah",
    eventType: "Conference Event",
    summary:
      "Topaz Events proudly organized the Fujairah International Philosophy conference House 2022, delivering a seamless and impactful event in Fujairah, UAE.",
    image: "/projects/fujairah-international-philosophy-house-2022.webp",
    imageAlt:
      "Topaz Events organized Fujairah international Philosophy Conference 2022 in Fujairah UAE",
    width: 1400,
    height: 933,
    facts: [
      { label: "Category", value: "Government organisation" },
      { label: "Event type", value: "Conference Event" },
      { label: "Location", value: "Fujairah – UAE" },
    ],
    overview: [
      "Topaz Event Management Company successfully organized the Fujairah International Philosophy Conference 2022 in Fujairah, UAE. With expert planning and flawless execution, we created a dynamic platform for intellectual discussions and cultural exchange. We take pride in delivering yet another successful event, continuing our commitment to excellence.",
    ],
    gallery: [
      {
        src: "/projects/fujairah-international-philosophy-house-2022/01.webp",
        alt: "Topaz Event Management Organized Fujairah international Philosophy Conference 2022 in UAE!",
        width: 900,
        height: 600,
      },
      {
        src: "/projects/fujairah-international-philosophy-house-2022/02.webp",
        alt: "Topaz Event Management Organized Fujairah international Philosophy Conference 2022 in UAE!",
        width: 900,
        height: 600,
      },
      {
        src: "/projects/fujairah-international-philosophy-house-2022/03.webp",
        alt: "Topaz Event Management Organized Fujairah international Philosophy Conference 2022 in UAE!",
        width: 900,
        height: 600,
      },
      {
        src: "/projects/fujairah-international-philosophy-house-2022/04.webp",
        alt: "Topaz Event Management Organized Fujairah international Philosophy Conference 2022 in UAE!",
        width: 900,
        height: 600,
      },
      {
        src: "/projects/fujairah-international-philosophy-house-2022/05.webp",
        alt: "Topaz Event Management Organized Fujairah international Philosophy Conference 2022 in UAE!",
        width: 900,
        height: 600,
      },
      {
        src: "/projects/fujairah-international-philosophy-house-2022/06.webp",
        alt: "Topaz Event Management Organized Fujairah international Philosophy Conference 2022 in UAE!",
        width: 900,
        height: 600,
      },
    ],
  },
  {
    slug: "future-innovation-summit-2022",
    title: "Future Innovation Summit 2022",
    year: 2022,
    city: "Dubai",
    eventType: "Conference Event",
    summary:
      "Join Future Innovation Summit 2022 at Grand Hyatt Dubai Exhibition Center, exploring innovations, trends & visionary ideas! Organized by Topaz Events.",
    image: "/projects/future-innovation-summit-2022.webp",
    imageAlt:
      "Topaz Event Management Organized Future Innovation Summit 2022 Conference at grand Hyatt Dubai Exhibition Center UAE!",
    width: 900,
    height: 600,
    facts: [
      { label: "Category", value: "Government organisation" },
      { label: "Event type", value: "Conference Event" },
      { label: "Location", value: "Dubai – UAE" },
    ],
    overview: [
      "Topaz Events proudly organized the Future Innovation Summit 2022 at Grand Hyatt Dubai Exhibition Center, bringing together visionaries, industry leaders, and innovators to explore groundbreaking trends shaping the future. From cutting-edge technologies to transformative ideas, the summit fostered insightful discussions and collaborations, driving innovation forward on a global scale.",
    ],
    gallery: [
      {
        src: "/projects/future-innovation-summit-2022/01.webp",
        alt: "Topaz Event Management Organized Future Innovation Summit 2022 Conference at grand Hyatt Dubai Exhibition Center UAE!",
        width: 900,
        height: 600,
      },
      {
        src: "/projects/future-innovation-summit-2022/02.webp",
        alt: "Topaz Event Management Organized Future Innovation Summit 2022 Conference at grand Hyatt Dubai Exhibition Center UAE!",
        width: 900,
        height: 600,
      },
      {
        src: "/projects/future-innovation-summit-2022/03.webp",
        alt: "Topaz Event Management Organized Future Innovation Summit 2022 Conference at grand Hyatt Dubai Exhibition Center UAE!",
        width: 900,
        height: 600,
      },
      {
        src: "/projects/future-innovation-summit-2022/04.webp",
        alt: "Topaz Event Management Organized Future Innovation Summit 2022 Conference at grand Hyatt Dubai Exhibition Center UAE!",
        width: 900,
        height: 600,
      },
      {
        src: "/projects/future-innovation-summit-2022/05.webp",
        alt: "Topaz Event Management Organized Future Innovation Summit 2022 Conference at grand Hyatt Dubai Exhibition Center UAE!",
        width: 900,
        height: 600,
      },
      {
        src: "/projects/future-innovation-summit-2022/06.webp",
        alt: "Topaz Event Management Organized Future Innovation Summit 2022 Conference at grand Hyatt Dubai Exhibition Center UAE!",
        width: 900,
        height: 600,
      },
    ],
  },
  {
    slug: "al-hayyan-by-alef-group-2022",
    title: "Al Hayyan By Alef Group 2022",
    year: 2022,
    city: "Dubai",
    eventType: "Property Launch Event",
    summary:
      "Topaz Events proud to organize the launch of Al HAYYAN by ALEF Group, a leading real estate developer creating premium lifestyle communities and destinations.",
    image: "/projects/al-hayyan-by-alef-group-2022.webp",
    imageAlt:
      "Topaz Event Management Organized Al Hayyan - Alef group Corporate Event Project Launch in Dubai UAE!",
    width: 900,
    height: 590,
    facts: [
      { label: "Category", value: "Private organisation" },
      { label: "Event type", value: "Property Launch Event" },
      { label: "Location", value: "Dubai – UAE" },
    ],
    overview: [
      "Topaz Events were pleased to participate in organizing the launching ceremony for a new real estate project (HAYYAN), which belongs to the ALEF Group. ALEF Group is a leading developer of residential and real estate communities and destinations, pioneering lifestyle experiences through investment and strategic joint ventures",
    ],
    gallery: [
      {
        src: "/projects/al-hayyan-by-alef-group-2022/01.webp",
        alt: "Topaz Event Management Organized Al Hayyan - Alef group Corporate Event Project Launch in Dubai UAE!",
        width: 700,
        height: 530,
      },
      {
        src: "/projects/al-hayyan-by-alef-group-2022/02.webp",
        alt: "Topaz Event Management Organized Al Hayyan - Alef group Corporate Event Project Launch in Dubai UAE!",
        width: 900,
        height: 600,
      },
      {
        src: "/projects/al-hayyan-by-alef-group-2022/03.webp",
        alt: "Topaz Event Management Organized Al Hayyan - Alef group Corporate Event Project Launch in Dubai UAE!",
        width: 1000,
        height: 563,
      },
      {
        src: "/projects/al-hayyan-by-alef-group-2022/04.webp",
        alt: "Topaz Event Management Organized Al Hayyan - Alef group Corporate Event Project Launch in Dubai UAE!",
        width: 900,
        height: 600,
      },
      {
        src: "/projects/al-hayyan-by-alef-group-2022/05.webp",
        alt: "Topaz Event Management Organized Al Hayyan - Alef group Corporate Event Project Launch in Dubai UAE!",
        width: 900,
        height: 678,
      },
      {
        src: "/projects/al-hayyan-by-alef-group-2022/06.webp",
        alt: "Topaz Event Management Organized Al Hayyan - Alef group Corporate Event Project Launch in Dubai UAE!",
        width: 900,
        height: 600,
      },
    ],
  },
];

export const PROJECT_MAP = new Map(
  PROJECTS.map((project) => [project.slug, project]),
);

/** Descending, for the portfolio filter bar. */
export const PROJECT_YEARS = [...new Set(PROJECTS.map((p) => p.year))].sort(
  (a, b) => b - a,
);

/**
 * The reel, in the order it is read: one card flips in from the collage and the
 * rest wait to its right. Kept to the six events the reel was cut for rather
 * than every project that happens to have footage, so the track stays a
 * viewing length rather than a scroll the reader has to sit through.
 */
const REEL_SLUGS = [
  "sharjah-judicial-forum",
  "aus-alumni-reunion",
  "sheikh-sultan-awards",
  "district-11-launch",
  "binghatti-mercedes",
  "ifbb-asia",
];

/** The projects whose footage is actually reachable from the page. */
export const REEL_PROJECTS = REEL_SLUGS.map((slug) => PROJECT_MAP.get(slug)!);

/** Rides the flip from the diamond collage down into the events track. */
export const LEAD_PROJECT = REEL_PROJECTS[0];

/** The cards waiting to the right of the one that flies in. */
export const TRACK_PROJECTS = REEL_PROJECTS.slice(1);

/** Collage stills, minus the project that is already there as the flying card. */
export const COLLAGE_PROJECTS = PROJECTS.filter(
  (project) => project.slug !== LEAD_PROJECT.slug,
);

/**
 * Three events to show at the foot of a case study: the same kind of job
 * first, then the same emirate, then whatever is nearest in the list, so the
 * row is always full even for a one-off like the chess competition.
 */
export function relatedProjects(slug: string, count = 3): Project[] {
  const current = PROJECT_MAP.get(slug);
  if (!current) return PROJECTS.slice(0, count);

  const others = PROJECTS.filter((project) => project.slug !== slug);
  const score = (project: Project) =>
    (project.eventType && project.eventType === current.eventType ? 2 : 0) +
    (project.city === current.city ? 1 : 0);

  return [...others]
    .sort((a, b) => score(b) - score(a) || b.year - a.year)
    .slice(0, count);
}
