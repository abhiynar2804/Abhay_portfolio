import { useInView } from '../../hooks/useInView';

const steps = [
  { year: '2023', title: 'Started CSE Journey', description: 'Began my B.Tech in Computer Science. Dived into programming fundamentals and explored the vast world of software development.' },
  { year: '2024', title: 'Learned Development', description: 'Picked up web development — HTML, CSS, JavaScript. Built my first static sites and understood how the web works.' },
  { year: '2025', title: 'Advanced Frontend & DSA', description: 'Moved beyond tutorials. Started building React/Next.js and deeper frontend development design through hands-on work. started DSA with C++.' },
  { year: '2026', title: 'Full-Stack & DSA', description: 'Transitioned into Backend/full-stack development. Simultaneously sharpened problem-solving with 280+ Java DSA problems and 220+ LeetCode.' },
  { year: '2026', title: 'Engineering Roles Prep', description: 'Currently preparing for software engineering roles. Focusing on system design, advanced projects, and real-world scalability.' },
];

export default function Journey() {
  const { ref, isInView } = useInView();

  return (
    <section
      ref={ref}
      className={`py-16 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      <h2 className="text-3xl font-bold mb-12 relative inline-block">
        My Journey
        <span className="absolute -bottom-2 left-0 w-10 h-[3px] bg-gradient-to-r from-[#da7c25] to-[#b923e1] rounded-full" />
      </h2>

      <div className="relative max-w-[900px] mx-auto">
        {/* Timeline line */}
        <div className="absolute left-[19px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#da7c25] to-[#b923e1] opacity-30 md:-translate-x-1/2" />

        {steps.map((step, i) => (
          <div
            key={i}
            className={`relative flex flex-col md:flex-row items-start md:items-stretch mb-10 last:mb-0 ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
          >
            {/* Dot */}
            <div className="absolute left-[19px] md:left-1/2 w-3.5 h-3.5 bg-[#0f0f0f] border-[3px] border-[#b923e1] rounded-full -translate-x-1/2 mt-2 z-10" />

            {/* Content */}
            <div className={`pl-12 md:pl-0 md:w-1/2 ${i % 2 === 0 ? 'md:pr-10 md:text-right' : 'md:pl-10 md:text-left'}`}>
              <div className="bg-[#161616] border border-[#333] rounded-xl p-5 hover:border-[#444] transition-all duration-300 hover:-translate-y-0.5">
                <span className="inline-block text-xs font-bold text-[#c305f8] bg-[#c305f8]/10 px-2 py-0.5 rounded mb-2">
                  {step.year}
                </span>
                <h3 className="text-base font-semibold text-white mb-1">{step.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{step.description}</p>
              </div>
            </div>

            {/* Empty spacer for alternating layout */}
            <div className="hidden md:block md:w-1/2" />
          </div>
        ))}
      </div>
    </section>
  );
}