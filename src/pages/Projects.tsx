import { projects } from '../data/projects';
import ProjectCard from '../components/projects/ProjectCard';
import { useInView } from '../hooks/useInView';

export default function Projects() {
  const { ref, isInView } = useInView();

  const personalProjects = projects.filter((p) => p.category === 'personal');
  //const hackathonProjects = projects.filter((p) => p.category === 'hackathon');

  return (
    <main
      ref={ref}
      className={`mx-auto w-full max-w-6xl px-4 py-2 sm:px-6 transition-all duration-700 ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {/* Page header */}
      <header className="mb-10 text-center">
        <h1 className="text-3xl font-semibold uppercase tracking-wider sm:text-4xl md:text-5xl">
          <span className="bg-[linear-gradient(270deg,#df8908_10%,#b415ff_100%)] bg-clip-text [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
            Projects
          </span>
        </h1>
        <p className="mt-3 text-sm text-neutral-400 sm:text-base md:text-lg">
          My work, experiments &amp; teamwork
        </p>
      </header>

      {/* Personal projects */}
      <section className="mb-16">
        <h2 className="text-3xl mb-10 md:text-4xl font-extrabold text-white tracking-tight relative inline-block">
          Personal Projects
          <span className="absolute -bottom-2 left-0 w-12 h-[3px] bg-gradient-to-r from-[#da7c25] to-[#b923e1] rounded-full" />
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {personalProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      {/* Hackathon / team projects */}
      {/* <section>
        <h2 className="text-3xl mb-10 md:text-4xl font-extrabold text-white tracking-tight relative inline-block">
          Hackathon / Team Projects
          <span className="absolute -bottom-2 left-0 w-12 h-[3px] bg-gradient-to-r from-[#da7c25] to-[#b923e1] rounded-full" />
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {hackathonProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section> */}
    </main>
  );
}