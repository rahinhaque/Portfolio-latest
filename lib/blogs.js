/**
 * Blog posts data.
 *
 * Each entry links out to a full article published externally (e.g. LinkedIn).
 * The site only shows a preview card — never reproduces the article content.
 *
 * To add a new post, append an object to this array. Entries are displayed
 * sorted by `date` descending (most recent first).
 */
export const blogs = [
  {
    id: "why-mern-devs-should-solve-problems",
    title:
      "Why Every MERN Stack Developer Should Start Solving Problems (And Why I Decided to Begin)",
    description:
      "I talk about why solving DSA problems matters for MERN developers and how I'm building the habit of consistent problem-solving alongside my project work.",
    image: "/projects/blog.png",
    date: "2026-07-08",
    externalUrl:
      "https://www.linkedin.com/pulse/why-every-mern-stack-developer-should-start-solving-problems-haque-zthrc",
    platform: "LinkedIn",
  },
];
