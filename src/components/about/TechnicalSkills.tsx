import { Globe, Terminal, Database, Code2, Wrench } from 'lucide-react';
import { 
  SiReact, SiTypescript, SiNextdotjs, SiTailwindcss, SiHtml5, 
  SiNodedotjs, SiExpress, SiAuth0, SiJsonwebtokens, SiMongodb, SiPostgresql, SiNeon, 
  SiMysql, SiPrisma, SiJavascript, SiCplusplus, SiOpenjdk, 
  SiGit, SiGithub, SiPostman, SiFigma 
} from 'react-icons/si';
import { TbApi, TbBrandVisualStudio } from 'react-icons/tb';
import { useInView } from '../../hooks/useInView';

const categories = [
  { 
    title: 'Frontend', 
    icon: <Globe size={22} />, 
    skills: [
      { name: 'React', icon: <SiReact className="text-[#61DAFB]" /> },
      { name: 'Next.js', icon: <SiNextdotjs className="text-white" /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-[#06B6D4]" /> },
      { name: 'HTML/CSS', icon: <SiHtml5 className="text-[#E34F26]" /> }
    ] 
  },
  { 
    title: 'Backend', 
    icon: <Terminal size={22} />, 
    skills: [
      { name: 'Node.js', icon: <SiNodedotjs className="text-[#5FA04E]" /> },
      { name: 'Express', icon: <SiExpress className="text-white" /> },
      { name: 'REST APIs', icon: <TbApi className="text-[#da7c25]" /> },
      { name: 'Authentication', icon: <SiAuth0 className="text-[#da7c25]" /> },
      { name: 'JWT', icon: <SiJsonwebtokens className="text-[#000000]" /> }
    ] 
  },
  { 
    title: 'Database', 
    icon: <Database size={22} />, 
    skills: [
      { name: 'PostgreSQL', icon: <SiPostgresql className="text-[#4169E1]" /> },
      { name: 'Neon', icon: <SiNeon className="text-[#4169E1]" /> },
      { name: 'MySQL', icon: <SiMysql className="text-[#4479A1]" /> },
      { name: 'MongoDB', icon: <SiMongodb className="text-[#47A248]" /> },
      { name: 'Prisma', icon: <SiPrisma className="text-[#2D3748]" /> }
    ] 
  },
  { 
    title: 'Languages', 
    icon: <Code2 size={22} />, 
    skills: [
      { name: 'JavaScript', icon: <SiJavascript className="text-[#F7DF1E]" /> },
      { name: 'TypeScript', icon: <SiTypescript className="text-[#3178C6]" /> },
      { name: 'Java', icon: <SiOpenjdk className="text-[#ED8B00]" /> },
      { name: 'C++', icon: <SiCplusplus className="text-[#00599C]" /> }
    ] 
  },
  { 
    title: 'Tools & Workflow', 
    icon: <Wrench size={22} />, 
    skills: [
      { name: 'Git', icon: <SiGit className="text-[#F05032]" /> },
      { name: 'GitHub', icon: <SiGithub className="text-white" /> },
      { name: 'VS Code', icon: <TbBrandVisualStudio className="text-[#007ACC]" /> },
      { name: 'Postman', icon: <SiPostman className="text-[#FF6C37]" /> },
      { name: 'Figma', icon: <SiFigma className="text-[#F24E1E]" /> }
    ] 
  },
];

export default function TechnicalSkills() {
  const { ref, isInView } = useInView();

  return (
    <section
      ref={ref}
      className={`py-16 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      <div className="mb-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight relative inline-block">
          Technical Skills
          <span className="absolute -bottom-2 left-0 w-12 h-[3px] bg-gradient-to-r from-[#da7c25] to-[#b923e1] rounded-full" />
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((cat, i) => (
          <div
            key={cat.title}
            className="group relative bg-[#121214] border border-white/10 rounded-2xl p-6 hover:border-[#b923e1]/50 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_10px_30px_rgba(185,35,225,0.1)] overflow-hidden"
            style={{ transitionDelay: `${i * 75}ms` }}
          >
            {/* Subtle Gradient Glow on Hover */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br from-[#da7c25]/10 to-[#b923e1]/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500 pointer-events-none" />

            <div className="flex items-center gap-4 mb-5 relative z-10">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-[#da7c25]/20 to-[#b923e1]/20 border border-[#b923e1]/30 text-[#c305f8] shadow-inner">
                {cat.icon}
              </div>
              <h3 className="font-bold text-lg text-white group-hover:text-[#da7c25] transition-colors">
                {cat.title}
              </h3>
            </div>

            <div className="flex flex-wrap gap-2.5 relative z-10">
              {cat.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center gap-2 text-xs sm:text-sm px-3.5 py-2 bg-white/[0.03] rounded-xl text-gray-300 border border-white/5 hover:border-[#c305f8]/60 hover:bg-[#c305f8]/10 hover:text-white transition-all duration-300 shadow-sm"
                >
                  <span className="text-base">{skill.icon}</span>
                  <span className="font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}