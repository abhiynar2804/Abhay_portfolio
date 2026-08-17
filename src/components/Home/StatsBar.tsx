import { useInView } from '../../hooks/useInView';

export default function StatsBar() {
  const { ref, isInView } = useInView();

  const stats = [
    { value: "220+", label: "LeetCode" },
    { value: "10+", label: "Projects" },
    { value: "2027", label: "Graduate" },
  ];

  return (
    <section
      ref={ref}
      className={`w-full flex justify-center px-4 sm:px-5 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      <div className="flex items-center gap-6 sm:gap-10 md:gap-16 bg-neutral-900/60 border border-neutral-800 rounded-2xl px-6 sm:px-10 py-5 sm:py-6">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <span className="text-xl sm:text-2xl md:text-3xl font-bold bg-[linear-gradient(270deg,#df8908_10%,#b415ff_100%)] bg-clip-text [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
              {stat.value}
            </span>
            <span className="text-xs sm:text-sm text-neutral-400 mt-1 font-medium">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
