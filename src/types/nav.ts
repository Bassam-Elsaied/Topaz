export type NavIconName =
  | "home"
  | "services"
  | "av"
  | "interactive"
  | "about"
  | "portfolio"
  | "team"
  | "awards"
  | "blog";

export type NavLink = { label: string; href: string; icon: NavIconName };

export type NavGroup = {
  label: string;
  icon: NavIconName;
  children: NavLink[];
};

export type NavItem = NavLink | NavGroup;

export type SocialIconName =
  | "instagram"
  | "youtube"
  | "linkedin"
  | "facebook"
  | "whatsapp";
