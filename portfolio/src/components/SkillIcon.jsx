import {
  Braces,
  Briefcase,
  Code2,
  MonitorSmartphone,
  Radar,
  User,
  Users,
} from "lucide-react";
import {
  siJavascript,
  siTypescript,
  siCplusplus,
  siHtml5,
  siCss,
  siReact,
  siRedux,
  siTailwindcss,
  siNodedotjs,
  siExpress,
  siMongodb,
  siPostgresql,
  siMysql,
  siMongoose,
  siGit,
  siGithub,
} from "simple-icons";

const brandIcons = {
  JavaScript: siJavascript,
  TypeScript: siTypescript,
  "C++": siCplusplus,
  HTML5: siHtml5,
  CSS3: siCss,
  "React.js": siReact,
  Redux: siRedux,
  Tailwind: siTailwindcss,
  "Node.js": siNodedotjs,
  "Express.js": siExpress,
  Mongoose: siMongoose,
  MongoDB: siMongodb,
  PostgreSQL: siPostgresql,
  MySQL: siMysql,
  Git: siGit,
  GitHub: siGithub,
};

const lucideIcons = {
  "Responsive Design": MonitorSmartphone,
  "API REST": Braces,
  Teamwork: Users,
  Autonomy: User,
  "Project Management": Briefcase,
  "Tech Watch": Radar,
};

function BrandIcon({ icon, size, className }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={`shrink-0 fill-current ${className}`}
      aria-hidden="true"
    >
      <title>{icon.title}</title>
      <path d={icon.path} />
    </svg>
  );
}

export default function SkillIcon({ skill, size = 16, className = "" }) {
  const brand = brandIcons[skill];
  if (brand) {
    return <BrandIcon icon={brand} size={size} className={className} />;
  }

  const LucideIcon = lucideIcons[skill];
  if (LucideIcon) {
    return <LucideIcon size={size} className={`shrink-0 ${className}`} />;
  }

  return <Code2 size={size} className={`shrink-0 ${className}`} />;
}
