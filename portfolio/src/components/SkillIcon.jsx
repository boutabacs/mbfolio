import {
  Braces,
  Briefcase,
  Code2,
  MonitorSmartphone,
  Radar,
  User,
  Users,
} from "lucide-react";

function Css3Icon({ size, className }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={`shrink-0 fill-current ${className}`}
      aria-hidden="true"
    >
      <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622h10.125l-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.955-.81-.188-2.11h-2.818l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531l-.103-1.085H18.6l.53-5.686z" />
    </svg>
  );
}

const customIcons = {
  CSS3: Css3Icon,
};

const brandSlugs = {
  HTML5: "html5",
  JavaScript: "javascript",
  "React.js": "react",
  Redux: "redux",
  "React Router": "reactrouter",
  "Node.js": "nodedotjs",
  "Express.js": "express",
  Mongoose: "mongoose",
  MongoDB: "mongodb",
  PostgreSQL: "postgresql",
  MySQL: "mysql",
  Git: "git",
  GitHub: "github",
  Tailwind: "tailwindcss",
  "Next.js": "nextdotjs",
  ShadCN: "shadcnui",
  Svelte: "svelte",
  Bootstrap: "bootstrap",
  Python: "python",
  SQL: "mysql",
  "C++": "cplusplus",
  TypeScript: "typescript",
};

const lucideIcons = {
  "Responsive Design": MonitorSmartphone,
  "API REST": Braces,
  "Teamwork": Users,
  "Autonomy": User,
  "Project Management": Briefcase,
  "Tech Watch": Radar,
};

export default function SkillIcon({ skill, size = 16, className = "" }) {
  const CustomIcon = customIcons[skill];
  if (CustomIcon) {
    return <CustomIcon size={size} className={className} />;
  }

  const slug = brandSlugs[skill]
  if (slug) {
    return (
      <img
        src={`https://cdn.simpleicons.org/${slug}/0071E3`}
        alt=""
        width={size}
        height={size}
        className={`shrink-0 ${className}`}
        loading="lazy"
      />
    )
  }

  const LucideIcon = lucideIcons[skill];
  if (LucideIcon) {
    return <LucideIcon size={size} className={`shrink-0 ${className}`} />;
  }

  return <Code2 size={size} className={`shrink-0 ${className}`} />;
}
