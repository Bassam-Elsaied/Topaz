export type TeamMember = {
  name: string;
  role: string;
  /** Optimized WebP portrait in /public/team, or omit to fall back to a monogram. */
  image?: string;
};

/** Leadership and account team, in the order the reference site lists them. */
export const TEAM: TeamMember[] = [
  {
    name: "Saher Elkot",
    role: "CEO & Founder",
    image: "/team/saher-elkot.webp",
  },
  {
    name: "Amr Youssef",
    role: "Managing Director",
    image: "/team/amr-youssef.webp",
  },
  {
    name: "Amr Tantaway",
    role: "Managing Director, Abu Dhabi",
    image: "/team/amr-tantaway.webp",
  },
  {
    name: "Priya Anish",
    role: "Assistant General Manager",
    image: "/team/priya-anish.webp",
  },
  {
    name: "Hafez Hammam",
    role: "Accounts Manager",
    image: "/team/hafez-hammam.webp",
  },
  {
    name: "Khaled Shalaby",
    role: "AV Production Manager",
    image: "/team/khaled-shalaby.webp",
  },
  {
    name: "Faisal Suleman",
    role: "Head of Design Team",
    image: "/team/faisal-suleman.webp",
  },
  {
    name: "Sharmili Eraysha",
    role: "Event Account Manager",
    image: "/team/sharmili-eraysha.webp",
  },
  {
    name: "Hadeel Arman",
    role: "Event Coordinator",
    image: "/team/hadeel-arman.webp",
  },
  {
    name: "Maickel Malak",
    role: "Marketing Manager",
    image: "/team/maickel-malak.webp",
  },
];

export type Department = { title: string; body: string };

/** The three groups an event passes through, from pitch to de-rig. */
export const DEPARTMENTS: Department[] = [
  {
    title: "Sales & Planning",
    body: "The face of the company and the first people you speak to. They plan and design the event with you, and they hold a clear line of communication from the first brief through to handover, so nothing is lost in translation on the way to production.",
  },
  {
    title: "Design & Content",
    body: "3D design, graphic design, motion graphics, editing and photography, all produced in-house. They work to your deadlines and their job is for the finished design to be better than the one you approved.",
  },
  {
    title: "Operations & Technical",
    body: "The hardest-working team in the building — known for problem solving, handling pressure and a constant awareness of how little time there is on site. They make sure what was drawn in the design is what actually gets built.",
  },
];
