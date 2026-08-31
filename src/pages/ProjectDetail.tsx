import { Link, useParams } from 'react-router-dom';
import { getProjectBySlug } from '../data/projects';
import { useInView } from '../hooks/useInView';
import { ExternalLink, ArrowLeft, Layers, FileText, AlertCircle, CheckCircle2, User, Lightbulb, Code2 } from 'lucide-react';
import { 
  SiGithub, SiReact, SiTypescript, SiNextdotjs, SiTailwindcss, SiHtml5, 
  SiNodedotjs, SiExpress, SiAuth0, SiJsonwebtokens, SiMongodb, SiPostgresql, 
  SiNeon, SiMysql, SiPrisma, SiJavascript, SiCplusplus, SiOpenjdk, 
  SiGit, SiPostman, SiFigma, SiVercel 
} from 'react-icons/si';

// Map tech stack names to their respective icons and brand colors
const techIconMap: Record<string, React.ReactNode> = {
  'React': <SiReact className="text-[#61DAFB]" />,
  'TypeScript': <SiTypescript className="text-[#3178C6]" />,
  'JavaScript': <SiJavascript className="text-[#F7DF1E]" />,
  'Next.js': <SiNextdotjs className="text-white" />,
  'Tailwind CSS': <SiTailwindcss className="text-[#06B6D4]" />,
  'HTML/CSS': <SiHtml5 className="text-[#E34F26]" />,
  'Node.js': <SiNodedotjs className="text-[#5FA04E]" />,
  'Express': <SiExpress className="text-white" />,
  'MongoDB': <SiMongodb className="text-[#47A248]" />,
  'PostgreSQL': <SiPostgresql className="text-[#4169E1]" />,
  'Neon': <SiNeon className="text-[#4169E1]" />,
  'MySQL': <SiMysql className="text-[#4479A1]" />,
  'Prisma': <SiPrisma className="text-[#2D3748]" />,
  'Git': <SiGit className="text-[#F05032]" />,
  'GitHub': <SiGithub className="text-white" />,
  'Figma': <SiFigma className="text-[#F24E1E]" />,
  'Java': <SiOpenjdk className="text-[#ED8B00]" />,
  'C++': <SiCplusplus className="text-[#00599C]" />,
  'Auth0': <SiAuth0 className="text-[#da7c25]" />,
  'NextAuth': <SiAuth0 className="text-white" />,
  'JWT': <SiJsonwebtokens className="text-white" />,
  'Postman': <SiPostman className="text-[#FF6C37]" />,
  'Vercel': <SiVercel className="text-white" />,
};

// Fallback icon if a tech name isn't explicitly mapped
const getTechIcon = (tech: string) => {
  return techIconMap[tech] || <Code2 className="text-[#da7c25]" size={16} />;
};

// Reusable card container section block matching your technical skills theme
function DetailSection({ 
  title, 
  icon, 
  children, 
  delay = 0 
}: { 
  title: string; 
  icon?: React.ReactNode; 
  children: React.ReactNode; 
  delay?: number;
}) {
  return (
    <div
      className="group relative bg-[#121214] border border-white/10 rounded-2xl p-6 sm:p-8 mb-6 hover:border-[#b923e1]/50 transition-all duration-500 hover:shadow-[0_10px_30px_rgba(185,35,225,0.1)] overflow-hidden"
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Subtle Gradient Glow on Hover */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br from-[#da7c25]/10 to-[#b923e1]/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500 pointer-events-none" />

      <div className="flex items-center gap-3 mb-4 relative z-10">
        {icon && (
          <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-gradient-to-br from-[#da7c25]/20 to-[#b923e1]/20 border border-[#b923e1]/30 text-[#c305f8] shadow-inner">
            {icon}
          </div>
        )}
        <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight group-hover:text-[#da7c25] transition-colors">
          {title}
        </h2>
      </div>

      <div className="relative z-10 text-neutral-300">
        {children}
      </div>
    </div>
  );
}

export default function ProjectDetail() {
  const { projectId } = useParams<{ projectId: string }>();
  const { ref, isInView } = useInView();
  const project = projectId ? getProjectBySlug(projectId) : undefined;

  // Fallback for unknown slugs
  if (!project) {
    return (
      <main className="mx-auto w-full max-w-4xl px-4 py-20 sm:px-6">
        <Link to="/projects" className="inline-flex items-center gap-2 text-neutral-400 transition-colors hover:text-white mb-6">
          <ArrowLeft size={18} /> Back to Projects
        </Link>
        <div className="bg-[#121214] border border-white/10 rounded-2xl p-8 text-center">
          <h1 className="text-3xl font-bold text-white">Project not found</h1>
          <p className="mt-2 text-neutral-400">The project you're looking for doesn't exist.</p>
        </div>
      </main>
    );
  }

  return (
    <main
      ref={ref}
      className={`mx-auto w-full max-w-4xl px-4 py-8 sm:px-6 transition-all duration-700 ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <Link to="/projects" className="inline-flex items-center gap-2 text-neutral-400 transition-colors hover:text-white mb-8">
        <ArrowLeft size={18} /> Back to Projects
      </Link>

      {/* Header */}
      <header className="mb-8">
        <h1 className="text-3xl font-extrabold sm:text-5xl tracking-tight mb-3">
          <span className="bg-[linear-gradient(270deg,#df8908_10%,#b415ff_100%)] bg-clip-text [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
            {project.title}
          </span>
        </h1>
        <p className="text-neutral-400 text-base sm:text-xl leading-relaxed">{project.tagline}</p>
      </header>

      {/* Screenshot / Banner */}
      {project.image ? (
        <div className="relative mb-10 rounded-2xl overflow-hidden border border-[#b415ff]/25 shadow-2xl">
          <img
            src={project.image}
            alt={`${project.title} screenshot`}
            className="w-full object-fill max-h-[450px]"
          />
        </div>
      ) : (
        <div className="mb-10 flex aspect-video w-full items-center justify-center rounded-2xl bg-[linear-gradient(270deg,#df8908_10%,#b415ff_100%)] text-7xl font-extrabold text-white/90 shadow-2xl">
          {project.title.charAt(0)}
        </div>
      )}

      {/* Action Buttons */}
      {(project.liveUrl || project.githubUrl) && (
        <div className="mt-10 flex flex-col pb-10 sm:flex-row gap-4">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#da7c25] to-[#b923e1] px-8 py-3.5 text-center font-medium text-white shadow-lg shadow-[#b923e1]/20 hover:opacity-95 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
            >
              <ExternalLink size={18} /> Live Demo
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-[#121214] px-8 py-3.5 text-center font-medium text-white hover:border-[#b923e1]/50 hover:bg-white/[0.03] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-lg"
            >
              <SiGithub size={18} className="text-white" /> GitHub Repository
            </a>
          )}
        </div>
      )}

      {/* Tech Stack */}
      <DetailSection title="Tech Stack" icon={<Layers size={20} />} delay={50}>
        <div className="flex flex-wrap gap-2.5">
          {project.techStack.map((tech) => (
            <div
              key={tech}
              className="flex items-center gap-2 px-3.5 py-2 bg-white/[0.03] rounded-xl text-xs sm:text-sm text-gray-300 border border-white/5 hover:border-[#c305f8]/60 hover:bg-[#c305f8]/10 hover:text-white transition-all duration-300 shadow-sm font-medium"
            >
              <span className="text-base">{getTechIcon(tech)}</span>
              <span>{tech}</span>
            </div>
          ))}
        </div>
      </DetailSection>

      {/* Overview */}
      <DetailSection title="Overview" icon={<FileText size={20} />} delay={100}>
        <p className="leading-relaxed">{project.overview}</p>
      </DetailSection>

      {/* Problem */}
      <DetailSection title="Problem" icon={<AlertCircle size={20} />} delay={150}>
        <p className="leading-relaxed">{project.problem}</p>
      </DetailSection>

      {/* Solution */}
      <DetailSection title="Solution" icon={<CheckCircle2 size={20} />} delay={200}>
        <p className="leading-relaxed">{project.solution}</p>
      </DetailSection>

      {/* Key Features */}
      <DetailSection title="Key Features" icon={<Layers size={20} />} delay={250}>
        <ul className="space-y-2.5">
          {project.features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-2.5">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#da7c25] shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </DetailSection>

      {/* My Role */}
      <DetailSection title="My Role" icon={<User size={20} />} delay={300}>
        <p className="leading-relaxed">{project.role}</p>
      </DetailSection>

      {/* Challenges & What I Learned */}
      <DetailSection title="Challenges & What I Learned" icon={<Lightbulb size={20} />} delay={350}>
        <p className="leading-relaxed">{project.challenges}</p>
      </DetailSection>
    </main>
  );
}