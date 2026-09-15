import type { Faq } from "@/data/faqs";
import type { Feature, Film, Offering } from "@/types";

export type SpecItem = {
  name: string;
  body: string;
  /** Optional product still, shown at the head of the card when present. */
  image?: string;
  imageAlt?: string;
};

export type ServicePage = {
  slug: string;
  /** Label used in breadcrumbs, related cards and the sitemap. */
  nav: string;
  metaTitle: string;
  metaDescription: string;

  eyebrow: string;
  title: string;
  accent?: string;
  tagline: string;
  lede: string;
  image: string;
  imageAlt: string;

  /** Two-paragraph editorial block under the hero. */
  overview: { label: string; title: string; accent?: string; body: string[] };

  /** Optional showreel that autoplays (muted) when the page opens. */
  film?: Film;

  offerings: {
    label: string;
    title: string;
    accent?: string;
    intro?: string;
    items: Offering[];
  };

  /** Equipment or format catalogue, for the rental and technology pages. */
  catalogue?: {
    label: string;
    title: string;
    accent?: string;
    intro?: string;
    items: SpecItem[];
    /**
     * How the catalogue stills are framed. Product stills shot on white use
     * the default `contain`; photographic stills (e.g. the interactive LED
     * formats shot in situ) look better filling the frame with `cover`.
     */
    imageFit?: "contain" | "cover";
    imageAspect?: "4/3" | "16/9";
  };

  /** Flat list of inclusions, shown as a ticked grid. */
  checklist?: { title: string; items: string[] };

  reasons: { title: string; accent?: string; intro?: string; items: Feature[] };

  /** How an enquiry turns into a booking. Three steps, in order. */
  process?: { title: string; accent?: string; items: Feature[] };

  faqs: Faq[];

  /** Slugs of the pages shown in the "keep reading" row. */
  related: string[];

  cta: { title: string; accent?: string; body: string };
};

const UAE_FAQ: Faq = {
  question: "Which areas of the UAE do you cover?",
  answer:
    "Dubai, Sharjah, Abu Dhabi, Ajman and Ras Al Khaimah. Three offices and our own warehouses across the Emirates mean crews and equipment reach your venue without long transfers.",
};

const BOOKING_FAQ: Faq = {
  question: "How do I get started?",
  answer:
    "Send your brief through the enquiry form, or reach us by phone or WhatsApp. We will come back with a costed proposal built around your venue, guest numbers and date — usually within one working day.",
};

export const SERVICE_PAGES: ServicePage[] = [
  {
    slug: "corporate-event-management",
    nav: "Corporate Events",
    metaTitle: "Corporate Event Management Company in Dubai & Sharjah | Topaz",
    metaDescription:
      "Corporate event management across Dubai, Sharjah and Abu Dhabi — conferences, seminars, product launches and award ceremonies delivered end to end by Topaz.",
    eyebrow: "Corporate events",
    title: "Corporate event",
    accent: "management",
    tagline: "Conferences, launches and company gatherings, run end to end.",
    lede: "Topaz designs and delivers corporate events that line up with your business objectives rather than a template. With a decade of delivery behind us across Dubai, Sharjah, Ajman and Abu Dhabi, we handle the concept, the production and the day itself — so the room your board walks into is the room you signed off.",
    image: "/services/Topaz-District11.webp",
    imageAlt:
      "Guests at the District 11 corporate property launch produced by Topaz Events",
    overview: {
      label: "The brief",
      title: "One team from concept",
      accent: "to de-rig",
      body: [
        "Corporate events carry your reputation into a room full of people who matter to it. That is why we keep the whole chain in-house: the planners who write the run sheet sit next to the technicians who will operate the show, and the AV inventory belongs to us rather than to a subcontractor we called last week.",
        "It means fewer handovers, one number to call, and a production that behaves on the day exactly as it did in rehearsal. From government seminars to conferences, summits and property launches, the detail is managed the same way at every scale.",
      ],
    },
    offerings: {
      label: "What we deliver",
      title: "Comprehensive corporate",
      accent: "event services",
      intro:
        "Five formats we are asked for most by businesses and government entities across the Emirates.",
      items: [
        {
          title: "Meetings & Seminars",
          body: "Venue setup, technical support, agenda coordination and attendee management for the sessions your business runs on. Our organisers handle the logistics so the room stays focused on the discussion.",
          points: ["Government seminars", "Board meetings", "Workshops"],
        },
        {
          title: "Product Launches",
          body: "Launches are judged in the first ninety seconds. We build the reveal around your product — staging, lighting, content and press flow — so the buzz lands with the audience that decides whether it sells.",
          points: ["Property launches", "Automotive reveals", "Press events"],
        },
        {
          title: "Conferences & Summits",
          body: "Multi-track conferences with the staging, technical arrangements, hospitality and presentation management that let executives get through a full agenda without a single dead minute.",
          points: ["Forums", "Summits", "Panel sessions"],
        },
        {
          title: "Corporate Parties",
          body: "Themed staff celebrations built from the audience profile up. We propose concepts that suit the people actually in the room, then run the night so nobody from your team has to work it.",
          points: ["Annual parties", "Team celebrations", "Themed nights"],
        },
        {
          title: "Award Ceremonies",
          body: "Internal and industry awards staged with the pacing of a broadcast: venue, entertainment, décor and logistics handled so recognition lands the way the recipients deserve.",
          points: ["Excellence awards", "Long service", "Industry awards"],
        },
        {
          title: "On-Site Support & Analysis",
          body: "A show-calling crew on site for the full run, then a post-event report covering attendance, production notes and what to change before the next one.",
          points: ["Show calling", "Crew management", "Post-event report"],
        },
      ],
    },
    checklist: {
      title: "Every corporate booking includes",
      items: [
        "Event planning & management",
        "Custom décor & themes",
        "On-site event support",
        "Entertainment & speakers",
        "Catering & hospitality",
        "Post-event analysis",
      ],
    },
    reasons: {
      title: "Why companies book",
      accent: "Topaz",
      intro:
        "Ten years of corporate delivery for government departments, universities and brands across the UAE.",
      items: [
        {
          title: "In-House Production",
          body: "Screens, sound, lighting and rigging come out of our own warehouses and are operated by our own technicians. Nothing critical is subcontracted on show day.",
        },
        {
          title: "Protocol Experience",
          body: "We regularly deliver for government entities, which means VIP arrivals, seating hierarchy and ceremonial sequencing are handled as routine rather than as a special request.",
        },
        {
          title: "Objective-Led Design",
          body: "Every creative decision is tied back to what the event is supposed to achieve — a signed deal, a launched product, a motivated team — not to what looks good in a deck.",
        },
        {
          title: "Single Accountable Team",
          body: "The people who pitched the event are the people standing behind the stage on the night. No handover to an unfamiliar operations team a week out.",
        },
        {
          title: "Transparent Costing",
          body: "Proposals itemise production, crew and rental so you can see what each element costs and adjust scope before anything is committed.",
        },
        {
          title: "Coverage Across The Emirates",
          body: "Offices in Sharjah, Dubai and Abu Dhabi with over 100 technical experts, so a multi-city programme runs on one standard rather than three suppliers.",
        },
      ],
    },
    faqs: [
      {
        question:
          "Do you handle corporate events for government entities and public bodies?",
        answer:
          "Yes. We work closely with businesses and government entities to design, plan and execute summits, forums, press conferences and annual ceremonies, with every detail aligned to protocol and to your strategic goals.",
      },
      {
        question: "Can you manage both small and large-scale corporate events?",
        answer:
          "We deliver everything from an intimate corporate dinner to a large-scale public conference. The planning process is the same at both ends; only the scale of the crew and inventory changes.",
      },
      {
        question: "Do you provide the AV equipment as well as the management?",
        answer:
          "Yes. LED screens, sound systems, lighting, projectors, cameras and staging are all held in our own inventory, so the team that specifies your setup is the team that operates it.",
      },
      UAE_FAQ,
      BOOKING_FAQ,
    ],
    related: [
      "gala-dinner-organizer-dubai",
      "award-functions-event-management",
      "exhibitions",
    ],
    cta: {
      title: "Planning a corporate event",
      accent: "this quarter?",
      body: "Send us the date, the venue and roughly how many people are coming. You will get a costed proposal built around your brief, not a rate card.",
    },
  },

  {
    slug: "award-functions-event-management",
    nav: "Award Functions",
    metaTitle: "Award Function & Ceremony Event Management UAE | Topaz Events",
    metaDescription:
      "Award ceremony management in Dubai, Sharjah and Abu Dhabi. Government, excellence, school and company ceremonies staged end to end by Topaz Events.",
    eyebrow: "Award functions",
    title: "Award function",
    accent: "event management",
    tagline: "Celebrating excellence, creating lasting impressions.",
    lede: "Topaz stages award ceremonies that honour achievement with the seriousness it deserves. Backed by more than a decade of delivery, we handle every element — from stage design and show calling to protocol and guest hospitality — for government entities, companies, schools and universities across the UAE.",
    image: "/projects/sheikh-sultan-awards.webp",
    imageAlt:
      "Stage and audience at the Sheikh Sultan Award ceremony staged by Topaz Events",
    overview: {
      label: "The occasion",
      title: "Recognition is a",
      accent: "production problem",
      body: [
        "An award ceremony has one job: make the moment a name is read out feel earned. Everything else — the lighting state, the walk-on music, the camera that catches the reaction, the trophy handover that does not fumble — exists to serve that second.",
        "We build ceremonies backwards from those moments. The run sheet is rehearsed, the recipients are briefed, and the show is called live by a crew who have done it before, so the evening moves at the pace of the room rather than the pace of the slides.",
      ],
    },
    offerings: {
      label: "Ceremony types",
      title: "Award ceremonies",
      accent: "we deliver",
      intro:
        "From public-sector honours to school prize-giving, each format has its own protocol and pacing.",
      items: [
        {
          title: "Government Award Functions",
          body: "Prestigious ceremonies honouring contributions to public service, innovation and social development. Meticulous protocol adherence, dignified staging and a sequence that reflects the standing of the occasion.",
        },
        {
          title: "Excellence Awards",
          body: "Industry and organisational excellence programmes with captivating themes, elegant décor and a flow that keeps a long list of categories moving without losing weight.",
        },
        {
          title: "School Award Ceremonies",
          body: "Prize-giving designed to inspire the next intake as much as reward this one — personalised awards, age-appropriate entertainment and a warm, uplifting atmosphere for families.",
        },
        {
          title: "Company Award Functions",
          body: "Internal recognition evenings with tailored themes and engaging entertainment, built to strengthen morale and make a culture of recognition visible to the whole team.",
        },
        {
          title: "Graduation Award Ceremonies",
          body: "Dignified academic ceremonies with grand stage setups, flawless technical arrangements and personal touches for students at the milestone they have worked years for.",
        },
        {
          title: "Music Award Functions",
          body: "Ceremonies celebrating artists, songwriters and producers, combining creative themes and stunning stage design with high-energy live performances.",
        },
      ],
    },
    reasons: {
      title: "Why Topaz for",
      accent: "award functions",
      intro:
        "A commitment to excellence and innovation that turns your vision into a spectacular event.",
      items: [
        {
          title: "Creativity & Customisation",
          body: "No two ceremonies are alike, and neither are our solutions. Our creative team designs personalised concepts that reflect your brand identity and the standing of the award.",
        },
        {
          title: "Seamless Execution",
          body: "From meticulous planning to on-site coordination, every detail is flawlessly executed — so you can focus on the evening while we handle the logistics.",
        },
        {
          title: "Industry Expertise",
          body: "Experience across diverse industries means we know what resonates with your audience and how to align a ceremony with the expectations of the sector it honours.",
        },
        {
          title: "Attention To Detail",
          body: "Venue selection, décor, stage design, audiovisual arrangements, entertainment and guest hospitality — nothing is overlooked in delivering a premium experience.",
        },
        {
          title: "In-House Technical Crew",
          body: "Screens, sound, lighting and rigging are ours, operated by our own engineers. Cues land where they were rehearsed.",
        },
        {
          title: "Protocol Handling",
          body: "VIP arrivals, seating hierarchy and ceremonial sequencing are managed as standard practice, which matters when the guest of honour is a public figure.",
        },
      ],
    },
    faqs: [
      {
        question: "Can you manage the trophies, certificates and stage props?",
        answer:
          "Yes. We handle award production and personalisation alongside the ceremony itself, including the handover choreography so the presentation is clean on camera.",
      },
      {
        question: "Do you provide live camera feed and screen relay?",
        answer:
          "We do. Cameras, switching and LED relay screens are part of our own inventory, which is what lets a large hall see a recipient's face rather than the back of a head.",
      },
      UAE_FAQ,
      BOOKING_FAQ,
    ],
    related: [
      "corporate-event-management",
      "gala-dinner-organizer-dubai",
      "graduation-ceremony-event-management-company",
    ],
    cta: {
      title: "Have achievements",
      accent: "worth staging?",
      body: "Tell us the categories, the guest list and the date. We will come back with a ceremony plan and a costed production scope.",
    },
  },

  {
    slug: "gala-dinner-organizer-dubai",
    nav: "Gala Dinners",
    metaTitle: "Gala Dinner Organizer in Dubai & UAE | Topaz Event Management",
    metaDescription:
      "Gala dinner management in Dubai, Sharjah and Abu Dhabi. Theme design, venue selection, catering, entertainment, décor and on-site management by Topaz.",
    eyebrow: "Gala dinners",
    title: "Gala dinner",
    accent: "event management",
    tagline: "Evenings your guests talk about long after the night ends.",
    lede: "Gala dinners are more than gatherings; they define relationships and mark achievements. Topaz curates the concept, the room, the menu and the entertainment as one piece of work — in Dubai, Sharjah, Abu Dhabi and across the UAE — so every element of the evening pulls in the same direction.",
    image: "/services/8-F1H2O-Gala-Dinner.webp",
    imageAlt: "Table settings and staging at the F1H2O gala dinner by Topaz Events",
    overview: {
      label: "The evening",
      title: "Designed around",
      accent: "the table",
      body: [
        "A gala runs on timing. Arrival drinks that do not drag, a first course that lands while the room is still warm, a speech placed before attention drifts and entertainment that arrives at the right point in the evening rather than whenever the kitchen is ready.",
        "We plan the night as a sequence and then build the room to support it: lighting states that shift with the programme, sound that carries a speech to the back table, and a floor plan that lets service move without cutting through a performance.",
      ],
    },
    offerings: {
      label: "What we handle",
      title: "Gala dinner",
      accent: "services",
      intro:
        "Six workstreams that run in parallel from the first concept meeting to the final guest transfer.",
      items: [
        {
          title: "Concept & Theme Design",
          body: "Whether you are picturing a sophisticated black-tie gala, a vibrant cultural celebration or a fantasy-inspired evening, we design a concept where colour palette, centrepieces, entertainment and lighting all harmonise.",
        },
        {
          title: "Venue Selection & Management",
          body: "Our network covers the most iconic venues in Dubai, Sharjah and Abu Dhabi — ballrooms, scenic outdoor settings and cultural landmarks. We handle negotiations, layout planning and every logistical detail with the venue.",
        },
        {
          title: "Menu Design & Catering",
          body: "We collaborate with the finest chefs and catering teams in the UAE on customised menus that account for your guests' tastes and dietary requirements, from plated dinners to interactive food stations.",
        },
        {
          title: "Entertainment & Performances",
          body: "Live music, dance performances and engaging emcees, tailored to the theme. Our connections with top performers mean the programme suits the room rather than whoever happened to be available.",
        },
        {
          title: "Décor & Ambiance",
          body: "Floral arrangements, bespoke table settings and advanced lighting and sound design that transform the venue and keep every visual detail aligned with the theme.",
        },
        {
          title: "Logistics & On-Site Management",
          body: "Permits, vendor coordination, seating arrangements and guest transportation, with on-site managers running the evening so you can spend it with your guests.",
        },
      ],
    },
    checklist: {
      title: "Gala formats we stage",
      items: [
        "Corporate dinners",
        "Personalised dinners",
        "Themed dinners",
        "Race dinners",
        "Alumni gala dinners",
        "Charity galas",
      ],
    },
    reasons: {
      title: "Why Topaz for",
      accent: "gala dinners",
      intro:
        "A milestone your guests remember rather than another evening in a ballroom.",
      items: [
        {
          title: "Unmatched Expertise",
          body: "Years of designing and managing gala dinners that align with our clients' objectives and consistently exceed what was asked for.",
        },
        {
          title: "Personalised Approach",
          body: "Every gala should be as distinct as its host. Our collaborative process is built to bring your specific vision to life rather than adapt a previous event.",
        },
        {
          title: "Access To Premium Venues",
          body: "Exclusive access to the region's most luxurious and iconic venues, giving your evening the right backdrop before a single decoration goes up.",
        },
        {
          title: "Cultural Sensitivity",
          body: "We understand the diversity of the UAE and design events that honour local traditions while incorporating contemporary production.",
        },
        {
          title: "Flawless Execution",
          body: "From the grandest concept down to the smallest table detail, meticulous planning and rehearsal guarantee a seamless evening.",
        },
        {
          title: "Sustainable Practices",
          body: "As advocates of sustainable event management, we prioritise eco-friendly choices without compromising quality or luxury.",
        },
      ],
    },
    faqs: [
      {
        question: "Why is hiring the right gala event planner important?",
        answer:
          "A professional planner brings expertise, creativity and meticulous attention to detail, turning your vision into a seamless experience. They also absorb the logistics, which is what lets the host actually enjoy the evening.",
      },
      {
        question: "How do you help us choose the theme and décor?",
        answer:
          "We start from your goals, preferences and brand identity, then propose themes and décor concepts tailored to the event's purpose — anywhere between elegant minimalism and grand, immersive setups.",
      },
      {
        question: "What entertainment options do you provide?",
        answer:
          "Live music from bands, solo artists and instrumentalists, professional DJs, theatrical and cultural performances, and engaging emcees and interactive acts — chosen to match the theme and keep the room with you all evening.",
      },
      {
        question: "Do you offer catering services?",
        answer:
          "Yes. We partner with top-tier UAE caterers on tailored menus that suit your theme and your guests' preferences, from multi-course meals to interactive food stations.",
      },
      {
        question: "Can you handle large-scale gala dinners?",
        answer:
          "Absolutely. Our team manages events of all sizes, from intimate gatherings to grand galas with hundreds of attendees, with the crew and inventory scaled to match.",
      },
      UAE_FAQ,
    ],
    related: [
      "corporate-event-management",
      "award-functions-event-management",
      "all-rental-services",
    ],
    cta: {
      title: "Let's design your",
      accent: "gala dinner",
      body: "Share the date, the venue and the guest count. We will come back with a concept direction and a costed plan for the evening.",
    },
  },

  {
    slug: "festivals",
    nav: "Festivals",
    metaTitle: "Festival Event Management Company in the UAE | Topaz Events",
    metaDescription:
      "Festival event management across Dubai, Sharjah and Abu Dhabi — music, cultural, food, wellness and film festivals produced and run by Topaz Events.",
    eyebrow: "Festivals",
    title: "Festival event",
    accent: "management",
    tagline: "Turning festivals into celebrations a city remembers.",
    lede: "Topaz creates vibrant, immersive festival experiences across Dubai, Sharjah, Abu Dhabi and the wider UAE. Music festival, food fair, cultural showcase or innovation expo — we take it from concept through logistics, entertainment programming and crowd experience as one continuous piece of work.",
    image: "/services/Topaz-SCC-Kalba-10.webp",
    imageAlt:
      "Crowd and main stage at a Sharjah city festival produced by Topaz Events",
    overview: {
      label: "The scale",
      title: "Multi-day events,",
      accent: "one moving piece",
      body: [
        "A festival is a small town that exists for three days. Power, water, access roads, crowd flow, stage changeovers, vendor load-in, waste, medical and security all have to work together, and any one of them failing is what the public remembers.",
        "We plan festivals from the site outward: what the ground can carry, how ten thousand people move through it, and where the programme needs to be so the site never empties or jams. Then we build the spectacle on top of a plan that already holds.",
      ],
    },
    offerings: {
      label: "Festival types",
      title: "Festivals",
      accent: "we produce",
      intro:
        "Each format brings its own audience, its own licensing and its own operational shape.",
      items: [
        {
          title: "Concert & Music Festivals",
          body: "Artist booking, state-of-the-art sound systems, stage design and lighting brought together so the sound, the visuals and the energy arrive as one thing rather than three.",
        },
        {
          title: "Cultural Festivals",
          body: "Art, performance, tradition and food programmed to bring cultural stories to life. We source local talent and build immersive experiences that foster community pride.",
        },
        {
          title: "Food & Beverage Festivals",
          body: "Live cooking demonstrations, food trucks, tasting zones and expert panels, laid out so queues move and every stall gets its share of the footfall.",
        },
        {
          title: "Children's Festivals",
          body: "Interactive games, workshops, live performances and themed activities designed to enchant and educate, with safety and sightlines planned for small people.",
        },
        {
          title: "Wellness & Fitness Festivals",
          body: "Yoga retreats, fitness challenges, wellness seminars and organic product showcases, programmed to motivate and rejuvenate across a full day.",
        },
        {
          title: "Art & Film Festivals",
          body: "Screenings, exhibitions, panel discussions and workshops that create a hub for artists, filmmakers and enthusiasts to connect.",
        },
      ],
    },
    reasons: {
      title: "Why Topaz for",
      accent: "festivals",
      intro:
        "Years of festival production across the Emirates, with the inventory to back the programme.",
      items: [
        {
          title: "Creative Excellence",
          body: "Innovative ideas combined with expert theming, so a festival stands out in a crowded events calendar rather than blending into it.",
        },
        {
          title: "End-To-End Planning",
          body: "From securing venues and permits to managing logistics on the ground, every aspect is covered by one team.",
        },
        {
          title: "Artist & Celebrity Network",
          body: "An extensive network giving access to top performers, celebrity guests and influencers who can carry a headline slot.",
        },
        {
          title: "Technical Expertise",
          body: "In-house AV, LED screens, sound systems and lighting mean the technical spec is ours to guarantee, not a supplier's to promise.",
        },
        {
          title: "Crowd & Safety Planning",
          body: "Risk assessments, medical provision and coordination with local authorities are part of the plan from the first site visit.",
        },
        {
          title: "In-House Rentals",
          body: "AV, LED screens, sound, luxury furniture, dome tents and VIP portable facilities all come from our own stock.",
        },
      ],
    },
    faqs: [
      {
        question: "What types of festivals does Topaz manage?",
        answer:
          "Music, cultural, food, innovation, children's, wellness, art and film festivals, plus roadshows — each tailored to the audience and the site.",
      },
      {
        question: "What services do you offer for festival management?",
        answer:
          "Venue sourcing, event theming, entertainment booking, technical support, logistics management and post-event analysis.",
      },
      {
        question: "Can you provide in-house rentals for festivals?",
        answer:
          "Yes. AV equipment, LED screens, sound systems, luxury furniture, dome tents and VIP portable toilets all come from our own inventory, which keeps the spec and the schedule under our control.",
      },
      {
        question: "How do you keep a festival audience engaged?",
        answer:
          "By programming the site, not just the stage. Interactive zones, sightline planning and paced scheduling keep people moving through the festival rather than standing in one place waiting.",
      },
      UAE_FAQ,
    ],
    related: [
      "sporting-outdoor-events",
      "tent-rental",
      "interactive-event-technology",
    ],
    cta: {
      title: "Bringing a festival",
      accent: "to the UAE?",
      body: "Tell us the site, the dates and the audience you are expecting. We will come back with a production plan and a costed scope.",
    },
  },

  {
    slug: "sporting-outdoor-events",
    nav: "Sports Events",
    metaTitle: "Sports Event Management Company in Dubai & UAE | Topaz Events",
    metaDescription:
      "Sports event management in Dubai, Sharjah and Abu Dhabi. Marathons, football, corporate sports days, esports and championships delivered by Topaz Events.",
    eyebrow: "Sports & outdoor",
    title: "Sports event",
    accent: "management",
    tagline: "From marathons to esports, staged for athletes and crowds alike.",
    lede: "Topaz plans and executes sports and outdoor events of every scale across Dubai, Sharjah and Abu Dhabi — local tournaments through to international championships. Timing, staging, safety and broadcast are built around the competitors first and the spectator experience second, which is the order that makes both work.",
    image: "/services/IFBB-Asia-2025-5.webp",
    imageAlt:
      "Competition stage at the IFBB Asian Bodybuilding Championships run by Topaz Events",
    overview: {
      label: "The ground",
      title: "Competition is",
      accent: "unforgiving of delay",
      body: [
        "A sports event has a clock that does not negotiate. Heats have to start on time, results have to be on the screen before the next race is called, and a medical response has to be measured in seconds rather than minutes.",
        "We plan the operation around those constraints — course design, timing systems, athlete flow, officials, medical cover and coordination with the local authority — then add the production that makes it worth watching.",
      ],
    },
    offerings: {
      label: "Event types",
      title: "Sports events",
      accent: "we deliver",
      intro:
        "Every event is tailored, from concept development through to post-event analysis.",
      items: [
        {
          title: "Race Events",
          body: "Marathons, triathlons and cycling races with course design, seamless logistics, timing and the safety measures the distance demands.",
        },
        {
          title: "Football Events",
          body: "Tournaments and showcase matches with professional planning and fan experiences that fill the ground rather than just the pitch.",
        },
        {
          title: "Corporate Sports Days",
          body: "Team-building sports events for organisations across the UAE, planned so every fitness level in the company has something to do.",
        },
        {
          title: "Youth & School Sports",
          body: "Fun, safe and vibrant events for younger participants, with supervision ratios and equipment scaled to the age group.",
        },
        {
          title: "College Sports Events",
          body: "University tournaments and inter-college competitions built to generate the atmosphere students actually turn up for.",
        },
        {
          title: "Adventure & Outdoor",
          body: "Camping trips, obstacle races and water sports that promote teamwork, with the risk assessment and support crew behind them.",
        },
        {
          title: "Esports Events",
          body: "Competitive gaming tournaments with professional setups, low-latency networking, live streaming and stage production.",
        },
        {
          title: "International Championships",
          body: "Logistics, technical production and federation coordination for large-scale international competition hosted in the UAE.",
        },
        {
          title: "Family & Virtual Events",
          body: "Fun runs and community tournaments, plus virtual formats that connect participants across locations with live leaderboards.",
        },
      ],
    },
    reasons: {
      title: "What makes us the",
      accent: "preferred choice",
      intro:
        "Championships, marathons and corporate sports days delivered without a schedule slipping.",
      items: [
        {
          title: "Passion For Sport",
          body: "Professionals who follow the sports they stage, which is why the athlete experience never gets traded away for a camera angle.",
        },
        {
          title: "Tailored Solutions",
          body: "Every event is customised to your specific vision and objectives rather than fitted to a standard package.",
        },
        {
          title: "Strategic Execution",
          body: "Meticulous planning and seamless coordination across officials, medical, security and production keep the day on the clock.",
        },
        {
          title: "Cutting-Edge Technology",
          body: "Advanced AV solutions, LED screens and live streaming bring the action to the crowd on site and the audience at home.",
        },
        {
          title: "Eco-Friendly Practices",
          body: "Sustainable event solutions that reduce the environmental impact of large outdoor gatherings.",
        },
        {
          title: "In-House Rental Solutions",
          body: "AV, LED screens, luxury furniture, dome tents and portable facilities all supplied from our own inventory.",
        },
      ],
    },
    faqs: [
      {
        question: "What safety measures do you implement?",
        answer:
          "We conduct risk assessments, ensure first-aid and medical provision on site, and coordinate with local authorities on security and emergency response before the event is signed off.",
      },
      {
        question: "Can you handle branding and sponsorships?",
        answer:
          "Yes. We help promote the event and secure sponsorships, then deliver the branding across the site, the broadcast and the athlete-facing assets.",
      },
      {
        question: "Do you provide AV and LED screens for sports events?",
        answer:
          "We do. LED screens, sound systems, lighting and live camera feed all come from our own inventory and are operated by our technical crew.",
      },
      UAE_FAQ,
      BOOKING_FAQ,
    ],
    related: ["festivals", "led-screen-rental", "tent-rental"],
    cta: {
      title: "Have a championship",
      accent: "to deliver?",
      body: "Send us the discipline, the venue and the expected field. We will come back with an operations plan and a costed production scope.",
    },
  },

  {
    slug: "exhibitions",
    nav: "Exhibitions",
    metaTitle: "Exhibition Stand Design & Build Company in the UAE | Topaz",
    metaDescription:
      "Custom exhibition stand design and build across Dubai, Sharjah and Abu Dhabi. 3D design, LED integration, sustainable builds and turnkey installation.",
    eyebrow: "Exhibitions",
    title: "Exhibition stand",
    accent: "design & build",
    tagline: "Where creativity, innovation and sustainability meet.",
    lede: "Topaz designs and builds exhibition stands that turn floor space into the centrepiece of the hall. Custom fabrication, interactive technology integration and eco-conscious materials, delivered across the UAE for clients including Shams Media, Sharjah Private Education Authority and Abu Dhabi Media.",
    image: "/services/Shams-Stand-1.webp",
    imageAlt:
      "Custom exhibition stand built by Topaz Events for Shams at a UAE trade show",
    overview: {
      label: "The floor",
      title: "A stand has",
      accent: "three seconds",
      body: [
        "Visitors decide whether to walk in from about five metres away, while still moving. That is the whole brief: read at distance, invite at the threshold, and hold a conversation once someone is inside.",
        "We design to that sequence — sightlines and height for the approach, an open edge that does not force a decision at the boundary, and a back-of-stand area where a real meeting can happen. Then we build it in our own workshop and install it ourselves.",
      ],
    },
    offerings: {
      label: "Stand services",
      title: "Exhibition",
      accent: "services",
      intro:
        "Concept through installation and dismantling, managed by one team.",
      items: [
        {
          title: "Concept & Theme Design",
          body: "Stands that are visually striking and strategically designed to communicate your brand's message, built to attract attention and drive engagement on a busy floor.",
        },
        {
          title: "Custom Stand Building",
          body: "Bespoke stands fabricated to your identity in our own workshop, balancing creative ambition against what can actually be installed in a build-up window.",
        },
        {
          title: "LED Screen Integration",
          body: "Dynamic visuals through cutting-edge LED technology — content, brand stories and interactive displays that pull attention from across the hall.",
        },
        {
          title: "Sustainable Solutions",
          body: "Eco-friendly stands built from sustainable materials and processes that minimise waste, including reusable structural systems.",
        },
        {
          title: "3D Stall Design",
          body: "Detailed 3D models so you can refine every element before fabrication starts and sign off on something you have actually seen.",
        },
        {
          title: "Exhibition Wall Design",
          body: "Stand walls treated as a canvas for your story, with branding, graphics and messaging integrated rather than applied as an afterthought.",
        },
        {
          title: "Interactive Features",
          body: "Touchscreens, virtual reality and sensor-driven elements that turn a walk-past into a demonstration.",
        },
        {
          title: "Open Stall Configurations",
          body: "Two-side open designs that maximise accessibility and engagement, and three-side open layouts for unmatched visibility in high-traffic zones.",
        },
      ],
    },
    reasons: {
      title: "Why Topaz as your",
      accent: "exhibition partner",
      intro:
        "Over ten years designing and executing exhibition stands across the Emirates.",
      items: [
        {
          title: "Award-Winning Expertise",
          body: "A decade of designing and executing impactful exhibition stands in the UAE, including premium double-decker concepts.",
        },
        {
          title: "Tailored Solutions",
          body: "Every stand is designed around your brand's identity and objectives rather than adapted from a modular catalogue.",
        },
        {
          title: "Sustainability First",
          body: "Eco-conscious practices and materials that align with global green initiatives and your own reporting commitments.",
        },
        {
          title: "Cutting-Edge Technology",
          body: "LED screens, touchscreens and VR integrated into the structure for genuinely enhanced engagement.",
        },
        {
          title: "End-To-End Service",
          body: "Concept, fabrication, installation and dismantling all managed by us — one contact for the whole build.",
        },
        {
          title: "In-House Fabrication",
          body: "Our own production facility, 3D artists and graphic designers mean quality control at every step and no surprises at handover.",
        },
      ],
    },
    faqs: [
      {
        question: "Can you create custom stands for a specific theme?",
        answer:
          "Yes. We specialise in bespoke designs tailored to your brand's identity and objectives, developed from a brief rather than selected from a range.",
      },
      {
        question: "Why choose a 2-side or 3-side open stall design?",
        answer:
          "A two-side open stall improves accessibility and visibility, which suits most aisle positions. A three-side open stall maximises exposure and works best in high-traffic zones and island positions.",
      },
      {
        question: "How does your 3D design process work?",
        answer:
          "We produce detailed 3D models so you can visualise the stand, request refinements and approve the final design before any material is cut.",
      },
      {
        question: "Do you offer sustainable exhibition solutions?",
        answer:
          "Yes. We use eco-friendly materials and processes, and design for reuse where the stand will travel between shows.",
      },
      UAE_FAQ,
    ],
    related: [
      "corporate-event-management",
      "led-screen-rental",
      "interactive-event-technology",
    ],
    cta: {
      title: "Standing out at",
      accent: "your next show?",
      body: "Send us your floor plan, stand size and the shows you are exhibiting at. We will come back with a 3D concept and a build cost.",
    },
  },

  {
    slug: "graduation-ceremony-event-management-company",
    nav: "Graduation Ceremonies",
    metaTitle: "Graduation Ceremony Event Management Company UAE | Topaz Events",
    metaDescription:
      "Graduation ceremony and alumni gala management for UAE universities. Trusted by the University of Sharjah, AUS and Ajman University. Topaz Events.",
    eyebrow: "Graduation & alumni",
    title: "Graduation ceremony",
    accent: "event management",
    tagline: "The academic day your institution cannot afford to get wrong.",
    lede: "From the University of Sharjah to AUS, Topaz delivers large-scale graduation ceremonies and alumni galas with protocol handled as routine. Stage design, AV production, flow management and show calling for institutions across Dubai, Sharjah and Abu Dhabi.",
    image: "/services/AUS_Graduation_Alumni.webp",
    imageAlt:
      "Graduation and alumni ceremony staged by Topaz Events for the American University of Sharjah",
    overview: {
      label: "The stakes",
      title: "Thousands of families,",
      accent: "one take",
      body: [
        "A convocation is a live broadcast with no rehearsal for the people in it. Hundreds of names have to be read correctly, in order, while students cross a stage on a cue they have practised once, in front of families who will keep the photograph for thirty years.",
        "We run the ceremony like a show: name-card sequencing, marshalling, stage cueing, camera positions and screen relay all planned together, so the procession keeps moving and every graduate gets their moment on the screen.",
      ],
    },
    offerings: {
      label: "Ceremony types",
      title: "Academic events",
      accent: "we manage",
      intro:
        "Full-service delivery across every educational level and ceremony style.",
      items: [
        {
          title: "Graduation Ceremonies",
          body: "Comprehensive stage design, audio-visual production, flow management and protocol handling for annual convocations of any size.",
        },
        {
          title: "Alumni Galas & Reunions",
          body: "Environments built for networking and celebration that strengthen the connection between an institution and the graduates who left it.",
        },
        {
          title: "Kindergarten Graduations",
          body: "Magical milestones for the youngest achievers, with age-appropriate themes and safe, engaging stage setups that work for small children and their families.",
        },
        {
          title: "Technical Production",
          body: "Sound, lighting, LED screens and interactive solutions specified and operated by our own engineers for the full ceremony run.",
        },
      ],
    },
    checklist: {
      title: "Trusted by leading UAE institutions",
      items: [
        "University of Sharjah (UOS)",
        "American University of Sharjah (AUS)",
        "Ajman University",
        "University of Khorfakkan (UKF)",
        "Sharjah American International School",
      ],
    },
    reasons: {
      title: "Why universities",
      accent: "choose Topaz",
      intro:
        "Because we understand the stakes of an institution's most important academic day.",
      items: [
        {
          title: "Deep Cultural Understanding",
          body: "Inclusive ceremonies that honour UAE culture and tradition, with every protocol followed carefully and without prompting.",
        },
        {
          title: "Innovative Experiences",
          body: "Ceremonies where every detail celebrates the achievement, powered by advanced audio-visual technology rather than a lectern and a microphone.",
        },
        {
          title: "Outstanding Value",
          body: "Premium delivery within budget, with transparent pricing and no hidden costs on the final invoice.",
        },
        {
          title: "Seamless Execution",
          body: "Every aspect managed from planning to final delivery, so the faculty can attend the ceremony rather than run it.",
        },
        {
          title: "Experienced Team",
          body: "Seasoned professionals who have delivered convocations at scale, backed by over 100 technical experts across three UAE offices.",
        },
        {
          title: "Comprehensive In-House Capability",
          body: "AV solutions, a modern production facility, 3D artists, graphic designers and event managers under one roof guarantee quality control at every step.",
        },
      ],
    },
    faqs: [
      {
        question: "Do you handle the full scope of a graduation ceremony?",
        answer:
          "Yes. As a full-service graduation ceremony planner we handle stage fabrication, sound and lighting, seating arrangements, show calling and protocol management, so every part of the ceremony runs to one plan.",
      },
      {
        question: "Can you plan a smaller VIP graduation reception?",
        answer:
          "Absolutely. While we specialise in large university convocations, we also design intimate, high-end graduation celebrations and VIP dinners, tailored to events of any scale.",
      },
      {
        question: "Do you work with universities outside Dubai?",
        answer:
          "Yes. We have deep experience in Sharjah with UOS and AUS, in Abu Dhabi, and across the wider UAE. Three offices mean local support wherever the campus is.",
      },
      BOOKING_FAQ,
    ],
    related: [
      "award-functions-event-management",
      "gala-dinner-organizer-dubai",
      "led-screen-rental",
    ],
    cta: {
      title: "Planning this year's",
      accent: "convocation?",
      body: "Share your student count, venue and ceremony date. We will propose a tailored plan covering staging, AV and the full ceremony run.",
    },
  },

  {
    slug: "interactive-event-technology",
    nav: "Interactive Technology",
    metaTitle: "Interactive Event Technology & LED Solutions UAE | Topaz Events",
    metaDescription:
      "Kinetic, anamorphic, transparent and immersive LED solutions, sensor screens and drone shows, installed and supported across the UAE by Topaz Events.",
    eyebrow: "Interactive technology",
    title: "Interactive event",
    accent: "technology",
    tagline: "Installations your guests can walk into, touch and move.",
    lede: "From kinetic and anamorphic LED screens to immersive rooms and drone shows, Topaz delivers, installs and supports cutting-edge display technology across the UAE and the wider Middle East — all of it designed to turn an audience into participants.",
    image: "/projects/binghatti-mercedes.webp",
    imageAlt:
      "Drone show staged over Dubai by Topaz Events for the Binghatti and Mercedes reveal",
    overview: {
      label: "The idea",
      title: "A screen nobody",
      accent: "walks past",
      body: [
        "A flat rectangle at the back of a stage is furniture. The installations here are the opposite: geometry that bends around a room, floors that respond to footsteps, illusions that only resolve from where your guest happens to be standing.",
        "All of it is delivered turnkey. Our engineers specify the build, install it, run it during the event and take it down afterwards, with the content produced in-house by our own 3D artists and designers so the screen has something worth showing.",
      ],
    },
    film: {
      youtubeId: "8pmHDwXnT8s",
      title: "Interactive event technology by Topaz Events",
      poster: "/interactive/cube-led-screen.webp",
      posterAlt:
        "Cube LED screen installation from a Topaz Events interactive technology showreel",
      start: 3,
      label: "See it in motion",
      heading: "The technology,",
      accent: "at full tilt",
      description:
        "Kinetic panels, anamorphic illusions and immersive rooms in action — the showreel plays in full quality with sound as soon as the page opens.",
    },
    offerings: {
      label: "What you get",
      title: "Turnkey from",
      accent: "delivery to de-rig",
      intro:
        "All-inclusive pricing covering delivery, installation, operation and dismantling by our own team.",
      items: [
        {
          title: "High-Quality Equipment",
          body: "Premium interactive solutions from the world's top manufacturers, delivered and commissioned by professional engineers rather than a general crew.",
        },
        {
          title: "Best Rates",
          body: "Free technical support during the event and low delivery charges across the UAE, so the quoted figure is close to the final one.",
        },
        {
          title: "Turnkey Service",
          body: "No extra charges for transportation, operators or technical assistance — everything is included unless you add scope later.",
        },
        {
          title: "On-Site Through The Event",
          body: "Our team stays on site for the duration to keep LED performance optimal and handle anything that comes up mid-show.",
        },
      ],
    },
    catalogue: {
      label: "The inventory",
      title: "Interactive LED",
      accent: "solutions",
      intro:
        "Fifteen formats held in stock and configurable to your venue, brief and content.",
      imageFit: "cover",
      imageAspect: "4/3",
      items: [
        {
          name: "Circle LED Screen",
          body: "360° impact that surrounds your audience from every side of the room.",
          image: "/interactive/circle-led-screen.webp",
          imageAlt: "Circular LED screen installation by Topaz Events",
        },
        {
          name: "Cube LED Screen",
          body: "Crystal-clear visuals in every direction, ideal as a central hanging feature.",
          image: "/interactive/cube-led-screen.webp",
          imageAlt: "Suspended cube LED screen with visuals on every face",
        },
        {
          name: "Curve LED Screen",
          body: "A seamless wrap-around stage backdrop with no visible panel breaks.",
          image: "/interactive/curve-led-screen.webp",
          imageAlt: "Curved wrap-around LED stage backdrop by Topaz Events",
        },
        {
          name: "Cylindrical LED Screen",
          body: "Immersive panoramic motion that reads from anywhere in a circulating crowd.",
          image: "/interactive/cylindrical-led-screen.webp",
          imageAlt: "Cylindrical LED screen showing panoramic motion content",
        },
        {
          name: "Digital LED Poster",
          body: "Slim, portable and instantly placed — high impact in a small footprint.",
          image: "/interactive/digital-led-poster.webp",
          imageAlt: "Slim standing digital LED poster display",
        },
        {
          name: "DNA LED Screen",
          body: "A futuristic helix form that draws attention before any content plays.",
          image: "/interactive/dna-led-screen.webp",
          imageAlt: "Helix-shaped DNA LED screen feature",
        },
        {
          name: "Floor LED Screen",
          body: "Interactive and durable, built for high-impact stage and dancefloor effects.",
          image: "/interactive/floor-led-screen.webp",
          imageAlt: "Interactive LED floor screen for stage and dancefloor effects",
        },
        {
          name: "Immersive Room",
          body: "A captivating 360° visual world that surrounds guests on every surface.",
          image: "/interactive/immersive-room.webp",
          imageAlt: "Immersive 360° LED room surrounding guests with visuals",
        },
        {
          name: "Kinetic LED Screen",
          body: "Motion-driven panels for dynamic visual storytelling and reveal moments.",
          image: "/interactive/kinetic-led-screen.webp",
          imageAlt: "Kinetic LED screen with motion-driven moving panels",
        },
        {
          name: "Anamorphic LED Screen",
          body: "Mind-bending 3D illusions that redefine what a corner screen can do.",
          image: "/interactive/anamorphic-led-screen.webp",
          imageAlt: "Anamorphic corner LED screen creating a 3D illusion",
        },
        {
          name: "Transparent LED Screen",
          body: "Modern and stylish, ideal for retail, exhibitions and layered stage looks.",
          image: "/interactive/transparent-led-screen.webp",
          imageAlt: "Transparent LED screen used for a layered stage look",
        },
        {
          name: "Tangible Interactive Table",
          body: "Touch gestures combined with physical objects for a hands-on digital experience.",
          image: "/interactive/tangible-interactive-table.webp",
          imageAlt: "Tangible interactive table screen with touch and physical objects",
        },
        {
          name: "Interactive Sensor Screens",
          body: "Real-time reaction to movement, built for dance shows and live performance.",
          image: "/interactive/interactive-sensor-screens.webp",
          imageAlt: "Interactive sensor LED screen reacting to a live performance",
        },
        {
          name: "Interactive Tunnel Screens",
          body: "Walkthrough experiences that respond to movement and gesture as guests pass.",
          image: "/interactive/interactive-tunnel-screens.webp",
          imageAlt: "Immersive LED tunnel screen walkthrough experience",
        },
        {
          name: "Drone Show Technology",
          body: "Breathtaking aerial displays choreographed over your venue or skyline.",
          image: "/interactive/drone-show-technology.webp",
          imageAlt: "Choreographed drone show staged over a venue by Topaz Events",
        },
      ],
    },
    reasons: {
      title: "Why Topaz for",
      accent: "event technology",
      intro:
        "Industry-leading expertise combined with state-of-the-art equipment, all under one roof.",
      items: [
        {
          title: "A Decade Of Delivery",
          body: "Over ten years as a trusted leader in event management and AV across the UAE for corporate, government and private clients.",
        },
        {
          title: "Beyond Standard AV",
          body: "We specialise in technical event production and advanced interactive technology, not just screens and speakers on a stand.",
        },
        {
          title: "Robust Infrastructure",
          body: "Three offices across the UAE, a modern production facility and a team of over fifty skilled professionals behind every install.",
        },
        {
          title: "In-House Content",
          body: "Graphic designers and 3D artists who build custom content, animations and visuals tailored to your brand and the screen geometry.",
        },
        {
          title: "Engineer-Led Installs",
          body: "Highly trained technical engineers handle the rig, the calibration and the operation, so the flawless execution is planned rather than lucky.",
        },
        {
          title: "Full Technical Support",
          body: "Support included throughout the event with the crew on site, not on call from a warehouse in another emirate.",
        },
      ],
    },
    faqs: [
      {
        question: "What types of LED screens do you offer for events?",
        answer:
          "Circle, cube, curve, cylindrical, transparent, kinetic and anamorphic screens, plus LED floors and immersive room displays, suitable for both indoor and outdoor events.",
      },
      {
        question: "Do you provide setup and on-site technical support?",
        answer:
          "Yes. Our in-house technical team delivers, installs and manages every LED setup, ensuring fast installation and consistent performance throughout the event.",
      },
      {
        question: "Can I rent screens for both indoor and outdoor events?",
        answer:
          "Absolutely. We provide weatherproof outdoor LED screens and high-resolution indoor displays for exhibitions, conferences, concerts and corporate events.",
      },
      {
        question: "Do you offer content creation for the screens?",
        answer:
          "Yes. Our in-house graphic designers and 3D artists create custom content, animations and visuals tailored to your brand and event theme.",
      },
      {
        question: "How do I know which solution suits my event?",
        answer:
          "Our experts assess your venue, audience size and event type, then recommend the right configuration — a curved wall, a transparent display or a fully immersive setup.",
      },
      {
        question: "How far in advance should I book?",
        answer:
          "We recommend booking at least two to three weeks ahead, especially for large-scale events or peak season, to guarantee availability and a comfortable install window.",
      },
    ],
    related: ["led-screen-rental", "all-rental-services", "exhibitions"],
    cta: {
      title: "Want an installation",
      accent: "people queue for?",
      body: "Tell us the venue, the audience and what you want them to do. We will recommend a configuration and quote it turnkey.",
    },
  },

  {
    slug: "led-screen-rental",
    nav: "LED Screen Rental",
    metaTitle: "LED Screen Rental in Dubai, Sharjah & Abu Dhabi | Topaz Events",
    metaDescription:
      "LED screen and video wall rental across the UAE. Indoor and outdoor 4K displays with all-inclusive delivery, installation, operation and dismantling by Topaz Events.",
    eyebrow: "LED screen rental",
    title: "LED screen",
    accent: "rental services",
    tagline: "Ultra-HD video walls, delivered, rigged and operated.",
    lede: "Topaz supplies indoor and outdoor LED screens for events of every size across Dubai, Sharjah and Abu Dhabi. Video walls, backdrop displays and large-format screens, quoted all-inclusive — delivery, installation, operation and dismantling by our own engineers.",
    image: "/projects/shjseen-2026.webp",
    imageAlt:
      "Large LED backdrop screen supplied by Topaz Events for the Shjseen award ceremony",
    overview: {
      label: "The spec",
      title: "Pitch, brightness",
      accent: "and viewing distance",
      body: [
        "Most screen complaints come from one of three mismatches: a pixel pitch too coarse for how close the front row sits, a panel too dim for daylight, or a screen sized for the stage rather than the back of the room.",
        "We specify around the venue instead. Tell us the audience size, whether you are indoors or out, and the content you plan to show, and we will recommend the pitch, the dimensions and the rigging method that suit — then include the crew to run it.",
      ],
    },
    offerings: {
      label: "Use cases",
      title: "LED screens for",
      accent: "every event",
      intro:
        "State-of-the-art displays that make sure your visual content lands with clarity and impact.",
      items: [
        {
          title: "Corporate Events",
          body: "Crystal-clear displays so every presentation and announcement reads sharply from the back of the room, keeping the message intact.",
        },
        {
          title: "Conferences & Seminars",
          body: "High-definition screens that give every attendee clear visibility of slides, video and speaker feed regardless of where they are seated.",
        },
        {
          title: "Convocations & Concerts",
          body: "High-resolution relay screens so families and fans get an up-close view of the stage, with the brightness to hold up under show lighting.",
        },
        {
          title: "Indoor & Outdoor Sports",
          body: "Vibrant screens that bring replays, timing and live action to the crowd, weatherproofed for open-air venues.",
        },
        {
          title: "Brand Exhibitions",
          body: "Dynamic displays integrated into stand builds to draw attention across a busy hall and hold a visitor long enough to talk.",
        },
        {
          title: "Gala Dinners",
          body: "Sleek video walls for event highlights, live feeds and sponsor messaging without breaking the elegance of the room.",
        },
      ],
    },
    catalogue: {
      label: "The inventory",
      title: "Choose your",
      accent: "LED screen",
      intro:
        "All-inclusive prices covering delivery, installation, operation and dismantling by our expert team.",
      items: [
        {
          name: "P3.9 Outdoor LED Screen",
          body: "4K resolution with the brightness for clear daytime visibility and a weather-resistant build. Ideal for concerts, sports and outdoor marketing.",
        },
        {
          name: "P1.9 Indoor Screen (Cube)",
          body: "High-resolution close-viewing visuals, suited to retail, lobbies and immersive indoor displays.",
        },
        {
          name: "P2.6 & P2.9 Indoor Screen",
          body: "4K resolution with high brightness for corporate events, gala dinners and award functions. Customisable to the stage width.",
        },
        {
          name: "P3.9 Flexible Module",
          body: "Versatile indoor panels for curved and custom-shaped displays at events, retail and exhibitions.",
        },
        {
          name: "P2.6 Flexible Module",
          body: "High-resolution adaptable panels built for custom-shaped installations where a flat wall will not do.",
        },
        {
          name: "P2.9 Flexible Module",
          body: "Flexible high-resolution displays for bespoke setups across retail, events and exhibition stands.",
        },
        {
          name: "LED Video Bars",
          body: "Low-voltage SMD bars with independent control and full-colour conversion, for stage decoration, launches and night-scene effects.",
        },
      ],
    },
    checklist: {
      title: "What we will ask before quoting",
      items: [
        "Audience size",
        "Indoor or outdoor",
        "Screen dimensions",
        "Pixel pitch required",
        "Ground support or flown",
        "Build-up window",
        "Content format",
        "Event dates",
      ],
    },
    reasons: {
      title: "Why rent from",
      accent: "Topaz",
      intro:
        "Over a decade of LED rentals and installations across Dubai, Sharjah and Abu Dhabi.",
      items: [
        {
          title: "High-Quality Panels",
          body: "Screens from the world's top manufacturers, commissioned by professional engineers, backed by more than ten years of UAE experience.",
        },
        {
          title: "Best Rates",
          body: "Free technical support during your event, free delivery within Dubai and low delivery charges across the rest of the UAE.",
        },
        {
          title: "Turnkey Pricing",
          body: "No extra charges for transportation, operators or technical assistance — it is all in the quoted figure unless you add scope.",
        },
        {
          title: "On-Site Operators",
          body: "Our team stays on site throughout the event to keep performance optimal and respond immediately if anything needs changing.",
        },
        {
          title: "Expert Engineers",
          body: "Technicians who specialise in LED technology, which is why the rig is calibrated rather than just switched on.",
        },
        {
          title: "Full Range In Stock",
          body: "Indoor, outdoor, flexible and video-bar formats held in our own warehouses, so availability is ours to confirm.",
        },
      ],
    },
    process: {
      title: "From enquiry to",
      accent: "quote in an hour",
      items: [
        {
          title: "Send Your Enquiry",
          body: "Give us the size, style, location and intended use so we understand exactly what the screen has to do.",
        },
        {
          title: "We Propose A Solution",
          body: "Our team builds a customised LED rental specification, including any rigging and accessories the install needs.",
        },
        {
          title: "Get Your Free Quote",
          body: "You receive a detailed quote covering the total rental cost, with no hidden charges — usually within the hour.",
        },
      ],
    },
    faqs: [
      {
        question: "What is included in the rental price?",
        answer:
          "Delivery, installation, operation and dismantling by our own team. Transportation, operators and technical assistance are included unless you request additional scope.",
      },
      {
        question: "How do I choose the right screen size and resolution?",
        answer:
          "Start from the audience: how many people, how far the nearest and furthest are sitting, and whether the content is detailed. We use those three numbers to recommend a pitch and dimensions.",
      },
      {
        question: "Can you supply screens for outdoor events in summer?",
        answer:
          "Yes. Our P3.9 outdoor panels are weather-resistant and bright enough for daytime visibility, and our crews plan the rig around wind loading and heat.",
      },
      UAE_FAQ,
      BOOKING_FAQ,
    ],
    related: [
      "all-rental-services",
      "interactive-event-technology",
      "exhibitions",
    ],
    cta: {
      title: "Need a screen",
      accent: "quoted today?",
      body: "Send the size, the venue and the dates. You will get a detailed, all-inclusive quote back — usually within the hour.",
    },
  },

  {
    slug: "tent-rental",
    nav: "Tent Rental",
    metaTitle: "Best Tent Rental Services in Dubai & Sharjah | Topaz Events",
    metaDescription:
      "Luxury dome tent and marquee rental across Dubai, Sharjah, Abu Dhabi and Ajman. CE-certified structures from 6m to 30m with AC, flooring, lighting and full fit-out.",
    eyebrow: "Tent rental",
    title: "Best tent rental",
    accent: "services in UAE",
    tagline: "Find your shelter solution — fast, secure and reliable.",
    lede: "Unveil luxury tents for rent in Dubai, Sharjah, Abu Dhabi and beyond. Topaz structures are built for high-class events — corporate gatherings, exhibitions, product launches, light festivals, brand promotions, weddings, trade shows, business meetings and projection mapping.",
    image: "/services/dome-tent-hero.webp",
    imageAlt:
      "35m diameter dome tent supplied by Topaz Events for a large outdoor gathering in the UAE",
    overview: {
      label: "The No.1 supplier",
      title: "Reliability,",
      accent: "personalisation & safety",
      body: [
        "Topaz stands as a leading provider of dome tents for rent in Dubai, Sharjah, Abu Dhabi and Ajman. Our structures can take clear roof covers so daylight brightens the whole interior, then switch to vibrant lighting and projection after dark — suited to large-scale events, celebrations and exhibitions with serious capacity needs.",
        "Outdoor programmes in the Emirates have to survive heat, glare, dust and, for a few weeks a year, real wind and rain. Ours are built on sturdy steel frames engineered for wind loading, with PVC or PVDF covers resistant to water, fire and UV — so the tent arrives as a finished venue, not temporary shelter bolted on.",
      ],
    },
    offerings: {
      label: "The specification",
      title: "Features of dome",
      accent: "tent structure",
      intro:
        "Empowering events through reliability, personalisation and safety — in a structure that can be installed in days rather than weeks.",
      items: [
        {
          title: "Spacious and Flexible",
          body: "Clear-span interiors offer endless layout and design possibilities, so guests experience comfort and sophistication at any large-scale event.",
        },
        {
          title: "Safety and Durability",
          body: "Constructed with top-quality materials and CE certification, designed to withstand harsh weather while keeping every attendee safe.",
        },
        {
          title: "Projection Mapping",
          body: "A high-quality white sheet surface makes the structure ideal for projection mapping and advertisements, with vivid, high-impact visuals.",
        },
        {
          title: "Customisation and Branding",
          body: "Personalise interior layouts and branding options — a blank canvas ready to reflect your brand identity at any event.",
        },
        {
          title: "Aesthetic and Functional Design",
          body: "Sleek white exteriors, traditional Mashrabiya panels and elegant glass doors combine visual appeal with easy access and efficient climate control.",
        },
        {
          title: "Weather Prevention",
          body: "Sturdy steel frames engineered for strong wind loads, with premium PVC or PVDF covers resistant to water, fire and UV for reliable outdoor use.",
        },
        {
          title: "Quick and Easy Setup",
          body: "Prefabricated components mean a medium-sized dome can typically be installed in four to ten days by a small team.",
        },
        {
          title: "Customisation Support",
          body: "Tailored sizes, cover colours, patterns and additional facilities so the structure matches the gathering rather than constraining it.",
        },
      ],
    },
    catalogue: {
      label: "The range",
      title: "Choose your dome",
      accent: "tent for rental",
      intro:
        "A diverse selection of high-quality dome tents and marquees held in stock across the UAE, all customisable to your site and capacity.",
      imageFit: "cover",
      imageAspect: "16/9",
      items: [
        {
          name: "30M Dome Tent",
          body: "Our largest clear-span dome, for major launches, exhibitions and high-capacity gatherings.",
          image: "/rentals/tents/dome-30m.webp",
          imageAlt: "30M dome tent for rent from Topaz Events",
        },
        {
          name: "10M Dome Tent",
          body: "A mid-size dome suited to hospitality areas, VIP lounges and brand activations.",
          image: "/rentals/tents/dome-10m.webp",
          imageAlt: "10M dome tent for rent from Topaz Events",
        },
        {
          name: "6M Dome Tent",
          body: "A compact dome for registration points, satellite zones and intimate installations.",
          image: "/rentals/tents/dome-6m.webp",
          imageAlt: "6M dome tent for rent from Topaz Events",
        },
        {
          name: "Arabian Tent",
          body: "Traditional majlis-style structures for cultural events, national day celebrations and heritage programming.",
          image: "/rentals/tents/arabian-tent.webp",
          imageAlt: "Arabian majlis-style tent for rent from Topaz Events",
        },
        {
          name: "Type Tent (10m × 30m)",
          body: "A long-span rectangular marquee for banqueting, exhibitions and covered walkways.",
          image: "/rentals/tents/type-tent-10x30.webp",
          imageAlt: "10m by 30m type tent marquee for rent from Topaz Events",
        },
        {
          name: "Canopy Tent Rental",
          body: "Versatile open-sided canopy structures for outdoor hospitality, brand zones and shaded guest areas.",
          image: "/rentals/tents/canopy-tent-rental.webp",
          imageAlt: "Canopy tent structure for rent from Topaz Events",
        },
        {
          name: "Foldable Tent (3m × 3m)",
          body: "Rapid-deploy cover for stalls, registration desks and race-day support points.",
          image: "/rentals/tents/foldable-tent-3x3.webp",
          imageAlt: "3m by 3m foldable tent for rent from Topaz Events",
        },
        {
          name: "Canopy Tent (5m × 5m)",
          body: "Open-sided shade cover for hospitality, catering points and outdoor sports events.",
          image: "/rentals/tents/canopy-tent-5x5.webp",
          imageAlt: "5m by 5m canopy tent for rent from Topaz Events",
        },
        {
          name: "Canopy Tent (3m × 3m)",
          body: "A compact branded canopy for activations, marshalling points and vendor positions.",
          image: "/rentals/tents/canopy-tent-3x3.webp",
          imageAlt: "3m by 3m canopy tent for rent from Topaz Events",
        },
      ],
    },
    checklist: {
      title: "Other accessories with dome tents",
      items: [
        "Air conditioning",
        "Lights",
        "Flooring",
        "Doors",
        "Access ramps",
        "Carpets",
      ],
    },
    reasons: {
      title: "Why Topaz for",
      accent: "tent rental",
      intro:
        "A leading dome tent supplier in the UAE — empowering events through reliability, personalisation and safety.",
      items: [
        {
          title: "Certified Structures",
          body: "CE-certified frames and covers, with documentation available for venue and authority approvals.",
        },
        {
          title: "Full Fit-Out",
          body: "Air conditioning, flooring, lighting, doors, access ramps, carpets, AV and furniture can all come from us, so the tent arrives as a finished venue.",
        },
        {
          title: "Our Own Crew",
          body: "Installation and dismantling by Topaz teams who put these structures up every week, not a subcontracted labour supply.",
        },
        {
          title: "Nationwide Coverage",
          body: "Dubai, Sharjah, Abu Dhabi and Ajman served from our own warehouses, which keeps transport time and cost down.",
        },
        {
          title: "Event Integration",
          body: "Because we also run the event, the structure is planned around the show rather than dropped on site and handed over.",
        },
        {
          title: "Transparent Quoting",
          body: "Delivery, install, operation and de-rig itemised up front so you can see what each part of the build costs.",
        },
      ],
    },
    faqs: [
      {
        question: "How long does it take to install a dome tent?",
        answer:
          "A medium-sized dome is typically installed in four to ten days by a small team, thanks to prefabricated components. Larger structures need a longer build-up window.",
      },
      {
        question: "Can the tents be branded and customised?",
        answer:
          "Yes. Sizes, cover colours, patterns, interior layouts and additional facilities can all be tailored, and the exterior takes full brand application.",
      },
      {
        question: "Are the tents suitable for projection mapping?",
        answer:
          "They are. The white cover is a high-quality projection surface, which is why these structures are often used for light festivals and brand reveals.",
      },
      {
        question: "What accessories can you supply with a dome tent?",
        answer:
          "Air conditioning, lighting, flooring, doors, access ramps and carpets are available with every structure, so the booking covers a finished venue rather than a shell.",
      },
      UAE_FAQ,
      BOOKING_FAQ,
    ],
    related: ["all-rental-services", "festivals", "sporting-outdoor-events"],
    cta: {
      title: "Elevate your outdoor",
      accent: "experience",
      body: "Premium tents for Sharjah, Dubai, Abu Dhabi and across the UAE. Send site dimensions, capacity and dates — we will recommend a structure and quote it installed.",
    },
  },
];

/** Slug → page, for the dynamic route and the related-services cards. */
export const SERVICE_PAGE_MAP = new Map(
  SERVICE_PAGES.map((page) => [page.slug, page]),
);
