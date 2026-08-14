import { GraduationCap, Briefcase, Code, Award } from 'lucide-react';

const timelineItems = [
  {
    icon: Code,
    title: 'Building Placement & Internship Platform',
    subtitle: 'Full Stack Project',
    period: '2026',
    status: 'In Progress',
    color: '#b415ff',
  },
  {
    icon: GraduationCap,
    title: 'B.Tech Computer Science',
    subtitle: 'Final Year Student',
    period: '2023 - 2027',
    status: 'Ongoing',
    color: '#df8908',
  },
  {
    icon: Award,
    title: '220+ LeetCode Problems Solved',
    subtitle: 'Data Structures & Algorithms',
    period: '2025',
    status: 'Completed',
    color: '#22c55e',
  },
  {
    icon: Briefcase,
    title: 'Open for Internship Opportunities',
    subtitle: 'Software Engineering Roles',
    period: '2026',
    status: 'Active',
    color: '#b415ff',
  },
];

export default function Timeline() {
  return (
    <section className="w-full flex justify-center px-4 sm:px-5">
      <div className="w-full max-w-3xl">
        <h2 className="text-center text-2xl sm:text-3xl font-semibold text-white mb-8 sm:mb-10">
          Currently
        </h2>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-[19px] sm:left-[23px] top-2 bottom-2 w-[2px] bg-neutral-800" />

          <div className="flex flex-col gap-6 sm:gap-8">
            {timelineItems.map((item, index) => (
              <div key={index} className="flex gap-4 sm:gap-6 items-start">
                {/* Icon Dot */}
                <div
                  className="relative z-10 flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: `${item.color}15`, border: `2px solid ${item.color}40` }}
                >
                  <item.icon size={18} style={{ color: item.color }} />
                </div>

                {/* Content Card */}
                <div className="flex-1 p-4 sm:p-5 rounded-xl border border-neutral-800 bg-neutral-900/60 hover:border-neutral-700 transition-colors duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-3 mb-2">
                    <h3 className="text-base sm:text-lg font-semibold text-white">
                      {item.title}
                    </h3>
                    <span
                      className="self-start sm:self-auto text-xs font-medium px-3 py-1 rounded-full"
                      style={{
                        backgroundColor: `${item.color}15`,
                        color: item.color,
                        border: `1px solid ${item.color}30`,
                      }}
                    >
                      {item.status}
                    </span>
                  </div>
                  <p className="text-sm text-neutral-400">{item.subtitle}</p>
                  <p className="text-xs text-neutral-500 mt-1">{item.period}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
