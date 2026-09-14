/** Canonical origin. Absolute URLs in metadata and structured data hang off it. */
export const SITE_URL = "https://topazevent.net";

export const COMPANY_NAME = "Topaz Events Management";

export const CONTACT = {
  phone: "+971 50 277 9072",
  phoneHref: "tel:+971502779072",
  email: "Info@topazuae.com",
  emailHref: "mailto:Info@topazuae.com",
  whatsapp:
    "https://wa.me/971502779072?text=Welcome%20To%20Topaz%20Events%20Management",
  hours: "Monday – Saturday, 9:00 AM – 6:00 PM",
  /** `openingHours` in schema.org's abbreviated day-range notation. */
  hoursSpec: "Mo-Sa 09:00-18:00",
};

export type Office = { city: string; lines: string[] };

export const OFFICES: Office[] = [
  {
    city: "Sharjah",
    lines: ["Office 1502 – 1503, Crystal Tower", "Al Majaz 1"],
  },
  {
    city: "Dubai",
    lines: ["Office 20, Acico Business Park M1", "Al Garhoud"],
  },
  {
    city: "Abu Dhabi",
    lines: [
      "Office 304 – 305, Khalifa Saeed Salim Gaaed Building 07",
      "Al Riqʹah Al Hamra St, Al Nahyan",
    ],
  },
];

/**
 * Catch-all for an enquiry that does not fit the list. Selecting it reveals a
 * free-text field, so a brief we have no category for still arrives described.
 */
export const OTHER_EVENT_TYPE = "Something else";

/** Options for the enquiry form's event-type chips. */
export const EVENT_TYPES = [
  "Event Management",
  "Corporate Events",
  "Gala Dinner",
  "Award Events",
  "Festivals",
  "Sports Events",
  "Conference Event",
  "Exhibition Event",
  "AV & Rentals",
  OTHER_EVENT_TYPE,
];

export const SOCIAL_LINKS = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/topaz_events_uae/",
    icon: "instagram" as const,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@topazeventsmanagement",
    icon: "youtube" as const,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/topaz-event-management/",
    icon: "linkedin" as const,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/TopazEventsManagement/",
    icon: "facebook" as const,
  },
  {
    label: "WhatsApp",
    href: CONTACT.whatsapp,
    icon: "whatsapp" as const,
  },
];

export const FOOTER_COLUMNS = [
  {
    title: "Event Services",
    links: [
      { label: "Corporate Events", href: "/corporate-event-management" },
      { label: "Award Functions", href: "/award-functions-event-management" },
      { label: "Gala Dinners", href: "/gala-dinner-organizer-dubai" },
      { label: "Festivals Events", href: "/festivals" },
      { label: "Sports Events", href: "/sporting-outdoor-events" },
      { label: "Exhibition Events", href: "/exhibitions" },
    ],
  },
  {
    title: "Rental Services",
    links: [
      { label: "AV Production", href: "/all-rental-services" },
      {
        label: "Interactive Technology",
        href: "/interactive-event-technology",
      },
      { label: "LED Screens", href: "/led-screen-rental" },
      { label: "Sound System", href: "/all-rental-services" },
      { label: "Lighting System", href: "/all-rental-services" },
      { label: "Durable Tents", href: "/tent-rental" },
    ],
  },
  {
    title: "Quick Links",
    links: [
      { label: "Home", href: "/" },
      { label: "Our Services", href: "/event-management" },
      { label: "Our Portfolio", href: "/portfolio" },
      { label: "About Us", href: "/about-page-topaz-event-management" },
      { label: "Contact Us", href: "/contact-us" },
      { label: "Privacy Policy", href: "/privacy-policy" },
    ],
  },
];
