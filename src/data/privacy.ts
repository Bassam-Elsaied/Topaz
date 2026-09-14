export type PolicySection = {
  heading: string;
  /** Paragraphs of running text, rendered before the list. */
  body?: string[];
  items?: string[];
};

/** Last substantive revision, shown on the page and used in the page metadata. */
export const POLICY_UPDATED = "2026-01-01";

/**
 * Plain-language highlights shown above the full policy, so a reader can take
 * the gist in a few seconds before deciding how far to read.
 */
export type PolicyHighlight = { title: string; body: string };

export const POLICY_HIGHLIGHTS: PolicyHighlight[] = [
  {
    title: "We never sell your data",
    body: "Your personal information is never sold. It is shared only with the partners and providers who help us deliver your event, and with authorities when the law requires it.",
  },
  {
    title: "Collected to serve you",
    body: "We gather only what we need to answer your enquiry and plan your event — your contact details, event brief and basic technical data from your visit.",
  },
  {
    title: "You stay in control",
    body: "You can access, correct or delete your information, and opt out of marketing at any time by contacting us.",
  },
];

export const POLICY_SECTIONS: PolicySection[] = [
  {
    heading: "Introduction",
    body: [
      "Welcome to Topaz Event Organizers LLC (“we”, “our” or “us”). Your privacy is important to us, and we are committed to protecting your personal information. This Privacy Policy sets out how we collect, use and safeguard the information you provide when using our website.",
      "By accessing or using this website, you agree to the terms outlined in this Privacy Policy.",
    ],
  },
  {
    heading: "Information we collect",
    items: [
      "Information you provide: personal information you give us voluntarily, such as your name, email address, phone number and anything else included when you make an enquiry or submit a form.",
      "Event-related information: if you engage our event management services, details relating to the event such as the date, location, preferences and anything else needed to plan and organise it.",
      "Automatically collected information: technical details captured when you visit, including your IP address, browser type, operating system and browsing behaviour.",
    ],
  },
  {
    heading: "How we use your information",
    body: ["We may use the information we collect to:"],
    items: [
      "Provide and improve our event management services.",
      "Respond to your enquiries and requests.",
      "Send you relevant information about our services or upcoming events.",
      "Customise your experience on this website.",
    ],
  },
  {
    heading: "How we share your information",
    body: [
      "We do not sell your personal information to third parties. We may share it with:",
    ],
    items: [
      "Service providers who assist us in delivering our services.",
      "Business partners and collaborators, for event-related purposes.",
      "Legal authorities, in response to valid legal requests.",
    ],
  },
  {
    heading: "Cookies and similar technologies",
    body: [
      "We may use cookies and similar technologies to improve your browsing experience and to understand how the website is used. You can control cookies through your browser settings.",
      "Blocking cookies will not stop you from using the website, though some parts of it may not work exactly as intended.",
    ],
  },
  {
    heading: "Data retention",
    body: [
      "We keep your personal information only for as long as it is needed for the purposes set out in this policy — typically for the duration of our engagement with you and for a reasonable period afterwards to meet our legal, accounting and reporting obligations.",
      "When your information is no longer required, we securely delete or anonymise it.",
    ],
  },
  {
    heading: "International data transfers",
    body: [
      "We operate from the United Arab Emirates. Where a service provider we rely on processes your information outside the UAE, we take reasonable steps to ensure it is handled in line with this policy and applicable data protection law.",
    ],
  },
  {
    heading: "Your rights and choices",
    body: ["You have the right to:"],
    items: [
      "Access and correct your personal information.",
      "Request deletion of your personal information, subject to our legal obligations.",
      "Opt out of receiving marketing communications.",
      "Withdraw consent for the collection and processing of your personal information.",
    ],
  },
  {
    heading: "Security",
    body: [
      "We implement appropriate security measures to protect your personal information from unauthorised access or disclosure. While no method of transmission over the internet is completely secure, we work to safeguard your information using measures appropriate to its sensitivity.",
    ],
  },
  {
    heading: "Third-party links",
    body: [
      "Our website may contain links to third-party sites and social media platforms. This Privacy Policy does not apply to those sites, and we are not responsible for their content or privacy practices. We encourage you to review the privacy policy of any site you visit.",
    ],
  },
  {
    heading: "Children’s privacy",
    body: [
      "Our services and website are not directed at children, and we do not knowingly collect personal information from anyone under the age of 18. If you believe a child has provided us with personal information, please contact us and we will remove it.",
    ],
  },
  {
    heading: "Changes to this policy",
    body: [
      "We may update this Privacy Policy from time to time. Any revised version will carry a new “last updated” date at the top of the page, and significant changes will be reflected here.",
    ],
  },
];
