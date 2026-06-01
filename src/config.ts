import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://marsdeat.uk/",
  author: "Andrew Marsden",
  profile: "https://marsdeat.uk/",
  desc: "The personal website of Andrew Marsden",
  title: "Andrew Marsden",
  ogImage: "me.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 10,
  scheduledPostMargin: 5 * 60 * 1000, // 5 minutes
  showArchives: false,
};

export const LOCALE = {
  lang: "en",
  langTag: ["en-GB"],
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Mastodon",
    href: "https://eldritch.cafe/@marsdeat",
    linkTitle: `${SITE.title} on Mastodon`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:atmarsden95@gmail.com",
    linkTitle: `Send an email to ${SITE.title}`,
    active: true,
  },
  {
    name: "YouTube",
    href: "https://youtube.com/@marsdeat",
    linkTitle: `${SITE.title} on YouTube`,
    active: true,
  },
  {
    name: "Bluesky",
    href: "https://bsky.social/@marsdeat.uk",
    linkTitle: `${SITE.title} on BlueSky`,
    active: true,
  },
  {
    name: "Pixelfed",
    href: "https://pixelfed.social/marsdeat",
    linkTitle: `${SITE.title} on Instagram`,
    active: true,
  },
];
