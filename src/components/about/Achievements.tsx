import { Code2, Terminal, Trophy, Briefcase, ChevronRight } from 'lucide-react';
import { useInView } from '../../hooks/useInView';

const stats = [
  { icon: <Code2 size={24} />, value: '220+', label: 'LeetCode Problems', desc: 'Consistent problem solving' },
  { icon: <Terminal size={24} />, value: '280+', label: 'DSA Problems', desc: 'Data Structures & Algorithms' },
  { icon: <Trophy size={24} />, value: '3+', label: 'Hackathons', desc: 'Built & shipped under pressure' },
  { icon: <Briefcase size={24} />, value: '2', label: 'Internships', desc: 'Real-world engineering exp.' },
];

export default function Achievements() {
  const { ref, isInView } = useInView();

  return (
    <section
      ref={ref}
      className={`py-16 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      <h2 className="text-3xl font-bold mb-3 relative inline-block">
        Achievements
        <span className="absolute -bottom-2 left-0 w-10 h-[3px] bg-gradient-to-r from-[#da7c25] to-[#b923e1] rounded-full" />
      </h2>
      <p className="text-gray-400 mb-10 mt-4">Measurable proof of the work I've put in.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className="bg-[#161616] border border-[#333] rounded-2xl p-6 text-center hover:border-[#c305f8] transition-all duration-300 hover:-translate-y-1"
            style={{ transitionDelay: `${i * 100}ms` }}
          >
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#c305f8]/10 text-[#c305f8] mx-auto mb-4">
              {stat.icon}
            </div>
            <div className="text-3xl font-extrabold bg-gradient-to-r from-[#da7c25] to-[#b923e1] bg-clip-text text-transparent mb-1">
              {stat.value}
            </div>
            <div className="font-semibold text-white text-sm mb-1">{stat.label}</div>
            <div className="text-xs text-gray-500">{stat.desc}</div>
          </div>
        ))}
      </div>

      <div className="bg-[#161616] border border-[#333] rounded-xl p-5 space-y-3">
        <div className="flex items-start gap-3 text-gray-400 text-sm">
          <ChevronRight size={16} className="text-[#c305f8] mt-0.5 shrink-0" />
          <span>Completed certifications in Web Development & Cloud Fundamentals</span>
        </div>
        <div className="flex items-start gap-3 text-gray-400 text-sm">
          <ChevronRight size={16} className="text-[#c305f8] mt-0.5 shrink-0" />
          <span>Significant project milestones: Deployed 5+ full-stack applications</span>
        </div>
      </div>
    </section>
  );
}