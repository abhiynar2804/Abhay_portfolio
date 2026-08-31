import { GraduationCap, MapPin, Calendar } from 'lucide-react';
import { useInView } from '../../hooks/useInView';

export default function Education() {
  const { ref, isInView } = useInView();

  return (
    <section
      ref={ref}
      className={`py-16 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      <h2 className="text-3xl font-bold mb-10 relative inline-block">
        Education
        <span className="absolute -bottom-2 left-0 w-10 h-[3px] bg-gradient-to-r from-[#da7c25] to-[#b923e1] rounded-full" />
      </h2>

      <div className="bg-[#161616] border border-[#333] rounded-2xl p-6 md:p-8 max-w-[800px] hover:border-[#444] transition-all duration-300">
        <div className="flex flex-col md:flex-row gap-5">
          <div className="shrink-0 w-14 h-14 flex items-center justify-center rounded-xl bg-[#c305f8]/10 text-[#c305f8]">
            <GraduationCap size={28} />
          </div>

          <div className="flex-1">
            <h3 className="text-xl font-semibold text-white mb-2">
              B.Tech in Computer Science & Engineering
            </h3>

            <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-500">
              <span className="flex items-center gap-1.5">
                <MapPin size={14} />
                GH Raisoni College of Engineering, Jalgaon
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar size={14} />
                2023 — 2027
              </span>
            </div>

            <p className="text-gray-400 leading-relaxed mb-5 text-[15px]">
              Currently pursuing my bachelor's with a focus on software engineering,
              data structures, algorithms, and system design. Maintaining a strong
              academic record while building real-world projects alongside coursework.
            </p>

            <div className="flex flex-wrap gap-2">
              {['Data Structures', 'Algorithms', 'DBMS', 'Operating Systems', 'Computer Networks'].map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-3 py-1.5 bg-[#1a1a1a] border border-[#333] rounded-md text-gray-400 hover:border-[#c305f8] hover:text-[#c305f8] transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}