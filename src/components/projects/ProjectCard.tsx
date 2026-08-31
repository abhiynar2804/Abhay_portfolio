import { Link } from 'react-router-dom';
import type { Project } from '../../data/projects';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-[#b415ff]/25 bg-white/[0.02] transition-all duration-300 hover:-translate-y-1 hover:border-[#b415ff] hover:shadow-[0_8px_30px_rgba(180,21,255,0.15)]">
      {/* Screenshot — gradient placeholder if no image is set */}
      {project.image ? (
        <img
          src={project.image}
          alt={`${project.title} screenshot`}
          loading="lazy"
          className="aspect-video w-full object-fill"
        />
      ) : (
        <div className="flex aspect-video w-full items-center justify-center bg-[linear-gradient(270deg,#df8908_10%,#b415ff_100%)] text-5xl font-bold text-white/90">
          {project.title.charAt(0)}
        </div>
      )}

      <div className="flex flex-1 flex-col gap-3 p-5">
        <h3 className="text-lg font-semibold">{project.title}</h3>
        <p className="flex-1 text-sm leading-relaxed text-neutral-400">{project.tagline}</p>

        <ul className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-neutral-700 px-3 py-1 text-xs text-neutral-400"
            >
              {tech}
            </li>
          ))}
        </ul>

        <Link
          to={`/projects/${project.slug}`}
          className="mt-1 inline-flex items-center gap-1 self-start text-sm font-semibold bg-[linear-gradient(270deg,#df8908_10%,#b415ff_100%)] bg-clip-text [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]"
        >
          View
          <span className="transition-transform duration-300 group-hover:translate-x-1 [-webkit-text-fill-color:#b415ff]">→</span>
        </Link>
      </div>
    </article>
  );
}